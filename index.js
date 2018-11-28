const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "js")));

app.set('view engine', 'pug');
app.use('/countries', require('./routers/countries'));
app.use('/cities', require('./routers/cities'));




app.listen(3000, () => console.log('Example app listening on port 3000!'));