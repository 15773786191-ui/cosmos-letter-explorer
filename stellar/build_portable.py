import pathlib, re

root = pathlib.Path(__file__).resolve().parent
three = (root / 'vendor/three.module.js').read_text()
match = re.search(r'export\s*\{([^}]+)\};\s*$', three)
if not match:
    raise RuntimeError('Unexpected Three.js export format; preserve source and inspect.')
exports = match.group(1)
if ' as ' in exports or re.search(r'^import\s', three, re.M):
    raise RuntimeError('Unsupported dependency module structure.')
library = 'const THREE = (()=>{\n' + three[:match.start()] + '\nreturn {' + exports + '};\n})();\n'
app = (root / 'app.js').read_text()
app = app.replace("import * as THREE from './vendor/three.module.js';", '')
script = library + '\n(()=>{\n' + app + '\n})();'
script = script.replace('</script', '<\\/script')
html = (root / 'index.html').read_text()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>' + (root / 'style.css').read_text() + '</style>')
html = html.replace('<script type="module" src="app.js"></script>', '<script>' + script + '</script>')
html = html.replace('href="./"', 'href="#"')
target = root / '恒星的一生-可独立打开.html'
target.write_text(html)
print(f'{target} ({target.stat().st_size / 1024 / 1024:.2f} MB)')
