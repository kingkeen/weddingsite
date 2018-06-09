$( document ).ready(function() {

    var images = [
        "assets/images/1.jpg",
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg",
        "assets/images/5.jpg",
        "assets/images/6.jpg",
        "assets/images/7.jpg",
        "assets/images/8.jpg",
        "assets/images/9.jpg"   
    ];

    var imageIndex = 0;

    $("#previous").on("click", function(){          
        console.log("made it to the click previous");
        imageIndex = (imageIndex + images.length -1) % (images.length);
        
        var newImage = "url("+images[imageIndex];
        console.log(newImage + " This is supposed to be the new url")

        $('#imagine').css("background-image", newImage);  


        //ORIGINAL METHOD
        // $("#imagine").attr('style', 'background-image:images[imageIndex]');
    });

    $("#next").on("click", function(){
        console.log("made it to the click next");
        imageIndex = (imageIndex+1) % (images.length);    

        var newImage = "url("+images[imageIndex];
        console.log(newImage + " This is supposed to be the new url")
        $('#imagine').css("background-image", newImage);  

        // imagine.style.backgroundImage = "url('images[imageIndex]')";

        //ORIGINAL METHOD
        // $("#imagine").attr('style', 'background-image:images[imageIndex]');
    });
});

    // $("#imagine").attr('style', 'background-image:images[0]');


    // style="background-image:url('assets/images/8.jpg')"

    // object.style.backgroundImage = "url('URL')|none|initial|inherit"

