// const listsNoteDb = require('../models/userMongoDb');
const objectId = require("mongodb").ObjectID;


module.exports = (db) => {

    module.exports.getAllUsers = async (req, res) => {
        await db.collection(db.name).find().toArray((err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
        })
    };

    module.exports.getUser = async (req, res) => {
        const id = objectId(req.params.id);
        await db.collection(db.name).findOne({ _id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
        });
    }

    module.exports.createNewUser = async (req, res) => {
        
        if (!req.body) return res.status(400);

        let user = {};
         
        user.email = req.body.email;
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.phone = req.body.phone;
        user.gender = req.body.gender;
        user.birthday = req.body.birthday;

        await db.collection(db.name).insertOne(user, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send('Ok!');

        })
    };

    module.exports.createSomeUser = async (req, res) => {
        // if (!req.body) return res.status(400);

        let user = {};
        user.email = "email@gmail.com";
        user.firstName = "FirstName1";
        user.secondName = "SecondName1";
        user.phone = "+3805087655414";
        user.gender = "male"
        user.birthday = "10-12-2001";

        await db.collection(db.name).insertOne(user, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send('Ok!');

        })
    };


}

