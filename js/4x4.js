
var hexToRGB = function(hex) {
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

        return "rgb(" + r + ", " + g + ", " + b + ")";
}

var draw = function () {
	var canvas = document.getElementById('matrix');
	var ctx = canvas.getContext('2d');

	var defaultFrame = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
    var coordX = -128;
    var coordY = -128;
    var width = 128;
    var height = 128;

	for (var i = 0; i < defaultFrame.length; i++) {
        coordY = coordY + 128;
        coordX = -128;
		for (var j = 0; j < defaultFrame[i].length; j++) {
		coordX = coordX + 128;

         ctx.fillStyle = hexToRGB(defaultFrame[i][j]);
         ctx.fillRect(coordX, coordY, width, height);
		}
	}
};

draw();





