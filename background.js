chrome.tabs.onCreated.addListener(function(newTab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let currentTab = tabs[0];
    if (newTab.index > currentTab.index) {
      chrome.tabs.move(newTab.id, { index: currentTab.index });
    }
  });
});
