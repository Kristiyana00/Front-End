function transform(sColor1, sColor2)
{
    let psCounter = 0;
    let headerTitleCounter = 0;
    const ps = Array.from(document.getElementsByTagName('p'));
    for(let i =0;i<ps.length;i++)
    {
        ps[i].style.background = sColor1;
        psCounter++;
    }
    const ht = Array.from(document.getElementsByClassName("headertitle"));
    for(let i =0;i<ht.length;i++)
    {
        ht[i].style.background = sColor2;
        headerTitleCounter++;
    }
    let res = psCounter + " параграфа, " + headerTitleCounter + " елемента с клас '<headertittle>'";
    document.getElementsByTagName("title")[0].innerHTML = res;
}