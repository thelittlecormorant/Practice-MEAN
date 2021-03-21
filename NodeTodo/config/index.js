var configvalues =require('./config');

module.exports ={
    getDBConnectionString: function(){
        var connectionString=`mongodb+srv://${configvalues.uname}:${configvalues.pass}@cluster0.1wi55.mongodb.net/${configvalues.dbname}?retryWrites=true&w=majority`;

        console.log(connectionString);

        return connectionString;
    }
};