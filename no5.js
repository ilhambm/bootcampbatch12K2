function count_vowels(string1)
{
  var hurufVokal = 'aeiouAEIOU';
  var hasilHitung = 0;
  for(var i = 0; i < string1.length ; i++)
  {
    if (hurufVokal.indexOf(string1[i]) !== -1)
    {
      hasilHitung += 1;
    }
  }
  return hasilHitung;
}
console.log(count_vowels("programmers"));