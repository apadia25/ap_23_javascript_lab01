//Write a program to print 8's table using ** operator.

function printEightsTable() {
    for (let i = 1; i <= 10; i++) {
        const result = 8 ** i;
        console.log(`8 * ${i} = ${result}`);
    }
}

printEightsTable();
