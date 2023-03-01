$(function(){
  const speed = 400;
  // #で始まるアンカーをクリックした場合に処理
  $('#header a[href^="#"]').on("click",function(){
    const adjust = 0;
    // アンカーの値取得
    const href= $(this).attr("href");
    // 移動先を取得
    const target = $(href === "#" || href === "" ? 'html' : href);
    // 移動先を調整
    const position = target.offset().top + adjust;
    // スクロールの処理
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  //topへをクリックした場合に処理
  $(".footer__top").on("click",function(){
    $("body,html").animate(
      // 上から0pxの位置に戻る
      {scrollTop: 0,},speed);
    return false;
  });
});