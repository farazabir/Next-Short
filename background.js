chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'clickButton') {
    const button = document.evaluate('//*[@id="navigation-button-down"]/ytd-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (button) {
      button.click();
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false });
    }
  }
});
