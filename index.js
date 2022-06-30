var btnTitles = [
  "Batter Disconnect Unit",
  "Integrated Power Modules",
  "Telematics Control Unit",
  "Zonal Control Modules",
  "Smart Power Distribution Modules",
  "Body Control Modules",
];

window.onload = function () {
  var dots = document.getElementsByClassName("w-slider-dot");
  console.log(dots);

  for (let i = 0; i < dots.length; i++) {
    console.log(dots[i]);
    dots[i].innerHTML = btnTitles[i];
  }
};
