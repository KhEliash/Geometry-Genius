// triangle
function calculateTriangleArea() {

  // triangle base
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  // calculate triangle area
  const area = 0.5 * base * height;
//   display
    const display = document.getElementById('tri-area');
    display.innerText = area;
    
}

// Rectangle
function calculateRectangleArea( ) {

    // rectangle width
    const rectangleInput =document.getElementById('rectangle-width');
    const rectangleText = rectangleInput.value;
    const width = parseFloat(rectangleText);
 
    // rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
 
    // calculate rectangle 
    const areaa = width * length;
     // display
    const display = document.getElementById('rec-area');
    display.innerText = areaa;

}
