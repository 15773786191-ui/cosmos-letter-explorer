import pathlib, re

root=pathlib.Path(__file__).resolve().parent
three=(root.parent/'stellar/vendor/three.module.js').read_text()
match=re.search(r'export\s*\{([^}]+)\};\s*$',three)
if not match or ' as ' in match.group(1):
    raise RuntimeError('Unexpected library export structure')
library='const THREE=(()=>{\n'+three[:match.start()]+'\nreturn {'+match.group(1)+'};})();\n'
app=(root/'film.js').read_text().replace("import * as THREE from '../stellar/vendor/three.module.js';",'')
script=(library+'\n(()=>{\n'+app+'\n})();').replace('</script','<\\/script')
html=(root/'index.html').read_text()
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+(root/'style.css').read_text()+'</style>')
html=html.replace('<script src="film-data.js"></script>','<script>'+(root/'film-data.js').read_text()+'</script>')
html=html.replace('<script type="module" src="film.js"></script>','<script>'+script+'</script>')
out=root/'太阳也会死吗-有声样片.html'
out.write_text(html)
print(f'{out} ({out.stat().st_size/1024/1024:.2f} MB)')
