(()=>{
'use strict';
const $=s=>document.querySelector(s);
const root=$('#samiLaunch'), film=$('#cinemaFilm'), gate=$('#launchStartGate'), brand=$('#brandResolve'), logo=$('#finalWordmark'), welcomeUI=$('.welcome-ui'), status=$('#audioStatus');
const welcomeAudio=$('#welcomeAudio'), salesAudio=$('#salesAudio'), salesVoice=$('#salesVoice');
let mode='welcome', sound=true, playing=false;
const MEDIA={welcome:'intro-film.mp4',sales:'why-sami-film.mp4'};
function pauseAll(){for(const a of [welcomeAudio,salesAudio,salesVoice]){try{a.pause()}catch{}}}
function setAppActive(active){const app=$('#app');if(!app)return;app.inert=!active;app.setAttribute('aria-hidden',String(!active));}
function showReady(){playing=false;pauseAll();root.classList.add('ready','video-ready');if(brand)brand.style.opacity='1';if(logo)logo.style.opacity='0';if(welcomeUI)welcomeUI.style.opacity='1';$('#launchSkip').textContent='Enter workspace';}
async function startAudio(which){pauseAll();if(!sound)return;try{
  if(which==='welcome'){welcomeAudio.currentTime=0;welcomeAudio.muted=false;welcomeAudio.volume=.86;await welcomeAudio.play();}
  else{
    salesAudio.currentTime=0;salesAudio.muted=false;salesAudio.volume=.26;salesAudio.play().catch(()=>{});
    if(salesVoice){salesVoice.currentTime=0;salesVoice.muted=false;salesVoice.volume=.98;salesVoice.play().catch(()=>{status.textContent='Promo film playing · voice track needs a network connection.'});}
  }
}catch{status.textContent='Sound could not start. Tap Sound to retry.'}}
async function play(which='welcome'){
  mode=which;playing=true;pauseAll();root.hidden=false;setAppActive(false);gate.classList.add('dismissed');root.classList.remove('ready','video-ready');if(brand)brand.style.opacity='0';if(welcomeUI)welcomeUI.style.opacity='0';
  $('#launchSkip').hidden=false;$('#launchSoundBtn').hidden=false;$('#launchSkip').textContent=which==='sales'?'Back to welcome':'Skip intro';
  if(film){film.pause();film.src=MEDIA[which];film.currentTime=0;film.muted=true;film.load();try{await film.play()}catch{showReady();}}
  startAudio(which);
}
async function enter(){playing=false;pauseAll();try{film.pause()}catch{}root.hidden=true;setAppActive(true);await window.SAMIWorkspace?.ready;if(localStorage.getItem('sami.tutorial.seen')!=='yes')window.SAMIWorkspace?.runAction('tutorial')}
async function startWithSound(){sound=true;$('#launchSoundBtn').textContent='Sound on';status.textContent='Cinematic sound and narration enabled';await play(location.hash==='#why'?'sales':'welcome')}
function toggleSound(){sound=!sound;$('#launchSoundBtn').textContent=sound?'Sound on':'Sound off';if(!sound){pauseAll();return}startAudio(mode)}
async function shutdown(){playing=false;pauseAll();try{film.pause()}catch{}root.hidden=false;setAppActive(false);gate.classList.add('dismissed');$('#launchSkip').hidden=true;$('#launchSoundBtn').hidden=true;root.classList.remove('ready');if(brand)brand.style.opacity='0';$('#cinemaClosed').hidden=false}
if(film){film.addEventListener('ended',showReady);film.addEventListener('error',()=>{status.textContent='Rendered film unavailable · SAMI is still ready.';showReady()});}
$('#startSound').onclick=startWithSound;
$('#startQuiet').onclick=()=>{sound=false;$('#launchSoundBtn').textContent='Sound off';play(location.hash==='#why'?'sales':'welcome')};
$('#launchSkip').onclick=()=>{if(mode==='sales'&&playing){play('welcome');return}root.classList.contains('ready')?enter():showReady()};
$('#launchSoundBtn').onclick=toggleSound;
$('#enterSami').onclick=enter;
$('#whySami').onclick=()=>play('sales');
$('#reopenSami').onclick=()=>{pauseAll();try{film.pause()}catch{}gate.classList.remove('dismissed');$('#cinemaClosed').hidden=true;root.classList.remove('ready');if(brand)brand.style.opacity='0';if(welcomeUI)welcomeUI.style.opacity='0';$('#launchSkip').hidden=true;$('#launchSoundBtn').hidden=true};
window.SAMICinema={play,shutdown,enter};
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(playing)film?.pause();pauseAll()}else if(playing){film?.play().catch(()=>{});startAudio(mode)}});
if(document.documentElement.classList.contains('install-required'))root.hidden=true;else{root.hidden=false;setAppActive(false);$('#launchSkip').hidden=true;$('#launchSoundBtn').hidden=true;}
})();
