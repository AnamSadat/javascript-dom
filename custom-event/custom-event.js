const changeCaption = new Event("changeCaption");

window.addEventListener("load", function () {
  const tombol = document.getElementById("tombol");

  tombol.addEventListener("changeCaption", customEventHandler);
  tombol.addEventListener("click", function () {});
  tombol.addEventListener("click", function () {
    tombol.dispatchEvent(changeCaption);
  });
});

function customEventHandler(ev) {
  console.log("event " + ev.type + " telah dijalankan");
  const caption = document.getElementById("caption");
  caption.inneText = "Anda telah membangkitkan custom event";
}
