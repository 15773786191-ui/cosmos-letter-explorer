import asyncio, base64, json, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'vendor-python'))
import edge_tts

SCRIPT = [
 ('sun', '每天，我们都看见太阳升起。可这颗照亮地球的恒星，会永远亮下去吗？'),
 ('future', '不会。数十亿年后，太阳会膨胀成红巨星，最终散去外层，留下白矮星。'),
 ('question', '但它现在为什么能一直发光？我们把镜头推进去，看看太阳内部。'),
 ('fusion', '那里非常热。氢原子的核，经过一连串反应，最终形成氦，释放出能量。'),
 ('fusion', '这个过程叫核聚变。它不是烧木头，也不需要从太空里吸进氧气。'),
 ('balance', '与此同时，引力一直把太阳的物质向中心拉。为什么太阳没有被自己压垮？'),
 ('pressure', '聚变供能，让内部保持高温。高温气体的压力，为恒星提供向外的支持。'),
 ('balance', '向内的引力，与向外的压力支持，形成平衡。太阳可以这样稳定地发光很久。'),
 ('compare', '再看旁边这颗质量更大的恒星。它有更多燃料，你猜，它会活得更久吗？'),
 ('burn', '答案有点意外。更重的恒星，核心通常更热，消耗燃料的速度也快得多。'),
 ('burn', '虽然燃料更多，却用得更快。所以，大质量恒星的寿命，反而可能更短。'),
 ('paths', '燃料和结构继续变化，恒星便走向不同结局。太阳留下白矮星，大质量恒星则可能留下中子星或黑洞。'),
 ('end', '记住两条线索：聚变供能，帮助维持压力支持；质量不同，燃料消耗和演化也不同。'),
 ('end', '下一段，我们沿着这条线索，看太阳为什么会变成一颗红巨星。')
]

async def main():
    sem = asyncio.Semaphore(3)
    async def one(i, scene, line):
        path = ROOT / 'audio' / f'{i:02d}.mp3'
        async with sem:
            if not path.exists() or path.stat().st_size < 1000:
                await edge_tts.Communicate(line, 'zh-CN-XiaoxiaoNeural', rate='-3%').save(str(path))
        info = subprocess.check_output(['afinfo', str(path)], text=True)
        match = re.search(r'estimated duration:\s*([0-9.]+)', info)
        if not match:
            raise RuntimeError(f'Cannot read duration for {path.name}')
        return dict(scene=scene, text=line, duration=float(match.group(1)), audio=f'audio/{path.name}')
    cues = await asyncio.gather(*(one(i, scene, line) for i,(scene,line) in enumerate(SCRIPT)))
    cursor = 0
    for cue in cues:
        cue['start'] = cursor
        cursor += cue['duration']
    data = dict(cues=cues, duration=cursor, voice='zh-CN-XiaoxiaoNeural', title='太阳也会死吗？')
    (ROOT / 'film.json').write_text(json.dumps(data, ensure_ascii=False, indent=2))
    for cue in cues:
        cue['audio'] = 'data:audio/mpeg;base64,' + base64.b64encode((ROOT / cue['audio']).read_bytes()).decode()
    (ROOT / 'film-data.js').write_text('window.FILM=' + json.dumps(data, ensure_ascii=False) + ';\n')
    print(json.dumps(dict(seconds=round(cursor, 2), segments=len(cues), voice=data['voice'])))

asyncio.run(main())
