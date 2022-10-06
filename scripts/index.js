document.addEventListener("DOMContentLoaded", function () {
  var MoneyCheckbox = document.querySelector(".money-slider");
  var DistanceCheckbox = document.querySelector(".distance-slider");

  // Change system
  MoneyCheckbox.addEventListener("change", function () {
    if (MoneyCheckbox.checked) {
      $(document).ready(function () {
        $(".money").addClass("burgers");
        $(".money").removeClass("metric");
        MoneyConvert(0);
      });
    } else {
      $(".money").removeClass("burgers");
      $(".money").addClass("metric");
      MoneyConvert(1);
    }
  });
  DistanceCheckbox.addEventListener("change", function () {
    if (DistanceCheckbox.checked) {
      $(document).ready(function () {
        $(".distance").addClass("burgers");
        $(".distance").removeClass("metric");
      });
    } else {
      $(".distance").removeClass("burgers");
      $(".distance").addClass("metric");
    }
  });
});

function MoneyConvert(convert) {
  if (convert == 0) {
    let tempMoney = document.getElementById("huidige-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("huidige-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("geschatte-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("geschatte-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("kosten").innerHTML = tempMoney;
    }
  } else if (convert == 1) {
    let tempMoney = document.getElementById("huidige-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("huidige-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("geschatte-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("geschatte-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("kosten").innerHTML = tempMoney;
    }
  }
}
