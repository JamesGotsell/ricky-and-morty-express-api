# ricky-and-morty-express-api

created index routes file - i need to total refactor with mongoose 

```
router.get('/', apiCallController.homePage);
router.get('/data',  apiCallController.rickyNMortyData)
router.post('/quotes' , apiCallController.addQuote)
```
i pass each function into the relative route

# to do 
* create a db.js that you can refenece to connect to the mongodb database - done
* work on addQutoe function so any quote passed as route gets added to the mongoDB database - done 
* next function get data from  from mongoDB dataBase; - done
* next function to delete specific quote from mongoDB

https://github.com/Automattic/mongoose - refence mongoose  

https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr 

- follow the above 

Error: data and salt arguments required - error i;m getting - 


to do need to protect routes thorugh auth 
https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#what-well-be-building

https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

https://www.kompulsa.com/introduction-mongoose-storing-data-mongodb/

https://github.com/madhums/node-express-mongoose-demo