
flickerUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var imageArray = [];

function ajaxCall2(url) {
  return new Promise(function(resolve, reject) {
    var data = $.getJSON(url, {
      tag: 'beach',
      format: 'json'
    }).done(data => {
    for (var i = 0; i < 6; i++) {
      $('#img'+ i).attr("src", data.items[i].media.m)
    }
  });
    resolve(data);
    reject(error);
  });
}


ajaxCall2(flickerUrl).then(data => {
  var bdata = data.items;
  bdata.forEach(item => {
    imageArray.push(item.media.m)
  });
  $(".span1").append("This product uses the Flickr API but is not endorsed or certified by Flickr.");
}).catch(error => {
    $(".header").append("<div class='genholder footer'><p>Error Message :</p> <p>Failed to load resource : </p><p>the server responded with a status of " + error.status +"</p></div>")
});


function photoAnimation(image, n) {
  $(() => {
    var imageN = $(image);
    var i = n;
    setInterval(() => {
      i = (i + 1) % imageArray.length;
      imageN.attr("src", imageArray[i]);
    }, 2000);
  });
}


photoAnimation('#img0', 0);
photoAnimation('#img1', 1);
photoAnimation('#img2', 2);
photoAnimation('#img3', 19);
photoAnimation('#img4', 18);
photoAnimation('#img5', 17);
