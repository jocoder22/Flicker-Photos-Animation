// $(() => {
//   flickerUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON(flickerUrl, {
//     tag: "blue",
//     tagmode: "all",
//     format: "json"
//   }).done((data) => {
//     console.log(data);
//     $.each(data.items, (index, item) => {
//       $("<img>").attr("src", item.media.m).appendTo(".imgholder");
//     });
//   }).fail(() => {
//     alert("Call to Flickr failed.");
//   });
// });


flickerUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var imageArray = [];

function ajaxCall2() {
  return new Promise(function(resolve, reject) {
    var data = $.getJSON(flickerUrl, {
      tag: 'beach',
      format: 'json'
    });
    resolve(data);
    reject(error);
  });
}


ajaxCall2().then(data => {
  var bdata =  data.items;
  bdata.forEach(item => {
    imageArray.push(item.media.m)
  });
}).catch(error => {
    alert('There is an error: Flickr API not responding \n' + error);
})

$(() => {
  // function photoAnimation(imageClass, n){
    var imageN = $('#img1');
    var i = 0;
    setInterval(() => {
      i = (i + 1) % imageArray.length;
      imageN.fadeOut(function() {
        $(this).attr("src", imageArray[i]);
        $(this).fadeIn();
      });
    }, 2000);
  // };
//   photoAnimation(img1, 0);
//   photoAnimation(img2, 1);
//   photoAnimation(img3, 2);
});



console.log(imageArray);
