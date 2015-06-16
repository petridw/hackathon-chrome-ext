// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
  chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
    console.log(response.data);
    var newString = sendRequest("I will conquer the world.");
    newString = "Conquer the world, I will";
    console.log(response.data);
    chrome.tabs.executeScript({
      code: 'document.body.innerHTML = "Yoda says something."'
    });
  });


  // curl --get --include 'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.' \
  // -H 'X-Mashape-Key: <required>' \
  // -H 'Accept: text/plain'
});

function sendRequest(string) {
  var url = "https://yoda.p.mashape.com/yoda/?sentence=" + string.split(' ').join('+');
  var key = "SED6fgV6V1mshSsgSbOied9iEfl0p1k3YjAjsnhcEbE2T12m7n";
  // var params = JSON.stringify({ appoverGUID: approverGUID });

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("X-Mashape-Key", key);
  request.setRequestHeader("Accept", "text/plain");
  request.send();

  console.log(request.responseText);

  return request.responseText;
}