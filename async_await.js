const fetchData = async () => {
    try {
      const response = await fetch(url); // Wait for the fetch request to complete
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Wait for data to convert to JSON
      console.log(data); // Handle the data
    } catch (error) {
      console.error('Error:', error); // Handle errors
    }
  };
  
  fetchData();

// JSON.parse() and JSON.stringify()
const myData = {
    name: "chiemezie Uchenwoke",
    age: 33
}
console.log(typeof myData);

const checkData = JSON.stringify(myData);
console.log(checkData);

const obj = JSON.parse(checkData);
console.log(typeof obj);