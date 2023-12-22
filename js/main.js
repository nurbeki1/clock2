function init() {
  let map = new ymaps.Map("map", {
    center: [55.74103691311495, 37.7417336196677],
    zoom: 16,
  });
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}

ymaps.ready(init);

const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn_burger");
const btnImg = document.querySelector("#burgerImg");

menu.addEventListener("click", function () {
  console.log("asdfa");

  if (menu.classList.toggle("open")) {
    btnImg.src = "/photos/close.png";
  } else {
    btnImg.src = "/photos/open.png";
  }
});
