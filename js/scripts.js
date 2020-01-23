$(document).ready(function() {
    $("#formOne").submit(function() {
        event.preventDefault();
        var phrase = $("#phrase").val();

        var vowels = ['a', 'e', 'i', 'u', 'o'];
        var firstVowel = phrase.indexOf(vowels);
        console.log(firstVowel);
    //    var array = phrase.map(function(phrase){
    //     return phrase + "way";
    //    });
      

    });

    
});





 //var vowels = ["a", "e", "i", "o", "u"];
        //var array = ["i", "way"];
        //var newArray = array.map