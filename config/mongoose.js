// const mongoose = require('mongoose') ;
/* Work is:-
1. Create Cluster at MongoDB Atlas
2. Create User and Password
3. Add name of cluster
4. set string to uri
5. Connect it
6. See it in test.
*/
const uri = 'mongodb+srv://<username>:<password>@cluster0.sakylkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoose = require('mongoose') ;

mongoose.connect(uri) ;
 const db = mongoose.connection ;

 db.on('error' , console.error.bind(console , "error connecting to db")) ;

db.once('open' , function(){
    console.log('successfully connected to database') ;
}) ;