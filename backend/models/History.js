const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const History = Schema({
    listHistory: Array,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = History;
module.exports.CreatHistory = (listHistory, callback) => {
    listHistory.save(callback);
}