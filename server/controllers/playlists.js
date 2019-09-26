const mongoose = require('mongoose');
const Playlist = mongoose.model('Playlist');


module.exports = {
    create(req, res) {
        Playlist.create(req.body)
            .then(playlist => res.json({ playlist }))
            .catch(err => {
                const errors = { errors: err.errors };
                res.json(errors);
            })
    },

    delete(req, res) {
        Playlist.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: "Successfully Deleted PlayList." }))
            .catch(e => res.json({ errors: e }));
    },

    getOne(req, res) {
        Playlist.find({ key: req.params.key })
            .then(playlist => res.json({ playlist }))
            .catch(e => res.json({ errors: e }));
    },

    update(req, res) {
        Playlist.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(playlist => res.json({ playlist }))
            .catch(e => {
                const errors = [];

                for (let key in e.errors) {
                    errors.push(e.errors[key].message);
                }

                res.json({ errors })
            });

    }
}