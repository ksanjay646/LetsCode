const express = require('express');
const path = requre('path');

const app = express();

app.use(express.static(__dirname + '/dist/spaceX'));

app.get('*', function(req, res){
 res.sendFile(path.join(__dirname + '/dist/spaceX/index.html'));
});

app.listen(process.env.PORT || 8080);
