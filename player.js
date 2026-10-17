(() => {
  'use strict';
  const story = window.STORY, $ = id => document.getElementById(id);
  const audio = $('audio'), cues = story.cues;
  let index = 0, scene = -1, playing = false, started = false, showCaptions = true;
  let playToken = 0;
  const descriptions = ['荣国府门前，轿子来到石狮子旁','黛玉随女眷穿过回廊','贾母把黛玉搂在怀里','王熙凤来到贾母房中，黛玉回头看她'];
  const format = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  $('length').textContent = `${format(story.duration)} · 八幕故事 · 可随时暂停`;
  $('seek').max = story.duration;
  story.scenes.forEach((s,i) => {
    const b = document.createElement('button'); b.className = 'chapter';
    const n = document.createElement('span'); n.textContent = `第 ${String(i+1).padStart(2,'0')} 幕`;
    b.append(n, document.createTextNode(s.title));
    b.addEventListener('click', () => { begin(); seek(s.start, true); });
    $('chapters').append(b);
  });
  function render() {
    const cue = cues[index], current = Math.min(story.duration, cue.start + audio.currentTime);
    if (scene !== cue.scene) {
      scene = cue.scene; const s = story.scenes[scene];
      $('art').style.left = s.panel % 2 ? '-100%' : '0';
      $('art').style.top = s.panel > 1 ? '-100%' : '0';
      $('art').alt = descriptions[s.panel];
      $('scene-number').textContent = `${String(scene+1).padStart(2,'0')} / 08`;
      $('scene-title').textContent = s.title;
      [...$('chapters').children].forEach((b,i) => {b.classList.toggle('active',i === scene); b.setAttribute('aria-current', i===scene ? 'true' : 'false');});
    }
    $('caption').textContent = cue.text;
    $('caption').hidden = !started || !showCaptions;
    $('seek').value = current;
    $('time').textContent = `${format(current)} / ${format(story.duration)}`;
    $('play').textContent = playing ? 'Ⅱ 暂停' : '▶ 播放';
    $('play').setAttribute('aria-label',playing ? '暂停' : '播放');
    $('stage').classList.toggle('running',playing);
  }
  function begin(){ started=true; $('intro').hidden=true; $('ending').hidden=true; }
  async function play() {
    const token = ++playToken;
    try { await audio.play(); if(token!==playToken) return; playing=true; $('status').textContent=''; }
    catch(e) { if(token!==playToken) return; playing=false; $('status').textContent='声音未能播放，请点“播放”重试。也可以先阅读字幕。'; }
    render();
  }
  function pause(){ ++playToken; audio.pause(); playing=false; render(); }
  function load(i, offset=0, resume=false){
    pause(); index=i; audio.src=cues[i].audio; audio.playbackRate=Number($('speed').value);
    audio.onloadedmetadata=()=>{audio.currentTime=offset;render();};
    render(); if(resume) play();
  }
  function seek(t,resume=playing){
    const bounded=Math.max(0,Math.min(story.duration-.01,t));
    let i=cues.findIndex(c=>bounded<c.start+c.duration); if(i<0)i=cues.length-1;
    $('ending').hidden=true; load(i, bounded-cues[i].start,resume);
  }
  $('start').onclick=()=>{begin(); play();};
  $('play').onclick=()=>{if(!started)begin(); if(!$('ending').hidden){seek(0,true);return;} playing?pause():play();};
  $('replay').onclick=()=>{begin();seek(0,true);};
  $('previous').onclick=()=>{begin();seek(story.scenes[Math.max(0,scene-1)].start,true);};
  $('next').onclick=()=>{begin();seek(story.scenes[Math.min(story.scenes.length-1,scene+1)].start,true);};
  $('seek').addEventListener('input',()=>{begin();seek(Number($('seek').value),playing);});
  $('speed').onchange=()=>{audio.playbackRate=Number($('speed').value);};
  $('captions').onclick=()=>{showCaptions=!showCaptions; $('captions').textContent=`字幕 ${showCaptions?'开':'关'}`; $('captions').setAttribute('aria-pressed',String(showCaptions)); render();};
  $('original').onclick=()=>{pause(); const s=story.scenes[scene]; $('reading-title').textContent=s.title; $('excerpt').textContent=s.original; $('context').textContent='节选自第三回，文字转为简体；省略处以省略号标示。故事旁白包含改写，插画是艺术演绎。'; $('reading').showModal();};
  $('reading').addEventListener('click',e=>{if(e.target===$('reading'))$('reading').close();});
  audio.addEventListener('timeupdate',render);
  audio.addEventListener('ended',()=>{
    if(index<cues.length-1)load(index+1,0,true);
    else{playing=false;render(); $('seek').value=story.duration; $('time').textContent=`${format(story.duration)} / ${format(story.duration)}`; $('ending').hidden=false; $('caption').hidden=true;}
  });
  audio.addEventListener('error',()=>{playing=false; render(); $('status').textContent='声音文件加载失败，请刷新后重试。';});
  document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['BUTTON','INPUT','SELECT'].includes(document.activeElement.tagName)&&!$('reading').open){e.preventDefault();$('play').click();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing)pause();});
  load(0);
})();
