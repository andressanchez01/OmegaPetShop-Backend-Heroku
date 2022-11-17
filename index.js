var app = require('./app');
var mongoose =require('./src/conexDB/conn');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});