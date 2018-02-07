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
      format: 'hjson'
    });
    resolve(data);
    reject();
  });
}



ajaxCall2().then(data => {
  var bdata =  data.items;
  // $.each(data.items, (index, item) => {
  //   imageArray.push(item.media.m);
  // });
  bdata.forEach(item => {
    imageArray.push(item.media.m)
  });
}).catch(() => {
    alert('There is an error: Flickr API not responding');
})



console.log(imageArray);
