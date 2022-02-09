// Initialize button with user's preferred color
let generate = document.getElementById("generate");


// When the button is clicked, inject setPageBackgroundColor into current page
generate.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: generatePassword
  });
});

// The body of this function will be executed as a content script inside the
// current page
function generatePassword() {
  let hostname = window.location.hostname;
  console.log(hostname);
  chrome.storage.sync.get("cypher", ({ cypher }) => {
    
  });
}
