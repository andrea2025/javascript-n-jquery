var apple = 2;
var ball = 3;
var car = 4;
var total = apple + ball + car;

if(apple < ball && car == 4){
    document.write(true);
}else{
    document.write('not possible');
}

let items = document.getElementById('term');
items.innerHTML= total;


var food1 ='';
for(let i=0;i < 6;i++){
   
document.write ('<br>the rice is ready <br>');
}


let sumInput = () => {
    let input =[];
    while(true){
     let userValues = prompt('input number');
     if (userValues == '' || userValues == null || userValues == !isfinite()){
     break;
   }
   input.push(userValues);
  
  }
  let add = 0;
  for(let x of input){
    console.log(add += input);
  }
  } 
  sumInput();