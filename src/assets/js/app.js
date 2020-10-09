window.onscroll = function (e) {
  const scroll = window.scrollY

  const headerScroll = document.querySelector("#navbar")
  if (scroll > 300) {
    headerScroll.classList.add("success")
  } else {
    headerScroll.classList.remove("success")
  }
};
