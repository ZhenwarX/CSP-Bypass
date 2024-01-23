const url = 'https://www.clover.com/v3/accounts/current/merchants?filter=id=WAMMB0W50W2D1&expand=address&expand=logos&expand=gateway&expand=merchantPlan.modules&expand=properties&expand=enterprises&expand=selfBoardingApplication&expand=owner&expand=compliance&expand=reseller&expand=merchantBoarding';

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
