let cypher = 'dalua';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ cypher });
});