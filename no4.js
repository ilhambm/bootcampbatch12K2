function formatNum(n) 
{
  var n = ('' + n).split('.');
  var num = n[0];
  var dash = n[1];
  var r, s, t;
  if (num.length > 3) 
    {
      s = num.length % 3;
      if (s) 
        {
          t = num.substring(0,s);
          num = t + num.substring(s).replace(/([0-9 a-z]{3})/g, "-$1");
        } 
      else 
        {
          num = num.substring(s).replace(/([0-9 a-z]{3})/g, "-$1").substring(1);
        }
    }

  if (dash && dash.length > 3) 
    {
      dash = dash.replace(/([0-9 a-z A-Z]{3})/g, "$1 ");
    }

  return num + (dash? '.' + dash : '');
}
console.log(formatNum("ghhjhjhooop777777770000000007ooog7hghjkj0976ghgh0900hiiiijjjk988899ghh"))