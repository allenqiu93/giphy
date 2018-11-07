


function searchForCar(){
    var cars = "Bmw";
    var api_key = "C5HODiEt4Kbm8FrerfWLm9XuJrZ0uOia"
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ cars + "&api_key=" + api_key +"&limit=5";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        // $("#cars-view").text(JSON.stringify(response));

         var newPic = $("<img>")
         newPic.attr("src",response.data[0].images.fixed_height.url);
         console.log(response.data[0].images.fixed_height.url);
         $("#car-view").append(newPic);
      
      
      });

}
searchForCar();
      
    $("#car-view").on("click", function(){
        searchForCar();
    })
