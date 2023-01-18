/**
 * Tells the server that a page has been viewed.
 * @param {*} payload an object containing a 'pageName' string.
 */
 async function incrementPageView(payload = {}) 
 {
   payload['browserName'] = getBrowserName();
   console.log(payload)
 
  //  fetch("https://data.mongodb-api.com/app/data-lqrom/endpoint/data/v1/action/insertOne", {
  //    method: 'POST',
  //   //  mode: 'cors',
  //    credentials: 'omit',
  //    headers: {
  //      'Content-Type': 'application/json',
  //      'Access-Control-Request-Headers': '*',
  //      /* Not meant to be too secure. */
  //      'api-key': '20qtAPBmzJhNlnfFWZmw3OQiyRJGpZiRTo0zBz728TviQbxQgczYnNxGutec1vce',
  //      'Access-Control-Allow-Origin': '*'
  //    },
  //   //  body: JSON.stringify({
  //   //     "dataSource": "VisitCountCluster",
  //   //     "database": "postman",
  //   //     "collection": "counter",
  //   //     "document": payload
  //   //  })
  //   body: JSON.stringify({
  //     "document": {
  //       "name": "John Sample",
  //       "age": 42
  //     }
  //   })
  //  });
 
 
 
  //  let xhr = new XMLHttpRequest();
  //  const url = "https://data.mongodb-api.com/app/data-lqrom/endpoint/data/v1/action/insertOne";
  //  xhr.open("POST", url);
 
  //  xhr.setRequestHeader("Accept", "application/json");
  //  xhr.setRequestHeader("Content-Type", "application/json");
  //  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  //  xhr.setRequestHeader("api-key", "20qtAPBmzJhNlnfFWZmw3OQiyRJGpZiRTo0zBz728TviQbxQgczYnNxGutec1vce");
 
  //  payload = {"document": {
  //       "name": "John Sample",
  //       "age": 42
  //     }};
  //  xhr.send(payload);
 }
 //On page load, send page name and name of browser to server to count number of visits
 document.addEventListener('DOMContentLoaded', (event) => {
     incrementPageView({'pageName': window.location.pathname})
 });



//getBrowserName: Full credit to https://stackoverflow.com/a/11219680/16519580
//user Himanshu Jansari
function getBrowserName() {
  var nAgt = navigator.userAgent;
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    return "Opera";
  } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    return "Microsoft Internet Explorer";
  } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    return "Chrome";
  } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    return "Safari";
  } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    return "Firefox";
  }
  //Other browsers
  else if (
    (nameOffset = nAgt.lastIndexOf(" ") + 1) <
    (verOffset = nAgt.lastIndexOf("/"))
  ) {
    return nAgt.substring(nameOffset, verOffset);
  }
}