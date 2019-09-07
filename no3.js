function printTriangle(n)
{
    var str = '';
    for(var i=n; i>=1; i=i-1)
    {
        for(var k=n; k>=i; k=k-1)
        {
            str = str + "\t";
        }
        for(var j=i; j>=1; j=j-1)
        {
            str = str + "*\t\t";
        }
        console.log(str);
        str = "";
    }
}
printTriangle(9);