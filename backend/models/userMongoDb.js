// const objectId = require("mongodb").ObjectID;

module.exports.allLists = (db, cb) => {
    db.collection(db.name).find().toArray((err,docs) => {
        cb(err,docs);
    });     
}