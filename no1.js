function getBiodata(){
  let objBiodata = 
    {
      "name"    : "Ilham Bahrul Muhit",                                                   //property: name dengan value: Ilham Bahrul Muhit(String) 
    	"age"     : 23,                                                                     //property: age dengan value: 23(Number/Integer)  
    	"address" : "Jl. Dewi Sartika No.19 RT. 10 RW. 03, Desa Cineam, Kab. Tasikmalaya",  //property: name dengan value: Jl. Dewi Sartika.....dst.(String)
      
      /*property: hobbies dengan value bermain musik,..dst.(Array) */
      "hobbies" : 
        [
      		"Bermain Musik",
      		"Baca Artikel tentang Teknologi",
      		"Baca dan nonton Youtube Motivational Speakers",
      		"Social Media",
      		"Nonton Film Sci-fi",
      		"Competitive Programming"
      	],

      /*property: is_married dengan value false(boolean)*/
    	"is_married"  : false,

      /*property: list_school dengan value ...(Array of object) */
    	"list_school" : 
        [
      		{
            "name"    :"Universitas Pendidikan Indonesia",
      			"year_in" : 2015,
      			"year_out": 2019,
      			"major"   : "Pendidikan Ilmu Komputer"
      		}, 		
      		{
            "name"    :"SMA Negeri 3 Tasikmalaya",
      			"year_in" : 2012,
      			"year_out": 2015,
      			"major"   : "IPA"
      		},
      		
      		{
            "name"    :"SMP Negeri 1 Cineam",
      			"year_in" : 2009,
      			"year_out": 2012,
      			"major"   : null
      		}
      	],

      /*property: skills dengan value (Array of Object)*/
    	"skills" : 
        [
          {
      			"skill_name": "html",
      			"level"     : "advanced"
      		},
      		{
      			"skill_name": "css",
      			"level"     : "advanced"
      		},
      		{
      			"skill_name": "javascript",
      			"level"     : "beginner"
      		},
      		{
      			"skill_name": "mySql",
      			"level"     : "beginner"
      		}
      	],
        
       /*property: skills dengan value true (Boolean)*/
    	"interest_in_coding": true
    }

  return objBiodata;

}
console.log(JSON.stringify(getBiodata()));//untuk mereturn value berfomat JSON