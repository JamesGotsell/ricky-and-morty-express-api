# ricky-and-morty-express-api

created index routes file - 

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
