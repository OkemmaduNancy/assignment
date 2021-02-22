function areaOfTriangle(side1, side2, side3) {
    side1 = 5
    side2 = 7
    side3 = 3

    const s = (side1 + side2 + side3) / 2

    areaValue = Math.sqrt(
        s * (s - side1) * (s - side2) * (s - side3)
    );
    return areaValue;
};
areaOfTriangle(1, 2, 3);



// JavaScript program to find the area of a triangle     
// const side1 = 5
// const side2 = 7
// const side3 = 3

// const s = (side1 + side2 + side3)/2

// //calculate the area
// const areaValue = Math.sqrt(
//     s * (s - side1) * (s - side2) * (s - side3)
// );
// console.log(areaValue)
