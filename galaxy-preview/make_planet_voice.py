import asyncio, json, pathlib, sys
ROOT=pathlib.Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT.parent/'solar-film'/'vendor-python'))
import edge_tts
async def main():
    scripts=json.loads((ROOT/'audio-planets'/'script.json').read_text())
    sem=asyncio.Semaphore(3)
    async def generate(key,text):
        path=ROOT/'audio-planets'/f'{key}.mp3'
        if path.exists() and path.stat().st_size>1000:return
        async with sem:
            for attempt in range(3):
                try:
                    await edge_tts.Communicate(text,'zh-CN-XiaoxiaoNeural',rate='+0%').save(str(path))
                    print('Generated',key,flush=True);return
                except Exception:
                    if attempt==2:raise
                    await asyncio.sleep(2)
    await asyncio.gather(*(generate(k,v) for k,v in scripts.items()))
    print('All',len(scripts),'planet narration clips ready',flush=True)
asyncio.run(main())
