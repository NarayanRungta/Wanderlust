const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://rungtanarayan002:MlPU1SF3XnSxqbyG@cluster0.ujr1hmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ 
        ...obj,
        owner: "68a760712f5c2fca6c73fdb7", 
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();