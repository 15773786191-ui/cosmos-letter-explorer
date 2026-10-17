import base64, json, pathlib

root = pathlib.Path(__file__).resolve().parent
story = json.loads((root / 'story.json').read_text())
for cue in story['cues']:
    cue['audio'] = 'data:audio/wav;base64,' + base64.b64encode((root / cue['audio']).read_bytes()).decode()
(root / 'story-data.js').write_text('window.STORY=' + json.dumps(story, ensure_ascii=False) + ';\n')
html = (root / 'index.html').read_text()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>' + (root / 'style.css').read_text() + '</style>')
html = html.replace('assets/storyboard.png', 'data:image/png;base64,' + base64.b64encode((root / 'assets/storyboard.png').read_bytes()).decode())
html = html.replace('<script src="story-data.js"></script>', '<script>window.STORY=' + json.dumps(story, ensure_ascii=False) + ';</script>')
html = html.replace('<script src="player.js"></script>', '<script>' + (root / 'player.js').read_text() + '</script>')
target = root / '黛玉进贾府-可独立打开.html'
target.write_text(html)
print(f'{target} ({target.stat().st_size / 1024 / 1024:.1f} MB)')
