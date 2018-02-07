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
// var ajaxCall = new Promise((resolve, reject) => {
// let ajaxCall = () => {
//   return new Promise((resolve, reject) => {
//     $.getJSON(flickerUrl, {
//       tag: 'beach',
//       format: 'json'
//     }).resolve(data) =>{
//       return data;
//     }).reject(err) =>{
//       alert('error :' + err);
//     });
// });



function ajaxCall2() {
  return new Promise(function(resolve, reject) {
    $.getJSON(flickerUrl, {
      tag: 'beach',
      format: 'json'
    }).then(resolve(data) => {
    return data;
    }).catch(reject(err) => {
    alert('this is error: ' + err)
  });
}




ajaxCall2().then((data) => {
  console.log(data);
}).catch((err) => {
  alert('this is an error: ' + err)
})



console.log(imageArray);
