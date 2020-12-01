// 300ミリ秒ごとにミュート
function suppressAds(clazz) {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
    console.log("Enjoy No More Ads Now On Air!");
  }
}
setInterval(() => {
  suppressAds("ytp-ad-skip-button-text");
  suppressAds("ytp-ad-overlay-close-button");
}, 300);
console.log("Yes! No More Ads Streaming!");
