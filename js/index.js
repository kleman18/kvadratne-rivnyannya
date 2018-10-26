//зробив за вашим прикладом і скорочено (закоментований варіант, менше операцій).
//Працюють обидва

const a = parseFloat(prompt('Введіть константу А'));
const b = parseFloat(prompt('Введіть константу B'));
const c = parseFloat(prompt('Введіть константу С'));

function solveQuadraticEquatin (a, b, c) {
    const d = diskr(a, b, c);
    
    if(d > 0) {
        const x1 = root1(b, d, a);
        const x2 = root2(b, d, a);
        return ('х1 =' + x1 + '\nх2 =' + x2);
    }
    
    if(d === 0) {
        const x12 = root12(b, a);
        return ('х1 = х2 =' + x12);
    }
    
    else (d < 0) 
        return('Рівняння коренів немає');
    
    
    function diskr(a, b, c) {
        return b * b - 4 * a * c;
    }
    
    function root1(b, d, a) {
        return (- b + Math.sqrt(d))/ (2 * a);
    }
    
    function root2(b, d, a) {
        return (- b - Math.sqrt(d)) / (2 * a);
    }
    
    function root12(b, a) {
        return - b / (2 * a);
}
}
alert(solveQuadraticEquatin (a, b, c));



//function solveQuadraticEquatin (a, b, c) {
 //   const d = b * b - 4 * a * c ;
 //  
 //if (d > 0) {
 //       const x1 = (- b + Math.sqrt(d)) / (2 * a);
  //      const x2 = (- b - Math.sqrt(d)) / (2 * a);
 //       return('х1 =' + x1 + '\n х2 =' + x2);
//}
// if (d === 0) {
//        const x12 = -b / (2 * a);
//        return ('х1 = х2 =' + x12);
//}
//
//else (d < 0) 
 //       return('Рівняння коренів немає');
//}
//
//alert (solveQuadraticEquatin (a, b, c));