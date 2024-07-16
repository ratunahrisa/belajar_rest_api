const express = require('express');
const app = express();

//req: request
//res: response

// app.use("/", (req, res)=> {
//     res.send("hello world");
// }); 

// app.get('/', (req, res)=> {
//     res.send('hi aku method get');
// });

// app.post('/', (req, res)=> {
//     res.send('hi aku method post');
// });

// app.delete('/', (req, res)=> {
//     res.send('hi aku method delete');
// });

app.put('/', (req, res)=> {
    res.send('hi aku method put');
});

app.listen(8000,()=> {
    console.log("server running on portL 8000");
});