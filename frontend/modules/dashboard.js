document.addEventListener('DOMContentLoaded', async () => {
  const coinEl = document.getElementById('coinBalance');
  const appListEl = document.getElementById('appList');
  const logoutBtn = document.getElementById('logoutBtn');
  const token = localStorage.getItem('token');
  if(!token){ window.location='index.html'; return; }

  // Fetch coin balance & apps
  const res = await fetch('/api/coins', { headers:{'Authorization':'Bearer '+token} });
  const data = await res.json();
  coinEl.innerText = 'Coins: ' + (data.balance||0);

  const appsRes = await fetch('/api/apps',{headers:{'Authorization':'Bearer '+token}});
  const appsData = await appsRes.json();
  appListEl.innerHTML = appsData.apps.map(a=>`<div>${a.name} - ${a.status}</div>`).join('');

  logoutBtn.onclick = ()=>{ localStorage.removeItem('token'); window.location='index.html'; }
});