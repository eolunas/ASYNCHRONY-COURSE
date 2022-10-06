const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //Import library
const API = "https://api.escuelajs.co/api/v1"; //Link fakeAPI platzi

//Main function in charged to get the product info as an object
function fetchData(urlAPI, callback) {
   let xmlhttp = new XMLHttpRequest(); //Object made of XMLHttpRequest
   xmlhttp.open("GET", urlAPI, true); //Initial request (GET or POST) (user and password if it is required)

   //Create a function which is executed when xmlhttp changed using onreadystatechange property
   xmlhttp.onreadystatechange = (event) => {
      //Ask if xmlhttp request is completed:
      //[0: Not initialized][1: Loading][2: Executing][3: Downloading][4: Completed]
      if (xmlhttp.readyState === 4) {
         //Check the status [200: OK]
         if (xmlhttp.status === 200) {
            callback(null, JSON.parse(xmlhttp.responseText)); //Receive the information or null parse in JSON
         } else {
            //Catch the Error if API request failed
            const error = new Error("Error" + urlAPI); //Create a cutomized error message
            return callback(error, null); //Execute the callback with the error message
         }
      }
   };

   //Send the request to server
   xmlhttp.send();
}
//Call the function created before to request info of the first item
fetchData(`${API}/products`, (error1, data1) => {
   //If there is an error, show it in console
   if (error1) return console.error(error1);
   //If data1 has information, request the firt item
   fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
      //If there is an error, show it in console
      if (error2) return console.error(error2);
      //If data2 has information, request his category [Using optional chaining]
      fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
         //If there is an error, show it in console
         if (error3) return console.error(error3);
         //Show all information in console
         console.log(data1[0]);
         console.log(data2.title);
         console.log(data3.name);
      });
   });
});
