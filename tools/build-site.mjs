import {build} from 'esbuild';
import {readFile,writeFile,mkdir,cp,rm} from 'node:fs/promises';
import {resolve,dirname,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'share-site/dist');
await mkdir(dist,{recursive:true});
await rm(resolve(dist,'runtime'),{recursive:true,force:true});
const result=await build({absWorkingDir:root,entryPoints:['galaxy-preview/app.js','planet-spatial/explore.js','saturn-layout-preview/preview.js'],bundle:true,minify:true,splitting:true,format:'esm',target:'es2022',outdir:'share-site/dist/runtime',entryNames:'[name]-[hash]',chunkNames:'shared-[hash]',metafile:true});
const pages={'galaxy-preview/app.js':'galaxy-preview/index.html','planet-spatial/explore.js':'planet-spatial/index.html','saturn-layout-preview/preview.js':'saturn-layout-preview/index.html'};
const assets=[];
for(const [path,data] of Object.entries(result.metafile.outputs))if(['planet-spatial/explore.js','saturn-layout-preview/preview.js'].includes(data.entryPoint)||data.bytes<3000)assets.push('../runtime/'+basename(path));
assets.push('../saturn-layout-preview/explore.css?v=33');
for(const id of ['sun','mercury','venus','moon','mars','jupiter','uranus','neptune'])assets.push('../planet-spatial/?body='+id+'&v=place-navigation-38');
assets.push('../saturn-layout-preview/?embedded=1&v=place-navigation-38');
const generated=/^(app-[A-Z0-9]+\.js|lazy-[A-Z0-9]+\.js|explore\.bundle\.js|preview\.bundle\.js|\.DS_Store)$/;
for(const folder of ['galaxy-preview','planet-spatial','saturn-layout-preview','stellar'])await cp(resolve(root,folder),resolve(dist,folder),{recursive:true,filter:path=>!generated.test(basename(path))});
for(const [path,data] of Object.entries(result.metafile.outputs)){
 const page=pages[data.entryPoint];if(!page)continue;
 let html=await readFile(resolve(root,page),'utf8');
 html=html.replace(/\.\.\/runtime\/(app|explore|preview)-[A-Z0-9]+\.js/g,'../runtime/'+basename(path));
 if(data.entryPoint==='galaxy-preview/app.js')html=html.replace(/window\.COSMOS_NEAR_ASSETS=\[[^;]*\];/,`window.COSMOS_NEAR_ASSETS=${JSON.stringify(assets)};`);
 await writeFile(resolve(dist,page),html);
}
await writeFile(resolve(dist,'index.html'),'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=./galaxy-preview/"><title>宇宙来信</title><a href="./galaxy-preview/">打开宇宙来信</a></html>');
await cp(resolve(root,'hosting/_headers'),resolve(dist,'_headers'));
console.log('Static site built: share-site/dist');
