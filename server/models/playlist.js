const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Missing a name."]
    },

    likes: [],

    link: {
        type: String,
        required: [true, "Need a Link."]
    },

    postedBy: {
        type: String,
        required: [true, "Who Posted if fooo?"]
    }
}, { timestamps: true });

mongoose.model("Song", SongSchema);

const PlaylistSchema = new mongoose.Schema({
    songs: [SongSchema],
    host: {
        type: String,
        required: [true, "Who is the Host?"]
    },
    key: {
        type: String,
        required: [
            true,
            "Please Enter a Key."
        ]
    },
}, { timestamps: true })

mongoose.model("Playlist", PlaylistSchema);