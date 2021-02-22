// JavaScript program to find the area of a triangle     
const side1 = 5
const side2 = 7
const side3 = 3
    
const s = (side1 + side2 + side3)/2
    
//calculate the area
const areaValue = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
);
console.log(areaValue)
