//your JS code here. If required.

function change() {
let status=document.querySelector('#status')
   let ptag =status.parentNode;
	let ans=document.createElement('h1')
	ans.innerHTML=ptag.innerHTML
ans.innerHTML="Entered Metaverse";
	ans.id=status.id
	ptag.replaceChild(ans,status);
	
}


