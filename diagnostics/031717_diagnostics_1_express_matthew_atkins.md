# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

request/ response cycle occurs when a client makes a request (i.e. website url entry) and the respective server takes the request and responds with data.

### Question 2: What are the differences between a GET request and a POST request?

A get request populates data to be read onto a browser depending on the route requested. A POST request creates new data.

### Question 3: What does `npm init` do?

initializes the node application.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
C: Create = POST
R: Read = GET
U: Update = PUT
D: Delete = DELETE

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  

POST Method

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
Unsure, but I imagine `action="myScript.js"` would create what was on the the myScript.js controller.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

router.post('/menus', function(req, res){
  var something : {
      //some data here
  }
    res.redirects('/homepage');
  });

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```
app.use(':id', ':song');

### Question 9: What is MVC? How have we been using it so far?

Model Views Controllers. We've been using it in express to build the backend of our software.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

router.get('/products', function(req, res){
    res.send('error:"Bad Request"');
  })
