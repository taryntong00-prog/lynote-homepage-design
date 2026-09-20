// The surrounding hero is an interactive visual preview, not an AI backend.
const mediaTransition=document.querySelector('.media-transition');
const mediaTrack=mediaTransition.querySelector('.track');
const mediaClone=mediaTrack.firstElementChild.cloneNode(true);
mediaClone.setAttribute('aria-hidden','true');
mediaClone.setAttribute('inert','');
mediaTrack.append(mediaClone);
const mediaToggle=mediaTransition.querySelector('.media-transition-toggle');
mediaToggle.addEventListener('click',()=>{
  const paused=mediaTransition.classList.toggle('paused');
  const label=paused?'Resume media logos':'Pause media logos';
  mediaToggle.setAttribute('aria-pressed',String(paused));
  mediaToggle.setAttribute('aria-label',label);
  mediaToggle.title=label;
  mediaToggle.querySelector('path').setAttribute('d',paused?'M6 4l9 6-9 6Z':'M7 5v10M13 5v10');
});
const draft=document.querySelector('#draft');
function countWords(){document.querySelector('#word-count').textContent=(draft.value.trim()?draft.value.trim().split(/\s+/).length:0)+' words';}
draft.addEventListener('input',countWords);
document.querySelector('.sample').addEventListener('click',()=>{draft.value='Writing starts with an idea. The challenge is finding the words that make it feel like yours. Lynote brings humanization and AI detection into one workspace, so you can refine a draft, review its signals, and decide what to do next. Whether you are preparing an essay, shaping a story, or polishing a proposal, your voice should always lead the way.';countWords();});
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-mode]').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-pressed',String(active));});
  const human=button.dataset.mode==='humanizer';
  draft.placeholder=human?'Paste your AI draft. Make it sound naturally like you.':'Is it AI or human? Get instant, free results. (Minimum 60 words)';
  const link=document.querySelector('#tool-link');link.textContent=human?'Humanize for Free':'Detect for Free';link.href=human?'https://lynote.ai/ai-humanizer':'https://lynote.ai/ai-detector';
}));
