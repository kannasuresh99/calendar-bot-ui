chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GREETING') {
      sendResponse({ message: 'Hello from the background script!' });
    }
  });
  