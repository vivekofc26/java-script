function changeImage() {

    var image = document.getElementById("myImage");

    if (image.src.includes("ff481a0a-e4b4-4606-ab53-b4fd136c3d13.png")) {

        image.src = "cheerful-young-man-drinking-good-coffee-holding-paper-cup-showing-thumb-up-recommending-cafe-sho.png";

    } else {

        image.src = "ff481a0a-e4b4-4606-ab53-b4fd136c3d13.png";

    }
}