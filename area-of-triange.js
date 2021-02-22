function areaOfTriangle(side1, side2, side3) {

    const s = (side1 + side2 + side3) / 2

    areaValue = Math.sqrt(
        s * (s - side1) * (s - side2) * (s - side3)
    );
    return areaValue;
};
const valu = areaOfTriangle(8, 8, 8);
console.log(valu);


