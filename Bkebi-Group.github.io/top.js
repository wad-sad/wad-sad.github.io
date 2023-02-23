$(function () {
  var bt = $("#toolBackTop");

  var sw = $(document.body)[0].clientWidth;

  var limitsw = (sw - 840) / 2 - 80; //距离右侧距离

  if (limitsw > 0) {
    limitsw = parseInt(limitsw);

    bt.css("right", limitsw / 8);
  }

  $(window).scroll(function () {
    var st = $(window).scrollTop();

    if (st > 30) {
      bt.show();
    } else {
      bt.hide();
    }
  });
});
