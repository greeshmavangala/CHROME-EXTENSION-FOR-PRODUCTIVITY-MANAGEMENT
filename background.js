console.log("✅ background.js is running");
chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ background.js is running (installed)");
});
let currentTab = "";
let startTime = Date.now();


chrome.tabs.onUpdated.addListener(() => {
  console.log("✅ background.js triggered by tab update");
});

chrome.tabs.onActivated.addListener(async activeInfo => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  const url = new URL(tab.url || "http://unknown.com");
  currentTab = url.hostname;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000); // in seconds

    fetch('http://localhost:5000/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        site: currentTab,
        duration: duration,
        userId: 'user123'
      })
    }).then(res => res.json()).then(console.log).catch(console.error);

    // Reset
    const url = new URL(tab.url || "http://unknown.com");
    currentTab = url.hostname;
    startTime = Date.now();
  }
});
let blockedSites = [];

// Load blocked sites from backend
function fetchBlockedSites() {
  fetch('http://localhost:5000/api/blocklist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'user123',
    sites: ['facebook.com', 'tiktok.com']
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error('Error:', err));


// Fetch initially and every 5 mins
fetchBlockedSites();
setInterval(fetchBlockedSites, 300000); // 5 mins
}
// Block navigation if site is in blocklist
chrome.webNavigation.onBeforeNavigate.addListener(details => {
  const url = new URL(details.url);
  if (blockedSites.includes(url.hostname)) {
    chrome.tabs.update(details.tabId, {
      url: "https://www.google.com"
    });
  }
}, { url: [{ urlMatches: '.*' }] });

