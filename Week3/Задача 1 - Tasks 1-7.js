/*Задача 1*/
function printArray()
{
    let A =[10,5,13,18,51];
for(var i in A)
{
    console.log(A[i]);
}
}
/*Задача 2*/
function multiplyArr()
{
    let A = [10,5,13,18,51];
    let B = A.map(function(x) {return x*2});

    console.log(B);
}
/*Задача 3*/
function filterArray()
{
    function isEven(toCheck)
    {
        return toCheck % 2 == 0;
    }
    let A = [10,5,13,18,51];
    let B = A.filter(isEven);

    console.log(B);
}
/*Задача 4*/
function checkArray()
{
    let A = [10,5,13,18,51];

    function isSmaller(toCheck)
    {
        return toCheck < 10;
    }

    let B = A.map(function(x) {return x*2});

    let res1 = A.filter(isSmaller);
    let res2 = B.filter(isSmaller);

    console.log(res1 >= 1);
    console.log(res2 >= 1);
}
/*Задача 5*/
function dividedArray()
{
    let A = [10,5,13,18,51];

    function isValid(toCheck)
    {
        return toCheck % 3 == 0;
    }

    let dividedArray = A.filter(isValid);

    console.log(dividedArray);
}
/*Задача 6*/
function sum()
{
    let A = [10,5,13,18,51];
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(A.reduce(reducer));
}
/*Задача 7*/
function sliceArray()
{
    let A = [10,5,13,18,51];
    let B = A.slice(3,5);

    console.log(B);
}

