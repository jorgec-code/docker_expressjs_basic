const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log('\n\n\nServer started on port ' + port + '\n\n\n')
});