let arr = [];
let curDate = new Date();
arr.push(curDate);
let newDate = new Date();
newDate.setDate(8);
newDate.setMonth(11);
newDate.setFullYear(2018);
newDate.setHours(21, 00, 00);

arr.push(newDate);

let numDays = arr.map(x => [new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate(), x.getDay()]);

numDays.map(x => {
    switch (x[1]) {
        case 0:
            x[1] = "неделя";
            break;
        case 1:
            x[1] = "понеделник";
            break;
        case 2:
            x[1] = "вторник";
            break;
        case 3:
            x[1] = "сряда";
            break;
        case 4:
            x[1] = "четвъртък";
            break;
        case 5:
            x[1] = "петък";
            break;
        case 6:
            x[1] = "събота";
            break;
    }
});

let finalArray = [];
for(let index in arr){
    finalArray.push(`Дата: ${("0" + arr[index].getDate()).slice(-2)}.${("0" + (arr[index].getMonth()+1)).slice(-2)}.${arr[index].getFullYear()}, час: ${("0" + arr[index].getHours()).slice(-2)}:${("0" + arr[index].getMinutes()).slice(-2)}:${("0" + arr[index].getSeconds()).slice(-2)}, ${numDays[index][1]}, ${numDays[index][0]} дни`);
}
for(var i in finalArray)
{
    console.log(finalArray[i]);
}



