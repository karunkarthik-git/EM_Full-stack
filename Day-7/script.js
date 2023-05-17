const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const body = document.getElementsByTagName('body')[0];

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

red.addEventListener('change', function(event){
    // console.log(event.target.value); // -> key point = check for value of any input.
    redValue = event.target.value;
    updateBackgroundColor(redValue, greenValue, blueValue);
})

green.addEventListener('change', function(event){
    greenValue = event.target.value;
    updateBackgroundColor(redValue, greenValue, blueValue);
})

blue.addEventListener('change', function(event){
    blueValue = event.target.value;
    updateBackgroundColor(redValue, greenValue, blueValue);
})

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

function updateBackgroundColor(red, green, blue) {
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    const colorString = rgbToHex(red, green, blue);
    // console.log(colorString)
    // [a,b,c,d,e,f]
    //  0,1,2,3,4,5
    document.getElementsByClassName('container')[0].style.boxShadow = `10px 20px 30px ${colorString}`;
}