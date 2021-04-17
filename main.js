function Draw() {
    const RibA = document.getElementById("input-RibA").value;
    const RibB = document.getElementById("input-RibB").value;
    const InX = document.getElementById("input-X").value;
    const InY = document.getElementById("input-Y").value;
    if ((!isNaN(RibA) && RibA < 429 && RibA > 0) && 
    (!isNaN(RibB) && RibB < 429 && RibB > 0) &&
    (!isNaN(InX) && (429 - InX) > RibA && InX > 0) && 
    (!isNaN(InY) && (429 - InY) > RibB && RibB > 0)
    )
    {
    const Square = Math.sqrt((RibA * RibB) * (RibA * RibB));
     document.getElementById("output-square").innerHTML = Square;
     const MyCanvas = document.getElementById("Canvas");
     const ctx = MyCanvas.getContext("2d");
     ctx.beginPath();
     MyCanvas.strokeStyle = "black";
     ctx.strokeRect(InX, InY, RibA, RibB)
    } else {
      alert("Your Square not Correct ,Negative value ,The coordinates are wrong");
    }
  }
  
function clearMyCanvas() {
    const canvasElement = document.getElementById("Canvas");
    const myCanvas = canvasElement.getContext("2d");
    myCanvas.clearRect(0, 0, canvasElement.width, canvasElement.height); // x1, y1, x2, y2
}





function showCoords(event) {
    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext("2d");
    context.moveTo(0, 0);
    context.lineTo(430, 430);

    const x = event.clientX - 709;
    const y = event.clientY - 42;
    document.getElementById("input-X").value = x;
    document.getElementById("input-Y").value = y;
  }
 
  


  
