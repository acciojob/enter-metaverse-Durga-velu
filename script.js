//your JS code here. If required.

function change() {
let word=document.querySelector('p')
   let ptag =word.parentNode;
	let ans=document.createElement('h1')
	ans.textContent=ptag.textContent
ans.innerHTML="Entered Metaverse";
// 	newElement.id=elem.id;
	ptag.replaceChild(ans,word);
	
}


