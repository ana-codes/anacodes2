if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
        a(window.innerWidth);
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
    	a(window.innerWidth);
    }, true);
}
else {
    //The browser does not support Javascript event binding
}

function a(x){
	console.log(x);
	for (i=0; i<9; i++){
		if (x>1100){		
			document.getElementsByClassName('dot')[i].style.cssText =`
				height: ${15}vh;
				width: ${15}vh;
		  		border-radius: 50%;
		  		margin: ${Math.pow(x,-1)*13000 + 12}vh;
		  		margin-left: ${x/70}vh;
		  		margin-right: ${x/70}vh;
		  		position:relative;
		  		bottom: ${Math.pow(x,-1)*11000+9}vh;
		  		right:10vh;`
		  	document.getElementById('dots').style.cssText='	left: 8vh;bottom: 8vh;'	
		  	document.getElementById('title').style.cssText='right:9vh'
			} else if (x<1100 && x>650){
				document.getElementsByClassName('dot')[i].style.cssText =`
				height: ${15}vh;
				width: ${15}vh;
		  		border-radius: 50%;
		  		margin: ${Math.pow(x,-1)*13000 + 3}vh;
		  		margin-left: ${x/100}vh;
		  		margin-right: ${x/90}vh;
		  		position:relative;
		  		bottom: ${Math.pow(x,-1)*14000+9}vh;`	
		  		document.getElementById('dots').style.cssText='	right: 1vh;'		
		  		document.getElementById('title').style.cssText='right:9vh'
			}else if (x<650){
			document.getElementsByClassName('dot')[i].style.cssText =`
				height: ${9}vh;
				width: ${9}vh;
		  		border-radius: 50%;
		  		margin: ${Math.pow(x,-1)*10000}vh;
		  		margin-left: ${x/1000}vh;
		  		margin-right: ${x/100}vh;
		  		position:relative;
		  		bottom: ${Math.pow(x,-1)*10000 + 10}vh;`	
		  		document.getElementById('dots').style.cssText='	right: 1vh;'	
		  		document.getElementById('title').style.cssText='right:14vh'
			}	
		}
		for(i=0;i<3;i++){
			document.getElementsByClassName('row')[i].style.cssText=`padding-top:${Math.pow(x,-1)*10000}vh;padding-bottom:${Math.pow(x,-1)*10000}vh;`;
		} 
}
window.addEventListener('resize', a(window.innerWidth));
