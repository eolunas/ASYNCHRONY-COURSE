import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
   const response = fetch(urlAPI, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
   });
   return response;
}

const data = {
   "title": "Happiness",
   "price": 1,
   "description": "The best product for enjoying the life",
   "categoryId": 5,
   "images": [
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));
