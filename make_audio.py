import json, pathlib, subprocess, wave

ROOT = pathlib.Path(__file__).resolve().parent
SOURCE = 'https://zh.wikisource.org/zh-hans/紅樓夢/第003回'
scenes = [
  dict(title='一座陌生的大宅', panel=0, original='因此步步留心，时时在意，不肯轻易多说一句话，多行一步路，惟恐被人耻笑了他去。', lines=[
    '母亲去世以后，林黛玉告别父亲，乘船来到京城。外祖母派人接她，准备让她在自己家里住下。',
    '黛玉从前常听母亲说，外祖母家与别家不同。如今坐在轿子里，她看着窗外，心里越发留意起来。',
    '书里这样写她：步步留心，时时在意，不肯轻易多说一句话，多行一步路。她怕别人笑话自己。']),
  dict(title='大门之外', panel=0, original='正门却不开，只有东西两角门有人出入。……却不进正门，只进了西边角门。', lines=[
    '轿子沿着街道向前。黛玉看见两只大石狮子，门前坐着衣着华丽的人。那是宁国府，还没有到外祖母家。',
    '再往西走不远，又是一座大宅，这才是荣国府。正门没有打开，轿子从西边的角门抬了进去。',
    '进了宅子，轿夫换了一拨。直到垂花门前，黛玉才在婆子的搀扶下，下了轿。']),
  dict(title='沿着回廊往里走', panel=1, original='林黛玉扶著婆子的手，进了垂花门，两边是抄手游廊，当中是穿堂。', lines=[
    '门里两边是回廊，中间是穿堂。黛玉扶着婆子的手，绕过一架大插屏，向里面的院子走去。',
    '她看见雕梁画栋的房屋，回廊上挂着鸟笼。鹦鹉和画眉就在这里。这座宅子，比她从前想的还要大。',
    '台阶上的丫鬟们看见她，笑着迎了上来。刚才老太太还念呢，可巧就来了。有人打起帘子，回话说：林姑娘到了。']),
  dict(title='还没行礼，就被抱住', panel=2, original='方欲拜见时，早被他外祖母一把搂入怀中，心肝儿肉叫著大哭起来。', lines=[
    '黛玉刚进房，就看见两个人搀着一位满头银发的老人迎过来。她知道，这一定就是外祖母。',
    '她正要行礼，已经被外祖母一把搂进怀里。书里写道：心肝儿肉叫着大哭起来。黛玉也哭个不住。',
    '旁边的人纷纷掩面流泪。大家慢慢劝住了，黛玉这才正式拜见外祖母。这位老人，就是贾母。']),
  dict(title='一屋子的新亲人', panel=2, original='贾母一一指与黛玉：“这是你大舅母，这是你二舅母，这是你先珠大哥的媳妇珠大嫂子。”', lines=[
    '贾母把屋里的亲人，一位一位介绍给黛玉。大舅母、二舅母，还有珠大嫂子。黛玉都一一见了礼。',
    '不久，迎春、探春、惜春三位姊妹也来了。她们与黛玉互相认识，大家坐下来，丫鬟端上了茶。',
    '说起黛玉已经去世的母亲，贾母又伤心起来。她疼爱自己的女儿，如今看见外孙女，更想念女儿了。']),
  dict(title='先听见一个人的笑声', panel=3, original='一语未了，只听后院中有人笑声，说：“我来迟了，不曾迎接远客！”', lines=[
    '众人正说着话，后院忽然传来一个人的笑声。我来迟了，不曾迎接远客！',
    '黛玉很纳闷。屋里的人都安静、恭敬，这个还没露面就大声说笑的人，会是谁呢？',
    '一群媳妇和丫鬟拥着她走进来。金色的首饰，鲜艳的衣裙。书里说她：丹唇未起笑先开。']),
  dict(title='这就是凤姐姐', panel=3, original='贾母笑道：“你不认得他，他是我们这里有名的一个泼皮破落户儿……你只叫他‘凤辣子’就是了。”', lines=[
    '贾母笑着打趣她，让黛玉叫她凤辣子。旁边的姊妹告诉黛玉，这是琏嫂子。她的名字，叫王熙凤。',
    '王熙凤拉着黛玉的手，仔细打量，夸她好看，又说起她母亲去世的事，拿帕子擦起眼泪。',
    '贾母说，妹妹远路才来，刚劝住，快别再提前话。王熙凤听了，立刻转悲为喜，又忙着问黛玉的日常。']),
  dict(title='故事才刚刚开始', panel=3, original='“想要什么吃的，什么玩的，只管告诉我。”……“林姑娘的行李东西可搬进来了？”', lines=[
    '想要什么吃的，什么玩的，只管告诉我。王熙凤一面照顾黛玉，一面吩咐人安排行李和住处。',
    '初来时，黛玉看见的是陌生的大门与回廊。如今，她认识了外祖母、舅母、姊妹，还有这位凤姐姐。',
    '这一天还没有结束。黛玉还要去拜见舅舅，晚些时候，她会遇到一个叫宝玉的表兄。那又是怎样的一次相见呢？'])
]
out = dict(title='黛玉进贾府', source=SOURCE, scenes=scenes, cues=[])
cursor = 0
for si, scene in enumerate(scenes):
    scene['start'] = cursor
    for li, line in enumerate(scene['lines']):
        key = f'{si:02d}-{li:02d}'
        txt = ROOT / 'audio' / (key + '.txt')
        aiff = ROOT / 'audio' / (key + '.aiff')
        wav = ROOT / 'audio' / (key + '.wav')
        txt.write_text(line, encoding='utf-8')
        subprocess.run(['say', '-v', 'Tingting', '-r', '190', '-f', str(txt), '-o', str(aiff)], check=True)
        subprocess.run(['afconvert', str(aiff), str(wav), '-f', 'WAVE', '-d', 'LEI16'], check=True)
        with wave.open(str(wav)) as audio:
            duration = audio.getnframes() / audio.getframerate()
        out['cues'].append(dict(scene=si, text=line, audio=f'audio/{key}.wav', start=cursor, duration=duration))
        cursor += duration
        aiff.unlink()
        txt.unlink()
out['duration'] = cursor
(ROOT / 'story-data.js').write_text('window.STORY = ' + json.dumps(out, ensure_ascii=False) + ';\n', encoding='utf-8')
(ROOT / 'story.json').write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(dict(seconds=round(cursor, 2), cues=len(out['cues'])), ensure_ascii=False))
