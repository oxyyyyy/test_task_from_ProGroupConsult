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

$(".price_card").click(function() {
  $(".price_card").removeClass("active_price_card");
  $(".price_card").find(".price_card_status_p").html("select package");
  $(this).addClass("active_price_card");
  $(this).find(".price_card_status_p").html("selected package");
});
