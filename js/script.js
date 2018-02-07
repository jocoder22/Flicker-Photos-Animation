$(() => {
  flickerUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickerUrl, {
    tag: "flower",
    tagmode: "all"
  }).done(() => {

  }).fail(() => {
    alert("Call to Flickr failed.")
  });
});
