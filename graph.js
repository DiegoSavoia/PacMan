<script>
		var loop = {
	    handle: CreateHandle(),
	    idEjecucion: null,
	    ultimoRegistro: 0,
	    aps: 0,
	    fps: 0,
	    iterar: function(registroTemporal){
	      loop.idEjecucion = window.requestAnimationFrame(loop.iterar);
	      loop.update(registroTemporal);
	      loop.play();
	      if(registroTemporal - loop.ultimoRegistro > 999){
	        loop.ultimoRegistro = registroTemporal;
	        console.log(loop.fps);
	        loop.aps = 0;
	        loop.fps = 0;
	      };
	    },

	    update: function(){
	      loop.aps++;
	    },

	    play: function(){
	      loop.fps++;
	      borrarCanvas();

	    },
	};

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	Gizmos.ctx = ctx;
	Gizmos.enabled = true;
	var margen = 10;
	var canvasTop = (margen/2);
	var canvasLeft = (margen/2);
	var canvasWidth = window.innerWidth-margen;
	var canvasHeight = window.innerHeight-margen;

	function borrarCanvas(){
	  canvas.width = canvasWidth;
	  canvas.height = canvasHeight;
	}

	function ResizeWindow(){
	  canvas.style.top = canvasTop + "px";
	  canvas.style.left = canvasLeft + "px";
	  canvasWidth = window.innerWidth-margen;
	  canvasHeight = window.innerHeight-margen;
	  canvas.style.width = canvasWidth+"px";
	  canvas.style.height = canvasHeight+"px";
	};

	Concurrent.Thread.create(InitTimer);
	Keyboard.load();

	window.addEventListener("load", function(e){
	  ResizeWindow();
		loop.iterar();
	});

	window.addEventListener("resize", function(e){
	  ResizeWindow();
	});

</script>