const {MongoClient} = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

exports.handler = async(event)=>{
    if(event.method !== 'POST' && event.httpMethod !== 'POST'){
        return {
            statusCode:405, body:"only Post allowed"
        };
    }

const body = JSON.parse(event.body);
try{
    await client.connect();
    const db = client.db('feedbackDB');
    const collection = db.collection('feedbacks');
    const result = await collection.insertOne({
        ...body, created_at: new Date()
    });
    return {statusCode:200, body:'saved'};
}
catch(err){
    return {statusCode: 500, body: err.message};
}
finally{
    await client.close();
}
};