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
// Preview inputs stay local; real AI processing remains on the official site.
const input=document.querySelector('#content'),empty=document.querySelector('.empty-actions'),message=document.querySelector('#input-message');
function updateInput(){const value=input.value.trim();document.querySelector('#count').textContent=(value?value.split(/\s+/).length:0)+' words';empty.style.display=value?'none':'flex';}
input.addEventListener('input',updateInput);
document.querySelector('#paste').addEventListener('click',()=>{empty.style.display='none';input.focus();message.textContent='Paste your text using ⌘V or Ctrl+V.';});
input.addEventListener('blur',updateInput);
document.querySelector('#upload').addEventListener('click',()=>document.querySelector('#upload-file').click());
document.querySelector('#upload-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(!/\.txt$/i.test(file.name)){message.textContent='This design preview supports TXT files only.';return;}if(file.size>2000000){message.textContent='Please choose a TXT file smaller than 2 MB.';return;}input.value=await file.text();updateInput();message.textContent='Loaded locally: '+file.name;});
const samples={
mixed:'A good idea deserves clear words. AI can help you start a draft, but the final piece should still sound like you. Read it aloud, look for repeated phrases, and make room for the details only you can add. A little care at this stage can turn a useful first draft into writing you are genuinely ready to share with others.',
claude:'When we learn something new, it helps to connect the idea to an experience we already understand. Rather than trying to remember every detail at once, start with one useful question. Work through an example, explain the answer in your own words, and come back to the parts that still feel uncertain. That process makes the material easier to revisit later.',
chatgpt:'Planning your week does not need to be complicated. Begin by identifying the tasks that matter most, then set aside time to work on them without interruptions. Leave space for unexpected changes and take regular breaks. At the end of each day, review what worked and adjust tomorrow’s plan. Small, thoughtful changes can make a busy schedule feel much more manageable.'
};
document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{input.value=samples[button.dataset.example];message.textContent='Sample text for the design preview.';updateInput();}));
document.querySelectorAll('.intensity button').forEach(button=>button.addEventListener('click',()=>document.querySelectorAll('.intensity button').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));})));
