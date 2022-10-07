import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//Getting information by fetch, transform it to a JSON file
async function fetchData(urlAPI) {
   const response = await fetch(urlAPI);
   return response.json();
}

//Using generation with async await to organize the requesting
async function* anotherFunction(urlAPI) {
   //Using try catch for managing the errors
   try {
      const products = await fetchData(`${urlAPI}/products`);
      yield products.length;

      const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
      yield product.title;

      const category = await fetchData(
         `${urlAPI}/categories/${product.category.id}`
      );
      yield category.name;
   } catch (error) {
      yield console.error(error);
   }
}

//Called to generation function
const g = anotherFunction(API);

//Using await to g.next() to wait the {value, done} response
console.log((await g.next()).value);
console.log((await g.next()).value);
console.log((await g.next()).value);

//Best way to use generator in this exercice is for getting the products one by one
async function* getProductsOneByOne(urlAPI) {
   try {
      const products = await fetchData(`${urlAPI}/products`);
      for (let value of products) yield value;
   } catch (error) {
      yield console.error(error);
   }
}

//Show 3 product in a list with ID and Title
const products = getProductsOneByOne(API);
console.log("List of products:");
console.log(
   `${(await products.next()).value.id} : ${
      (await products.next()).value.title
   }`
);
console.log(
   `${(await products.next()).value.id} : ${
      (await products.next()).value.title
   }`
);
console.log(
   `${(await products.next()).value.id} : ${
      (await products.next()).value.title
   }`
);
