const express = require('express');
const path = require('path');
const app = express();

//settings:
app.set('port', process.env.PORT || 3000);

//static file
app.use(express.static(path.join(__dirname, 'public')));

//start the server
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});