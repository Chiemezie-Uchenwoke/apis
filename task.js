/* 
Use this free API to get JSON placeholder data:

URL: https://jsonplaceholder.typicode.com/posts
Fetch the data using fetch().
Display the title of each post in an unordered list (<ul>).

*/

const responseMessage = document.getElementById("response-message");
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const callTitles = document.getElementById("call");

callTitles.addEventListener("click", () => {
    fetch(apiUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error("Network resonse was not okay");
        }
        return response.json();
    })
    .then((data) => {
        
        data.forEach((post) => {
            const newListElement = document.createElement("li");
            newListElement.textContent = post.title;
            responseMessage.appendChild(newListElement);
        });        
    })
    .catch((error) => console.log(error));
});