document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent=new Date().getFullYear();
  if(document.getElementById('gamesGrid')) renderGames();
  if(document.getElementById('jobsList')) renderJobs();
  if(document.getElementById('statPlayers')){
    animateCount(document.getElementById('statPlayers'),120000);
    animateCount(document.getElementById('statProjects'),3);
    animateCount(document.getElementById('statYears'),7);
  }
});

const games=[{title:'Project LUNARC',desc:'Systemic exploration under a fractured moon.'}];
const jobs=[{title:'Gameplay Programmer (Unreal)',desc:'Remote‑friendly, Europe.'}];

function renderGames(){const g=document.getElementById('gamesGrid');games.forEach(x=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<h3>${x.title}</h3><p>${x.desc}</p>`;g.append(c);});}
function renderJobs(){const j=document.getElementById('jobsList');jobs.forEach(x=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<h3>${x.title}</h3><p>${x.desc}</p>`;j.append(c);});}

function animateCount(el,to,dur=1400){const s=0,t0=performance.now();function step(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.floor(s+(to-s)*p).toLocaleString();if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);}

function switchLang(lang){if(lang==='fr'){document.getElementById('homeTitle')?.textContent='Des mondes élégants, guidés par les systèmes';}} 