const {chromium}=require('/Users/bytedance/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const jump=async(i,fraction=.2)=>{await page.locator('#seek').evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));},await page.evaluate(({i,fraction})=>window.FILM.cues[i].start+window.FILM.cues[i].duration*fraction,{i,fraction}));await page.waitForFunction(i=>window.SOLAR_STATE.index===i,i);};
 try{
  await page.goto('http://127.0.0.1:8766/solar-film/');
  await page.waitForFunction(()=>window.SOLAR_READY||window.SOLAR_RENDER_ERROR);
  assert.equal(await page.evaluate(()=>window.SOLAR_RENDER_ERROR),undefined);
  await page.screenshot({path:__dirname+'/preview-opening.png',fullPage:true});
  await page.click('#start');await page.waitForFunction(()=>document.querySelector('#narration').currentTime>.3);
  assert.equal(await page.locator('#caption').isVisible(),true);
  await page.click('#play');assert.equal(await page.locator('#narration').evaluate(a=>a.paused),true);
  await jump(6,.4);await page.screenshot({path:__dirname+'/preview-pressure.png',fullPage:true});
  assert.ok((await page.locator('#caption').textContent()).includes('压力'));
  await page.click('#subtitles');assert.equal(await page.locator('#caption').isVisible(),false);await page.click('#subtitles');
  await page.click('#mute');assert.equal(await page.locator('#narration').evaluate(a=>a.muted),true);await page.click('#mute');
  await jump(8,.95);await page.click('#play');
  await page.waitForFunction(()=>!document.querySelector('#prediction').hidden);
  assert.equal(await page.locator('#narration').evaluate(a=>a.paused),true);
  await page.click('[data-answer="longer"]');await page.waitForFunction(()=>window.SOLAR_STATE.index===9&&window.SOLAR_STATE.playing);
  await page.click('#play');await page.screenshot({path:__dirname+'/preview-comparison.png',fullPage:true});
  await page.click('#info');assert.equal(await page.locator('#notes').evaluate(d=>d.open),true);await page.keyboard.press('Escape');
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await jump(3,.4);await page.screenshot({path:__dirname+'/preview-mobile.png',fullPage:true});
  await jump(13,.98);await page.click('#play');await page.waitForFunction(()=>window.SOLAR_STATE.ended);
  assert.equal(await page.locator('#ending').isVisible(),true);
  await page.click('#replay');await page.waitForFunction(()=>window.SOLAR_STATE.index===0&&window.SOLAR_STATE.playing);
  assert.equal(await page.evaluate(()=>window.SOLAR_STATE.predicted),false);
  await page.goto('file://'+__dirname+'/太阳也会死吗-有声样片.html');
  await page.waitForFunction(()=>window.SOLAR_READY||window.SOLAR_RENDER_ERROR);assert.equal(await page.evaluate(()=>window.SOLAR_RENDER_ERROR),undefined);
  await page.click('#start');await page.waitForFunction(()=>document.querySelector('#narration').currentTime>.2);
  assert.deepEqual(errors,[]);
  console.log('PASS: 3D, neural narration playback, pause/seek, captions/mute, prediction pause and resume, model notes, mobile layout, ending/replay, offline playback.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
