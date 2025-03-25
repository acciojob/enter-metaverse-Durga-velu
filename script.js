//your JS code here. If required.

function change() {
let status=document.querySelector('#status')
	status.innerHTML = "Entered Metaverse";
   let ptag =status.parentNode;
	let ans=document.createElement('h1')
	ans.id=status.id
	ptag.replaceChild(ans,status);
	
}


