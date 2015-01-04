var hammerdrag = []
hammerdrag[0] = new Hammer(document.getElementsByTagName('span')[0]);
hammerdrag[1] = new Hammer(document.getElementsByTagName('span')[1]);

function Shape(t, x, y, w, h, fill) {
	this.t = t || 0;
	this.x = x || 50;
	this.y = y || 50;
	this.w = w || 1;
	this.h = h || 1;
	this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
	if(this.t == 0){
		ctx.fillStyle = this.fill;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	else if(this.t == 1){
		ctx.fillStyle = this.fill;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.w,0,2*Math.PI);
		ctx.fill();
	}
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
	if(this.t == 0)
		return  (this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my);
	else if(this.t == 1)
		return  (Math.sqrt((mx-this.x)*(mx-this.x) + (my-this.y)*(my-this.y)) <= this.w)
}

function CanvasState(canvas) {
	var hammertime = new Hammer(document.getElementById('newcanvas'));

	this.canvas = canvas;
	this.width = canvas.width;
	this.height = canvas.height;
	this.ctx = canvas.getContext('2d');
   
	var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
	if (document.defaultView && document.defaultView.getComputedStyle) {
		this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
		this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
		this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
		this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
	}
  
	var html = document.body.parentNode;
	this.htmlTop = html.offsetTop;
	this.htmlLeft = html.offsetLeft;

	this.valid = false; // when set to false, the canvas will redraw everything
	this.shapes = [];  // the collection of things to be drawn
	this.dragging = false; 	// Keep track of when we are dragging
	this.selection = null; 	// the current selected object. In the future we could turn this into an array for multiple selection
	  
	this.dragoffx = 0; // See mousedown and mousemove events for explanation
	this.dragoffy = 0;
	  
	var myState = this;
	  
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);

	hammertime.on('panstart', function(ev) {
		var mouse = myState.getMouse(ev.changedPointers[0]);
		var mx = mouse.x;
		var my = mouse.y;
		
		var shapes = myState.shapes;
		var mySel
		var l = shapes.length;
		for (var i = l-1; i >= 0; i--) {
			if (shapes[i].contains(mx, my)) {
				mySel = shapes[i];
			}
		}
		myState.selection = mySel;
		if(myState.selection){
			myState.dragging = true;
		}
		
	});
	hammertime.on('panend pancancel', function(ev) {
		myState.dragging = false;
	});
	hammertime.on('panmove', function(ev) {
		if(myState.dragging){
			var mouse = myState.getMouse(ev.changedPointers[0]);
			var mx = mouse.x;
			var my = mouse.y;
			
			
				myState.selection.x = mouse.x - myState.dragoffx;
				myState.selection.y = mouse.y - myState.dragoffy;   
				myState.valid = false; // Something's dragging so we must redraw
		}
	});
	
	hammertime.on('tap', function(ev) {
		var mouse = myState.getMouse(ev.changedPointers[0]);
		if(ev.tapCount == 2){
			
			var mx = mouse.x;
			var my = mouse.y;
			var shapes = myState.shapes;
			var mySel
			var l = shapes.length;
			for (var i = l-1; i >= 0; i--) {
				if (shapes[i].contains(mx, my)) {
					mySel = i;
				}
			}
			myState.shapes.splice(mySel,1);
			myState.valid = false;
		}
			
		console.log(ev);
	});
	
	hammertime.on('press tap', function(ev) {
		var mouse = myState.getMouse(ev.changedPointers[0]);
		
		if((ev.type == "tap" && ev.tapCount == 1) || ev.type =="press"){  
		
			var mx = mouse.x;
			var my = mouse.y;
			var shapes = myState.shapes;
			var l = shapes.length;
			for (var i = l-1; i >= 0; i--) {
				if (shapes[i].contains(mx, my)) {
					var mySel = shapes[i];
				
					myState.dragoffx = mx - mySel.x;
					myState.dragoffy = my - mySel.y;
					myState.dragging = true;
					myState.selection = mySel;
					myState.valid = false;
					return;
				}
			}
		}
		
		if (myState.selection) {
			myState.selection = null;
			myState.valid = false; // Need to clear the old selection border
		}
	});
	canvas.addEventListener('mousedown', function(e) {
		
	}, true);
	
	  
	this.selectionColor = '#CC0000';
	this.selectionWidth = 2;  
	this.interval = 30;
	setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  this.valid = false;
}

CanvasState.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

CanvasState.prototype.draw = function() {
  // if our state is invalid, redraw and validate!
  if (!this.valid) {
    var ctx = this.ctx;
    var shapes = this.shapes;
    this.clear();
        
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      var shape = shapes[i];
      // We can skip the drawing of elements that have moved off the screen:
      if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
      shapes[i].draw(ctx);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected Shape
    /*if (this.selection != null) {
      ctx.strokeStyle = this.selectionColor;
      ctx.lineWidth = this.selectionWidth;
      var mySel = this.selection;
      ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
    }*/
    
    // ** Add stuff you want drawn on top all the time here **
    
    this.valid = true;
  }
}



CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  console.log(e.pageX + " " + e.pageY);
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
}

// If you dont want to use <body onLoad='init()'>
// You could uncomment this init() reference and place the script reference inside the body tag
var s = new CanvasState(document.getElementById('newcanvas'));
init();

function init() {
  s.addShape(new Shape(0, 40,40,50,50)); // The default is gray
  s.addShape(new Shape()); // The default is gray
  s.addShape(new Shape(0, 60,140,40,60, 'lightskyblue'));
  // Lets make some partially transparent
  s.addShape(new Shape(1, 80,150,60,30, 'rgba(127, 255, 212, .5)'));
  s.addShape(new Shape(1, 125,80,30,80, 'rgba(245, 222, 179, .7)'));
}

/* ************************************************************************************* */

var data = "";

hammerdrag[0].on('pan', function(ev) { dragR(ev);});
hammerdrag[1].on('pan', function(ev) { dragC(ev);});
hammerdrag[0].on('panend', function(ev) { drop(ev);});
hammerdrag[1].on('panend', function(ev) { drop(ev);});

function allowDrop(ev) {
    ev.preventDefault();
}

function dragR(ev) {
    data = "rectangle"
}

function dragC(ev) {
    data = "circle"
}

function drop(ev) {
    ev.preventDefault();
    
    if(data == "rectangle")
		s.addShape(new Shape(0, 40,40,50,50, "black"));
    else if(data == "circle")
		s.addShape(new Shape(1, 125,80,30, 'rgba(245, 222, 179, .7)'));
}
