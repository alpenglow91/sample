
$(function () {
  //drawerJs
  $('.drawer').drawer();

  //smoothscroll
  $('a[href^="#"]').click(function () {
    // スクロールの移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#飲みだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置まで"speed"の速度で移動
    $("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
      },
      speed
    );
    return false;
  });

  //wowjs
  new WOW().init();

  //googleform
  let $form = $('#js-form');
  $form.submit(function (e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理
          $form.slideUp()
          $('#js-success').slideDown()
        },
        200: function () {
          //送信に失敗したときの処理
          $('#js-error').slideDown()
        }
      }
    });
    return false;
  });

  //formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1553035331"]').prop('checked') === true
    ) {
      // すべて入力されたとき
      $submit.addClass('-active')
      $submit.prop('disabled', false)
    } else {
      // 入力項目に不備があるとき
      $submit.removeClass('-active')
      $submit.prop('disabled', true)
    }
  })
});