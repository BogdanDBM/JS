(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,250);


(lib.boubles = function() {
	this.initialize(img.boubles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,69);


(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,250);


(lib.sea = function() {
	this.initialize(img.sea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,280);


(lib.shark = function() {
	this.initialize(img.shark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,198);


(lib.Voda_kapli = function() {
	this.initialize(img.Voda_kapli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,29);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACVBjQgEAAgCgCQgCgCAAgFIAAg7Ig2h4QgCgEACgCQACgDAEAAIAkAAQAEAAACADQADACABAEIAVA6IADALIACAGIABgDIACgHIACgHIAZg6IADgGQACgCAFgBIAfAAQAEAAACADQACACgCAEIg1BzIAABAQAAAFgCACQgCACgEAAgAAqBjQgEAAgDgDQgCgCgBgEIgHgcIgwAAIgHAcQgBAEgDACQgCADgEAAIgeAAQgEAAgCgDQgBgCABgEIA1izQABgEACgCQADgDAEAAIAfAAQAEAAADADQACACABAEIA1CzQABAEgCACQgBADgFAAgAAOAZIgEgQIgDgQIgDgTIgCgRIgBgIIgBAJIgBARIgDATIgEAPIgEAQIAaAAgAjrBjQgDAAgCgCQgCgDAAgEIAAizQAAgEACgCQACgDAFAAIBBAAQAbABARAHQAQAHAHALQAHALAAANIAABhQAAANgHALQgHALgQAHQgRAHgbABgAjCA8IAaAAQALAAAIgFQAHgEAAgKIAAhRQAAgJgHgFQgIgFgLABIgaAAg");
	this.shape.setTransform(24.3,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,48.6,19.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmKBdQgQgGgHgMQgHgLAAgNIAAgTQAAgFACgCQACgCAFAAIAeAAQAEAAACACQACACAAAFIAAANQAAAKAHAEQAIAEALAAQAKAAAIgEQAHgEAAgKIAAgGQAAgFgEgEQgDgDgGgDIgMgEIgpgQQgMgEgHgKQgIgLAAgMIAAgSQgBgNAHgLQAGgKAPgIQAPgHAaAAQAbAAAPAHQAQAIAGAKQAHALgBANIAAALQAAAEgCADQgCACgEAAIgeAAQgFAAgCgCQgBgDAAgEIAAgEQAAgKgHgFQgGgDgKAAQgKAAgGADQgHAFAAAKIAAACQAAAGADADQAEADACABIAxARQAQAFAKAKQAKAMAAAPIAAAVQABANgHALQgHAMgQAGQgQAIgbAAQgbAAgQgIgAF7BjQgEAAgDgDIgFgGIguhHIgDAAIAABHQAAAFgCABQgCADgEAAIgfAAQgFAAgCgDQgCgBAAgFIAAizQAAgEACgDQACgCAFAAIAfAAQAEAAACACQACADAAAEIAABKIADAAIAshKQACgDAEgDQADgDAFAAIAhAAQAFAAABADQABADgDADIg3BYIA/BbQACADgBADQgBADgFAAgADHBjQgEAAgCgEIgDgFIgZhAIgWAAIAABAQAAAFgCABQgCADgEAAIgfAAQgFAAgCgDQgCgBAAgFIAAizQAAgEACgDQACgCAFAAIA+AAQAbAAARAIQAQAGAHAMQAHALAAANIAAAZQAAANgHAKQgHALgQAIIAcBHQACAEgDACQgCADgFAAgACPgNIAXAAQALABAIgFQAHgEABgLIAAgIQgBgKgHgEQgIgFgLAAIgXAAgAAkBjQgEAAgDgDQgCgCgBgEIgHgcIgwAAIgHAcQgBAEgDACQgCADgEAAIgeAAQgEAAgCgDQgBgCABgEIA1izQABgEACgDQADgCAEAAIAfAAQAEAAADACQACADABAEIA1CzQABAEgCACQgBADgFAAgAAIAYIgEgPIgDgQIgCgTIgCgRIgBgIIgBAJIgCARIgDATIgEAPIgEAPIAaAAgAiOBjQgFAAgCgDQgCgCAAgEIAAhIIg0AAIAABIQAAAEgCACQgCADgEAAIgfAAQgFAAgCgDQgCgCAAgEIAAizQAAgEACgDQACgCAFAAIAfAAQAEAAACACQACADAAAEIAABFIA0AAIAAhFQAAgEACgDQACgCAFAAIAfAAQAFAAABACQACADAAAEIAACzQAAAEgCACQgBADgFAAg");
	this.shape.setTransform(42.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,85,20.2), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEkBXIgEgBIgBgEIAAh9IABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIATAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIACAEIAAADIAHgEIAKgEQAFgCAIAAQAPAAAHAIQAHAIAAAOIAAAoQAAAOgHAIQgHAIgPAAQgLAAgHgDQgHgEgEgDIAAAqQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABgAFGgVIgIAGIAAAeQADADAFACQAFADAGAAQAGAAABgDQABgCAAgDIAAgeQAAgDgBgDQgBgCgGgBQgGABgFACgACdAtQgLgFgEgHQgFgIAAgIIAAgIQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAIAEgBIAUAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABIAAADQAAAGAEAEQAFADAHgBQAHABAFgDQAEgEAAgGIAAgGQAAgGgEgDQgFgDgHAAIgOAAIgFgBQgBgBAAgEIAAgOQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFgBIAMAAQAHAAAFgDQAEgDAAgHIAAgEQAAgGgEgDQgEgDgGAAQgIAAgEADQgDADAAAGIAAADQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgUAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgHQAAgJAEgHQAEgIAKgFQALgEASgBQASAAAKAFQAKAFAEAHQAEAIAAAIIAAAOQAAAHgDAFQgEAFgHADQAIADAEAGQAEAFAAAHIAAAPQAAAJgFAHQgEAIgKAEQgKAFgTAAQgSAAgKgFgAl2AvQgHgEgDgGQgDgFAAgHIAAgIQAAgHAEgGQADgFAIgDQAHgEAKAAIAYAAIAAgLQAAgEgDgCQgCgDgGAAQgHAAgCACQgDACAAAEIAAACQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABIgSAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgDQgBgOALgHQAJgIAWAAQAWAAAKAIQAKAHAAAOIAAA/QAAAEgCABIgEABIgSAAIgFgBIgBgFIAAgCIgMAHQgHADgJAAQgKAAgGgDgAljAOQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIAFABQAFAAAEgDIAJgFIAAgGIgSAAQgFAAgBACgAJoAwIgFgBIgBgEIAAgRIABgEIAFgBIAVAAIAEABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAARQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgEABgAI2AwIgFgBQgBgBAAgEIAAg5QAAgEgCgDQgBgCgEAAQgHABgEACIgIAFIAAA6QAAAEgBABIgFABIgUAAIgEgBIgBgFIAAg5QAAgEgCgDQgBgCgFAAQgGABgFACIgHAFIAAA7QAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABIgUAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAhWQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIATAAIAEABIACAFIAAADQAEgDAHgDQAHgEALAAQAJAAAGADQAHAEADAGIAHgGIAKgFQAHgCAIAAQAOAAAIAHQAHAIAAAMIAABBQAAAEgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAgAGQAwIgFgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgRQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFgBIAUAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABIABAEIAAARIgBAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAgAg8AwIgFgBIgBgEIAAgRIABgEIAFgBIAVAAIAEABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAARQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgEABgAhuAwIgEgBQgCgBAAgEIAAg5QAAgEgBgDQgCgCgEAAQgGABgFACIgIAFIAAA6IgBAFIgEABIgUAAIgFgBIgBgFIAAg5QAAgEgBgDQgCgCgEAAQgGABgFACIgIAFIAAA7QAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgVAAIgEgBIgBgEIAAhWIABgFIAEgBIATAAIAEABIACAFIAAADQAEgDAHgDQAHgEAMAAQAIAAAHADQAGAEAEAGIAGgGIAKgFQAHgCAJAAQANAAAIAHQAIAIAAAMIAABBQAAAEgCABIgEABgAkUAwIgFgBIgBgEIAAgRIABgEIAFgBIAVAAIAEABIABAEIAAARIgBAEIgEABgAoLAwIgFgBIgBgEIAAgPQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQACgBADAAIAYAAIAAhNIgYAEQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgPQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQABAAABAAIAzgIQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQACABAAAEIAABmIAYAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAABIAAAPQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABgAp7AwIgFgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgPQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIAYAAIAAhNIgYAEQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgPIABgFQAAAAABgBQAAAAABAAQAAAAABgBQABAAABAAIAzgIQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQACABAAAEIAABmIAYAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAABIAAAPQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABgAAaAFQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgOQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIA0AAQADAAACACIABAEIAAAOIgBADQgCACgDAAg");
	this.shape.setTransform(123.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(59.1,6.1,128.4,17.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmLB6QgWgKgJgOQgKgOAAgRIAAi3QAAgGADgDQADgDAFAAIApAAQAGAAACADQADADAAAGIAACtQAAAMAKAGQAJAGAPAAQAOAAAKgGQAKgGAAgMIAAitQAAgGADgDQADgDAFAAIApAAQAGAAACADQACADAAAGIAAC3QABARgKAOQgJAOgVAKQgWAJgjABQgjgBgVgJgApnB6QgTgKgJgOQgIgOAAgRIAAgZQAAgGADgDQADgCAFAAIAoAAQAGAAACACQADADAAAGIAAAPQAAAMAHAGQAHAGAMAAQAMAAAGgGQAFgGAAgMIAAitQAAgGADgDQACgDAGAAIApAAQAGAAACADQADADAAAGIAAC3QAAARgIAOQgHAOgTAKQgTAJghABQghgBgTgJgAHkCBQgGgBgDgCQgDgCAAgGIAAhFQAAgOAHgHQAGgHALgFIBQgkQAFgCADgEQAEgEAAgJIAAgSQAAgNgIgGQgJgFgOAAQgNAAgIAFQgIAGgBANIAAAOQAAAGgCADQgDADgFAAIgnAAQgGAAgDgDQgCgDAAgGIAAgXQAAgRAIgOQAJgPAUgJQATgKAjAAQAhAAAUAKQAVAJAJAPQAJAOAAARIAAAYQAAAUgGAMQgGALgIAIQgJAHgIAEIhAAdQgIADgDAFQgEADABAIIAAAJIBqAAQAFABADACQADADAAAFIAAAeQAAAGgDACQgDACgFABgAELCBQgFgBgDgCQgDgCAAgGIAAhFQAAgOAHgHQAGgHALgFIBQgkQAFgCADgEQAEgEAAgJIAAgSQAAgNgIgGQgJgFgOAAQgNAAgIAFQgIAGgBANIAAAOQAAAGgCADQgDADgFAAIgnAAQgGAAgDgDQgCgDAAgGIAAgXQAAgRAIgOQAIgPAVgJQATgKAjAAQAhAAAUAKQAVAJAJAPQAJAOAAARIAAAYQAAAUgGAMQgGALgIAIQgJAHgIAEIhAAdQgIADgDAFQgEADABAIIAAAJIBqAAQAFABADACQADADAAAFIAAAeQAAAGgDACQgDACgFABgAApCBQgGgBgDgCQgCgDAAgGIAAhMIhFidQgCgFACgDQACgEAGAAIAtAAQAGAAADAEQADADACAFIAbBLIAEAOIACAIIABgEIADgJIADgJIAghLQACgFADgDQADgEAGAAIAoAAQAGAAACAEQADACgDAGIhGCVIAABUQAAAGgCADQgCACgGABgAi9CBQgFgBgCgCQgDgDAAgFIAAjqQAAgGADgDQADgDAFAAIApAAQAGAAACADQADADAAAGIAADBIBKAAQAGABACACQAEADAAAFIAAAeQAAAGgEACQgCACgGABg");
	this.shape.setTransform(65.2,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,-1.5,130.4,26.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Voda_kapli();
	this.instance.parent = this;
	this.instance.setTransform(4.5,-31.2,0.68,0.68,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-15.1,-31.2,24.9,61.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boubles();
	this.instance.parent = this;
	this.instance.setTransform(23,465,0.602,0.602);

	this.instance_1 = new lib.boubles();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42,572,0.25,0.25);

	this.instance_2 = new lib.boubles();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71,518,0.447,0.447);

	this.instance_3 = new lib.boubles();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,531,0.339,0.339);

	this.instance_4 = new lib.boubles();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87,282,0.602,0.602);

	this.instance_5 = new lib.boubles();
	this.instance_5.parent = this;
	this.instance_5.setTransform(97,448,0.25,0.25);

	this.instance_6 = new lib.boubles();
	this.instance_6.parent = this;
	this.instance_6.setTransform(34,350,0.447,0.447);

	this.instance_7 = new lib.boubles();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7,422,0.339,0.339);

	this.instance_8 = new lib.boubles();
	this.instance_8.parent = this;
	this.instance_8.setTransform(23,183,0.602,0.602);

	this.instance_9 = new lib.boubles();
	this.instance_9.parent = this;
	this.instance_9.setTransform(42,290,0.25,0.25);

	this.instance_10 = new lib.boubles();
	this.instance_10.parent = this;
	this.instance_10.setTransform(71,236,0.447,0.447);

	this.instance_11 = new lib.boubles();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,249,0.339,0.339);

	this.instance_12 = new lib.boubles();
	this.instance_12.parent = this;
	this.instance_12.setTransform(87,0,0.602,0.602);

	this.instance_13 = new lib.boubles();
	this.instance_13.parent = this;
	this.instance_13.setTransform(97,166,0.25,0.25);

	this.instance_14 = new lib.boubles();
	this.instance_14.parent = this;
	this.instance_14.setTransform(34,68,0.447,0.447);

	this.instance_15 = new lib.boubles();
	this.instance_15.parent = this;
	this.instance_15.setTransform(7,140,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,128,589.3), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shark();
	this.instance.parent = this;
	this.instance.setTransform(-127,36,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-127,36,212.7,123.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boy();
	this.instance.parent = this;
	this.instance.setTransform(-63,54,1.229,1.229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-63,54,193,307.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sea();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.257,1.257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,358.3,352), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-98,0,1.173,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-98,0,380,600), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#405885").s().p("A8RcbMAAAg41MA4jAAAMAAAA41g");
	this.shape.setTransform(115.5,230,0.494,1.308);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(26,-7.9,179,475.8), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7941D").s().p("AAJCCQgJgBgJgJIhyh5QgJgKAAgKQAAgKAIgIQAIgIALABQAKABAJAJIAnApIADhsQABgNAHgHQAIgHAKABQALAAAHAIIACAFQAEAGgBAJIAAAFIgEBYIBigBIAGAAQANAAAIAHQAHAHAAALQgBAKgIAIQgHAGgMAAIh4AAIAqAtQAIAKABAKQAAAKgIAIQgHAHgJAAIgDAAg");
	this.shape.setTransform(43,8.2,0.629,0.629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7941D").s().p("AgEB0QgKgDgHgLIhbiHQgQgZAYgQIAhgWQAQgLASgGQAXgHAYAJQAZAKAOAVQANATgBAVQgCAWgPATIAuACQASABAHALQAGAIgCALQgCAKgJAFQgHAFgLgBIhagJIAUAfQAHAKgCALQgBAKgKAGQgGAFgHAAIgFgBgAgchCIgKAGIgWAOIAkA2IAQgKQALgIAFgFQAGgIABgKQAAgLgGgJQgJgNgNgBIgFgBQgFAAgFACg");
	this.shape_1.setTransform(31.6,17.9,0.629,0.629);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7941D").s().p("AhPB2QgKgEgEgJQgDgGAAgIIAAi2QAAgRAQgHQAQgHAMALICKB4QAGAGACAGQAEAJgDAKQgEAKgKAEQgOAGgPgMIgSgQIhQAkIABAXQABATgQAHQgFACgFAAIgJgBgAgvAVIAvgVIgxgug");
	this.shape_2.setTransform(20.9,25.2,0.629,0.629);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7941D").s().p("AgdBwQgJgGgDgMIgBgGIgqiXQgIgcAcgIIAqgMQAJgCANgBQALgBAJABQAVACASARQASAQAGAXQAKAjgVAeQgJANgLAHQgLAIgUAFIgWAGIAGAbIABAGQAEAMgFAJQgEAKgKACIgIACQgGAAgGgEgAgMhAIgTAFIASA/IASgEQALgDAFgDQAJgEAFgLQAFgLgDgLQgEgOgOgHQgFgCgHAAQgIAAgLACg");
	this.shape_3.setTransform(5.4,29.1,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,51.4,36.4), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7941D").s().p("AhHBoQgHgIAAgNIgEiiQgBgdAegBIAngBQATgBARAEQAXAGARAWQAQAVABAaQABAXgNAQQgNARgYAJIAmAaQAPAKAAAOQAAAKgHAIQgHAHgLAAQgIAAgJgGIhGg4IAAAkQABANgHAIQgGAIgMAAIgBAAQgKAAgHgHgAggg/IACBBIASAAQANAAAIgCQAKgDAFgJQAHgIgBgLQAAgPgLgKQgIgFgGgBIgKgBg");
	this.shape.setTransform(68.9,27.9,0.629,0.629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7941D").s().p("AgKBvQgLgBgHgIQgGgJACgMIAQimQACgMAHgHQAHgHALABQAMABAGAIQAGAIgBANIgRCmQgBAMgIAHQgHAGgJAAIgCAAg");
	this.shape_1.setTransform(58,27.4,0.629,0.629);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7941D").s().p("ABGB1QgQgEgEgTIgFgXIhVgUIgNASQgMAQgQgEQgKgCgFgJQgGgJACgJQACgIAFgFIBuiRQALgOAQAEQARAEADARIAjCtIABAGQACAIgCAHQgCAJgJAGQgGAEgHAAIgGgBgAgMAMIAyANIgLhDg");
	this.shape_2.setTransform(45.8,26.1,0.629,0.629);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7941D").s().p("AhWBnQgKgEgDgKQgEgKAFgMIA8iXQAKgbAcALIBVAiQALAEAEAIQAEAJgEAKQgDAJgJAEQgJADgLgEIhCgbIgPAoIAzATQAKAEADAIQAEAIgDAJQgEAIgIADQgIADgKgEIgzgUIgXA6QgEAMgKAEQgFADgFAAQgFAAgFgCg");
	this.shape_3.setTransform(35.3,20.8,0.629,0.629);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7941D").s().p("AhYBvQgJgGgCgLQgBgKAGgLIAEgEIBNh2IgigWQgKgGgCgJQgDgKAGgIQAFgJAKgBQAJgCAKAGIAEADIBpBFQAKAHACAJQADAJgGAJQgFAHgKACQgJABgKgGIgigVIhPB6QgHAKgKADIgHABQgGAAgHgEg");
	this.shape_4.setTransform(20.9,12.5,0.629,0.629);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7941D").s().p("AANBtQgMgKAGgTIAHgXIhBg5IgVAIQgRAJgNgLQgHgGgBgLQgBgKAGgHQAFgFAHgEICnhLQAPgHANAMQANALgFAQIg2CvQgCAHgGAGQgGAHgLABIgBAAQgKAAgHgHgAgJgVIAnAiIAWg/g");
	this.shape_5.setTransform(7,7.3,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,74.2,34.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2D235").s().p("ABMDPIkBhDIgNgFQgOgIgFgPQgEgPAIgPQAOgaAiAIICPAmIhvhyQgJgJgCgLQgBgMAFgKQAMgVAiAGICUAeIhthjQgagXAOgbQAIgOAPgFQAPgEAOAHIALAIIDICyQALAKADAMQADANgGAMQgMAXgggFIifgXIBoB0QAYAagMAYQgHAMgNAFQgHACgHAAQgHAAgHgCg");
	this.shape.setTransform(62.4,127.1,0.629,0.629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2D235").s().p("ABeCYIihgfQg6gLgggvQggguALg4QALg5AuggQAvggA5ALICjAfQATAEAKANQAJANgDARQgDARgOAIQgOAJgTgEIijggQgZgFgVAOQgVAOgFAYQgFAaAOATQAPATAbAGIChAfQATAEAKANQAKAMgEASQgDARgNAIQgKAGgLAAIgMgBg");
	this.shape_1.setTransform(72.1,106,0.629,0.629);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2D235").s().p("AifAfQgNgKAAgSQAAgRAMgKQAMgLATgBIECgEQAUgBAMAKQAMALAAARQABARgMALQgLAKgUACIkCAEIgCABQgSAAgMgLg");
	this.shape_2.setTransform(73.1,88.4,0.629,0.629);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2D235").s().p("Ah5CSQgOgJgDgPQgDgNAIgQIBAh8Ig4AMQgTAEgOgIQgOgIgEgRQgEgRAKgNQAJgNATgEID3g2QAsgKAKAsIANA8QAHAfgBAaQgCAlgcAfQgbAggnAIQgjAIgdgOQgdgOgVgiIgdBCQgLAYgUAFIgJABQgLAAgJgGgAgEguIAFAdQAFATAFALQAIAOAPAGQAQAHAPgDQAXgGALgUQAGgLAAgKQABgHgDgLIgIgng");
	this.shape_3.setTransform(70.7,72.7,0.629,0.629);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2D235").s().p("AgwCYQgPgFgIgPQgLgWASgYIAXgdIg9h4IgkADQgeABgLgWQgHgPAEgPQAEgPAOgHQAJgFANgBIEbgOQAaAAAMAXQAMAXgQAVIiwDeQgJAKgJAEQgIAEgIAAQgGAAgHgCgAgehEIAkBHIBFhQg");
	this.shape_4.setTransform(62.5,56,0.629,0.629);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2D235").s().p("Ag1C3Qg5gDgmgrQgngrADg4QACg4ArgnIB8hwQAOgNAQAAQAQAAAMANQALANgCAQQgBAQgPANIh7BvQgTARgCAZQgCAZARASQASAUAYABQAYAAAVgTIB6htQAPgNAQAAQAQAAALANQAMANgBAPQgCAQgOANIh7BuQgpAmgzAAIgHAAg");
	this.shape_5.setTransform(53.3,33.8,0.629,0.629);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2D235").s().p("AApDIQgMgHgGgSIgKgdQgiABgUgFQgUgFgcgRQg+gmgShGQgShGAlg/QAlg9BHgRQBGgRA+AlQA+AmASBHQASBGgmA/QgOAWgMALQgMAMgZAPIAJAcQAHAUgJAQQgIANgQAEIgKACQgKAAgJgGgAgXh8QgnAKgVAiQgVAjAKAoQAKAmAjAVQAiAVAmgJQAngKAVgiQAVgigKgoQgJgogigUQgYgPgaAAQgLAAgNADg");
	this.shape_6.setTransform(33.2,21.4,0.629,0.629);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2D235").s().p("ABrC2QgYgHgGgdIgGgkIiDgjIgWAcQgSAXgZgGQgQgEgIgOQgIgOADgOQAEgLAHgJICyjdQAQgUAaAHQAMADAHAIQAIAJACAMIAxEYQACAMgCALQgEAPgPAIQgJAFgKAAIgKgBgAgQARIBOAVIgPhog");
	this.shape_7.setTransform(9.8,11.5,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,84.1,140.3), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2D235").s().p("AhJCeQgngUgEghQgCgPAJgMQAKgMAOgCQAJAAALADQALAEAMAJQAgAWAYgCQARgCAKgLQAKgMgCgPQgBgOgKgIQgKgIgWgDIghgHQgmgGgXgMQgPgHgKgRQgKgRgDgWQgEgsAegfQAdgfA0gGQArgEAhAQQAiAPADAbQABAPgJAMQgIALgPACQgJABgKgGIgTgMQgWgNgSABQgQACgKAKQgKALABANQAAAHAIAIQAFAFAHACQAHADASACQAqAGAaAKQA6AUAGA8QAFAxgfAiQgfAig2AGIgSABQgmAAghgRg");
	this.shape.setTransform(84.8,11,0.629,0.629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2D235").s().p("AAGA5QgGgEgCgGQgBgFABgLIABgKIgDgBQgcgFgGgXQgEgQAJgOQAIgPAQgEQAPgEAOAIQAOAIAEAQQADAJgCANIgEApQgBAMgDAFQgEAGgHACIgEAAQgFAAgFgCg");
	this.shape_1.setTransform(69.8,6.7,0.629,0.629);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2D235").s().p("Ag1DMQgPgHgJgRIhtjoQgKgTAEgPQAEgPAPgHQAKgFAKABQAJABAOAHIDNBmIhEiQQgHgRADgQQAFgPAQgIQAQgHAOAGQAPAHAIARIBsDkQAHAOACAIQACAMgHAMQgGAMgMAGQgJAEgHgBQgIABgUgKIjIhmIBDCOQAHARgDAQQgFAPgQAIQgIAEgIAAQgIAAgGgDg");
	this.shape_2.setTransform(57.9,18.5,0.629,0.629);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2D235").s().p("AgHCpIigi+QgPgQACgRQABgRARgOIBshaQANgMAPABQAPAAAKAMQAKANgCAOQgDAPgMALIhTBGIApAwIBBg4QAMgKANABQANAAAKALQAJALgCANQgCAOgMAKIhBA2IAsA2IBVhIQANgLAPAAQAPAAAKANQAKAMgCAPQgCAOgNAMIhuBcQgQANgPAAQgRAAgPgSg");
	this.shape_3.setTransform(40.5,29.6,0.629,0.629);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2D235").s().p("AAcCfIjMiXQgRgMgDgQQgCgQANgSIAkgxQAUgbAUgPQAegXAqAAQAoAAAgAXQAcAVAJAgQAJAggLAlIBEgVQAagIARAMQANAKACAQQADAPgKAMQgHALgRAEIiJAjIAuAiQAQALADAQQAEAQgLAOQgKAOgQABIgEAAQgOAAgOgKgAgyhcQgMACgIAIQgFADgIAKIgYAgIBSA8IARgXQAKgOAHgOQAFgOgFgQQgFgQgNgKQgMgKgQAAIgNACg");
	this.shape_4.setTransform(27.2,44.8,0.629,0.629);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2D235").s().p("ABQCnIjnhaQgqgRAQgqIAbhEQAMgdAIgOQAIgOAPgPQAjgiAzgKQAxgLAvATQBBAaAcBAQAPAhgBAiQgBAggPApIgbBFQgMAegZAAQgKAAgMgEgAgehTQgkATgTAwIgMAeIC2BHIAMgfQAKgbACgTQADgdgSgbQgRgagfgMQgTgIgRAAQgUAAgUALg");
	this.shape_5.setTransform(15.4,63.8,0.629,0.629);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2D235").s().p("ABqBrIj5gqQgTgEgKgMQgKgNADgRQACgRAOgIQAOgIATADIDgAlIAQhjQADgRAMgJQALgKAQADQAQACAIANQAHAMgCASIgWCCQgHAngiAAIgMgBg");
	this.shape_6.setTransform(12,79.6,0.629,0.629);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2D235").s().p("AifAgQgMgLgBgSQAAgQALgLQALgLAVgBIECgFQATAAAMAKQAMALABARQAAARgMALQgLALgUAAIkCAGIgCAAQgSAAgLgKg");
	this.shape_7.setTransform(10.9,94.3,0.629,0.629);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2D235").s().p("Ah+CkQgOgIgEgRQgEgRAJgNQAJgNATgFIBZgVIgdh5IhZAVQgTAEgOgHQgOgIgEgRQgEgRAJgNQAJgOATgEID7g8QATgFAOAIQAPAIAEARQAEARgJANQgKAOgTAEIheAXIAdB5IBegWQATgFAPAIQAOAIAEARQAEAQgJAOQgKANgTAEIj7A8QgHACgGAAQgLAAgJgFg");
	this.shape_8.setTransform(13.1,111.7,0.629,0.629);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2D235").s().p("AgtCnQhGgTgkg/QgegzAKhAQAFgiATgMQANgHAPAEQAPAEAIAOQAIANgEASIgCALQgIAhATAiQAUAiAnAKQAlALAjgUQAjgUAKgnQALgmgUgjQgIgPgOgLQgNgMgNgEIgSgGQgRgEgHgPQgIgOAEgPQAEgPANgIQAMgHAPADQAiAGAgAXQAhAXASAgQAkA+gTBGQgTBHg+AjQgpAYgtAAQgWAAgYgHg");
	this.shape_9.setTransform(21.1,132.5,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,92.8,143.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5481C1").s().p("AkfJTIgHgJQgIgJACgMQADgMALgGQCVhBBEhZQAug/ADhCQACgqgNgkQgHgVgQgaIgHgNQgMgTgYgTQgOgMghgWQg3glgWgYQglgpAAg2QABhIAxgtQAcgaBAgcIADgBQASgJAQgMQAPgMAIgMQgUAKghAAIgGgBIgVgBIgMAAIgIgBQgKAAgGACQgFABgIADIgYALQgIAGgJgBQgSgBgOgIQgSgKgBgSIAAgBQgSgOAFgbQAEgLAKgGQArgUAXgSQAggYASgjIAFgKQAQgiANgOQAUgaAdgFQABgFADgFQAIgNAQAAIADAAIAFABQAHACAHADQAEgGAGgEQAHgEAIABIAJABQAIABAGAHIAGAGIATATIABgBQAQgKAPAAIAGABQANADAFAMQAEAKAAAVIgBADIAGACQAOADAJAFQAJAFADAKQADAJgFAKQgFAKAEAMQAEANAJAGQAGAFADAIQACAHgDAIQgDALgLAIQgGAEgMAFIgHADIAJAQQAMAWADAJQAJAaADAVQAFAfgGAeQgGAcgOAWQgKAOgTATIgPAPQAWgBAagKQAZgKAEgIQACgKAIgGQAJgFAKACQAJABAGAIQAGAIgBALIgCALQgFAogBANIAkgBQAXAAANAGQALAEADALQAEAKgGAKQgFAKgOALIgcATIgXAOQADALALAPQAKAOAMAKQAFAFADAIQACAHgDAHQgCAHgGAFQgGAFgIAAIgCAAQgJAAgOgEIgkgLIgQgGQAbA4AIA+QAJBGgUAxQgrBniEBSQiDBSibAUIgEAAQgLAAgHgIgAgVmMQAcAjgJAnQgGAegdAbQgYAWggAOIgDABQg4AZgVATQgjAfAAA0QAAAkAbAdQARASAvAfQAlAZARAOQAdAXAPAaIACACIAGALQASAfAIAZQAQAtgCA0QgDA6gdA3QgpBOhaA+QBmgkBMg7QBPg+AbhCQAUgwgShNQgQhGgfgmQgGgHAAgLIABgGQABgKAHgHQAIgHAKABQASABAoANQgIgSABgRQABgGADgGQAHgKATgNQgpgEgBgfIAAgYQgSAHgWAFQgSADgOAAIgEAAQghgBgSgYQgEgHgBgHQAAgIAEgGQAMgUAbgbQAQgPAGgJQAKgOADgTQAEgWgDgWQgDgRgHgUIgLgYQgLgSgDgIQgFgOADgLQAFgWAYgLQgOgZACgbQgOgEgJgGQgEgDgDgFQgFgIgBgMQgFACgIAAIgIgBIgIgDQgJgFgMgMIgDADQgGAFgKgBQgJgBgHgCQgEAGgGADQgHADgHgBIgFgBIgDAAQgQAAgKAMQgJAKgPAfIgFAKQgTAlgdAbQgYAVgkATIAGAGIACAEIAMgFQAMgFAMgCQALgCANAAIAYABIANABIAFAAIAFAAQAaAAAJgHQAHgEADgOQABgHAEgFQAFgGAHgCIAHAAQAMAAAHAIg");
	this.shape.setTransform(30.1,60.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,60.3,120.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27AAE1").s().p("AELJbQibgUiEhSQiEhSgrhnQgUgxAJhGQAIg+Abg4IgQAGIgkALQgOAEgJAAIgCAAQgIAAgGgFQgGgFgCgHQgCgHACgHQACgIAGgFQALgKALgOQALgPACgLQgKgHgNgHIgcgTQgOgLgFgKQgGgKAEgKQADgLALgEQANgGAYAAIAjABQgBgSgFgkIgCgKQgBgLAGgIQAGgIAKgBQAKgCAIAGQAIAFACAKQAEAIAZAKQAaAKAWABIgPgPQgUgUgIgNQgPgWgGgcQgJgyAUg6QAEgKALgVIAJgQIgHgDQgMgFgGgEQgLgIgDgLQgDgIACgHQADgIAHgFQAIgGAEgNQAEgMgFgKQgFgJADgKQAEgKAIgFQAJgFAOgDIAGgCIAAgDQgCgUAFgLQAFgMANgDIAGgBIACAAQANAAAQAKIABABIATgTIAGgGQAGgHAJgBIAIgBQAIgBAHAEQAHAEADAGIAOgFIAFgBIADAAQAQAAAIANQADAFABAFQAdAFAVAaQAMAOARAiIAEAKQASAjAgAYQAXASArAUQALAGADALQAGAbgTAOIAAABQgBASgSAKQgOAIgSABQgJABgIgGIgYgLQgIgDgFgBQgGgCgKAAIgIABIgMAAIgVABIgGABQghAAgUgKQAIAMAPAMQAQAMASAJIADABQBAAcAcAaQAxAtABBIQAAA2gkApQgWAYg4AlQggAWgPAMQgXATgNATIgHANQgQAbgHAUQgNAlACApQADBDAvA+QBDBZCUBBQAMAGADAMQACAMgIAJIgHAJQgHAIgLAAgAh8ARQAKAAAHAHQAHAGABAKIAAAEIABACQABAKgHAIQgfAlgQBHQgRBNATAwQAcBDBOA9QBMA7BmAkQhag+gphOQgdg3gDg6QgCg0AQgtQAIgZASgfIAGgLIACgCQAQgaAcgXQARgOAlgZQAvgfARgSQAbgdAAgkQAAg0gjgfQgVgTg4gZIgDgBQgggOgYgWQgdgbgGgeQgJgnAcgjQAFgFAHgCQAHgDAHACQAHACAFAGQAEAFACAHQACAOAHAEQAJAHAaAAIAFAAIAGAAIAagCQASgBAQADQALACANAFIAMAFIACgEIAGgGQgkgTgYgVQgdgbgTglIgFgKQgPgggKgKQgLgLgQAAIgGABQgHABgHgDQgGgDgEgGQgGACgKABQgJABgHgFIgDgDQgMAMgJAFQgDACgFABIgIABQgIAAgFgCQgBAMgFAIQgDAFgEADQgIAGgPAEQACAbgNAZQAYAMAEAVQADALgFAOQgDAIgLASIgLAYQgHAUgDARQgDAWAEAWQAEATAJAOQAGAJAQAPQAbAbAMAUQAEAGAAAIQAAAIgFAGQgSAYghABIgEAAQgOAAgSgDQgWgFgSgHQABALgBANQgBAfgpAEQASAMAIALQADAFABAHQABAQgIATQAogNASgBg");
	this.shape.setTransform(30.2,60.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,60.3,120.6), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110000").s().p("AigZzQlQghkmigQkciajPj7QjOj6hgk1Qhkk/AhlQQAhlPCfkmQCbkcD6jOQD7jOE1hhQE/hkFPAhQFQAhEmCfQEcCbDPD6QDOD8BgE0QBkE/ghFPQghFQifEmQiaEcj7DOQj7DPk1BgQjwBLj6AAQhRAAhTgIg");
	this.shape.setTransform(104.4,104.4,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,208.7,208.7), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110000").s().p("AixcfQlzgklFiwQk6irjjkVQjkkVhrlUQhulhAklyQAllzCwlFQCqk6EVjjQEVjkFVhrQFhhuFyAkQFzAlFFCwQE6CqDkEVQDjEVBrFVQBuFhgkFyQglFziwFFQiqE5kVDkQkVDklVBqQkJBTkUAAQhaAAhcgJgAoE53QlCBlkGDXQkHDYihEpQinEzgiFfQgiFeBoFPQBlFCDXEGQDYEHEpChQE0CnFfAiQFeAjFOhpQFDhlEGjXQEGjYChkpQCnkzAilgQAjlehplOQhklCjYkGQjXkHkpihQk0inlfgiQhXgIhUAAQkGAAj8BOg");
	this.shape.setTransform(115.3,115.3,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,230.5,230.5), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55).call(this.frame_55).wait(4));

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(45.2,48.1,1,1,0,0,0,24.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(13).to({_off:false,scaleX:1.65,scaleY:1.65,x:45.3,alpha:0},0).to({scaleX:1,scaleY:1,x:45.2,alpha:1},29,cjs.Ease.backInOut).wait(16));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,20.1,1,1,0,0,0,42.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,regY:10.2,scaleX:1.41,scaleY:1.41,y:20.3,alpha:0},0).to({regY:10.1,scaleX:1,scaleY:1,y:20.1,alpha:1},29,cjs.Ease.backInOut).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,10,85,48);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(2));

	// Символ 27
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(95.9,39.8,1,1,0,0,0,120.2,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14).to({_off:false,regY:16.4,scaleX:1.33,scaleY:1.33,x:96,y:39.9,alpha:0},0).to({regY:16.3,scaleX:1,scaleY:1,x:95.9,y:39.8,alpha:1},23,cjs.Ease.backInOut).wait(8));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.2,1.2,1,1,0,0,0,61.4,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:1.39,scaleY:1.39,y:1.3,alpha:0},0).to({scaleX:1,scaleY:1,y:1.2,alpha:1},23,cjs.Ease.backInOut).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-22.2,240,81.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_189 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(189).call(this.frame_189).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjiGNQgVg9gDgkQgDgbAFhFQAFhOgBgyQAAhKgMhPQgIg7gKg3QgDglALhNQASh2AFgWQDCB8AhAJQAbAHAmgJQAtgKAqgfIA+gtQARgNABABQAAABAQgGIAQgFQAjHTgKCBQgJCDACBIQAAAIAHAWQgBAQgsgLIhUghQgugTg0AEQg7AFgoAJQgcAGgoAPQgdALgUAKQgQAIAAABQABABgJAQIgCAAQgNAAgRgxg");
	var mask_graphics_2 = new cjs.Graphics().p("AjiGNQgVg9gDgkQgDgbAFhFQAFhOgBgyQAAhKgMhPQgIg7gKg3QgDglALhNQASh2AFgWQDCB8AhAJQAbAHAmgJQAtgKAqgfIA+gtQARgNABABQAAABAQgGIAQgFQAjHTgKCBQgJCDACBIQAAAIAHAWQgBAQgsgLIhUghQgugTg0AEQg7AFgoAJQgcAGgoAPQgdALgUAKQgQAIAAABQABABgJAQIgCAAQgNAAgRgxg");
	var mask_graphics_189 = new cjs.Graphics().p("AjiGNQgVg9gDgkQgDgbAFhFQAFhOgBgyQAAhKgMhPQgIg7gKg3QgDglALhNQASh2AFgWQDCB8AhAJQAbAHAmgJQAtgKAqgfIA+gtQARgNABABQAAABAQgGIAQgFQAjHTgKCBQgJCDACBIQAAAIAHAWQgBAQgsgLIhUghQgugTg0AEQg7AFgoAJQgcAGgoAPQgdALgUAKQgQAIAAABQABABgJAQIgCAAQgNAAgRgxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.6,y:1.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:-0.6,y:1.4}).wait(187).to({graphics:mask_graphics_189,x:-0.6,y:1.4}).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-3.4,29.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({rotation:15,x:3.3,y:-61.2},187,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-1.5,24.9,47.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(64,350.6,1,1,0,0,0,64,294.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-200.5},216).to({y:-417.3,alpha:0},85).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,56,128,589.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(34.6,51.3,0.435,0.435,0,0,0,71.7,100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-24,31.1,84.1,133.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(73.6,77.8,0.478,0.478,0,0,0,287.9,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-64,18,171.2,168.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{st:80});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(188.5,90,1,1,0,0,0,188.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:94.4},40).to({y:90},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,36,212.7,123.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_81 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(81).call(this.frame_81).wait(25));

	// h_right
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(146.5,122.5,1,1,0,0,0,30.2,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(18).to({_off:false,x:191,alpha:0},0).wait(1).to({regX:30.1,x:190.4,alpha:0.011},0).wait(1).to({x:189.8,alpha:0.025},0).wait(1).to({x:189,alpha:0.042},0).wait(1).to({x:188.1,alpha:0.063},0).wait(1).to({x:187,alpha:0.088},0).wait(1).to({x:185.6,alpha:0.119},0).wait(1).to({x:183.9,alpha:0.156},0).wait(1).to({x:181.9,alpha:0.203},0).wait(1).to({x:179.3,alpha:0.261},0).wait(1).to({x:176,alpha:0.336},0).wait(1).to({x:171.8,alpha:0.429},0).wait(1).to({x:166.9,alpha:0.539},0).wait(1).to({x:162,alpha:0.649},0).wait(1).to({x:157.8,alpha:0.743},0).wait(1).to({x:154.6,alpha:0.817},0).wait(1).to({x:152,alpha:0.873},0).wait(1).to({x:150.1,alpha:0.917},0).wait(1).to({x:148.6,alpha:0.952},0).wait(1).to({x:147.4,alpha:0.979},0).wait(1).to({regX:30.2,x:146.5,alpha:1},0).wait(67));

	// h_left
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.2,122.5,1,1,0,0,0,30.2,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(18).to({_off:false,x:30.2,alpha:0},0).wait(1).to({x:30.8,alpha:0.011},0).wait(1).to({x:31.6,alpha:0.025},0).wait(1).to({x:32.5,alpha:0.042},0).wait(1).to({x:33.6,alpha:0.063},0).wait(1).to({x:35,alpha:0.088},0).wait(1).to({x:36.6,alpha:0.119},0).wait(1).to({x:38.6,alpha:0.156},0).wait(1).to({x:41.1,alpha:0.203},0).wait(1).to({x:44.3,alpha:0.261},0).wait(1).to({x:48.3,alpha:0.336},0).wait(1).to({x:53.3,alpha:0.429},0).wait(1).to({x:59.3,alpha:0.539},0).wait(1).to({x:65.2,alpha:0.649},0).wait(1).to({x:70.3,alpha:0.743},0).wait(1).to({x:74.3,alpha:0.817},0).wait(1).to({x:77.3,alpha:0.873},0).wait(1).to({x:79.7,alpha:0.917},0).wait(1).to({x:81.5,alpha:0.952},0).wait(1).to({x:83,alpha:0.979},0).wait(1).to({x:84.2,alpha:1},0).wait(67));

	// park
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.8,189.4,1,1,0,0,0,25.7,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(54).to({_off:false,regY:18.3,scaleX:0.67,scaleY:0.67,y:189.5,alpha:0},0).wait(1).to({regY:18.2,scaleX:0.68,scaleY:0.68,y:189.4,alpha:0.015},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.035},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.059},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.088},0).wait(1).to({scaleX:0.72,scaleY:0.72,alpha:0.125},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:157.9,alpha:0.171},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:157.8,alpha:0.23},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.306},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:157.9,alpha:0.404},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.527},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.66},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:158,alpha:0.775},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.861},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.923},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:189.3,alpha:0.968},0).wait(1).to({regX:25.8,regY:18.3,scaleX:1.09,scaleY:1.09,y:189.5,alpha:1},0).to({regX:25.7,regY:18.2,scaleX:1,scaleY:1,x:157.8,y:189.4},5).wait(30));

	// atFair
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.6,192.6,1,1,0,0,0,37.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(48).to({_off:false,scaleX:0.72,scaleY:0.72,alpha:0},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:85.5,alpha:0.015},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:85.6,alpha:0.035},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.059},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.088},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:85.5,alpha:0.125},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:85.6,alpha:0.171},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.23},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.306},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.404},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.527},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.66},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.775},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:85.7,alpha:0.861},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.923},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.968},0).wait(1).to({regY:17.5,scaleX:1.11,scaleY:1.11,x:85.6,y:192.7,alpha:1},0).to({regY:17.4,scaleX:1,scaleY:1,y:192.6},5).wait(36));

	// aquarium
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(166.3,95.5,1,1,0,0,0,42,70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(37).to({_off:false,regX:-11,regY:88.7,rotation:65.5,x:113.2,y:113.9,alpha:0},0).to({rotation:0,x:113.3,y:114,alpha:1},19,cjs.Ease.get(1)).wait(49));

	// children
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(68.7,94.3,1,1,0,0,0,46.4,71.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(31).to({_off:false,regX:92.9,regY:92.7,rotation:-60,x:115.3,y:115.3,alpha:0},0).to({regX:93,rotation:0,alpha:1},19).wait(55));

	// circuler
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(115.3,115.3,1,1,0,0,0,104.4,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(6).to({_off:false,scaleX:0.51,scaleY:0.51,alpha:0},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.01},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.025},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.049},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.081},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.125},0).wait(1).to({scaleX:0.62,scaleY:0.62,alpha:0.184},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.261},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.36},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.481},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.611},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.731},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.826},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.896},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.945},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.979},0).wait(1).to({regX:104.3,regY:104.3,scaleX:1.12,scaleY:1.12,alpha:1},0).to({regX:104.4,regY:104.4,scaleX:1,scaleY:1},6).wait(77));

	// frame
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(115.3,115.3,1,1,0,0,0,115.3,115.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1).to({_off:false,scaleX:0.41,scaleY:0.41,alpha:0},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.008},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.02},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.037},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.059},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.089},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.128},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.177},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.238},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.315},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.409},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.515},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.625},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.725},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.808},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:115.4,y:115.4,alpha:0.873},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.922},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:115.3,y:115.3,alpha:0.957},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:115.4,y:115.4,alpha:0.983},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:115.3,y:115.3,alpha:1},0).to({scaleX:1,scaleY:1},7).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.5,230.5);


