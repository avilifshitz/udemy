function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
      }
   
    var myColors = ['black', 'red', 'grey'];
    var clickTime; var createdTime; var reactionTime;
    
    function makeBox() {
      var time=Math.random();
      time=time*3000;
       
      setTimeout(function() {

        if (Math.random()>0.5) {
        document.getElementById("simpleBox").style.borderRadius="100%";}

        var top=Math.random();
        top = top*300;
        var left=Math.random();
        left = left*500;
        document.getElementById("simpleBox").style.top=top+"px";
        document.getElementById("simpleBox").style.left=left+"px";
        document.getElementById("simpleBox").style.backgroundColor=getRandomColor();
        document.getElementById("simpleBox").style.display="block";
        createdTime=Date.now();
      }, time); 
      
    }


      document.getElementById("simpleBox").onclick=function() {
          clickTime=Date.now();
          reactionTime=(clickTime-createdTime)/1000;
          document.getElementById("time").innerHTML=reactionTime;
          this.style.display="none";
          makeBox();
       }
       makeBox();
       
     