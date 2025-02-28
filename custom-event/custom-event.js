const changeCaption = new Event("changeCaption");

window.addEventListener("load", function () {
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("changeCaption", customEventHandler);
  tombol.addEventListener("click", function () {});
});

function customEventHandler(ev) {
  console.log("event " + ev.type + " telah dijalankan");
  const caption = getElementById("caption");
  caption.inneText = "Anda telah membangkitkan custom event";
}
