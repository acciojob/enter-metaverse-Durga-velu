//your JS code here. If required.

function change() {
let word=document.querySelector('#status')
   let ptag =word.parentNode;
	let ans=document.createElement('h1')
	ans.textContent=ptag.textContent
ans.innerHTML="Entered Metaverse";
	ans.id=word.id
	ptag.replaceChild(ans,word);
	
}


