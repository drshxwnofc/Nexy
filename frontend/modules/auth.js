const loginForm=document.getElementById('loginForm');
if(loginForm){loginForm.addEventListener('submit',async e=>{
e.preventDefault();
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;
const res=await fetch('/api/auth',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({username,password})
});
const data=await res.json();
if(data.success){alert('Logged in!');window.location='dashboard.html';}
else alert('Login failed');});}