// stage content:
(lib.DallasZoo_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2800);
	}
	this.frame_112 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},7000);
	}
	this.frame_113 = function() {
		this.shark.gotoAndStop("st");
				this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(105).call(this.frame_112).wait(1).call(this.frame_113).wait(21));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	// Слой 19
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(151,126,1,1,0,0,0,162,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({alpha:1},17).wait(1));

	// logo
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.8,299.9,0.614,0.614,0,0,0,115.4,115.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(11).to({regX:115.5,regY:115.6,scaleX:0.47,scaleY:0.47,x:79.9,y:485.7},19,cjs.Ease.get(-0.27)).wait(103));

	// Слой 18
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.6,343.7,1.027,1.027,0,0,0,97.5,12.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(49));

	// Слой 1
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.2,236.2,1.571,1.571,0,0,0,45,34.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).wait(82));

	// Слой 6
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(146.1,657.4,1,1,0,0,0,181,49.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({y:222},25,cjs.Ease.get(0.99)).wait(101));

	// boubles
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.2,156.5,1.498,1.498);
	this.instance_5.alpha = 0.379;

	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(108.6,159.7,1.498,1.498);
	this.instance_6.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},82).to({state:[]},31).wait(21));

	// boubles
	this.instance_7 = new lib.Символ20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160.6,164,1.498,1.498);
	this.instance_7.alpha = 0.379;

	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(123.3,130.8,1.498,1.498);
	this.instance_8.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},58).to({state:[]},55).wait(21));

	// boubles
	this.instance_9 = new lib.Символ20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(181.5,78.3,1.291,1.291);
	this.instance_9.alpha = 0.379;

	this.instance_10 = new lib.Символ20();
	this.instance_10.parent = this;
	this.instance_10.setTransform(102.1,74.5,1.291,1.291);
	this.instance_10.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},42).to({state:[]},71).wait(21));

	// Слой 10
	this.instance_11 = new lib.Символ18();
	this.instance_11.parent = this;
	this.instance_11.setTransform(97.4,143,0.575,0.575,0,0,0,18.9,19.3);
	this.instance_11.alpha = 0.5;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({_off:true},71).wait(21));

	// shark
	this.shark = new lib.Символ12();
	this.shark.parent = this;
	this.shark.setTransform(345.3,112.6,0.57,0.57,-5.7,0,0,189.1,90.3);
	this.shark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shark).wait(42).to({_off:false},0).to({regX:189,rotation:0,x:267.4,y:87.7},43,cjs.Ease.get(0.62)).wait(49));

	// Слой 8
	this.instance_12 = new lib.Символ14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(535.4,104,1.285,1.285,0,0,0,228.1,98.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).to({regX:228,regY:99,scaleX:1,scaleY:1,x:367,y:79.1},26,cjs.Ease.get(0.35)).wait(86));

	// Слой 9
	this.instance_13 = new lib.Символ16();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-4.8,96.5,1,1,0,0,0,60.5,96.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).to({x:53.7,y:96.6},24,cjs.Ease.quadInOut).wait(69));

	// Слой 4
	this.instance_14 = new lib.Символ11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(151,126,1,1,0,0,0,162,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({scaleX:0.72,scaleY:0.72,x:-11.4,y:89.4},37,cjs.Ease.get(0.35)).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,299,380,602);
// library properties:
lib.properties = {
	id: '961054D415F6B84B9374B5365C67498B',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"boubles.png", id:"boubles"},
		{src:"boy.png", id:"boy"},
		{src:"sea.jpg", id:"sea"},
		{src:"shark.png", id:"shark"},
		{src:"Voda_kapli.png", id:"Voda_kapli"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['961054D415F6B84B9374B5365C67498B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;