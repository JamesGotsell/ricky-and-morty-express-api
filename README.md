# ricky-and-morty-express-api

created index routes file - 

```
router.get('/', apiCallController.homePage);
router.get('/data',  apiCallController.rickyNMortyData)
router.post('/quotes' , apiCallController.addQuote)
```
i pass each function into the relative route

# to do 

* work on addQutoe function so any quote passed as route gets added to the mongoDB database
* next function get data from  from mongoDB dataBase;
* next function to delete quote from mongoDB