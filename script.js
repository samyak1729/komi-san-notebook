let count=0;
let countEl= document.getElementbyId("count-el");

function increment(){
  count++;
  countEl.textContent = count;
}