document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
 
    // chrome.tabs.getSelected(null, function(tab) {
    //   var tabID = tab.id;
    //   var tabUrl = tab.url;
      // chrome.tabs.sendRequest(tabID, {action: "getDOM"}, function(response) {
      //   response.dom.body.style.color = "red";
      // });

    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

       // since only one tab should be active and in the current window at once
       // the return variable should only have one entry
       var activeTab = arrayOfTabs[0];
       var activeTabId = arrayOfTabs[0].id; // or do whatever you need

        chrome.tabs.sendRequest(tabID, {action: "getDOM"}, function(response) {
          response.dom.body.style.color = "red";
        });

    });

  }, false);
}, false);