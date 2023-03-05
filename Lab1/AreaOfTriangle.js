function areaOfTriangle(side1,side2,side3) {
    let p = (side1 + side2 + side3) / 2;
    let a = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    return a
}

console.log(areaOfTriangle(15,10,12));