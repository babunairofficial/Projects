const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/woman-wearing-coat-standing-on-road-with-travel-luggage-during-daytime-Kf7hX64kLw0",
        set: (v) => v === "" ? "https://unsplash.com/photos/woman-wearing-coat-standing-on-road-with-travel-luggage-during-daytime-Kf7hX64kLw0" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;