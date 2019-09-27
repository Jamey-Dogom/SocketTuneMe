const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    likes: [],

    id: {
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
    songs: [],
    host: {
        type: String,
        required: [true, "Who is the Host?"]
    },
    room: {
        type: String,
        required: [
            true,
            "Please Enter a room name."
        ]
    },
}, { timestamps: true })

mongoose.model("Playlist", PlaylistSchema);