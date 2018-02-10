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

function ajaxCall2(url) {
  return new Promise(function(resolve, reject) {
    var data = $.getJSON(url, {
      tag: 'beach',
      format: 'json'
    }).done((data) => {
    $("#img1").attr("src", data.items[0].media.m);
    $("#img2").attr("src", data.items[1].media.m);
    $("#img3").attr("src", data.items[2].media.m);
  });
    resolve(data);
    reject(error);
  });
}


ajaxCall2(flickerUrl).then(data => {
  var bdata = data.items;
  $("img1").attr("src", data.items[0].media.m);
  bdata.forEach(item => {
    imageArray.push(item.media.m)
  });
}).catch(error => {
    alert('There is an error: Flickr API not responding \n' + error);
})



// $(() => {
//   var imageN = $("#img1");
//   var i = 0;
//   setInterval(() => {
//     i = (i + 1) % imageArray.length;
//     imageN.fadeOut(function() {
//       $(this).attr("src", imageArray[i]);
//       $(this).fadeIn();
//     });
//   }, 2000);
// });


function photoAnimation(image, n) {
  $(() => {
    var imageN = $(image);
    var i = n;
    setInterval(() => {
      i = (i + 1) % imageArray.length;
      imageN.attr("src", imageArray[i]);
    }, 1000);
  });
}

photoAnimation('#img1', 0);
photoAnimation('#img2', 1);
photoAnimation('#img3', 2);
console.log(imageArray);
