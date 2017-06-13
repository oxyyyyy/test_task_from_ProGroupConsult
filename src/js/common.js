// Copyright (c) 2017 Copyright Holder All Rights Reserved.
// Author: Alexandr Vlasenko

// TODO:
// Тестовое:
// 1. Верстка страницы
// Блок, который по середине должен быть выбран всегда при открытии данной страницы.
// При переключении на другие блоки, они аналогично тому что по средине выезжают вперед.
// Сделать плавное переключение между блоками.
// 2. При попытке выйти со страницы должен появляться поп-ап ( 2 бутылки в подарок).
// 3. Желательно сделать адаптив – мобайл -таблет

// Active price card
$(".price_card").click(function() {
  $(".price_card").removeClass("active_price_card");
  $(".price_card").find(".price_card_status_p").html("select package");
  $(".lady_popup").css("opacity","0");
  $(this).addClass("active_price_card");
  $(this).find(".price_card_status_p").html("selected package");
});
$("#price_card_2").click(function() {
  $(".lady_popup").css("opacity","1");
});

// Lady popup
$(document).ready(function() {
  setTimeout(function () {
    $(".lady_popup").css("opacity","1")
  }, 2000)
});


// Open modal on tab close
window.onbeforeunload = function() {
  return $('#myModal').modal('show');
};
