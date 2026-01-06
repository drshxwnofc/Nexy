document.addEventListener('DOMContentLoaded', async () => {
  const msgEl = document.getElementById('messages');
  const input = document.getElementById('msgInput');
  const sendBtn = document.getElementById('sendBtn');
  const token = localStorage.getItem('token');
  if(!token){ window.location='index.html'; return; }

  async function loadMessages(){
    const res = await fetch('/api/forum',{headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    msgEl.innerHTML = data.messages.map(m=>`<div><b>${m.user}:</b> ${m.text}</div>`).join('');
  }

  sendBtn.onclick = async ()=>{
    const text = input.value.trim();
    if(!text) return;
    await fetch('/api/forum',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({text})});
    input.value='';
    loadMessages();
  }

  loadMessages();
});