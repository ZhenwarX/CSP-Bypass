const url = 'https://dev1.dev.clover.com/v3/accounts/current?expand=primaryDeveloper%2CprimaryEnterprise%2CprimaryMerchant%2CprimaryMerchant.properties%2CprimaryReseller&_=1706027175630';

// Create a headers object with credentials set to 'include'
const headers = new Headers({
  'Content-Type': 'application/json',
});

// Use the fetch API to make the request
fetch(url, {
  method: 'GET',
  headers: headers,
  credentials: 'include', // This includes credentials (like cookies) in the request
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Fetch error:', error);
  });
