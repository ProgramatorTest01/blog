const mongoClient = require("mongodb").MongoClient

const url = "mongodb://127.0.0.1:27017"
const dbname = "mongo-test"

mongoClient.connect(url, {}, (error, client) => {
    if (error)
    console.log("Cant connect to DB")

    const db = client.db(dbname)

    db.collection("users").insertOne({
        name: "John",
        age: 24
    }, (error, result) =>{
        if (error)
            console.log("Adding user error", error)

            console.log(result)

    })

    console.log("DB connections is fine")
})
