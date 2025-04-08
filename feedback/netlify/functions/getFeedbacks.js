const {MongoClient} = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

exports.handler = async()=>{
    try{
        await client.connect();
        const db = client.db('feedbackDB');
        const feedbacks = db.collection('feedbacks');

        const data = await feedbacks.find().sort({created_at: -1}).toArray();
        return{statusCode: 200, body: JSON.stringify(data)};

    }
    catch(err){
        return{statusCode:500, body: err.message}
    }
    finally{
        await client.close();
    }
}