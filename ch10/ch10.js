
    var btn = document.getElementById('btn').addEventListener('click', function(){
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("text1").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x = 5)  throw " a perfect number";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
});