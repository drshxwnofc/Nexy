document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const numCircles = 15;
  for (let i=0;i<numCircles;i++){
    const div = document.createElement('div');
    div.style.position='absolute';
    div.style.left=Math.random()*100+'%';
    div.style.top=Math.random()*100+'%';
    const size=20+Math.random()*30;
    div.style.width=div.style.height=size+'px';
    div.style.background=`rgba(0,255,255,${0.1+Math.random()*0.2})`;
    div.style.borderRadius='50%';
    div.style.filter='blur(15px)';
    div.style.animation=`float ${5+Math.random()*10}s infinite alternate`;
    body.appendChild(div);
  }
});