function encodeFun(input){
    input = input.toUpperCase();
    let encodedString = "";
    for(let i = 0; i < input.length; i++) {
        let charCode = input[i].charCodeAt(0);
        let oppCharCode = ('A'.charCodeAt(0) + 'Z'.charCodeAt(0)) - charCode;
        if(charCode % 2 === 0){
            encodedString += String.fromCharCode(charCode) + String.fromCharCode(oppCharCode);
        } else{
            encodedString += String.fromCharCode(oppCharCode);
        }
    }
    return encodedString;
}


function decodeFun(input) {
    input = input.toUpperCase();
    let decodedString = "";
    for (let i = 0; i < input.length; i++) {
        let charCode = input[i].charCodeAt(0);
        let oppCharCode = ('A'.charCodeAt(0) + 'Z'.charCodeAt(0)) - charCode;
        if (charCode % 2 === 0 ) {
            if(i+1 < input.length && input[i+1].charCodeAt(0) % 2 !== 0){
                decodedString += String.fromCharCode(charCode);
                i++;
            } else{
                decodedString += String.fromCharCode(oppCharCode);
            }
        } else {
            decodedString += String.fromCharCode(oppCharCode);
        }
    }
    return decodedString;
}



const testCases = [
    { input: "ABC", output: "ZBYX" },
    { input: "XYZ", output: "XCBZA" },
    { input: "GHI", output: "THSR" },
    { input: "NOP", output: "NMLPK" },
    { input: "JKL", output: "JQPLO" },
    { input: "UTS", output: "FTGH" },
  ];
  

// testing encodeFun
console.log("Encoded Results")
testCases.forEach((el) => {
    console.log("input: " , el.input, " - encoded value: " + encodeFun(el.input) );
});
console.log("\n")

// testing decodeFun
console.log("Decoded Results")
testCases.forEach((el) => {
    console.log("input: " , el.output, " - decoded value: " + decodeFun(el.output) );
});




