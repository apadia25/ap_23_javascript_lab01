//Write a program to print table of 3 like below.
// 3*1=3=3
// 3*2=3+3=6
// 3*3=3+3+3=9
// .
// .
// .
// 3*10=3+3+3+3+3+3+3+3+3+3=30

function printTableOfThree() {
    for (let i = 1; i <= 10; i++) {
        let output = "3*" + i + "=";
        let result = "";
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (j > 1) {
                output += "+";
                result += "+";
            }
            output += "3";
            result += "3";
            sum += 3;
        }
        output += "=" + sum;
        console.log(output);
    }
}

printTableOfThree();
