console.log("question 1")

colors = ['red','blue','yellow','green','orange']


setInterval(
    function(){
        var index = Math.floor((Math.random()*10)%5);
        col = colors[index];
        document.body.style.backgroundColor = col ;
    }
,3000);