const mongoose = require("mongoose");
const schema = mongoose.schema;

const muggerSchema = new schema ({
    name: String,
    spisok: String,
    perehod : String,
    image: Image,
});

const mugger = mongoose.model("mugger", muggerSchema);

module.exports = mugger;