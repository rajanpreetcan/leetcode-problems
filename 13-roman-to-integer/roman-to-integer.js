/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
    I : 1,
     V : 5,
     X : 10,
     L : 50,
     C : 100,
     D : 500,
     M : 1000
    }
    let result = 0;
    for(let i = 0;i<s.length;i++){
        let y = s[i]
        let z = s[i+1]

        if( (y == 'I' && (z == 'V' || z == 'X')) || 
        (y == 'X' && (z == 'L' || z == 'C')) ||
        (y == 'C' && (z == 'D' || z == 'M')) ) {
            let cal = obj[z] - obj[y]
            result += cal
            i++
        }else{
            result += obj[s[i]]
        }
    }
    return result
};