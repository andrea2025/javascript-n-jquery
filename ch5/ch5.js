let x =document.getElementById('item1');
x.innerHTML = 'tiger';

let y =document.createElement('p');
let z =document.createTextNode('list of animals found in the forest');
y.appendChild(z);
let total = document.querySelector('div');
total.appendChild(y);


var removeItem = document.getElementsByTagName('li')[2];
var termRemove = removeItem.parentNode;
termRemove.removeChild(removeItem);


var changeContent = document.getElementById('item2');
changeContent.className = 'berry';
