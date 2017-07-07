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



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,225);


(lib.disk = function() {
	this.initialize(img.disk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);// helper functions:

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


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58585B").s().p("AgMAZQgMAAgIgIQgJgHAAgKQAAgJAJgIQAIgHAMAAIAZAAQAMABAJAHQAIAHAAAJQAAAKgIAHQgJAIgMAAgAgQgMQgGAFAAAHQAAAIAGAFQAGAFAHAAIAHAAQAHAAAGgFQAGgFAAgIQAAgHgGgFQgFgFgIAAIgHAAQgHAAgGAFg");
	this.shape.setTransform(4.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,8.4,5), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58585B").s().p("AASAYQgBgGgEgFQgGgGgJAAIgPAAIAAARIgRAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgjQAAgKAKAAIAsAAQAIAAAGAFQAFAFAAAGQAAAFgEADQgEAEgGABIAAABQAOAFAAAMgAgRgKIAAAKIAcAAQAHAAAAgIQAAgGgHAAIgYAAQgFAAABAEg");
	this.shape.setTransform(3.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,7.4,4.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBHQgLgFgGgKQgGgKAAgNIAdAAQAAAJAFAFQAFAEAKABQAKgBAHgHQAGgHAAgNQAAgOgGgIQgHgGgKAAQgGAAgFADQgFACgDAFIgaAAIANhSIBOAAIAAAbIg8AAIgFAfQAGgFAHgDQAGgCAGABQAOAAALAGQAKAHAFALQAHALAAAPQAAAQgIAMQgGAMgMAHQgMAHgPAAQgPgBgLgFg");
	this.shape.setTransform(194.7,70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBJQgLgHgGgLQgFgJgDgNQgCgOAAgTQAAgWADgOQADgPAHgIQAHgKAKgEQAJgFALABQAOAAAKAFQALAHAGAKQAGAJACAOQACAOAAATQAAAWgDAOQgDAPgHAIQgHAJgJAFQgKAFgMgBQgMAAgLgFgAgKgyQgFAEgCAHIgCAJIgBAPIgBAPQAAAQACAKQABALACAFQADAFAEADQAEADAFAAQAHAAAEgDQAFgFACgGIACgJIACgOIAAgQIgBgbQgCgLgCgEQgDgGgEgDQgEgDgGAAQgFAAgFAEg");
	this.shape_1.setTransform(183,70.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBIQgMgGgHgKQgHgLAAgOQAAgNAGgKQAGgIANgGQgKgGgFgHQgFgHAAgLQAAgMAHgJQAGgJALgGQAKgEANAAQAOAAALAEQALAGAGAJQAGAJAAALQAAAIgDAHQgCAFgFAFIgDADIgGAEQAMAGAGAIQAGAKAAANQAAAOgHALQgGAKgMAGQgMAGgQAAQgPAAgLgGgAgQALQgGAHAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHABgKQgBgMgGgHQgGgHgLAAQgKAAgGAHgAgPgxQgGAGAAAJQAAAIAGAGQAGAFAJAAQAKAAAGgGQAGgFABgIQgBgJgGgGQgGgFgKAAQgJAAgGAFg");
	this.shape_2.setTransform(165.4,70.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHBLIAAghIg6AAIAAgZIA1hbIAjAAIAABbIAPAAIAAAZIgPAAIAAAhgAgeARIAlAAIAAg/g");
	this.shape_3.setTransform(153.7,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBLQACgZAHgVQAFgUALgSQAKgTAPgTIhJAAIAAgbIBpAAIAAAYQgSAVgLATQgMAUgGAVQgGAUAAAYg");
	this.shape_4.setTransform(136.3,70.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBHQgLgFgGgKQgGgKAAgNIAdAAQAAAJAFAFQAFAEAKABQAKgBAHgHQAGgHAAgNQAAgOgGgIQgHgGgKAAQgGAAgFADQgFACgCAFIgbAAIANhSIBOAAIAAAbIg8AAIgEAfQAFgFAHgDQAGgCAGABQAOAAALAGQAKAHAFALQAHALgBAPQABAQgIAMQgGAMgMAHQgMAHgPAAQgPgBgLgFg");
	this.shape_5.setTransform(124.5,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBBQgOgNAAgWIAcAAQABAMAGAFQAFAGAKAAQAKAAAGgGQAGgGAAgKQAAgJgFgGQgEgFgHgDIgFgBIgDAAIgJAAIAAgTIADAAQAMAAAGgGQAHgFAAgLQAAgJgFgGQgFgFgIAAQgGAAgFADQgFADgCAGIgBAFIgBAJIgbAAIAAgKIABgIIACgGQAFgMAMgHQAMgGAQAAQAVgBAMAMQANAKAAATQAAAKgEAHQgFAIgKAHQAMAFAGAIQAGAKAAANQAAAOgGALQgHAKgLAHQgMAFgPAAQgXAAgNgNg");
	this.shape_6.setTransform(112.8,70.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBJQgLgHgGgLQgFgJgDgNQgCgOAAgTQAAgWADgOQADgPAHgIQAHgKAKgEQAJgFALABQAOAAAKAFQALAHAGAKQAGAJACAOQACAOAAATQAAAWgDAOQgDAPgHAIQgHAJgJAFQgKAFgMgBQgMAAgLgFgAgKgyQgFAEgCAHIgCAJIgBAPIgBAPQAAAQACAKQABALACAFQADAFAEADQAEADAFAAQAHAAAEgDQAFgFACgGIACgJIACgOIAAgQIgBgbQgCgLgCgEQgDgGgEgDQgEgDgGAAQgFAAgFAEg");
	this.shape_7.setTransform(95.2,70.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBHQgLgFgGgKQgGgKAAgNIAdAAQAAAJAFAFQAFAEAKABQAKgBAHgHQAGgHAAgNQAAgOgGgIQgHgGgKAAQgGAAgFADQgFACgDAFIgaAAIANhSIBOAAIAAAbIg8AAIgFAfQAGgFAHgDQAGgCAGABQAOAAALAGQAKAHAFALQAHALAAAPQAAAQgIAMQgGAMgMAHQgMAHgPAAQgPgBgLgFg");
	this.shape_8.setTransform(83.5,70.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXBJQgLgHgGgLQgFgJgDgNQgCgOAAgTQAAgWADgOQADgPAHgIQAHgKAKgEQAJgFALABQAOAAAKAFQALAHAGAKQAGAJACAOQACAOAAATQAAAWgDAOQgDAPgHAIQgHAJgJAFQgKAFgMgBQgMAAgLgFgAgKgyQgFAEgCAHIgCAJIgBAPIgBAPQAAAQACAKQABALACAFQADAFAEADQAEADAFAAQAHAAAEgDQAFgFACgGIACgJIACgOIAAgQIgBgbQgCgLgCgEQgDgGgEgDQgEgDgGAAQgFAAgFAEg");
	this.shape_9.setTransform(71.8,70.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA3IAAgfIAfAAIAAAfgAgPgXIAAgeIAfAAIAAAeg");
	this.shape_10.setTransform(57.2,72.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_11.setTransform(50.3,76);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZA5IAAhZIgeAAIAAA9QAAAIgEAGQgDAGgHAEQgGAEgIAAIgUAAIAAgYIAKAAQAEAAACgDQADgDAAgEIAAhPIBYAAIAABxg");
	this.shape_12.setTransform(40.7,71.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAsQgOgPgBgbQABgTAGgNQAGgOAMgIQALgHAQAAQASAAAMAJQANAJAGAQIADANIABAOIAAADIAAADIhLAAIABAMIADAIQAEAEAEADQAFACAFAAQAIAAAGgDQAGgEACgHIAfAAQgEAMgHAIQgIAIgLAEQgKAFgNAAQgYAAgNgQgAAWgLQgBgMgGgHQgFgGgKAAQgJAAgGAGQgFAGgCANIAsAAIAAAAg");
	this.shape_13.setTransform(28.9,72);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA5IAAhZIghAAIAAgYIBfAAIAAAYIghAAIAABZg");
	this.shape_14.setTransform(17.6,71.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8BNIAAiYIBEAAQAMgBAIADQAJADAGAFQAHAGADAIQAEAIAAAHQAAALgFAGQgFAIgLAIQANAGAGAJQAGAJAAAMQAAAJgEAJQgEAJgHAGQgHAFgJADQgJACgNABgAgdAzIAlAAQALgBAGgFQAGgFAAgJQAAgLgGgFQgGgEgLgBIglAAgAgdgOIAiAAQALAAAFgFQAGgFAAgIQAAgJgGgEQgFgFgLABIgiAAg");
	this.shape_15.setTransform(198.1,42.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHBLIAAgiIg6AAIAAgYIA1hbIAjAAIAABbIAPAAIAAAYIgPAAIAAAigAgeARIAlAAIAAg/g");
	this.shape_16.setTransform(184.6,42.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHBLIAAgiIg6AAIAAgYIA1hbIAjAAIAABbIAPAAIAAAYIgPAAIAAAigAgeARIAlAAIAAg/g");
	this.shape_17.setTransform(172.9,42.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAWQAKgCAEgGQAEgGgBgKIgRAAIAAgeIAfAAIAAAcQAAALgDAHQgDAIgHAFQgDACgEACQgFACgGAAg");
	this.shape_18.setTransform(158.4,50.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglAsQgOgPgBgbQABgTAGgNQAGgOAMgIQALgHAQAAQASAAAMAJQANAJAGAQIADANIABAOIAAADIAAADIhLAAIABAMIADAIQAEAEAEADQAFACAFAAQAIAAAGgDQAGgEACgHIAfAAQgEAMgHAIQgIAIgLAEQgKAFgNAAQgYAAgNgQgAAWgLQgBgMgGgHQgFgGgKAAQgJAAgGAGQgFAGgCANIAsAAIAAAAg");
	this.shape_19.setTransform(149.4,44.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAtQgOgQAAgcQAAgcAOgQQAOgQAYAAQAWAAANAMQANALABAVIgcAAQgCgLgFgFQgFgFgJABQgFAAgFACQgEADgDAEQgDAFgBAHQgCAIAAAHQAAARAHAJQAGAJAKAAQAJAAAFgEQAFgFACgLIAcAAQgCAUgNAMQgNAMgVAAQgYAAgOgPg");
	this.shape_20.setTransform(137.5,44.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoAsQgPgQAAgcQAAgSAHgNQAGgOANgHQAMgHARAAQAbAAAOAQQAPAQAAAcQAAASgHANQgHAOgMAHQgNAHgRAAQgZAAgPgQgAgSgZQgHAJgBAQQABARAHAJQAHAKALAAQAMAAAHgKQAHgJABgRQAAgQgIgJQgHgKgMAAQgLAAgHAKg");
	this.shape_21.setTransform(125.1,44.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPA5IAAhxIAdAAIAABZIAkAAIAAhZIAcAAIAABZIAlAAIAAhZIAdAAIAABxg");
	this.shape_22.setTransform(109.4,44.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglAsQgOgPgBgbQABgTAGgNQAGgOAMgIQALgHAQAAQASAAAMAJQANAJAGAQIADANIABAOIAAADIAAADIhLAAIABAMIADAIQAEAEAEADQAFACAFAAQAIAAAGgDQAGgEACgHIAfAAQgEAMgHAIQgIAIgLAEQgKAFgNAAQgYAAgNgQgAAWgLQgBgMgGgHQgFgGgKAAQgJAAgGAGQgFAGgCANIAsAAIAAAAg");
	this.shape_23.setTransform(88.1,44.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQA5IgSgyIgOAAIAAAyIgdAAIAAhxIAdAAIAAAoIAOAAIANgoIAfAAIgTAyIAXA/g");
	this.shape_24.setTransform(76.2,44.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgwA5IAAhxIAeAAIAAAqIAcAAQASABAKAJQALAJAAAPQAAALgFAIQgFAIgJAFQgIAFgMAAgAgSAhIAbAAQAFAAADgDQACgEAAgFQAAgFgCgEQgDgDgFAAIgbAAg");
	this.shape_25.setTransform(64.8,44.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkAtQgOgQAAgcQAAgcAOgQQAOgQAYAAQAWAAANAMQANALABAVIgcAAQgCgLgFgFQgFgFgJABQgFAAgFACQgEADgDAEQgDAFgBAHQgCAIAAAHQAAARAHAJQAGAJAKAAQAJAAAFgEQAFgFACgLIAcAAQgCAUgNAMQgNAMgVAAQgYAAgOgPg");
	this.shape_26.setTransform(52.6,44.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgwA5IAAhxIBAAAQAJAAAHAEQAHAEAEAGQAEAHAAAIQAAAJgFAHQgEAGgKAEQALACAFAHQAFAHAAAKQAAAJgEAHQgEAIgIAEQgHAEgKAAgAgTAhIAbAAQAFAAADgEQAEgDAAgGQAAgFgEgDQgDgEgFAAIgbAAgAgTgLIAbAAQAEAAADgDQACgDAAgFQAAgEgCgDQgDgDgEAAIgbAAg");
	this.shape_27.setTransform(41,44.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOBOIAAhwIAcAAIAABwgAAIgzIAAgaIAXAAIAAAagAgegzIAAgaIAXAAIAAAag");
	this.shape_28.setTransform(31.8,42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVA5IAAhEIgoA1IAAAPIgeAAIAAhxIAeAAIAABEIAog1IAAgPIAdAAIAABxg");
	this.shape_29.setTransform(22.6,44.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAXBNIgbhGIgTAAIAABGIggAAIAAiYIAgAAIAAA4IASAAIAUg4IAgAAIgYBGIAhBSg");
	this.shape_30.setTransform(9,42.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAWQAKgCAEgGQAEgHgBgJIgRAAIAAgfIAfAAIAAAdQAAAMgDAGQgDAHgHAGQgDADgEABQgFACgGAAg");
	this.shape_31.setTransform(163.4,22.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag1BQIAAidIAdAAIAAARQAFgKAJgFQAIgEAJAAQAOAAALAHQAKAIAGAOQAGANAAARQAAASgGANQgGANgLAIQgLAHgOABQgJAAgIgFQgIgEgFgJIAAA6gAgRgtQgHAKAAAQQAAAQAHAIQAHAKAKAAQALAAAHgKQAGgIABgQQAAgQgHgKQgHgKgLAAQgKAAgHAKg");
	this.shape_32.setTransform(154.2,18.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVA5IAAhEIgoA1IAAAPIgeAAIAAhxIAeAAIAABEIAog1IAAgPIAdAAIAABxg");
	this.shape_33.setTransform(141.2,16.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAgA5IAAhWIgVBWIgWAAIgVhWIAABWIgcAAIAAhxIAoAAIAUBUIAVhUIAoAAIAABxg");
	this.shape_34.setTransform(127.4,16.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgoAsQgPgQAAgcQAAgSAHgNQAGgOANgHQAMgHARAAQAbAAAOAQQAPAQAAAcQAAASgHANQgHAOgMAHQgNAHgRAAQgZAAgPgQgAgSgZQgHAJgBAQQABARAHAJQAHAKALAAQAMAAAHgKQAHgJABgRQAAgQgIgJQgHgKgMAAQgLAAgHAKg");
	this.shape_35.setTransform(113.6,16.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNA5IAAhZIgiAAIAAgYIBfAAIAAAYIghAAIAABZg");
	this.shape_36.setTransform(102,16.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVA5IAAhEIgoA1IAAAPIgeAAIAAhxIAeAAIAABEIAog1IAAgPIAdAAIAABxg");
	this.shape_37.setTransform(90.5,16.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA/BNIgchGIgSAAIAABGIgfAAIAAhGIgVAAIgbBGIgiAAIAihSIgZhGIAhAAIATA4IAVAAIAAg4IAfAAIAAA4IATAAIATg4IAgAAIgYBGIAiBSg");
	this.shape_38.setTransform(72.9,14.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_39.setTransform(58.7,20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAgA5IAAhWIgVBWIgWAAIgVhWIAABWIgcAAIAAhxIAoAAIAUBUIAVhUIAoAAIAABxg");
	this.shape_40.setTransform(48.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,207.3,86.4), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape.setTransform(85.8,100.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_1.setTransform(80.9,98.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgRAAIAAgIIAqAAIAAAIIgRAAIAAAxg");
	this.shape_2.setTransform(75.3,98.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgFQgFgEAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgBQAGgBACgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgBQAAgFgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAEAAAIIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHACQgHABgDACQgEADAAADQAAAFADADQADACAGAAQAEAAACgBQAEgCACgCIADgEIABgDIAAgLIgDABg");
	this.shape_3.setTransform(69.8,98.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_4.setTransform(63.2,98.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAdIAAgxIgZAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_5.setTransform(57.2,98.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAHgIALAAQAMAAAHAIQAHAIAAAPQAAAOgHAIQgGAIgNAAQgLAAgHgIgAgLgPQgEAFgBAKQABALAEAFQAEAHAHgBQAIABAEgHQAFgFAAgKQAAgLgFgFQgEgHgIAAQgHABgEAGg");
	this.shape_6.setTransform(50.7,98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IAJAAIAAAXIASAAQAIAAAFAFQAFAEAAAIQAAAIgFAEQgFAFgIAAgAgNAVIARAAQAFAAACgDQACgCABgFQgBgEgCgCQgCgDgFAAIgRAAg");
	this.shape_7.setTransform(41.2,98.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_8.setTransform(34.7,98.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgOQAAgJADgHQAEgHAFgEQAHgDAHgBQAIAAAGAFQAGAEADAHIACAIIAAAJIgqAAIABAHQABADACACQACAEAEACQAEACADgBQAGAAADgCQAEgEACgFIAJAAQgCAKgGAEQgHAGgKAAQgLAAgHgIgAAQgDQAAgJgFgEQgEgFgGgBQgHABgEAFQgEAEgBAJIAfAAIAAAAg");
	this.shape_9.setTransform(28.2,98.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUAiIAAgKIgnAAIAAAKIgJAAIAAgSQAEgCAEgEQACgEADgGIADgLIAAgPIAAgHIAkAAIAAAxIAFAAIAAASgAgDgVIAAAMQgBAGgCADIgEAJIgEAHIAdAAIAAgpIgSAAg");
	this.shape_10.setTransform(21.5,98.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgFQgFgEAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgBQAGgBACgBQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBIAAgBQAAgFgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAEAAAIIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHACQgHABgDACQgEADAAADQAAAFADADQADACAGAAQAEAAACgBQAEgCACgCIADgEIABgDIAAgLIgDABg");
	this.shape_11.setTransform(11.6,98.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_12.setTransform(5.1,98.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgIAAIgUgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_13.setTransform(241.2,83.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_14.setTransform(233.7,83.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_15.setTransform(227.4,83.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgOQAAgJAEgHQACgHAHgEQAFgDAHgBQAJAAAGAFQAGAEADAHIABAIIABAJIgpAAIABAHQAAADACACQADAEADACQADABAEAAQAFAAAFgCQADgDACgGIAJAAQgCAKgHAEQgGAGgKAAQgLAAgHgIgAAQgEQAAgHgEgFQgFgFgHgBQgFABgFAFQgFAEAAAIIAfAAIAAAAg");
	this.shape_16.setTransform(220.9,83.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_17.setTransform(214.3,83.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAcAAQAFAAADACQAEACADADQACAEAAAEQAAAEgBACQgCADgEADQAFABACAEQACADAAAFQABAIgFAEQgFAFgHAAgAgOAVIATAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgDgEAAIgTAAgAgOgFIATAAQAEAAACgCQACgCAAgDQAAgEgCgCQgCgCgEAAIgTAAg");
	this.shape_18.setTransform(208.4,83.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAHgHALgBQAMABAHAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgLAAgHgIgAgLgPQgEAFgBAKQABALAEAFQAFAHAGgBQAIABAEgHQAEgFABgKQAAgLgFgFQgEgHgIAAQgGABgFAGg");
	this.shape_19.setTransform(201.7,83.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_20.setTransform(195.2,83.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAEAAAIIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEADAAADQAAAFADADQADACAGAAQAEAAACgBQAEgCACgCIADgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgLIgDABg");
	this.shape_21.setTransform(188.8,83.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgRAAIAAAxg");
	this.shape_22.setTransform(183.1,83.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAcQgGgFgDgGQgDgHAAgJQAAgJADgHQADgHAGgEQAGgDAGgBQAHABAFABQAFADADAEIACAGIABAGIgJAAQgBgGgDgDQgEgDgGgBQgGABgEAGQgFAGAAAKQAAAKAFAFQAEAHAGgBQAGAAAEgDQADgEABgGIAJAAQgBAKgGAGQgGAGgKAAQgHAAgFgDg");
	this.shape_23.setTransform(177.5,83.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAdIAAg5IAdAAQAFAAADACQAEACADADQACAEAAAEQAAAEgCACQgBADgDADQAEABACAEQACADABAFQAAAIgFAEQgFAFgHAAgAgPAVIAUAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgDgEAAIgUAAgAgPgFIAUAAQADAAACgCQACgCAAgDQAAgEgCgCQgCgCgDAAIgUAAg");
	this.shape_24.setTransform(171.3,83.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAKQAEAAABgDIABgHIAAgBIgGAAIAAgMIALAAIAAANQAAAHgDADQgDAEgFAAg");
	this.shape_25.setTransform(162.7,86.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgIAAIgUgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_26.setTransform(156.7,83.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQANABAGAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgMAAgGgIgAgLgPQgFAFAAAKQAAALAFAFQAFAHAGgBQAIABAEgHQAEgFABgKQgBgLgDgFQgFgHgIAAQgGABgFAGg");
	this.shape_27.setTransform(149.1,83.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLAcQgGgFgDgGQgDgHAAgJQAAgJADgHQADgHAGgEQAGgDAGgBQAHABAFABQAFADADAEIACAGIABAGIgJAAQgBgGgDgDQgEgDgGgBQgGABgEAGQgFAGAAAKQAAAKAFAFQAEAHAGgBQAGAAAEgDQADgEABgGIAJAAQgBAKgGAGQgGAGgKAAQgHAAgFgDg");
	this.shape_28.setTransform(142.8,83.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_29.setTransform(136.6,84.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAoIgDAAIAAgJIADABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIADgJIgTg5IAJAAIAPAsIAPgsIAKAAIgZBFQgEAMgLAAIgDgBg");
	this.shape_30.setTransform(130.1,84.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_31.setTransform(124.5,83.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgJAAIgTgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_32.setTransform(113.4,83.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_33.setTransform(105.9,83.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_34.setTransform(99.6,83.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANAoIAAgnIgZAiIAAAFIgJAAIAAg4IAJAAIAAAlIAZghIAAgEIAJAAIAAA4gAgIgaQgDgCgDgDIgBgDIgBgFIAHAAQAAADADACQACACAEAAQAEAAADgCQADgCAAgDIAGAAQAAAHgEAEQgFAEgHAAQgEAAgEgCg");
	this.shape_35.setTransform(93.1,82.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAoIAAg4IAIAAIAAA4gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_36.setTransform(88.6,82.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAOAlIAAgRIglAAIAAg4IAJAAIAAAwIAXAAIAAgwIAKAAIAAAwIAFAAIAAAZg");
	this.shape_37.setTransform(84.1,84.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_38.setTransform(77.6,84.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgOQAAgJADgHQAEgHAFgEQAHgDAHgBQAIAAAGAFQAGAEADAHIABAIIABAJIgpAAIABAHQAAADACACQADAEADACQAEABADAAQAFAAAFgCQADgDACgGIAJAAQgCAKgHAEQgGAGgKAAQgLAAgHgIgAAQgEQAAgHgEgFQgEgFgHgBQgHABgEAFQgEAEgBAIIAfAAIAAAAg");
	this.shape_39.setTransform(70.8,83.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgJAAIgTgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_40.setTransform(63.2,83.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAHgHALgBQAMABAHAHQAHAJAAAOQAAAOgHAIQgGAIgNAAQgLAAgHgIgAgLgPQgEAFAAAKQAAALAEAFQAEAHAHgBQAIABAEgHQAFgFAAgKQAAgLgFgFQgEgHgIAAQgHABgEAGg");
	this.shape_41.setTransform(55.7,83.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_42.setTransform(50,83.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAaQgFgEAAgJIAAgCIAJAAIAAACQAAAEADADQADADAEgBQAFABADgDQADgDAAgEQAAgFgDgDQgDgCgFAAIgDAAIAAgHIADAAIAEgBIAEgCIABgDIABgDQAAgDgDgDQgDgCgEgBQgDAAgDADQgDADAAAEIAAADIgJAAIAAgDIABgGQABgDACgCQADgDAEgCIAHgCQAGABAEABQAEADADADQACAEAAAFQAAADgCAEIgGAFQAFACACADQACAEAAAEQAAAGgCAEQgDAEgEADQgFACgGAAQgJAAgFgFg");
	this.shape_43.setTransform(40.5,83.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQAMABAIAHQAGAJAAAOQAAAOgHAIQgGAIgNAAQgMAAgGgIgAgLgPQgFAFABAKQgBALAFAFQAFAHAGgBQAIABAEgHQAFgFgBgKQAAgLgEgFQgEgHgIAAQgGABgFAGg");
	this.shape_44.setTransform(31.2,83.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_45.setTransform(24.7,83.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAUAiIAAgKIgnAAIAAAKIgJAAIAAgSQAEgCADgEQAEgEACgGIACgLIABgPIAAgHIAkAAIAAAxIAFAAIAAASgAgDgVIgBAMQAAAGgCADIgEAJIgEAHIAdAAIAAgpIgSAAg");
	this.shape_46.setTransform(18,83.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAoIAAg4IAIAAIAAA4gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_47.setTransform(13.3,82.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAhAAIAAAIIgYAAIAAAxg");
	this.shape_48.setTransform(9.9,83.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAaQgFgEAAgJIAAgCIAJAAIAAACQAAAEADADQADADAEgBQAFABADgDQADgDAAgEQAAgFgDgDQgDgCgFAAIgDAAIAAgHIADAAIAEgBIAEgCIABgDIABgDQAAgDgDgDQgDgCgEgBQgDAAgDADQgDADAAAEIAAADIgJAAIAAgDIABgGQABgDACgCQADgDAEgCIAHgCQAGABAEABQAEADADADQACAEAAAFQAAADgCAEIgGAFQAFACACADQACAEAAAEQAAAGgCAEQgDAEgEADQgFACgGAAQgJAAgFgFg");
	this.shape_49.setTransform(4.5,83.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_50.setTransform(237.7,68.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_51.setTransform(231.4,68.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAnIAAg4IAIAAIAAA4gAADgbIAAgLIALAAIAAALgAgNgbIAAgLIAKAAIAAALg");
	this.shape_52.setTransform(226.7,67.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEACAAAEQAAAFADADQADACAGAAQAEAAACgCQAEgBACgCIADgEQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgLIgDABg");
	this.shape_53.setTransform(222.1,68.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_54.setTransform(215.6,69.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_55.setTransform(209.4,68.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAoIAAgJIAHAAIAEgBIACgCIADgFIgeg+IANAAIAVAxIAUgxIANAAIgfBFQgCAFgCACQgEADgEAAg");
	this.shape_56.setTransform(203,67.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_57.setTransform(194.6,67.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgRAAIAAgIIAqAAIAAAIIgRAAIAAAxg");
	this.shape_58.setTransform(190.7,68.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGAXQgHgHgBgOIgNAAIAAAbIgJAAIAAg5IAJAAIAAAXIAOAAQABgMAHgGQAFgGALgBQAMABAIAHQAGAJAAANQAAAPgGAIQgIAIgMAAQgLAAgGgIgAAAgPQgFAFABAKQgBAKAFAHQAEAFAHAAQAIAAAEgFQAFgGgBgKQAAgLgDgFQgFgHgIAAQgHABgEAGg");
	this.shape_59.setTransform(184,68.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_60.setTransform(176,68.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEACAAAEQAAAFADADQADACAGAAQAEAAACgCQAEgBACgCIADgEIABgDIAAgLIgDABg");
	this.shape_61.setTransform(170,68.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYAdIAAg5IAdAAQAFAAAEACQAEACACADQACAEAAAEQAAAEgCACQgBADgDADQAEABADAEQACADAAAFQgBAIgEAEQgEAFgIAAgAgPAVIAUAAQAFAAACgDQADgCAAgEQAAgFgDgCQgCgDgFAAIgUAAgAgPgFIAUAAQADAAACgCQACgCABgDQgBgEgCgCQgCgCgDAAIgUAAg");
	this.shape_62.setTransform(163.5,68.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AANAoIAAgnIgZAiIAAAFIgJAAIAAg4IAJAAIAAAlIAZghIAAgEIAJAAIAAA4gAgIgaQgDgCgDgDIgBgDIgBgFIAHAAQAAADADACQACACAEAAQAEAAADgCQADgCAAgDIAGAAQAAAHgEAEQgFAEgHAAQgEAAgEgCg");
	this.shape_63.setTransform(153.4,67.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_64.setTransform(148.9,67.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_65.setTransform(144.2,68.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IAJAAIAAAXIARAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAFgJAAgAgNAVIARAAQAFAAACgDQACgCABgFQgBgEgCgCQgCgDgFAAIgRAAg");
	this.shape_66.setTransform(138.2,68.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_67.setTransform(131.6,68.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgBQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEACAAAEQAAAFADADQADACAGAAQAEAAACgCQAEgBACgCIADgEIABgDIAAgLIgDABg");
	this.shape_68.setTransform(125.6,68.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_69.setTransform(119,68.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQAMABAIAHQAGAJAAAOQAAAOgHAIQgGAIgNAAQgMAAgGgIgAgLgPQgFAFABAKQgBAKAFAHQAEAFAHAAQAIAAAEgFQAFgGgBgKQAAgLgDgFQgFgHgIAAQgHABgEAGg");
	this.shape_70.setTransform(112.5,68.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAIAAIAAA5gAgEgbIAAgMIAIAAIAAAMg");
	this.shape_71.setTransform(107.9,67.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAOAlIAAgRIglAAIAAg5IAJAAIAAAxIAXAAIAAgxIAKAAIAAAxIAFAAIAAAZg");
	this.shape_72.setTransform(103.4,69.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgBQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgCgFgBQgGABgEACQgDADAAAFIgKAAIACgHIADgFQADgDAFgCQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEACAAAEQAAAFADADQADACAGAAQAEAAACgCQAEgBACgCIADgEIABgDIAAgLIgDABg");
	this.shape_73.setTransform(96.9,68.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_74.setTransform(90.4,68.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAoIgDAAIAAgJIADABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIADgJIgTg5IAJAAIAPAsIAPgsIAKAAIgZBFQgEAMgLAAIgDgBg");
	this.shape_75.setTransform(80.7,69.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAOAdIAAgXIgPAAQgDAAgCACQgDADAAADIAAAHIAAAEIgCAEIgKAAIACgDIABgFIAAgHQAAgDACgDQABgDAEgBQgGgDgCgCQgDgEAAgGQAAgFACgEQADgDAEgDQAEgCAGAAIAaAAIAAA5gAgKgRQgCACAAAEQAAAFACACQACACAFAAIARAAIAAgSIgRAAQgEAAgDADg");
	this.shape_76.setTransform(71.1,68.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLAcQgGgFgDgGQgDgHAAgJQAAgJADgHQADgHAGgEQAGgDAGgBQAHAAAFADQAFACADAEIACAGIABAGIgJAAQgBgGgDgDQgEgDgGgBQgGABgEAGQgFAGAAAKQAAAKAFAGQAEAFAGAAQAGABAEgEQADgEABgGIAJAAQgBAKgGAGQgGAGgKAAQgHAAgFgDg");
	this.shape_77.setTransform(65.1,68.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IAJAAIAAAXIARAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAFgJAAgAgNAVIARAAQAEAAADgDQACgCAAgFQAAgEgCgCQgDgDgEAAIgRAAg");
	this.shape_78.setTransform(59.3,68.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgEAdIAAgxIgRAAIAAgIIArAAIAAAIIgRAAIAAAxg");
	this.shape_79.setTransform(53.6,68.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgNAbQgFgEgEgGQgDgIAAgJQAAgIADgHQAEgHAGgEQAFgDAHgBQAKABAGAEQAGAFADAJIgJACQgCgGgEgDQgEgDgGgBQgGABgEAEQgEAFgBAHIATAAIAAAIIgTAAQAAAJAFAFQAEAGAGgBQAHAAAEgDQAEgFABgHIAKADQgDAKgGAGQgGAFgLAAQgHAAgGgEg");
	this.shape_80.setTransform(48,68.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgHAXQgGgHgBgOIgNAAIAAAbIgJAAIAAg5IAJAAIAAAXIANAAQACgMAGgGQAGgGALgBQAMABAHAHQAHAJAAANQAAAPgHAIQgHAIgMAAQgLAAgHgIgAAAgPQgEAFgBAKQABAKAEAHQAEAFAHAAQAIAAAEgFQAEgGABgKQAAgLgFgFQgEgHgIAAQgHABgEAGg");
	this.shape_81.setTransform(40.4,68.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_82.setTransform(32.5,68.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAcQgGgFgDgGQgDgHAAgJQAAgJADgHQADgHAGgEQAGgDAGgBQAHAAAFADQAFACADAEIACAGIABAGIgJAAQgBgGgDgDQgEgDgGgBQgGABgEAGQgFAGAAAKQAAAKAFAGQAEAFAGAAQAGABAEgEQADgEABgGIAJAAQgBAKgGAGQgGAGgKAAQgHAAgFgDg");
	this.shape_83.setTransform(26.2,68.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AANAoIAAgnIgZAiIAAAFIgJAAIAAg4IAJAAIAAAlIAZghIAAgEIAJAAIAAA4gAgIgaQgDgCgDgDIgBgDIgBgFIAHAAQAAADADACQACACAEAAQAEAAADgCQADgCAAgDIAGAAQAAAHgEAEQgFAEgHAAQgEAAgEgCg");
	this.shape_84.setTransform(19.9,67.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_85.setTransform(15.4,67.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAUAiIAAgKIgnAAIAAAKIgJAAIAAgSQAEgDADgDQADgEADgGIACgLIABgPIAAgHIAkAAIAAAxIAFAAIAAASgAgDgVIgBAMQAAAGgCADIgEAJIgEAHIAdAAIAAgpIgSAAg");
	this.shape_86.setTransform(10.5,69.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgOAaQgFgFAAgIIAAgCIAJAAIAAACQAAAEADADQADADAEgBQAFABADgDQADgDAAgEQAAgEgDgEQgDgCgFAAIgDAAIAAgHIADAAIAEgBIAEgCIABgCIABgEQAAgEgDgCQgDgCgEgBQgDAAgDAEQgDACAAAEIAAADIgJAAIAAgDIABgGQABgDACgCQADgDAEgCIAHgCQAGAAAEADQAEACADADQACAEAAAEQAAAEgCAEIgGAGQAFAAACAEQACAEAAAEQAAAGgCAEQgDAEgEADQgFACgGAAQgJAAgFgFg");
	this.shape_87.setTransform(4.5,68.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_88.setTransform(222.9,53.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQANABAGAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgMAAgGgIgAgLgPQgFAGAAAJQAAAKAFAHQAFAFAGAAQAIAAAEgFQAEgGAAgKQAAgLgDgFQgFgGgIgBQgGABgFAGg");
	this.shape_89.setTransform(216.3,53.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_90.setTransform(209.8,53.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgSAoIgDAAIAAgJIADABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIADgJIgTg5IAJAAIAPAsIAPgsIAKAAIgZBFQgEAMgLAAIgDgBg");
	this.shape_91.setTransform(203.6,55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAOAdIgOgWIgOAWIgKAAIAUgdIgUgcIALAAIANAVIAOgVIALAAIgUAcIAUAdg");
	this.shape_92.setTransform(197.8,53.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgEIABgEIAAgKIgDABg");
	this.shape_93.setTransform(191.7,53.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_94.setTransform(185.2,54.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOAaQgFgFAAgIIAAgDIAJAAIAAADQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEQAAgFgDgDQgDgCgFAAIgDAAIAAgHIADAAIAEgBIAEgCIABgCIABgEQAAgEgDgCQgDgDgEAAQgDAAgDAEQgDACAAAEIAAADIgJAAIAAgDIABgGQABgEACgCQADgDAEgBIAHgCQAGABAEACQAEACADADQACAEAAAEQAAAFgCADIgGAGQAFABACADQACAEAAAEQAAAGgCAEQgDAEgEADQgFACgGAAQgJAAgFgFg");
	this.shape_95.setTransform(178.9,53.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQANABAGAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgMAAgGgIgAgLgPQgFAGAAAJQAAAKAFAHQAFAFAGAAQAIAAAEgFQAEgGAAgKQAAgLgDgFQgFgGgIgBQgGABgFAGg");
	this.shape_96.setTransform(173.1,53.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcAoIAAhPIAgAAQAMAAAGAGQAHAGAAALQAAAGgCAEQgBAEgEACIgHAFQgEABgFAAIgYAAIAAAigAgSgCIAVAAQAHAAAEgEQAEgDAAgHQAAgHgEgDQgEgEgHAAIgVAAg");
	this.shape_97.setTransform(166.5,52.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_98.setTransform(157.4,56.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgDAnIAAg4IAIAAIAAA4gAADgbIAAgLIALAAIAAALgAgNgbIAAgLIAKAAIAAALg");
	this.shape_99.setTransform(154.3,52.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAIAAIAAA5gAgEgbIAAgMIAIAAIAAAMg");
	this.shape_100.setTransform(151.4,52.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAOAlIAAgRIglAAIAAg5IAJAAIAAAxIAXAAIAAgxIAKAAIAAAxIAFAAIAAAZg");
	this.shape_101.setTransform(147,54.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_102.setTransform(141,53.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKABAGADQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgEIABgEIAAgKIgDABg");
	this.shape_103.setTransform(134.5,53.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAADgbIAAgLIALAAIAAALgAgOgbIAAgLIALAAIAAALg");
	this.shape_104.setTransform(126.3,52.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_105.setTransform(123.5,52.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAUAiIAAgKIgmAAIAAAKIgKAAIAAgTQAEgCADgDQAEgEACgGIACgLIABgPIAAgHIAkAAIAAAwIAFAAIAAATgAgDgVIgBAMQAAAGgCADIgDAJIgGAGIAeAAIAAgoIgSAAg");
	this.shape_106.setTransform(118.6,54.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgJAAIgTgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_107.setTransform(107.5,53.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAHgHALgBQAMABAHAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgLAAgHgIgAgLgPQgEAGgBAJQABAKAEAHQAFAFAGAAQAIAAAEgFQAEgGABgKQAAgLgFgFQgEgGgIgBQgGABgFAGg");
	this.shape_108.setTransform(100,53.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAhAAIAAAIIgYAAIAAAxg");
	this.shape_109.setTransform(94.7,53.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAOAdIAAgXIgPAAQgDAAgCACQgDADAAADIAAAHIAAAEIgCAEIgKAAIACgDIABgFIAAgHQAAgDACgDQABgDAEgBQgGgDgCgCQgDgEAAgGQAAgFACgEQADgDAEgDQAEgCAGAAIAaAAIAAA5gAgKgRQgCACAAAEQAAAFACACQACACAFAAIARAAIAAgSIgRAAQgEAAgDADg");
	this.shape_110.setTransform(88.8,53.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgEAdIAAgxIgRAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_111.setTransform(83.4,53.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQAMABAIAHQAGAJAAAOQAAAOgHAIQgGAIgNAAQgMAAgGgIgAgLgPQgFAGABAJQgBAKAFAHQAEAFAHAAQAIAAAEgFQAFgGgBgKQAAgLgDgFQgFgGgIgBQgHABgEAGg");
	this.shape_112.setTransform(77.8,53.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_113.setTransform(71.3,54.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AANAdIAAgxIgZAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_114.setTransform(64.6,53.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAADgbIAAgLIALAAIAAALgAgOgbIAAgLIALAAIAAALg");
	this.shape_115.setTransform(56.6,52.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgbIAAgMIAIAAIAAAMg");
	this.shape_116.setTransform(53.7,52.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAOAlIAAgRIglAAIAAg5IAJAAIAAAxIAXAAIAAgxIAKAAIAAAxIAFAAIAAAZg");
	this.shape_117.setTransform(49.3,54.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_118.setTransform(42.7,53.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgOAaQgFgFAAgIIAAgDIAJAAIAAADQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEQAAgFgDgDQgDgCgFAAIgDAAIAAgHIADAAIAEgBIAEgCIABgCIABgEQAAgEgDgCQgDgDgEAAQgDAAgDAEQgDACAAAEIAAADIgJAAIAAgDIABgGQABgEACgCQADgDAEgBIAHgCQAGABAEACQAEACADADQACAEAAAEQAAAFgCADIgGAGQAFABACADQACAEAAAEQAAAGgCAEQgDAEgEADQgFACgGAAQgJAAgFgFg");
	this.shape_119.setTransform(36.9,53.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAHgHALgBQANABAGAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgLAAgHgIgAgLgPQgEAGgBAJQABAKAEAHQAEAFAHAAQAIAAAEgFQAEgGABgKQAAgLgFgFQgEgGgIgBQgHABgEAGg");
	this.shape_120.setTransform(31,53.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_121.setTransform(24.6,53.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgNAHgJQAGgHAMgBQANABAGAHQAHAJAAAOQAAAOgHAIQgHAIgMAAQgMAAgGgIgAgLgPQgFAGAAAJQAAAKAFAHQAFAFAGAAQAIAAAEgFQAEgGAAgKQAAgLgDgFQgFgGgIgBQgGABgFAGg");
	this.shape_122.setTransform(18.2,53.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_123.setTransform(11.7,54.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_124.setTransform(5,53.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_125.setTransform(232.1,39.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAcAAQAFAAAEACQADACADADQACAEAAAEQAAAEgBACQgCADgEADQAFABADAEQABADAAAFQAAAIgEAEQgFAFgHAAgAgOAVIATAAQAFAAACgDQADgCAAgEQAAgFgDgCQgCgDgFAAIgTAAgAgOgFIATAAQADAAADgCQACgCAAgDQAAgEgCgCQgDgCgDAAIgTAAg");
	this.shape_126.setTransform(225.8,39.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgIQAHgHALgBQANABAGAHQAHAJAAANQAAAPgHAIQgHAIgMAAQgLAAgHgIgAgLgQQgEAHgBAJQABAKAEAHQAEAFAHAAQAIAAAEgFQAEgGABgLQAAgJgFgHQgEgFgIgBQgHABgEAFg");
	this.shape_127.setTransform(219.1,39.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgIAAIgUgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_128.setTransform(211.6,39.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgSAoIgDAAIAAgJIADABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIADgJIgTg5IAJAAIAPAsIAPgsIAKAAIgZBFQgEAMgLAAIgDgBg");
	this.shape_129.setTransform(204.3,40.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_130.setTransform(194.7,39.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgRAAIAAgIIAqAAIAAAIIgRAAIAAAxg");
	this.shape_131.setTransform(189.2,39.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgDIABgFIAAgKIgDABg");
	this.shape_132.setTransform(183.7,39.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAcAAQAFAAAEACQADACADADQACAEAAAEQAAAEgBACQgCADgEADQAFABADAEQABADAAAFQAAAIgEAEQgFAFgHAAgAgOAVIATAAQAFAAACgDQADgCAAgEQAAgFgDgCQgCgDgFAAIgTAAgAgOgFIATAAQADAAADgCQACgCAAgDQAAgEgCgCQgDgCgDAAIgTAAg");
	this.shape_133.setTransform(177.2,39.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgHAYQgGgIgBgOIgNAAIAAAaIgJAAIAAg4IAJAAIAAAXIAOAAQABgMAGgHQAGgFALgBQAMABAIAHQAGAIAAAOQAAAPgGAIQgIAIgMAAQgLAAgHgHgAAAgQQgFAHABAJQgBAKAFAHQADAFAIAAQAIAAAEgFQAFgGgBgLQAAgJgDgHQgFgFgIgBQgIABgDAFg");
	this.shape_134.setTransform(169.4,39.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_135.setTransform(161.5,39.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAIAAIAAA5gAgEgcIAAgLIAIAAIAAALg");
	this.shape_136.setTransform(156.8,38);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAYAdIAAgxIgTAxIgJAAIgTgxIAAAxIgJAAIAAg5IAOAAIASAvIATgvIAOAAIAAA5g");
	this.shape_137.setTransform(151.1,39.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgOAaQgFgEAAgJIAAgDIAJAAIAAADQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEQAAgEgDgDQgDgDgFAAIgDAAIAAgHIADAAIAEgBIAEgDIABgBIABgEQAAgEgDgCQgDgDgEAAQgDABgDADQgDACAAAFIAAACIgJAAIAAgCIABgHQABgEACgCQADgDAEgBIAHgCQAGABAEACQAEABADAEQACAEAAAEQAAAEgCAEIgGAGQAFABACADQACADAAAFQAAAGgCAEQgDAEgEACQgFADgGAAQgJAAgFgFg");
	this.shape_138.setTransform(144.1,39.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgIQAGgHAMgBQANABAGAHQAHAJAAANQAAAPgHAIQgHAIgMAAQgMAAgGgIgAgLgQQgFAHAAAJQAAAKAFAHQAFAFAGAAQAIAAAEgFQAEgGAAgLQAAgJgDgHQgFgFgIgBQgGABgFAFg");
	this.shape_139.setTransform(134.7,39.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAcAAQAFAAADACQAEACADADQACAEAAAEQAAAEgBACQgCADgEADQAFABACAEQACADAAAFQABAIgFAEQgEAFgIAAgAgOAVIATAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgDgEAAIgTAAgAgOgFIATAAQAEAAACgCQABgCAAgDQAAgEgBgCQgCgCgEAAIgTAAg");
	this.shape_140.setTransform(128.4,39.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgDQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgKIgDABg");
	this.shape_141.setTransform(121.8,39.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_142.setTransform(115.2,40.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_143.setTransform(108.5,39.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgHAYQgGgIgBgOIgNAAIAAAaIgJAAIAAg4IAJAAIAAAXIAOAAQABgMAHgHQAFgFALgBQAMABAIAHQAGAIAAAOQAAAPgGAIQgIAIgMAAQgLAAgHgHgAAAgQQgFAHABAJQgBAKAFAHQADAFAIAAQAIAAAEgFQAFgGgBgLQAAgJgDgHQgFgFgIgBQgIABgDAFg");
	this.shape_144.setTransform(97.5,39.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgIQAHgHALgBQANABAGAHQAHAJAAANQAAAPgHAIQgHAIgMAAQgLAAgHgIgAgLgQQgEAHgBAJQABAKAEAHQAEAFAHAAQAIAAAEgFQAEgGABgLQAAgJgFgHQgEgFgIgBQgHABgEAFg");
	this.shape_145.setTransform(89.5,39.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgKArQgFgDgDgEQgEgFgCgFQgBgGAAgJQAAgKABgHQACgHACgGQADgEAEgDIAJgFIAGgBIACgBIACgCIABgEIAAgFIAKAAQAAAIgCAEQgCAEgEADQgEACgHABQgKACgCALQADgEAFgCQADgBAEgBQAGABAFACQAEADAEADQADAEABAFQACAGAAAGQAAAQgGAHQgIAJgMAAQgFAAgFgCgAgLgCQgEAFAAAKQAAALAEAGQAFAGAGAAQAIAAAEgGQAFgGAAgKQgBgLgEgFQgEgGgIAAQgGABgFAFg");
	this.shape_146.setTransform(83,37.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgIQAGgHAMgBQAMABAIAHQAGAJAAANQAAAPgHAIQgGAIgNAAQgMAAgGgIgAgLgQQgFAHABAJQgBAKAFAHQAEAFAHAAQAIAAAEgFQAFgGgBgLQAAgJgDgHQgFgFgIgBQgHABgEAFg");
	this.shape_147.setTransform(76.5,39.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgLAbQgGgDgDgHQgDgHAAgKQAAgIADgHQADgHAGgEQAGgEAGAAQAHABAFACQAFACADAEIACAFIABAHIgJAAQgBgGgDgDQgEgEgGAAQgGAAgEAHQgFAGAAAJQAAALAFAGQAEAFAGAAQAGAAAEgDQADgEABgGIAJAAQgBALgGAFQgGAGgKAAQgHAAgFgEg");
	this.shape_148.setTransform(70.2,39.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgDQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgKIgDABg");
	this.shape_149.setTransform(60.6,39.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgOAaQgFgEAAgJIAAgDIAJAAIAAADQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEQAAgEgDgDQgDgDgFAAIgDAAIAAgHIADAAIAEgBIAEgDIABgBIABgEQAAgEgDgCQgDgDgEAAQgDABgDADQgDACAAAFIAAACIgJAAIAAgCIABgHQABgEACgCQADgDAEgBIAHgCQAGABAEACQAEABADAEQACAEAAAEQAAAEgCAEIgGAGQAFABACADQACADAAAFQAAAGgCAEQgDAEgEACQgFADgGAAQgJAAgFgFg");
	this.shape_150.setTransform(54.5,39.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgNAbQgFgEgEgGQgDgIAAgJQAAgIADgIQAEgGAGgEQAFgEAHAAQAKAAAGAFQAGAFADAJIgJACQgCgGgEgDQgEgEgGAAQgGAAgEAFQgEAFgBAHIATAAIAAAIIgTAAQAAAJAFAFQAEAGAGgBQAHAAAEgDQAEgEABgIIAKACQgDALgGAGQgGAFgLAAQgHAAgGgEg");
	this.shape_151.setTransform(45.2,39.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgDIABgFIAAgKIgDABg");
	this.shape_152.setTransform(38.9,39.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgkAdIAAg5IAJAAIAAAxIAYAAIAAgxIAIAAIAAAxIAWAAIAAgxIAKAAIAAA5g");
	this.shape_153.setTransform(30.9,39.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_154.setTransform(23,39.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_155.setTransform(16.5,39.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgEQgFgFAAgJQAAgFADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgCQAAgEgDgCQgEgDgFAAQgGAAgEADQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAFAAAHIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHABgDADQgEACAAAEQAAAFADACQADADAGAAQAEAAACgCQAEAAACgDIADgDIABgFIAAgKIgDABg");
	this.shape_156.setTransform(10.5,39.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgOAaQgFgEAAgJIAAgDIAJAAIAAADQAAAEADADQADACAEAAQAFAAADgCQADgDAAgEQAAgEgDgDQgDgDgFAAIgDAAIAAgHIADAAIAEgBIAEgDIABgBIABgEQAAgEgDgCQgDgDgEAAQgDABgDADQgDACAAAFIAAACIgJAAIAAgCIABgHQABgEACgCQADgDAEgBIAHgCQAGABAEACQAEABADAEQACAEAAAEQAAAEgCAEIgGAGQAFABACADQACADAAAFQAAAGgCAEQgDAEgEACQgFADgGAAQgJAAgFgFg");
	this.shape_157.setTransform(4.5,39.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AACAJIAMgJIgMgIIAAgJIARANIAAAJIgRANgAgSAJIALgJIgLgIIAAgJIAQANIAAAJIgQANg");
	this.shape_158.setTransform(219.6,24.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgFQgFgEAAgIQAAgGADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgBQAAgFgDgCQgEgCgFAAQgGAAgEACQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAEAAAIIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEADAAAEQAAAEADACQADADAGAAQAEAAACgCQAEgBACgCIADgDIABgFIAAgKIgDABg");
	this.shape_159.setTransform(213.3,24.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_160.setTransform(206.7,24.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAADgbIAAgLIALAAIAAALgAgNgbIAAgLIAKAAIAAALg");
	this.shape_161.setTransform(202.1,23.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAVAfQgFAAgCgCQgDgCAAgEQgFAEgEACQgEACgFAAQgJAAgFgFQgFgEAAgIQAAgGADgEQACgEAGgBIADgBIAFgBIAIgCQAGAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBIAAgBQAAgFgDgCQgEgCgFAAQgGAAgEACQgDADAAAFIgKAAIACgHIADgGQADgDAFgBQAEgCAGAAQAKAAAGAEQAFAEAAAIIAAAhIABADQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIABgBIABAAIAAAHIgDABIgDAAgAAIABIgEABIgHABQgHACgDACQgEADAAAEQAAAEADACQADADAGAAQAEAAACgCQAEgBACgCIADgDIABgFIAAgKIgDABg");
	this.shape_162.setTransform(197.5,24.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_163.setTransform(190.9,25.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_164.setTransform(184.8,24.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgTAoIAAgJIAHAAIADAAIADgDIADgFIgeg+IANAAIAVAxIAVgxIAMAAIgfBFQgCAFgCACQgEADgEAAg");
	this.shape_165.setTransform(178.4,23.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgZAAIAAAbIgJAAIAAg5IAJAAIAAAXIAZAAIAAgXIAKAAIAAA5g");
	this.shape_166.setTransform(168.1,24.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgIAEgHQACgHAHgEQAGgEAGAAQAJABAGADQAHAEACAIIACAHIAAAKIgqAAIABAHQABADACADQADADADABQADACAEABQAFgBAEgDQAEgDACgFIAJAAQgCAJgGAGQgHAFgKAAQgLAAgHgIgAAQgDQAAgJgFgFQgDgEgIAAQgFAAgFAEQgEAFgBAJIAfAAIAAAAg");
	this.shape_167.setTransform(161.6,24.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAHgJALAAQAMAAAIAJQAGAHAAAOQAAAPgHAIQgGAIgNAAQgLAAgHgIgAgLgQQgEAHgBAJQABAKAEAHQAEAFAHABQAIgBAEgFQAFgGAAgLQAAgJgFgHQgEgFgIAAQgHAAgEAFg");
	this.shape_168.setTransform(155.1,24.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_169.setTransform(148.7,25.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgRAAIAAgIIApAAIAAAIIgQAAIAAAxg");
	this.shape_170.setTransform(142.7,24.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAIAAIAAA5gAgEgcIAAgLIAIAAIAAALg");
	this.shape_171.setTransform(138.9,23.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgKAoQgGgCgFgEQgGgGgEgJQgDgJAAgKQAAgLAFgKQAEgJAJgGQAIgFAKAAQAKAAAHAEQAHADAEAGQAEAGAAAIIgLAAQAAgIgFgFQgGgFgKAAQgMAAgHAIQgHAKAAAOQAAAKADAIQAEAHAGAEQAGAEAHAAQAHAAAFgDQAFgCACgGQADgEAAgHIALAAIAAAGIgBAEIgCAFQgFAHgIAFQgHAEgLAAQgGAAgFgCg");
	this.shape_172.setTransform(133.4,23.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAGgJAMAAQANAAAGAJQAHAHAAAOQAAAPgHAIQgHAIgMAAQgMAAgGgIgAgLgQQgFAHAAAJQAAAKAFAHQAFAFAGABQAIgBAEgFQAEgGAAgLQABgJgEgHQgFgFgIAAQgGAAgFAFg");
	this.shape_173.setTransform(122.6,24.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAgAdIgQgcIgLAAIAAAcIgJAAIAAgcIgLAAIgQAcIgLAAIASgfIgNgaIAKAAIAMAWIALAAIAAgWIAJAAIAAAWIALAAIAMgWIAKAAIgNAaIASAfg");
	this.shape_174.setTransform(115,24.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgIADgHQAEgHAFgEQAGgEAIAAQAIABAGADQAGAEADAIIACAHIAAAKIgqAAIABAHQABADACADQACADAEABQAEACADABQAGgBADgDQAEgDACgFIAJAAQgCAJgGAGQgHAFgKAAQgLAAgHgIgAAQgDQAAgJgFgFQgEgEgGAAQgHAAgEAEQgEAFgBAJIAfAAIAAAAg");
	this.shape_175.setTransform(107.4,24.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAVAoIAAhGIgoAAIAABGIgLAAIAAhPIA9AAIAABPg");
	this.shape_176.setTransform(100,23.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AADAFIAAgJIARgNIAAAJIgMAIIAMAJIAAAJgAgSAFIAAgJIAQgNIAAAJIgMAIIAMAJIAAAJg");
	this.shape_177.setTransform(92.6,24.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgdAoIAAhPIAgAAQALAAAGAFQAGAGAAAJQAAAGgCAEQgDAFgGACQAIACADAFQAEAFAAAHQAAAFgCAEQgBAEgDADQgDADgFADQgEABgGAAgAgTAfIAYAAQAHAAAEgEQAEgEAAgGQAAgHgEgDQgEgEgHABIgYAAgAgTgEIATAAQAIAAAEgEQAEgDAAgHQAAgGgEgDQgEgDgIAAIgTAAg");
	this.shape_178.setTransform(82.2,23.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgTAlQgJgGgFgJQgFgKAAgMQAAgLAFgKQAFgKAJgEQAIgGALAAQAMAAAIAGQAJAEAFAKQAFAKAAAMQAAAGgCAGIgFAMQgDAFgEAEQgFAEgGACQgHACgHAAQgLAAgIgFgAgOgcQgGAEgEAIQgDAHAAAJQAAAKADAIQAEAGAGAFQAGAEAIAAQAJAAAGgEQAGgEAEgHQADgIABgJQgBgKgDgHQgEgIgGgEQgGgEgJAAQgIAAgGAEg");
	this.shape_179.setTransform(73.6,23.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgEAoIAAhGIgaAAIAAgJIA+AAIAAAJIgbAAIAABGg");
	this.shape_180.setTransform(66.1,23.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_181.setTransform(57.3,26.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgSAoIgDAAIAAgJIADABIACAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIADgJIgTg5IAJAAIAPAsIAPgsIAKAAIgZBFQgEAMgLAAIgDgBg");
	this.shape_182.setTransform(53.4,25.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AANAdIgPgcIgMAAIAAAcIgJAAIAAg5IAJAAIAAAWIAMAAIAKgWIALAAIgOAaIATAfg");
	this.shape_183.setTransform(47.9,24.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAHgJALAAQAMAAAIAJQAGAHAAAOQAAAPgHAIQgGAIgNAAQgLAAgHgIgAgLgQQgEAHgBAJQABAKAEAHQAEAFAHABQAIgBAEgFQAFgGAAgLQAAgJgFgHQgEgFgIAAQgHAAgEAFg");
	this.shape_184.setTransform(41.3,24.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_185.setTransform(34.8,25.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgPAnIAFgSIAGgQIAIgPIAMgTIgpAAIAAgJIAzAAIAAAIIgPAXIgKAWQgDALgDANg");
	this.shape_186.setTransform(24.6,23.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAEAnIAAg2IgQAAIAAgHIALgCQADgCACgDIADgJIAGAAIAABNg");
	this.shape_187.setTransform(17.5,23.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgSAeQgGgKgBgUQAAgKACgIQACgIAEgFQADgEAFgCQAEgCAFAAQAGAAAEACQAFACADAEQAEAGACAHQACAIAAALQgBATgGAKQgHAKgMAAQgMAAgGgKgAgLgXQgEAIAAAPQAAAQAEAIQAEAIAHAAQAIAAAEgIQAEgIAAgQQAAgPgEgIQgEgIgIAAQgHAAgEAIg");
	this.shape_188.setTransform(11.5,23.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgZAnQAAgIACgHQADgFAEgEQAFgFAIgFIAJgFQAFgDADgDQADgEAAgFIgCgHQgCgDgEgDQgDgCgFABQgDgBgEACQgEADgCAEIgBAEIgBAGIgJAAIABgKIADgIQAEgEAFgDQAFgCAGAAQAIAAAGADQAFADADAFQADAFAAAHQAAAHgEAGQgEAFgIAEIgKAHQgHADgDAEQgDAEgBAFIAoAAIAAAJg");
	this.shape_189.setTransform(5,23.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAOAdIAAgXIgPAAQgDAAgCACQgDADAAADIAAAHIAAAEIgCAEIgKAAIACgDIABgFIAAgHQAAgDACgDQABgDAEgBQgGgDgCgCQgDgEAAgGQAAgFACgEQADgDAEgDQAEgCAGAAIAaAAIAAA5gAgKgRQgCACAAAEQAAAFACACQACACAFAAIARAAIAAgSIgRAAQgEAAgDADg");
	this.shape_190.setTransform(169.3,9.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AANAdIAAgbIgaAAIAAAbIgJAAIAAg5IAJAAIAAAXIAaAAIAAgXIAJAAIAAA5g");
	this.shape_191.setTransform(163.2,9.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_192.setTransform(156.8,9.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_193.setTransform(150.4,9.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAOAdIAAgxIgSAAIAAAZQAAAHgCAEQgCAFgDADIgFADIgHACIAAgIIAEgCIACgDIADgEIAAgFIAAgjIAmAAIAAA5g");
	this.shape_194.setTransform(144,9.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAEAnIAAg2IgQAAIAAgHIALgCQADgCACgDIADgJIAGAAIAABNg");
	this.shape_195.setTransform(133.8,8.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgSAiQgGgGgBgNIAKAAQAAAJAEAEQAEAEAHAAQAIAAAEgEQAEgFAAgHQABgHgFgEQgEgDgIAAIgDAAIgBAAIAAgHIAHgBIAFgBQADgBACgDQABgCAAgEQAAgHgDgDQgFgEgGAAQgEAAgDACQgDACgCADIgBAEIAAAGIgKAAQAAgNAGgGQAGgGALAAQAMAAAFAFQAHAGAAAKQAAAMgLAEQAHACADAEQADAFAAAHQAAAHgDAGQgEAFgGADQgFADgIAAQgLAAgHgGg");
	this.shape_196.setTransform(127.8,8.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAHgJALAAQAMAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgMAAQgLAAgHgIgAgLgQQgEAHgBAJQABAKAEAHQAFAFAGABQAIgBAEgFQAEgGABgLQAAgKgFgGQgEgFgIAAQgGAAgFAFg");
	this.shape_197.setTransform(118,9.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_198.setTransform(111.6,9.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAEAnIAAg2IgQAAIAAgHIALgCQADgCACgDIADgJIAGAAIAABNg");
	this.shape_199.setTransform(101.1,8.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgOAaQgFgFAAgIIAAgDIAJAAIAAADQAAAEADADQADADAEAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAIgDAAIAAgHIADAAIAEgBIAEgDIABgBIABgDQAAgEgDgDQgDgCgEAAQgDAAgDADQgDACAAAFIAAACIgJAAIAAgCIABgHQABgDACgDQADgCAEgCIAHgCQAGAAAEADQAEABADAFQACADAAAFQAAAEgCADIgGAFQAFACACADQACADAAAGQAAAFgCAEQgDAEgEACQgFADgGAAQgJAAgFgFg");
	this.shape_200.setTransform(92.3,9.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgNAbQgFgEgEgGQgDgIAAgJQAAgIADgIQAEgGAGgEQAFgEAHAAQAKAAAGAFQAGAFADAJIgJACQgCgGgEgDQgEgEgGABQgGgBgEAFQgEAEgBAJIATAAIAAAHIgTAAQAAAJAFAFQAEAGAGAAQAHAAAEgFQAEgDABgIIAKACQgDALgGAFQgGAGgLAAQgHAAgGgEg");
	this.shape_201.setTransform(79.5,9.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAIAAIAAA5gAgEgcIAAgLIAIAAIAAALg");
	this.shape_202.setTransform(74.9,8.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AATAiIAAgLIgmAAIAAALIgJAAIAAgTQAEgBAEgEQACgEACgGIAEgLIABgPIAAgHIAjAAIAAAwIAFAAIAAATgAgCgVIgBAMQgBAGgCAEIgEAIIgEAGIAdAAIAAgoIgRAAg");
	this.shape_203.setTransform(70,10.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAOAdIAAgXIgPAAQgDAAgCACQgDADAAADIAAAHIAAAEIgCAEIgKAAIACgDIABgFIAAgHQAAgDACgDQABgDAEgBQgGgDgCgCQgDgEAAgGQAAgFACgEQADgDAEgDQAEgCAGAAIAaAAIAAA5gAgKgRQgCACAAAEQAAAFACACQACACAFAAIARAAIAAgSIgRAAQgEAAgDADg");
	this.shape_204.setTransform(60,9.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgDAoIAAg5IAIAAIAAA5gAgDgcIAAgLIAIAAIAAALg");
	this.shape_205.setTransform(55.7,8.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAOAmIAAgSIglAAIAAg5IAJAAIAAAxIAXAAIAAgxIAKAAIAAAxIAFAAIAAAag");
	this.shape_206.setTransform(51.3,10.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AANAdIAAgnIgZAhIAAAGIgJAAIAAg5IAJAAIAAAmIAZghIAAgFIAJAAIAAA5g");
	this.shape_207.setTransform(44.7,9.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgOAaQgFgFAAgIIAAgDIAJAAIAAADQAAAEADADQADADAEAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAIgDAAIAAgHIADAAIAEgBIAEgDIABgBIABgDQAAgEgDgDQgDgCgEAAQgDAAgDADQgDACAAAFIAAACIgJAAIAAgCIABgHQABgDACgDQADgCAEgCIAHgCQAGAAAEADQAEABADAFQACADAAAFQAAAEgCADIgGAFQAFACACADQACADAAAGQAAAFgCAEQgDAEgEACQgFADgGAAQgJAAgFgFg");
	this.shape_208.setTransform(38.9,9.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAGgJAMAAQANAAAGAJQAHAHAAAOQAAAPgHAIQgHAIgMAAQgMAAgGgIgAgLgQQgFAHAAAJQAAAKAFAHQAFAFAGABQAIgBAEgFQAEgGAAgLQAAgKgDgGQgFgFgIAAQgGAAgFAFg");
	this.shape_209.setTransform(33,9.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgJAAIAAg5IArAAIAAA5g");
	this.shape_210.setTransform(26.6,9.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgPQAAgOAHgHQAGgJAMAAQAMAAAIAJQAGAHAAAOQAAAPgHAIQgGAIgNAAQgMAAgGgIgAgLgQQgFAHABAJQgBAKAFAHQAEAFAHABQAIgBAEgFQAFgGgBgLQAAgKgDgGQgFgFgIAAQgHAAgEAFg");
	this.shape_211.setTransform(20.2,9.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgZAqIAAhRIAJAAIAAAIQADgFAFgCQAEgDAFAAQAIABAFADQAGAEADAHQADAHAAAKQAAAJgDAGQgDAHgGADQgGAEgHAAQgFAAgEgCQgEgCgEgEIAAAegAgLgaQgFAGAAAKQAAAKAFAGQAEAGAHAAQAEAAAEgDQAEgDACgFQACgEAAgGQAAgLgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_212.setTransform(13.7,10.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAVAoIAAhGIgoAAIAABGIgLAAIAAhPIA9AAIAABPg");
	this.shape_213.setTransform(6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,260.9,106.3), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF780A").s().p("A8WKyIAA1jMA4tAAAIAAVjg");
	this.shape.setTransform(181.5,69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,363,138), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AmxCHQgSgJgMgRQgLgQAAgVIA1AAQAAAMAJAHQAJAHAOAAQAXABAMgUQALgTAAgoIgKALIgHAGQgHAFgJACQgJADgLAAQgZAAgSgMQgSgMgLgVQgKgVAAgcQAAgdAMgWQALgWAVgMQAVgMAcAAQAZAAAVAMQATAMANAXQAJAQAFAWQAEAXAAAdQABAigHAdQgGAegMASQgMAUgUALQgUAKgZAAQgYAAgTgKgAmghWQgLAOAAAYQAAAYALAOQALAMATAAQATAAALgNQALgNAAgXQABgZgLgOQgMgOgUAAQgTAAgKAOgAIuCFQgTgLgMgUQgKgQgFgZQgEgaAAgjQAAgoAGgbQAHgcAMgQQANgQARgJQASgIAWAAQAZAAATALQAVALALAUQAKAQAEAaQAEAaABAjQAAAogHAbQgFAbgNAQQgNARgRAIQgSAJgWAAQgZgBgUgLgAJGhdQgIAHgFANQgCAGgBALIgDAaIAAAeQAAAdACAUQACAUAFAJQAFAKAHAFQAIAFALAAQAMAAAJgHQAIgHAEgNQACgFACgLIADgaIAAgdQAAgdgCgVQgCgVgFgJQgFgKgIgFQgIgFgKAAQgMAAgJAHgAFTCFQgTgLgMgUQgKgQgFgZQgEgaAAgjQAAgoAGgbQAGgcANgQQAMgQATgJQARgIAWAAQAZAAATALQAVALAMAUQAIAQAFAaQAFAaAAAjQgBAogFAbQgGAbgNAQQgNARgRAIQgSAJgWAAQgZgBgUgLgAFshdQgKAHgEANQgCAGgBALIgCAaIgBAeQAAAdACAUQADAUAEAJQAFAKAHAFQAJAFAKAAQAMAAAIgHQAKgHAEgNQACgFABgLIADgaIABgdQAAgdgDgVQgDgVgEgJQgFgKgIgFQgIgFgKAAQgMAAgIAHgAB4CFQgTgLgNgUQgIgQgFgZQgFgaAAgjQAAgoAGgbQAHgcAMgQQAMgQASgJQATgIAVAAQAZAAAUALQATALAMAUQAKAQAEAaQAFAagBAjQAAAogFAbQgHAbgMAQQgNARgSAIQgRAJgWAAQgZgBgUgLgACRhdQgKAHgEANQgCAGgBALIgDAaIgBAeQAAAdADAUQADAUAEAJQAFAKAIAFQAIAFAKAAQAMAAAIgHQAJgHAFgNQABgFACgLIACgaIABgdQAAgdgCgVQgDgVgEgJQgFgKgIgFQgIgFgKAAQgMAAgIAHgAjqB4QgYgXgBgqIA1AAQABAVALALQAKALATAAQATAAAKgMQALgLABgSQgBgQgHgLQgIgLgOgEIgIgBIgJgBIgOAAIAAgkIAEAAQAYAAAMgKQAMgKAAgVQAAgSgJgJQgJgJgQAAQgMAAgJAFQgJAFgEAKIgCALIgCARIgyAAIAAgTIACgOIAFgMQAIgWAWgNQAWgMAeAAQAoAAAXAUQAYAUABAjQAAASgJAOQgIAOgUAMQAYALAKAQQAMAQAAAZQgBAagMAUQgLAUgWALQgVAKgeABQgrgBgZgYgAq5CIQACgZAGgTQAGgSAOgPQANgPAXgPQAXgQAOgMQAOgKAHgJQAIgJACgJQACgJABgLQAAgVgLgLQgKgMgSAAQgTAAgLANQgJAMgBAXIAAAJIg0AAIAAgFIAAgEQABgsAXgYQAXgYArAAQAtAAAYAXQAZAYABAoQAAATgGAOQgFAPgOANQgNAOgYARIgeAXQgLAJgGAHQgFAGgEAHIB1AAIAAAxg");
	this.shape.setTransform(69.8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,139.5,29.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C3C46").s().p("ABYAoIAAgkIgoAAIAAAkIgKAAIAAhPIAKAAIAAAjIAoAAIAAgjIALAAIAABPgAgkAoIAAhPIAhAAQAMAAAFAGQAHAGAAAMQAAAFgBAEQgCAEgEACQgDADgEACQgDABgEAAIgZAAIAAAigAgZgCIAVAAQAHAAADgEQAFgDAAgHQAAgGgFgEQgDgEgHAAIgVAAgAhiAoIAAhPIAxAAIAAAJIgmAAIAABGg");
	this.shape.setTransform(9.9,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,19.8,8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C3C46").s().p("ADsAxIAAgSIg3AAIAAASIgKAAIAAgbQAEgBADgCQAEgCACgEQADgEACgFQABgEAAgIIAAgoIAyAAIAABGIAHAAIAAAbgADIgJQAAALgDAIQgDAIgHAEIArAAIAAg9IgeAAgAi8AxIAAgSIg6AAIAAhPIALAAIAABGIApAAIAAhGIAKAAIAABGIAGAAIAAAbgACQAfIAAhPIAKAAIAABPgABCAfIAAhPIAgAAQALAAAGAGQAGAFAAAJQAAAHgCAEQgDAEgFADQAHADADAEQAEAEAAAHQAAAFgCAEQgBAEgDADQgDAEgEABQgFACgFAAgABMAWIAZAAQAGAAAEgEQAEgDAAgHQAAgGgEgDQgEgDgGAAIgZAAgABMgNIATAAQAIAAAFgEQADgDABgGQgBgHgDgDQgFgDgIAAIgTAAgAAFAfIgHgYIgeAAIgJAYIgKAAIAchPIANAAIAbBPgAgFgBIgLgkIgOAkIAZAAgAhMAfIAAgjIgoAAIAAAjIgLAAIAAhPIALAAIAAAjIAoAAIAAgjIAKAAIAABPgAigAfIAAhPIALAAIAABPg");
	this.shape.setTransform(27.6,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(2.9,4.5,49.3,9.8), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("ACPA8QgOgIgIgQQgIgPAAgVQAAgUAIgPQAIgPAOgJQAOgIATgBQATAAAPAJQAOAJAIAPQAHAQABAUQAAALgDAKQgDAKgFAIQgFAJgHAGQgIAHgKADQgLAEgMAAQgTAAgOgJgACYguQgLAHgGAMQgFAMAAAPQAAAQAFANQAGAMALAGQAKAHAOAAQAOAAALgHQAKgGAGgMQAGgMAAgQQAAgQgGgMQgGgMgKgHQgLgHgOAAQgOAAgKAHgAiiA7QgKgKgCgVIAQAAQABAOAGAGQAHAHANAAQAMAAAHgHQAHgHAAgMQAAgLgHgGQgGgGgNAAIgJAAIAAgMIAOgBIAIgCQAFgCACgFQACgEAAgGQAAgLgGgFQgGgGgKAAQgIAAgFADQgGADgDAGIgCAGIAAAJIgQAAQAAgUAKgKQAKgLAUAAQASAAAKAJQAKAKABAQQAAATgSAIQALADAFAHQAFAHAAAMQAAAMgFAJQgFAJgKAFQgKAFgNAAQgUAAgKgKgAHWBBIAAhcIhDBNIAAAPIgRAAIAAiCIARAAIAABaIBDhMIAAgOIARAAIAACCgAFRBBIgpg+IgLAAIAAA+IgRAAIAAiCIARAAIAAA2IALAAIAgg2IATAAIglA+IAuBEgAgBBBIAAiCIA1AAQATAAALAKQAKAJAAATQAAAJgCAHQgDAGgGAFQgFAEgHADQgGACgHAAIgpAAIAAA4gAAPgFIAiAAQAMAAAHgGQAHgGAAgLQAAgLgHgGQgHgGgMAAIgiAAgAkJBBIgOgoIgyAAIgOAoIgSAAIAviCIAWAAIAuCCgAkbALIgUg6IgWA6IAqAAgAmSBBIAAg8IhDAAIAAA8IgRAAIAAiCIARAAIAAA4IBDAAIAAg4IARAAIAACCg");
	this.shape.setTransform(48.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,97.5,13.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AhFBRIAAgeIhbAAIAAAeIgRAAIAAgtQAIgBAFgEQAGgDAFgHQAEgGACgIQACgIAAgOIAAhBIBTAAIAAB0IAKAAIAAAtgAiAgQQAAATgFANQgFANgLAHIBGAAIAAhlIgxAAgAEjAmQgLgRAAgfQAAgSADgNQAEgMAFgJQAGgGAIgEQAHgEAJAAQAJAAAHAEQAIADAGAHQAFAIAEANQACANAAATQAAAegKARQgKAQgVAAQgVAAgKgQgAEugxQgFANAAAaQAAAZAFANQAHAOANAAQANAAAGgOQAHgMgBgaQABgagHgNQgGgNgNAAQgNAAgHANgAHoAxQgHgDgEgIQgEgGAAgJQAAgJAEgGQAEgHAHgDQAHgFAJAAQAIABAHAEQAHADAEAHQAEAHAAAJQAAAIgEAHQgEAGgHAFQgHAEgIAAQgJAAgHgFgAHqAKQgFAFAAAIQAAAIAFAFQAGAFAIABQAHgBAFgFQAGgFAAgHQAAgJgGgFQgFgEgHgBQgIABgGAEgAGiA2IBHiDIAMAAIhHCDgACRAzIAAh0IgrAAIAAgPIBnAAIAAAPIgrAAIAAB0gAA8AzIAAhcIhDBNIAAAPIgRAAIAAiDIARAAIAABbIBDhMIAAgPIARAAIAACDgAkkAzIAAiDIBbAAIAAAPIhKAAIAAAqIBHAAIAAAPIhHAAIAAAsIBNAAIAAAPgAmfAzIAAiDIA2AAQAUAAAKAKQAKAKAAATQABAIgDAIQgDAGgGAFQgFAFgGACQgHADgHAAIgpAAIAAA3gAmOgTIAiAAQANAAAGgGQAHgGAAgLQAAgLgHgGQgGgGgNAAIgiAAgAnQAzIgog9IgMAAIAAA9IgRAAIAAiDIARAAIAAA3IALAAIAgg3IATAAIglA/IAuBEgAGQgPQgHgDgEgHQgEgIAAgIQAAgJAEgGQAEgIAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAIQAEAGAAAJQAAAIgEAIQgEAHgHADQgHAFgJAAQgIAAgHgFgAGTg2QgGAFAAAIQAAAHAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgHQAAgIgGgFQgEgFgJgBQgIABgEAFg");
	this.shape.setTransform(53.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,106.8,16.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AIkBAQgJgFgFgHQgFgJgDgLQgDgLAAgQQAAgQADgMQADgNAGgJQAGgJAJgEQAJgFAKAAQAPAAAJAIQAKAJACAQIgQAAQgBgJgGgFQgFgFgJAAQgOAAgHAMQgHANAAAXQAFgHAHgEQAIgDAJAAQAMAAAIAFQAJAGAFAIQAFAJAAALQAAANgFAKQgGAJgJAGQgJAFgNABQgKAAgIgEgAIkAFQgHAIAAAMQAAAIADAHQADAGAGAEQAGADAIAAQAHAAAGgDQAFgEAEgGQADgGAAgIQAAgNgHgIQgGgFgMgBQgMABgHAFgAGrAzQgKgRgBggQAAgRAEgNQADgMAGgJQAFgGAIgEQAHgEAJAAQAJAAAIAEQAHADAGAHQAGAIADANQADANAAASQAAAfgLARQgKARgVAAQgUAAgLgRgAG3gkQgGANAAAZQAAAaAGANQAGAOANAAQANAAAGgOQAHgMAAgbQAAgZgHgNQgGgNgNAAQgNAAgGANgAFKBAQgJgFgGgIIgEgHIgDgMIAQAAQADALAGAGQAHAEAKAAQANAAAHgHQAIgIAAgOQAAgPgIgHQgHgIgNABQgHgBgGADQgFADgFAFIgPAAIAKhEIBBAAIAAAPIg1AAIgFAkQAGgEAFgCQAGgBAHgBQAMABAJAFQAKAFAFAJQAFAJAAANQAAANgGALQgFAKgKAFQgKAHgNAAQgLAAgJgEgAMLBAIAAgTIATAAIAAATgALhBAIAAhGIghAAIAAAnQAAAHgBAFQgCAFgDAFQgDAEgEACQgEACgFABIgCAAIAAgJQAHgBADgFQAEgGAAgKIAAgwIA1AAIAABPgADSBAIgog+IgMAAIAAA+IgRAAIAAiDIARAAIAAA3IALAAIAhg3IASAAIgkA/IAtBEgABYBAIAAhcIhDBNIAAAPIgRAAIAAiDIARAAIAABbIBDhMIAAgPIARAAIAACDgAgwBAIAAg8IhDAAIAAA8IgRAAIAAiDIARAAIAAA5IBDAAIAAg5IARAAIAACDgAisBAIgpg+IgUAAIAAA+IgRAAIAAg+IgUAAIgpA+IgTAAIAuhEIglg/IASAAIAhA3IAUAAIAAg3IARAAIAAA3IAUAAIAgg3IATAAIglA/IAtBEgAlmBAIgOgoIgyAAIgOAoIgSAAIAviDIAWAAIAuCDgAl4AKIgUg7IgWA7IAqAAgAoiBAIAAiDIBRAAIAAAPIhAAAIAAB0gApNBAIgOgoIgyAAIgOAoIgSAAIAviDIAWAAIAuCDgApfAKIgUg7IgWA7IAqAAgAsdBAIAAiDIBWAAIAAAPIhFAAIAAApIAoAAQAJAAAHACQAHACAFAEQAHAEADAHQADAIAAAJQAAATgLAJQgKALgTAAgAsMAxIAmAAQAMAAAHgHQAHgFAAgMQAAgKgHgHQgHgFgMAAIgmAAg");
	this.shape.setTransform(79.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,159.6,13.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAjIAAhFIAfAAIAJABIAHAEIAFAGQABADAAAEQAAAFgCADIgHAHQAGACACAEQADAFAAAFQAAAEgCAEQgBAEgEADQgDADgEABIgKABgAgNAXIARAAQAFAAADgCQACgCAAgFQAAgFgCgCQgDgCgFAAIgRAAgAgNgGIAPAAQAFAAADgCQACgCAAgEQAAgEgCgCQgDgCgFAAIgPAAg");
	this.shape.setTransform(79.5,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAtIAAgrIgbAjIAAAIIgPAAIAAhFIAPAAIAAAqIAbgiIAAgIIAPAAIAABFgAgIgfQgEgCgCgEIAAgDIgBgEIAJAAQAAADACACQACACACAAQADAAACgCQACgCAAgDIAJAAIgBAFIgBAEQgDADgDABQgDACgFAAQgFAAgDgCg");
	this.shape_1.setTransform(72.6,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAjIgEgOIgaAAIgFAOIgPAAIAZhFIAQAAIAYBFgAAJAJIgJgbIgIAbIARAAg");
	this.shape_2.setTransform(65.5,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAjIAAhFIAeAAQAMAAAFAFQAGAGAAALQAAAHgDAFQgDAEgEADQgFADgHAAIgRAAIAAAZgAgMgBIANAAQAGAAADgDQADgCAAgGQAAgFgDgDQgDgCgGAAIgNAAg");
	this.shape_3.setTransform(59,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgNIgtAAIAAANIgPAAIAAgZIADAAQAEAAADgCQADgCADgEQACgDAAgEIAAgrIAyAAIAAA6IAGAAIAAAZgAgFACQAAAFgCADQgCAEgEADIAdAAIAAguIgVAAg");
	this.shape_4.setTransform(51.6,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAHIAAgNIAZAAIAAANg");
	this.shape_5.setTransform(46.2,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAjIAAg5IgWAAIAAgMIA4AAIAAAMIgVAAIAAA5g");
	this.shape_6.setTransform(41.7,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAgQgHgEgEgIQgEgIAAgLQAAgLAEgIQAEgJAHgFQAIgEAIAAQAIAAAHADQAHAEADAFQADADABADIABAHIgOAAQgCgGgDgEQgEgDgGAAQgIABgEAGQgFAHgBALQABALAFAHQAEAGAHAAQAHAAAFgEQAEgDAAgHIAOAAQgBAIgDAGQgEAGgHADQgGADgJAAQgJAAgHgFg");
	this.shape_7.setTransform(35.3,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAyAAIAAAMIgkAAIAAAQIAhAAIAAALIghAAIAAASIAmAAIAAAMg");
	this.shape_8.setTransform(28.8,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAjIAAg5IgWAAIAAgMIA5AAIAAAMIgWAAIAAA5g");
	this.shape_9.setTransform(22.5,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAjIAAgqIgbAiIAAAIIgOAAIAAhFIAOAAIAAAqIAbgiIAAgIIAOAAIAABFg");
	this.shape_10.setTransform(13.4,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAqIAAgNIgtAAIAAANIgOAAIAAgZIACAAQAEAAAEgCQACgCACgEQADgDAAgEIAAgrIAyAAIAAA6IAGAAIAAAZgAgFACQAAAFgCADQgCAEgEADIAeAAIAAguIgWAAg");
	this.shape_11.setTransform(5.8,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAjIAAgqIgbAiIAAAIIgOAAIAAhFIAOAAIAAAqIAbgiIAAgIIAOAAIAABFg");
	this.shape_12.setTransform(-1.4,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAjIAAg5IgWAAIAAgMIA4AAIAAAMIgVAAIAAA5g");
	this.shape_13.setTransform(-7.8,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAtIAAgrIgbAjIAAAIIgOAAIAAhFIAOAAIAAAqIAbgiIAAgIIAOAAIAABFgAgIgfQgEgCgCgEIgBgDIAAgEIAIAAQABADACACQACACACAAQAEAAABgCQACgCABgDIAIAAIAAAFIgCAEQgCADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_14.setTransform(-14.3,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAjQgFgDgFgEQgEgGgDgHQgDgHAAgIQAAgHADgHQADgHAEgFQAFgFAFgCQAGgDAHAAQAIAAAGADQAGACAEAFQAFAFACAHQADAHAAAIIgBAKQgBAEgCAFIgGAIQgEAEgGADQgGACgIAAQgHAAgGgCgAgJgVQgEAEgDAFQgCAGgBAGQABAHACAGQADAFAEADQAFAEAEAAQAGAAAFgDQAEgDACgGQADgFAAgHQAAgHgDgGQgCgFgEgEQgFgDgGAAQgEAAgFADg");
	this.shape_15.setTransform(-21.6,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAjIAAhFIAeAAQAMAAAFAFQAGAGAAALQAAAHgDAFQgDAEgEADQgFADgHAAIgRAAIAAAZgAgMgBIANAAQAGAAACgDQAEgCAAgGQAAgFgEgDQgCgCgGAAIgNAAg");
	this.shape_16.setTransform(-28.4,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAjIAAg5IgaAAIAAA5IgPAAIAAhFIA3AAIAABFg");
	this.shape_17.setTransform(-35.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-41.3,-6.3,126.9,15), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNATIAUgTIgUgSIABgDIAaAVIgaAWg");
	this.shape.setTransform(11,0.1,1.818,1.818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNATIAUgTIgUgRIAEgEIAXAVIgXAWg");
	this.shape_1.setTransform(10.5,0,1.818,1.818);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(8,-4,5.6,8.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF780A").s().p("ArgCSIAAkjIXBAAIAAEjg");
	this.shape.setTransform(11.7,0.8,1.141,0.829);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-72.4,-11.3,168.3,24.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AlwBNQgNgIgJgQQgHgPgBgVQABgUAHgPQAJgPANgJQAPgIATgBQATAAAPAJQAOAJAHAPQAIAQAAAUQAAALgCAKQgDAKgFAIQgFAJgHAGQgJAHgJADQgLAEgMAAQgTAAgPgJgAlngdQgKAHgGAMQgFALgBAQQABAQAFANQAGAMAKAGQALAHAOAAQAOAAALgHQAKgGAGgMQAFgMAAgQQABgRgGgLQgGgMgKgHQgLgHgOAAQgOAAgLAHgAntBTQgJgEgIgHQgKgJgGgOQgFgOgBgSQABgUAHgPQAHgQAOgIQAOgJASAAQAQAAALAGQALAGAHAKQAHAJABANIgSAAQgBgNgIgIQgKgIgPAAQgVAAgMAOQgLAPgBAYQAAARAGAMQAFAMAJAHQAKAGAOAAQALAAAIgEQAIgFAEgIQAGgIgBgLIASAAIAAAJIgCAHIgEAIQgHANgNAHQgMAHgRAAQgMAAgJgDgAt7BTQgJgEgIgHQgKgJgFgOQgGgOgBgSQABgUAIgPQAHgQAOgIQAOgJASAAQAPAAAMAGQALAGAHAKQAHAJAAANIgSAAQAAgNgJgIQgJgIgPAAQgWAAgMAOQgLAPAAAYQAAARAFAMQAFAMAKAHQAKAGAOAAQAKAAAJgEQAHgFAFgIQAFgIAAgLIASAAIAAAJIgCAHIgEAIQgIANgMAHQgNAHgQAAQgMAAgKgDgAOSBSIAAg8IhEAAIAAA8IgQAAIAAiCIAQAAIAAA3IBEAAIAAg3IARAAIAACCgAMTBSIgOgoIgyAAIgPAoIgRAAIAuiCIAXAAIAuCCgAMBAcIgUg6IgXA6IArAAgAJQBSIAAiCIA2AAQATAAALAKQALAJAAATQAAAJgDAGQgDAGgGAGQgFAEgHADQgFACgIAAIgpAAIAAA4gAJhALIAjAAQALAAAIgGQAGgFAAgLQAAgLgGgGQgIgGgLAAIgjAAgAIfBSIgpg+IgLAAIAAA+IgRAAIAAiCIARAAIAAA1IALAAIAhg1IASAAIgkA9IAtBFgAFcBSIAAiCIBbAAIAAAOIhKAAIAAApIBIAAIAAAPIhIAAIAAAtIBOAAIAAAPgADvBSIAAhcIhEBNIAAAPIgRAAIAAiCIARAAIAABaIBEhMIAAgOIARAAIAACCgABlBSIAAhcIhEBNIAAAPIgRAAIAAiCIARAAIAABaIBEhMIAAgOIARAAIAACCgAgkBSIAAg8IhCAAIAAA8IgRAAIAAiCIARAAIAAA3IBCAAIAAg3IARAAIAACCgAjzBSIAAiCIA2AAQAUAAALAKQAKAJAAATQAAAJgCAGQgEAGgFAGQgGAEgGADQgGACgHAAIgqAAIAAA4gAjiALIAjAAQAMAAAHgGQAGgFABgLQgBgLgGgGQgHgGgMAAIgjAAgApBBSIAAg8IhDAAIAAA8IgRAAIAAiCIARAAIAAA3IBDAAIAAg3IARAAIAACCgAsSBSIAAiCIBaAAIAAAOIhJAAIAAApIBHAAIAAAPIhHAAIAAAtIBMAAIAAAPgAC/g/QgHgDgDgFIgDgGIgBgIIALAAQABAGAEADQAEADAIAAQAHAAAEgDQAFgDAAgGIALAAQgBAMgHAGQgHAGgNAAQgHAAgGgCg");
	this.shape.setTransform(93.1,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,186.1,17.2), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AmDBjIAAgeIhcAAIAAAeIgRAAIAAgtQAIgBAFgDQAGgEAFgGQAEgGACgJQACgJAAgOIAAg/IBTAAIAABzIALAAIAAAtgAm/ACQAAATgFANQgFANgKAHIBFAAIAAhlIgxAAgACvBAQgOgIgIgQQgHgPgBgVQABgUAHgPQAIgPAOgJQAPgIATgBQATAAAOAJQAOAJAIAPQAIAQAAAUQAAALgDAKQgCAKgFAIQgFAJgIAGQgIAHgKADQgKAEgMAAQgTAAgPgJgAC4gqQgKAHgGAMQgGAMAAAPQAAAQAGANQAGAMAKAGQALAHAOAAQAOAAAKgHQALgGAFgMQAGgMAAgQQAAgQgFgMQgGgMgLgHQgKgHgOAAQgOAAgLAHgAkKBBQgOgIgIgOQgIgOgCgUIgbAAIAAA8IgRAAIAAiCIARAAIAAA4IAcAAQACgSAJgNQAIgOANgHQANgHASAAQATABAOAIQAOAJAIAPQAIAPAAAUQAAAVgIAPQgIAQgOAIQgOAJgTAAQgSAAgOgIgAkDgqQgKAHgGAMQgGAMAAAPQAAAQAGANQAGAMAKAGQALAHAOAAQAOAAAKgHQALgGAGgMQAFgMAAgQQAAgQgFgMQgGgMgLgHQgKgHgOAAQgOAAgLAHgAKJBFIAAhcIhDBNIAAAPIgRAAIAAiCIARAAIAABaIBDhMIAAgOIARAAIAACCgAIABFIAAhcIhEBNIAAAPIgRAAIAAiCIARAAIAABaIBEhMIAAgOIARAAIAACCgAEsBFIAAiCIA1AAQATAAAKAIQAKAJAAAQQAAAKgEAHQgFAHgJAEQANAEAFAIQAGAIAAALQAAAIgDAHQgCAHgFAFQgFAFgHADQgHADgKAAgAE9A2IApAAQALAAAGgGQAGgGAAgLQAAgKgGgGQgGgGgLAAIgpAAgAE9gFIAgAAQAOAAAGgFQAHgFAAgLQAAgLgHgFQgGgFgOAAIggAAgABlBFIAAhtIglBtIgRAAIgmhtIAABtIgOAAIAAiCIAWAAIAnBxIAmhxIAXAAIAACCgAg6BFIAAhcIhEBNIAAAPIgRAAIAAiCIARAAIAABaIBEhMIAAgOIARAAIAACCgAqJBFIAIgdQAEgOAGgNQAGgNAJgMIAUgeIhFAAIAAgQIBVAAIAAANQgOAUgLASQgKASgHASQgGATgEAVgAouAaIAAgNIAqAAIAAANgAJZhMQgGgDgDgFIgDgGIgBgIIALAAQABAGAEADQAEADAIAAQAHAAAEgDQAEgDABgGIALAAQgBAMgHAGQgHAGgNAAQgIAAgGgCgAhqhMQgGgDgEgFIgCgGIgBgIIALAAQAAAGAEADQAEADAIAAQAHAAAFgDQAEgDAAgGIALAAQgBAMgHAGQgHAGgMAAQgIAAgGgCg");
	this.shape.setTransform(66.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,133.3,19.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AiSBSIAAgeIhbAAIAAAeIgRAAIAAgtQAHgBAGgDQAGgEAEgGQAFgGACgJQACgIAAgOIAAhAIBTAAIAABzIAKAAIAAAtgAjNgOQAAASgFANQgGANgJAHIBFAAIAAhlIgxAAgABxA1QgJgEgIgHQgKgJgFgOQgGgOgBgRQABgVAIgPQAHgQAOgIQAOgJASAAQAPAAAMAGQALAGAHAKQAHAJAAANIgSAAQAAgNgJgIQgJgIgPAAQgWAAgMAOQgLAPAAAZQAAAQAFAMQAFAMAKAHQAKAGAOAAQALAAAIgEQAHgFAFgIQAFgIAAgLIASAAIAAAJIgCAHIgEAIQgIANgMAHQgNAHgQAAQgMAAgKgDgAGjA0IgNgoIgzAAIgNAoIgSAAIAviCIAVAAIAuCCgAGRgBIgUg7IgVA7IApAAgAEfA0Igpg9IgLAAIAAA9IgRAAIAAiCIARAAIAAA2IALAAIAgg2IATAAIglA+IAuBEgAAcA0IAAiCIARAAIAACCgAhlA0IAAiCIA1AAQATAAAKAIQALAJAAAQQAAAKgFAHQgFAHgIAEQAMAFAGAIQAFAHAAALQAAAIgCAHQgDAHgFAFQgFAFgHADQgHADgKAAgAhUAlIApAAQALAAAHgGQAFgGAAgLQAAgKgFgFQgHgGgLAAIgpAAgAhUgWIAhAAQANAAAGgFQAHgFAAgLQAAgLgHgFQgGgFgNAAIghAAgAkrA0IAAiCIARAAIAACCgAliA0IAAh0IhCAAIAAB0IgSAAIAAiCIBlAAIAACCg");
	this.shape.setTransform(43.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,87.7,16.4), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AgKA8QgOgIgIgQQgIgPAAgVQAAgUAIgPQAIgPAOgJQANgIATgBQATAAAPAJQAOAJAIAPQAHAQABAUQAAALgDAKQgDAKgFAIQgFAJgHAGQgIAHgKADQgLAEgMAAQgTAAgNgJgAgBguQgLAHgGAMQgFAMAAAPQAAAQAFANQAGAMALAGQAJAHAOAAQAOAAALgHQAKgGAGgMQAGgMAAgQQAAgQgGgMQgGgMgKgHQgLgHgOAAQgOAAgJAHgAnQA8QgOgIgIgQQgHgPgBgVQABgUAHgPQAIgPAOgJQAPgIATgBQATAAAOAJQAOAJAIAPQAIAQAAAUQAAALgDAKQgCAKgFAIQgFAJgIAGQgIAHgKADQgKAEgMAAQgTAAgPgJgAnHguQgKAHgGAMQgGAMAAAPQAAAQAGANQAGAMAKAGQALAHAOAAQAOAAAKgHQALgGAFgMQAGgMAAgQQAAgQgFgMQgGgMgLgHQgKgHgOAAQgOAAgLAHgAiEBDIAAgRQgRgBgMgGQgNgHgGgLQgHgLAAgOQAAgPAHgLQAGgLANgGQAMgHARgBIAAgQIARAAIAAAQQAaACAOANQAOANABAXQgBAWgOANQgOAOgaABIAAARgAhzAkIAKgCIAJgEQAKgFAEgIQAFgHAAgKQAAgLgFgHQgEgIgJgFIgJgEIgLgBgAiPgjIgJAEQgJAFgFAIQgEAHAAALQAAAKAEAHQAFAIAJAFIAJAEIALACIAAhIIgLABgAI/BBIgOgoIgyAAIgOAoIgSAAIAviCIAWAAIAuCCgAItALIgUg6IgWA6IAqAAgAG2BBIAAg8IhDAAIAAA8IgRAAIAAiCIARAAIAAA4IBDAAIAAg4IARAAIAACCgAENBBIAAh0IgrAAIAAgOIBnAAIAAAOIgrAAIAAB0gAByBBIAAiCIA2AAQATAAALAKQAKAJAAATQAAAJgCAHQgDAGgGAFQgFAEgHADQgGACgHAAIgpAAIAAA4gACDgFIAiAAQAMAAAHgGQAHgGAAgLQAAgLgHgGQgHgGgMAAIgiAAgAjnBBIAAhtIglBtIgSAAIglhtIAABtIgQAAIAAiCIAXAAIAnBxIAmhxIAYAAIAACCgAoMBBIgog+IgMAAIAAA+IgRAAIAAiCIARAAIAAA2IALAAIAhg2IASAAIgkA+IAtBEg");
	this.shape.setTransform(59.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,118.8,13.8), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AGgA/QgMgGgIgMQgHgJgDgLQgDgMAAgNQAAgOAFgOQAEgNAJgJQAIgJAKgEQALgFANAAQATAAAOAJQAOAIAIARIgXAMQgGgMgHgFQgIgGgLAAQgIAAgHAEQgGADgEAHIgEAHIgDALIA1AAIAAAVIg2AAQACASAJAKQAIAKAOAAQAMAAAJgHQAIgHAFgPIAZAIQgHAVgPALQgPAMgXAAQgPAAgLgGgAAXBAQgMgEgIgJQgIgKgEgNQgFgNAAgPQAAgOAFgNQAEgNAIgJQAIgKAMgEQALgFAOAAQAOAAALAFQALAEAJAKQAIAJAGANQAEANAAAPQAAAJgCAJQgCAKgFAIQgEAIgFAGQgJAJgLAEQgLAFgOAAQgOAAgLgFgAAdgnQgIAGgEAKQgFAKAAANQAAAOAFAKQAEALAIAFQAIAGALAAQALAAAIgGQAIgFAFgLQAEgKAAgNQAAgNgEgLQgFgKgIgGQgIgGgLAAQgLAAgIAGgAnPA9QgNgJgIgPQgHgPAAgWQAAgUAHgQQAIgPANgIQAOgJATAAQAPAAAMAGQAMAGAHAKQAEAFACAGIADAOIgbAAQgCgMgHgGQgHgGgMAAQgPABgKAMQgIAMgBAVQAAAVAJAMQAIAMARAAQAMAAAHgHQAIgGABgNIAbAAQgBAPgIALQgGALgNAGQgMAGgQAAQgTAAgNgIgArKBBQgJgEgHgHQgFgFgCgHQgDgHAAgJIAAgFIAbAAIABALIADAIQADADAEABQADACAGAAQAIAAAFgFQAEgFABgJQAAgGgCgDQgCgEgDgDIgGgCIgGgBIgKAAIAAgVIAIAAQAIAAAFgFQAFgEAAgIQAAgGgFgEQgEgFgIAAQgIAAgEAFQgFAEABAIIAAAEIgbAAIAAgEQAAgKACgHQADgHAFgFQAGgFAJgDQAJgDAKAAQANAAAJAFQAJAEAGAIQAGAIAAALQAAAJgEAHQgEAHgKAFQALADAEAHQAGAJAAALQAAAMgGAKQgGAKgLAFQgKAGgNAAQgLAAgJgEgAKDBBIAAiCIBfAAIAAAWIhEAAIAAAeIA/AAIAAAVIg/AAIAAAiIBHAAIAAAXgAIsBBIAAhsIgoAAIAAgWIBqAAIAAAWIgnAAIAABsgAEKBBIAAgXIAYAAIACAAIADgCIAAgBIADgEIACgIIgphcIAcAAIAcBBIAchBIAbAAIgzBxQgEAIgHAEQgGAFgKAAgACJBBIAAiCIA8AAQAJAAAIACQAHACAGAFQAFAFAEAHQACAGAAAHQAAAIgDAHQgFAGgKAGQALAGAGAHQAFAIAAAKQAAAIgEAIQgDAHgGAFQgGAFgHACQgJADgKAAgACkAqIAhAAQAJAAAFgEQAFgEAAgJQAAgIgFgEQgFgFgJAAIghAAgACkgNIAdAAQAKAAAFgEQAEgEAAgHQAAgHgEgEQgFgEgKAAIgdAAgAhkBBIAAiCIBIAAIAAAWIgtAAIAABsgAjfBBIAAgXIAXAAIADAAIACgCIAAgBIACgEIAEgIIgrhcIAcAAIAcBBIAchBIAcAAIgzBxQgEAIgGAEQgIAFgIAAgAkWBBIAAhsIgqAAIAABRQAAAHgEAGQgDAGgHAEQgGAEgIAAIgPAAIAAgXIAJAAQAEAAABgBQACgCAAgDIAAhlIBgAAIAACCgAoYBBIgJgbIgxAAIgJAbIgbAAIAviCIAfAAIArCCgAooAQIgSgzIgQAzIAiAAg");
	this.shape.setTransform(74.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,148.2,13.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("ACQBaQAIgCAEgFQADgGAAgJIgPAAIAAgaIAbAAIAAAZQAAAKgDAGQgCAGgGAEQgDADgEABIgJADgAiABEQgLgFgJgJQgIgJgFgNQgEgNgBgPQABgOAEgNQAFgNAIgKQAJgJALgFQALgEAOAAQAOAAAMAEQALAFAIAJQAJAJAFAOQAEANAAAPQAAAJgBAJQgDAJgEAIQgEAIgGAGQgIAJgLAFQgMAEgOAAQgOAAgLgEgAh6gjQgIAFgEAKQgEALgBANQABAOAEAKQAEAKAIAGQAJAFAKAAQAMAAAHgFQAJgGAEgKQAEgKAAgOQAAgNgEgKQgEgLgJgFQgHgGgMAAQgKAAgJAGgAmRBEQgLgFgIgJQgJgJgFgNQgFgNABgPQgBgOAFgNQAFgNAJgKQAIgJALgFQAMgEAOAAQAOAAALAEQALAFAJAJQAIAJAFAOQAEANABAPQAAAJgCAJQgDAJgEAIQgEAIgFAGQgJAJgLAFQgLAEgOAAQgOAAgMgEgAmKgjQgJAFgEAKQgFALABANQgBAOAFAKQAEAKAJAGQAHAFAMAAQAKAAAJgFQAHgGAFgKQAEgKABgOQgBgNgEgKQgEgLgIgFQgJgGgKAAQgMAAgHAGgAqXBAQgNgIgIgQQgHgPAAgVQAAgVAHgPQAIgPANgJQAOgIASAAQAPAAAMAGQAMAFAIALQADAFACAGIADANIgaAAQgDgMgGgFQgIgGgLAAQgQAAgJAMQgJAMAAAVQAAAWAJAMQAIAMAQAAQANAAAHgHQAIgHABgNIAaAAQgBAQgHAKQgHALgNAGQgLAGgRAAQgTAAgMgIgAsgBEQgLgFgJgJQgJgJgEgNQgFgNAAgPQAAgOAFgNQAEgNAJgKQAJgJALgFQALgEAOAAQAOAAALAEQAMAFAIAJQAJAJAFAOQAEANAAAPQAAAJgCAJQgDAJgEAIQgEAIgFAGQgIAJgMAFQgLAEgOAAQgOAAgLgEgAsagjQgIAFgEAKQgFALAAANQAAAOAFAKQAEAKAIAGQAIAFALAAQALAAAIgFQAIgGAFgKQAEgKAAgOQAAgNgEgKQgEgLgJgFQgIgGgLAAQgLAAgIAGgAQrBEIAAhPIg0A/IAAAQIgbAAIAAiCIAbAAIAABQIA0hAIAAgQIAbAAIAACCgAOjBEIAAhPIg1A/IAAAQIgbAAIAAiCIAbAAIAABQIA1hAIAAgQIAaAAIAACCgAMWBEIgYg7IgQAAIAAA7IgbAAIAAiCIAbAAIAAAxIAPAAIASgxIAcAAIgVA9IAdBFgAKYBEIAAgxIgjAAQgFAAgCACQgDACAAAFIAAAZQAAAHgCAEQgDAEgFAAIgYAAIADgBIABgDIADgGIAAgHIAAgWQABgJAEgFQAEgFAHgBIgHgDIgEgFQgEgEgCgGQgCgHAAgHQAAgLAFgJQAGgJAJgFQAJgFAMAAIA9AAIAACCgAJtgiQgFAFAAAIQAAAIAFAFQAEAFAIAAIAfAAIAAgkIgfAAQgHAAgFAFgAHhBEIgJgaIgwAAIgJAaIgcAAIAviCIAfAAIAsCCgAHRATIgRgyIgRAyIAiAAgAFRBEIAAg7Ig0AAIAAA7IgbAAIAAiCIAbAAIAAAxIA0AAIAAgxIAbAAIAACCgABWBEIAAhlIgXBlIgbAAIgYhlIAABlIgaAAIAAiCIAoAAIAXBnIAYhnIAoAAIAACCgAkeBEIAAiCIA5AAQAVAAALAKQAKALABAUQgBANgEAJQgFAKgJAFQgIAFgNAAIghAAIAAAvgAkDAAIAYAAQAMAAAEgFQAGgFAAgKQAAgKgGgFQgEgEgMAAIgYAAgAoIBEIAAhrIgoAAIAAgXIBpAAIAAAXIgmAAIAABrgAu/BEIAAiCIA6AAQAUAAAMAKQAKALAAAUQAAANgEAJQgGAKgIAFQgJAFgMAAIgiAAIAAAvgAukAAIAZAAQALAAAFgFQAFgFAAgKQAAgKgFgFQgFgEgLAAIgZAAgAv4BEIAAhsIgyAAIAABsIgcAAIAAiCIBpAAIAACCgAQAhKQgGgEgEgIIgCgFIgBgIIARAAQABAHADADQAEAEAFAAQAHAAADgEQADgDACgHIAQAAIgBAKIgEAHQgEAGgHADQgFADgKAAQgJAAgIgEg");
	this.shape.setTransform(109.5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,218.9,20), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F37920").s().p("AgZBgIAAgYIhVAAIAAAYIgbAAIAAgvIAEAAQAIAAAHgEQAFgDAEgGQADgHABgIIAAhPIBgAAIAABrIAKAAIAAAvgAhPAWQAAAIgDAHQgEAHgHAFIA5AAIAAhVIgrAAgALqBEQgNgJgHgPQgIgPABgWQgBgUAIgQQAHgPAOgIQANgJASAAQAQAAAMAGQAMAGAHAKQAEAFACAGIADAOIgaAAQgDgMgHgGQgHgGgLAAQgRABgIAMQgKAMABAVQAAAVAIAMQAJAMAPAAQANAAAIgHQAHgGACgNIAaAAQgCAPgGALQgIALgMAGQgMAGgRAAQgSAAgNgIgAjuBHQgMgEgIgJQgJgKgEgNQgFgNAAgPQAAgOAFgNQAEgNAJgJQAIgKAMgEQALgFAOAAQAOAAALAFQALAEAJAKQAIAJAGANQAEANAAAPQAAAJgCAJQgCAKgFAIQgEAIgFAGQgJAJgLAEQgLAFgOAAQgOAAgLgFgAjoggQgIAGgEAKQgFAKAAANQAAAOAFAKQAEALAIAFQAIAGALAAQALAAAIgGQAIgFAFgLQAEgKAAgNQAAgNgEgLQgFgKgIgGQgIgGgLAAQgLAAgIAGgAoCBHQgMgEgJgJQgIgKgFgNQgFgNAAgPQAAgOAFgNQAFgNAIgJQAJgKAMgEQAKgFAOAAQAOAAALAFQAMAEAIAKQAJAJAFANQAFANgBAPQAAAJgCAJQgCAKgEAIQgEAIgGAGQgIAJgMAEQgLAFgOAAQgOAAgKgFgAn9ggQgHAGgFAKQgFAKAAANQAAAOAFAKQAFALAHAFQAJAGAKAAQALAAAJgGQAHgFAFgLQAFgKgBgNQABgNgFgLQgEgKgIgGQgJgGgLAAQgKAAgJAGgAqVBEQgNgJgHgPQgHgPAAgWQAAgUAHgQQAHgPAOgIQANgJATAAQAPAAAMAGQANAGAGAKQAFAFACAGIACAOIgaAAQgCgMgIgGQgGgGgMAAQgQABgJAMQgJAMAAAVQAAAVAIAMQAJAMAQAAQAMAAAIgHQAHgGACgNIAaAAQgBAPgHALQgHALgNAGQgLAGgRAAQgTAAgNgIgANbBIIAAiCIAbAAIAAAxIAdAAQAMAAAKAGQAKAEAFAJQAGAJAAAMQAAAMgGAJQgGAJgJAFQgKAGgMAAgAN2AxIAdAAQAHAAAFgFQAEgFAAgIQAAgJgEgEQgEgFgIAAIgdAAgAJWBIIAAiCIBfAAIAAAWIhEAAIAAAeIA/AAIAAAVIg/AAIAAAiIBHAAIAAAXgAIABIIAAhsIgoAAIAAgWIBpAAIAAAWIgmAAIAABsgAGnBIIAAhQIg0BAIAAAQIgbAAIAAiCIAbAAIAABQIA0hAIAAgQIAbAAIAACCgADfBIIAAgXIAXAAIADAAIACgCIABgBIACgEIADgIIgqhcIAcAAIAcBBIAchBIAbAAIgyBxQgFAIgGAEQgHAFgJAAgACjBIIgYg8IgPAAIAAA8IgbAAIAAg8IgSAAIgYA8IgcAAIAchHIgUg7IAbAAIAQAxIATAAIAAgxIAbAAIAAAxIARAAIAQgxIAbAAIgVA7IAdBHgAlJBIIAAhsIgpAAIAABRQAAAHgFAGQgDAGgHAEQgFAEgIAAIgPAAIAAgXIAJAAQADAAACgBQACgCAAgDIAAhlIBfAAIAACCgAreBIIgJgbIgwAAIgJAbIgcAAIAviCIAgAAIArCCgArtAXIgSgzIgRAzIAjAAgAtuBIIAAg8Ig0AAIAAA8IgbAAIAAiCIAbAAIAAAxIA0AAIAAgxIAbAAIAACCgAF8hHQgGgEgEgHIgBgGIgBgHIAQAAQAAAGAEAEQAEADAFAAQAGAAAEgDQAEgEABgGIAPAAIgBAJIgDAHQgEAGgGADQgHADgJAAQgKAAgHgEg");
	this.shape.setTransform(95.8,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,191.6,19.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/oZUMAAAgynMA/RAAAMAAAAyng");
	this.shape.setTransform(202.5,162);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,405,324), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C3C46").s().p("AF1AyIAIgOQAOAKAQAAQAQAAAAgJQAAgFgGgEIgagKQgRgIAAgPQAAgMAKgHQAJgHARAAQARAAAKAJIgIAMQgHgIgOAAQgPAAAAALQAAAGAJADIAWAJQARAIAAAPQAAAMgIAHQgKAIgRAAQgWAAgPgLgAAiAwQgNgMAAgXQAAgSANgNQAMgNAVAAQAQAAANAJIgKANQgHgFgLAAQgOAAgHAIQgIAGAAANQAAAOAIAJQAHAIAOAAQALAAAJgHIAKAMQgLAMgVAAQgUAAgMgNgAkiAwQgNgNAAgWQAAgTANgMQAMgNAVAAQAUAAANANQAMAMAAATQABAVgMANQgNAOgVAAQgVAAgMgNgAkVgIQgGAIgBANQABAOAGAJQAIAJAMAAQAaAAAAggQAAgNgGgHQgIgJgMAAQgMAAgIAIgApFAwQgNgMAAgXQAAgSANgNQANgNAUAAQAQAAANAJIgKANQgGgFgMAAQgOAAgGAIQgIAGAAANQAAAPAHAIQAIAIANAAQAMAAAIgHIALAMQgNAMgTAAQgVAAgMgNgAIaA7IAAhZIA2AAIAAAQIgkAAIAAASIAeAAIAAAPIgeAAIAAAZIAmAAIAAAPgAHPA7IAAhZIA2AAIAAAQIgkAAIAAASIAfAAIAAAPIgfAAIAAAZIAnAAIAAAPgAFAA7IAAghIgMgRQgNgVgGgSIASAAQAHAQAJAOIAGAKIAGgKQAKgQAGgOIARAAQgGAUgMATQgFAIgHAJIAAAhgADmA7IAAhZIATAAIAABKIAkAAIAAAPgACbA7IAAhZIA2AAIAAAQIgjAAIAAASIAfAAIAAAPIgfAAIAAAZIAnAAIAAAPgAgwA7QgOgagYgXIgPgNIAAA+IgSAAIAAhaIAIAAQAVAOAQAQQANALALAOIAAg2IASAAIAABZgAjCA7IAAhZIA2AAIAAAQIgkAAIAAASIAfAAIAAAPIgfAAIAAAZIAnAAIAAAPgAlJA7QgDgJgGgHQgJgOgHgEIgIAAIAAAiIgSAAIAAhZIAeAAQAhAAAAAcQAAASgQAGQAFAEAFAIQAKAOACALgAlqAMIALAAQAPAAAAgOQAAgOgOAAIgMAAgAm3A7IAAhJIgaAAIAAgQIBHAAIAAAQIgaAAIAABJgAnwA7IAAhZIASAAIAABZgABtAcIAAgOIAhAAIAAAOgAHiguIAUgOIAHAJIgXALgAihgxQABgHAHAAQAHAAAAAHQAAAHgHAAQgHAAgBgHgAi6gxQAAgHAIAAQAHAAAAAHQAAAHgHAAQgIAAAAgHg");
	this.shape.setTransform(59.5,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,118.9,12.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C3C46").s().p("Ah3AtQgMgMAAgVQAAgUAMgNQAMgMASAAQASAAALAMQANANAAAUQAAAVgNAMQgLAMgSAAQgSAAgMgMgAhrgJQgGAIAAANQAAAOAGAIQAHAIALAAQALAAAHgIQAGgIAAgOQAAgNgGgIQgHgJgLAAQgLAAgHAJgADKA3IAAg2IgiArIAAALIgSAAIAAhXIASAAIAAA1IAigqIAAgLIASAAIAABXgABuA3IAAg2IgiArIAAALIgSAAIAAhXIASAAIAAA1IAigqIAAgLIASAAIAABXgAgdA3IAAhXIAmAAQANAAAHAHQAIAGAAAKQAAAKgMAHQAOAJAAANQABALgJAHQgIAHgOAAgAgLAoIAUAAQANAAAAgMQAAgLgNAAIgUAAgAgLACIASAAQAMAAAAgJQAAgKgMAAIgSAAgAinA3IAAgoIgiAAIAAAoIgSAAIAAhXIASAAIAAAgIAiAAIAAggIASAAIAABXgACmgwQgBgCAAgGIAKAAQACAJAHAAQAJAAABgJIALAAQAAAGgEAFQgFAIgMAAQgNAAgFgLg");
	this.shape.setTransform(22,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,44,11.5), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.disk();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.disk();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},1500);
	}
	this.frame_87 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(44).call(this.frame_87).wait(44));

	// Слой 8
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(181.3,70.2,1,1,0,0,0,103.7,43.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({alpha:1},17).wait(51));

	// Layer 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,71.8,1,1,0,0,0,130.4,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(16).to({_off:false,alpha:0},0).to({alpha:1},21,cjs.Ease.get(-1)).wait(7).to({alpha:0},17,cjs.Ease.get(-1)).to({_off:true},1).wait(68));

	// Слой 1
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.5,69,1,1,0,0,0,181.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,scaleY:0.07,alpha:0},0).to({scaleY:1.12,y:69.1,alpha:1},19,cjs.Ease.get(1)).to({scaleY:1,y:69},4).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,138);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(83.3,12.9,1,1,0,0,0,79.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,x:112.8,alpha:0},0).to({x:83.3,alpha:1},18,cjs.Ease.circOut).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.5,26.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// Символ 27
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(52.2,34.3,1,1,0,0,0,48.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false,x:77.7,alpha:0},0).to({x:52.2,alpha:1},18,cjs.Ease.circOut).wait(8));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.9,14.2,1,1,0,0,0,53.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,x:82.4,alpha:0},0).to({x:56.9,alpha:1},18,cjs.Ease.circOut).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.4,48.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(7));

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(73.1,35,1,1,0,0,0,69.8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(7).to({_off:false,scaleX:0.56,scaleY:0.56,alpha:0},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:73,alpha:0.012},0).wait(1).to({scaleX:0.57,scaleY:0.57,alpha:0.027},0).wait(1).to({scaleX:0.58,scaleY:0.58,alpha:0.046},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.07},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.139},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.189},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.254},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.344},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.467},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.614},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.742},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.834},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:35.1,alpha:0.898},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:35,alpha:0.943},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:73.1,alpha:0.976},0).wait(1).to({regX:69.7,regY:14.6,scaleX:1.07,scaleY:1.07,x:73,y:35.1,alpha:1},0).to({regX:69.8,regY:14.5,scaleX:1,scaleY:1,x:73.1,y:35},5).wait(17));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.8,43.6,1,1,0,0,0,9.9,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(14).to({_off:false,scaleX:0.55,scaleY:0.55,alpha:0},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.012},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.027},0).wait(1).to({scaleX:0.58,scaleY:0.58,alpha:0.046},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.07},0).wait(1).to({scaleX:0.62,scaleY:0.62,alpha:0.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.139},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.189},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.254},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.344},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.467},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.614},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:159.9,alpha:0.742},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:159.8,alpha:0.834},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.898},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:159.9,alpha:0.943},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:159.8,alpha:0.976},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:159.9,y:43.7,alpha:1},0).to({scaleX:1,scaleY:1,x:159.8,y:43.6},5).wait(10));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.3,8.8,1,1,0,0,0,27.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,scaleX:0.63,scaleY:0.63,y:8.9,alpha:0},0).wait(1).to({regY:9.3,scaleX:0.63,scaleY:0.63,y:9.1,alpha:0.012},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:9.2,alpha:0.027},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.046},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.07},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.139},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.189},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.254},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.344},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:9.3,alpha:0.614},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:28.4,y:9.4,alpha:0.742},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.834},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.898},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.943},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.976},0).wait(1).to({regY:8.8,scaleX:1.2,scaleY:1.2,y:8.9,alpha:1},0).to({scaleX:1,scaleY:1,x:28.3,y:8.8},5).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.1,63.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(95.7,32.6,1,1,0,0,0,93,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10).to({_off:false,x:135.7,alpha:0},0).to({x:95.7,alpha:1},17,cjs.Ease.circOut).wait(8));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.5,12.2,1,1,0,0,0,66.6,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,x:113,alpha:0},0).to({x:69.5,alpha:1},17,cjs.Ease.circOut).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.1,48.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(2));

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(47.4,35.6,1,1,0,0,0,43.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8).to({_off:false,x:66.9,alpha:0},0).to({x:47.4,alpha:1},18,cjs.Ease.circOut).wait(10));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.9,12.7,1,1,0,0,0,59.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,x:82.4,alpha:0},0).to({x:62.9,alpha:1},18,cjs.Ease.circOut).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.1,48.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58585B").s().p("ACVBUIgDgBQgbgXgfgXQg/gtgZAAQgZAAg+AtIg6AuIgDABIgBAAQgDgCAAgEIgBgVQAAgNAKgMIABAAIA7g7QA9g4AWAAQAXAAA9A4QAeAcAdAfQALAMAAANIgBAVQAAAFgDABgACQBGIABgNQAAgJgIgKQgmgogkggQgsgngSgBIgBAAQAAAXgBAEQgCAEgNAGQgJACgfASQgtAYgkAhQgFAFgBAGIgBAFIAAAOQAkgfAggWQA0giAYAAQApAABnBXg");
	this.shape.setTransform(26.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58585B").s().p("AAFAEIgFgDIgEADQgCABgFABQgDgBgDgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQADgBADAAQAEAAADABIAEACIAFgCQADgBAEAAQADAAADABQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgEABQgEgBgDgBg");
	this.shape_1.setTransform(41.3,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58585B").s().p("AgWAYQgEAAgDgDQgDgDAAgEIAAgjQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIA9AAIACABIAAABIAAAHIgrAAIgCAAIgBACIAAAIIAmAAIAAAIIgmAAIAAAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAABAAIArAAIAAAHIgBABIgBABg");
	this.shape_2.setTransform(41.3,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58585B").s().p("AgMAZQgMgBgIgHQgIgHAAgKQAAgJAIgIQAJgHALAAIAUAAIAFAAQAKAAAIAFQAHAFADAHIgSAAIgCgBQgFgJgLAAIgIAAQgHAAgGAFQgGAFAAAHIAAAAQAAAIAGAFQAGAFAHAAIAIAAQAKAAAGgJIACgBIASAAQgHARgUAAIgOAAIgMAAg");
	this.shape_3.setTransform(4.1,34.7);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(24.3,34.7,1,1,0,0,0,3.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58585B").s().p("AgGAYIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAIAAgsQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAOAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAuIgIAAIgHAAg");
	this.shape_4.setTransform(10.2,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58585B").s().p("AgHAYQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgZQAAgEgDgDQgDgDgEAAIgRAAIAAgIQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIBFAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAIIgZAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAAjg");
	this.shape_5.setTransform(15.8,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58585B").s().p("AATAYIgCgCIAAgWQAAgHgEgEQgEgEgEAAIgSAAQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAkIgRAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAgrQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAnAAQAMAAAIAHQAIAHAAAKIAAAXg");
	this.shape_6.setTransform(49.1,34.7);

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.9,34.7,1,1,0,0,0,4.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58585B").s().p("ACWBUIgEgBQgagXgggXQg/gtgZAAQgZAAg+AtIg6AuIgDABIgCAAQgCgBAAgEIgBgWQAAgNAKgLIA8g8QA9g4AWAAQAXAAA9A4QAeAcAdAgQALALAAANIgBAWQAAADgCACgABNARQAiAYAhAdIABgNQAAgJgIgKQglgnglghQgsgngSgBIgBAAQAAAXAAAEQgCAEgOAGQgRAGgWANQguAZgkAiQgFAEgCAHIAAAEIAAAOQAkgeAhgXQAzgiAYAAQAYAAA1Aig");
	this.shape_7.setTransform(26.3,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,52.7,37.2), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(26.3,18.6,1,1,0,0,0,26.3,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},17).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,37.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(12));

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(115.1,60.5,1,1,0,0,0,74.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15).to({_off:false,regX:74.2,scaleX:0.67,scaleY:0.67,alpha:0},0).to({regX:74.1,scaleX:1,scaleY:1,alpha:1},18,cjs.Ease.circOut).wait(23));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.2,36.2,1,1,0,0,0,109.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(8).to({_off:false,scaleX:0.66,scaleY:0.66,alpha:0},0).to({scaleX:1,scaleY:1,alpha:1},18,cjs.Ease.circOut).wait(30));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.4,11.9,1,1,0,0,0,95.8,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,scaleX:0.7,scaleY:0.7,alpha:0},0).to({scaleX:1,scaleY:1,alpha:1},18,cjs.Ease.circOut).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,231.9,74.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(6));

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35,35);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},31).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,rotation:-360},31,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(251.3,139.2,0.254,0.406,0,0,0,35.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.6,149.5,0.367,0.489,0,0,0,35.4,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.car();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,300,225), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(10));

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(108.8,6,1,1,0,0,0,59.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10).to({_off:false,x:124.5,alpha:0},0).to({x:108.8,alpha:1},19,cjs.Ease.circOut).wait(22));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22,6.5,1,1,0,0,0,22,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,x:37.8,alpha:0},0).to({x:22,alpha:1},19,cjs.Ease.circOut).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.2,12.3);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(13));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(17).to({_off:false,regX:0.2,regY:0.2,scaleX:4.23,scaleY:4.23,x:-101.8,y:1.7},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:74.6,y:0.8},16,cjs.Ease.get(1)).to({x:71.6},4).wait(35));

	// Слой 7
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(25).to({_off:false,x:-15.9,alpha:0},0).to({x:-12.1,alpha:1},14).wait(33));

	// Слой 4
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(72));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AwID+IAAn7MAgRAAAIAAH7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-7.2,y:1.3}).wait(26).to({graphics:null,x:0,y:0}).wait(46));

	// Слой 1
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(192,13.7,1,0.068);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:0},15,cjs.Ease.get(1)).to({regY:0.2,scaleY:1.07,y:-0.7},11,cjs.Ease.get(-1)).to({regY:0.3,scaleY:0.98,y:0.6},4).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-11.3,168.3,24.3);


// stage content:
(lib.C_Elysee_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_62 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_90 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_115 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_131 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_150 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},3000);
	}
	this.frame_180 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},2000);
	}
	this.frame_206 = function() {
		this.stop();
		var _this = this;
		var t= setTimeout(function(){
		_this.play()
		},6000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(38).call(this.frame_62).wait(28).call(this.frame_90).wait(25).call(this.frame_115).wait(16).call(this.frame_131).wait(19).call(this.frame_150).wait(30).call(this.frame_180).wait(26).call(this.frame_206).wait(22));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(228));

	// Слой 11
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(151.5,136.1,1,1,0,0,0,202.5,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).wait(199).to({alpha:1},13,cjs.Ease.get(1)).wait(1));

	// text1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,139.8,1,1,0,0,0,116,42.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(12).to({x:-121.9,alpha:0},17,cjs.Ease.get(-1)).wait(182));

	// new_citr
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(113,33,1,1,0,0,0,84,6.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(223));

	// logo
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(254,37.1,1,1,0,0,0,26.3,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(228));

	// price
	this.instance_4 = new lib.Символ19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(112.6,83.4,1,1,0,0,0,86.5,31.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).wait(7).to({x:51.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(63));

	// Credit
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(85.7,81.4,1,1,0,0,0,59.7,24.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).wait(7).to({x:24.7,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(81));

	// Back
	this.instance_6 = new lib.Символ21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(109.7,70.6,1,1,0,0,0,83.7,13.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(107).to({_off:false},0).wait(11).to({x:77.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(98));

	// sensor
	this.instance_7 = new lib.Символ16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(122.5,81.4,1,1,0,0,0,96.5,24.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).wait(14).to({x:75.5,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(121));

	// comfort
	this.instance_8 = new lib.Символ13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.5,81.4,1,1,0,0,0,65.5,24.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).wait(24).to({x:53.5,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// Слой 30
	this.instance_9 = new lib.Символ32();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.1,147.1,1,1,0,0,0,181.5,69);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(201).to({_off:false},0).wait(27));

	// BTN
	this.instance_10 = new lib.Символ21_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.1,219.2,1.089,1.089,0,0,0,12,1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(159).to({_off:false},0).wait(32).to({alpha:0},9).to({_off:true},1).wait(27));

	// car
	this.instance_11 = new lib.Символ5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(392.1,125,0.613,0.613,0,0,0,150.1,112.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(31).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:150.2,y:165.6},29,cjs.Ease.get(1)).wait(99).to({y:125.1},17,cjs.Ease.get(-0.47)).wait(8).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(28));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(228));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99,99.1,405,324);
// library properties:
lib.properties = {
	id: '961054D415F6B84B9374B5365C67498B',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"car.jpg", id:"car"},
		{src:"disk.png", id:"disk"}
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