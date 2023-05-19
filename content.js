var isEnabled = true;
function printAriaValueNow() {
  if (!isEnabled) return;

  const progressBar = document.evaluate('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-shorts/div[3]/div[2]/ytd-reel-video-renderer[1]/div[3]/ytd-reel-player-overlay-renderer/div[1]/div[2]/ytd-progress-bar-line/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (progressBar) {
    const ariaValueNow = progressBar.getAttribute('aria-valuenow');
    console.log(`aria-valuenow: ${ariaValueNow}`);

    if (ariaValueNow === '99') {
      console.log('Video is finished');

      const button = document.evaluate('//*[@id="navigation-button-down"]/ytd-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (button) {
        setTimeout(() => {  
          button.click();
          console.log('Button clicked');
        }, 500); // Adjust the delay as needed
      } else {
        console.log('Unable to find the button element.');
      }
    }
  } else {
    console.log('Unable to find the progress bar element.');
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggle') {
    isEnabled = request.enabled;
    sendResponse({ message: 'Toggle state updated' });
  }
});

setInterval(printAriaValueNow, 500);
