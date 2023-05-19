document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle');

  // Retrieve the enabled state from storage
  chrome.storage.sync.get('toggle', function(data) {
    toggle.checked = data.enabled !== false;
  });

  toggle.addEventListener('change', function() {
    const enabled = toggle.checked;

    // Save the enabled state to storage
    chrome.storage.sync.set({ enabled });

    // Send a message to the background script to update the enabled state
    chrome.runtime.sendMessage({ enabled });
  });
});
