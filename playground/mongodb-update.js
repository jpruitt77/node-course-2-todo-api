// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err)
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     completed: false
    // }, {
    //     //udate operator
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c2858898c265a239c282e83')
    }, {
        //udate operator
        $set: {
            name: 'jpruitt'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    // client.close();
});