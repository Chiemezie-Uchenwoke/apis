const apiKey = 'your_api_key_here';
const apiUrl = 'https://api.example.com/data';

const requestOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
  },
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });