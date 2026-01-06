document.addEventListener('DOMContentLoaded', async () => {
  const logsEl = document.getElementById('auditLogs');
  const usersEl = document.getElementById('userManagement');
  const token = localStorage.getItem('token');
  if(!token){ window.location='index.html'; return; }

  const res = await fetch('/api/admin',{headers:{'Authorization':'Bearer '+token}});
  const data = await res.json();
  logsEl.innerHTML = '<h3>Audit Logs</h3>'+data.logs.map(l=>`<div>${l.timestamp} - ${l.event}</div>`).join('');
  usersEl.innerHTML = '<h3>Users</h3>'+data.users.map(u=>`<div>${u.username} - ${u.coins} coins</div>`).join('');
});