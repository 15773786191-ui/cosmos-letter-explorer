const {chromium}=require('/Users/bytedance/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});try{
const p=await b.newPage({viewport:{width:1440,height:960}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://127.0.0.1:8766/galaxy-preview/?v=earth-depth');await p.waitForFunction(()=>window.GALAXY_STATE?.ready);await p.locator('#earth-entry').click();
const f=await p.waitForEvent('framenavigated',{predicate:f=>f.url().includes('/earth-ground/')}).catch(()=>p.frames().find(f=>f.url().includes('/earth-ground/')));
await f.waitForFunction(()=>window.EARTH_STATE?.terrain||window.EARTH_STATE?.error,{},{timeout:60000});console.log('terrain',await f.evaluate(()=>EARTH_STATE));assert(await f.evaluate(()=>EARTH_STATE.terrain));
await p.waitForTimeout(4500);await p.screenshot({path:__dirname+'/globe.png'});await f.locator('#region').click();await p.waitForTimeout(15000);console.log('tiles',await f.evaluate(()=>({loaded:viewer.scene.globe.tilesLoaded,height:viewer.camera.positionCartographic.height})));await p.screenshot({path:__dirname+'/region.png'});
await f.locator('#land').click();await f.waitForFunction(()=>EARTH_STATE.mode==='ground',{},{timeout:30000});await p.waitForTimeout(12000);await p.screenshot({path:__dirname+'/ground.png'});console.log('ground',await f.evaluate(()=>EARTH_STATE));assert(await f.locator('#ground-controls').isVisible());await f.locator('#right').click();await f.locator('#walk').click();await p.waitForTimeout(2500);await f.locator('#back').click();await p.locator('#earth-overlay').waitFor({state:'hidden'});assert.deepEqual(errors,[]);console.log('PASS: integrated Earth, real terrain, global/region/ground, turn, move, return');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
