
function generate(length = 16) {
    var array = new Uint16Array(length);
    crypto.getRandomValues(array);
    let str= ''
    for (let num of array) {
      str += String.fromCharCode(num % 94 + 32)
    }
    return str
  }
  console.log(generate())
