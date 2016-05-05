
var theBody = document.getElementsByTagName("body")[0];
var makeSquare = function(color) {
    var myDiv1 = document.createElement("div");
    document.body.appendChild(myDiv1);
    myDiv1.className = "divBody";
    myDiv1.style.width = '1.1%';
	myDiv1.style.paddingBottom = '1.1%';
	myDiv1.style.float = 'left';
	myDiv1.style.borderStyle = 'ridge';
	myDiv1.style.backgroundColor = color;
};

var makeColor = function(color) {
    var myDiv2 = document.createElement("div");
    document.body.appendChild(myDiv2);
    myDiv2.className = 'divColor';
    myDiv2.style.width = '1.1%';
	myDiv2.style.paddingBottom = ' 1.1%';
	myDiv2.style.float = 'left';
	myDiv2.style.borderStyle = 'ridge';
	myDiv2.style.backgroundColor = color;
};

var arrColor = ["#000000","#696969","#A9A9A9","#DCDCDC","#FFFFFF",
 				"#000080","#0000CD","#4169E1","#1E90FF","#87CEEB",
 				"#8A2BE2","#4B0082","#6A5ACD","#7B68EE","#9370DB",
 				"#8B008B","#9400D3","#9932CC","#BA55D3","#800080",
 				"#DDA0DD","#EE82EE","#EE82EE","#FF00FF","#DA70D6",
 				"#C71585","#FF1493","#FF69B4","#FFC0CB","#FAEBD7",
 				"#F5F5DC","#FFE4C4","#FFEBCD","#F5DEB3","#FFFACD",
 				"#FFFFE0","#8B4513","#D2691E","#CD853F","#800000",
 				"#A52A2A","#FF0000","#FF6347","#FA8072","#FF4500",
 				"#FFA500","#FFD700","#DAA520","#F0E68C","#FFFF00",
 				"#9ACD32","#7CFC00","#00FF00","#008000","#006400",
 				"#32CD32","#00FA9A","#20B2AA","#008080","#00FFFF",
 				"#40E0D0","#7FFFD4","#FFE4E1","#FFF0F5","#FDF5E6",
 				"#FFEFD5","#F5FFFA","#F0FFFF"];

var makePixel = function(){
	for(var i = 0; i < 2244; i++){
		makeSquare('white');	
	}
	for(var j = 0; j < arrColor.length; j++){
		bgColor = arrColor[j];
		makeColor(bgColor);
	}

	var chooseColor ;
	var getColor = document.getElementsByClassName("divColor");
	for(var x=0; x<getColor.length; x++){
		getColor[x].addEventListener("click", function(){	    
		  	chooseColor = event.target.style.backgroundColor;
		  	console.log("Clicked");
		})
	}

	var whiteBox = document.getElementsByClassName("divBody");
	//set color
	for (var y = 0; y < whiteBox.length; y++) {
	    whiteBox[y].addEventListener("click", function(event) {
	        event.target.style.backgroundColor = chooseColor;
	    })
	}
};

makePixel();
 



$('#card-field').on('click', 'td', function(event) {
        
            event.target.style.backgroundImage = "url('" + newImage[i] + "')";
        
    });
    