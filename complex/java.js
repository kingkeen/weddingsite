$( document ).ready(function() {

    var images = [
        "assets/images/1.jpg",
        "assets/images/2.jpg",
        // "assets/images/3.jpg",
        "assets/images/4.jpg",
        "assets/images/5.jpg",
        // "assets/images/6.jpg",
        "assets/images/7.jpg",
        "assets/images/8.jpg",
        // "assets/images/9.jpg",
        "assets/images/10.jpg",   
        // "assets/images/11.jpg",   
        "assets/images/12.jpg",   
        "assets/images/13.jpg",
        "assets/images/14.jpg",
        "assets/images/p1.jpg",
        "assets/images/p2.jpg",
        "assets/images/p3.jpg",
        "assets/images/p4.jpg",
        "assets/images/p5.jpg",
        "assets/images/p6.jpg",
        "assets/images/p7.jpg",
        "assets/images/p8.jpg"
    ];

    var imageIndex = 0;

    $("#previous").on("click", function(){          
        console.log("made it to the click previous");
        imageIndex = (imageIndex + images.length -1) % (images.length);
        
        if (imageIndex < 0){
            imageIndex = images.length;
            console.log("image was less than zero so now its to the last: "+ imageIndex);
        }

        var newImage = "url("+images[imageIndex];
        console.log(newImage + " This is supposed to be the new url")

        $('#imagine').css("background-image", newImage);  

    });

    $("#next").on("click", function(){
        console.log("made it to the click next");
        
        imageIndex = (imageIndex+1) % (images.length);    

        if (imageIndex > images.length) {
            imageIndex = 0;
            console.log("image was more than length of array, so now its to the first: "+ imageIndex);

        }

        var newImage = "url("+images[imageIndex];
        console.log(newImage + " This is supposed to be the new url")
        $('#imagine').css("background-image", newImage);  

    });
    var startImage = "url("+images[0];
    $('#imagine').css("background-image", startImage);  

});



