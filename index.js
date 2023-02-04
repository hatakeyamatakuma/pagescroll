$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('#header a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const adjust = 0;
    // スクロールの速度
    const speed = 400; // ミリ秒
    // アンカーの値取得
    let href= $(this).attr("href");
    // 移動先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    let position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});