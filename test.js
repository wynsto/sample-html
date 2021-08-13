/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    let neg=[], pos = [], zeros = []
    for (const num of arr) {
        if (num < 0) {
            neg.push(num)
        } else if (num > 0) {
            pos.push(num)
        } else {
            zeros.push(num)
        }
    }


    
    if (zeros.length/2 != Math.floor(zeros.length/2) || neg.length/2 != Math.floor(neg.length/2) || pos.length/2 != Math.floor(pos.length/2)) {
        return false
    }
    
    neg.sort((a, b) => {return b-a})
    pos.sort((a, b) => {return a-b})
    console.log(neg)
    console.log(pos)

    const result1 = sort(neg)
    const result2 = sort(pos)
    
    function sort(arr) {
        let i = 0
        for (; i < arr.length/2; i++) {
            const target = 2 * arr[2 * i]
            const targetIndex = arr.indexOf(target)
            console.log('targetIndex', targetIndex)
            const halfTarget = Math.floor(arr[2 * i] / 2)
            const halfTargetIndex = arr.indexOf(target)
            console.log('halfTargetIndex', targetIndex)
            if (targetIndex > -1) {
                // arr.splice(targetIndex, 1)
                // arr.splice(i, 1)
                continue
            }  else {
                 return false
            }
        }
        return true
    }
    return result1 && result2
};

const result = canReorderDoubled([2,4,0,0,8,1])

console.log(result)
