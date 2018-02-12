
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
}).catch(error => {
    alert('There is an error: Flickr API not responding \n' + error);
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
