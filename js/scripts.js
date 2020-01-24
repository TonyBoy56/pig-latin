$(document).ready(function() {
    $("#formOne").submit(function() {
        event.preventDefault();
        var phrase = $("#phrase").val();

        var vowels = ['a', 'e', 'i', 'u', 'o'];

    //    if (vowels.indexOf(phrase.charAt(0)) > -1 ) {
    //     $("#output").text(phrase + "way");
    //    }

       for (i = 0; i < vowels.length; i++) {
           if (vowels[i] === phrase.charAt(0)) {
            $("#output").text(phrase + "way");
           }
           else {
            $("#output").text(phrase.slice(1, phrase.length) + phrase.charAt(0) + "ay");
           }
       }

        
        // vowels.forEach(function(vowel) {
        //     // if (phrase.charAt(0) === vowel){
        //     //     $("#output").text(phrase + "way");
        //     //  } else  {
        //     //     $("#output").text(phrase.slice(1, phrase.length) + phrase.charAt(0) + "ay");
        //     }
        // });
      

    });

    
});





