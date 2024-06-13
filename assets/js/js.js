const id = new URLSearchParams(window.location.search).get("cardid");

const URL = id
  ? "https://striveschool-api.herokuapp.com/api/agenda/" + id
  : "https://striveschool-api.herokuapp.com/api/agenda/";

window.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.pexels.com/v1/search?query=home/", {
    headers: {
      Authorization: " [MEWXAvhYJsjb0pDjODF3vjALjinMLZqPQpEsybjb72yLK8iXomTlF2ci]",
    },
  });
});
