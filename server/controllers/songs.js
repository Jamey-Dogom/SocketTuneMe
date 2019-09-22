const mongoose = require('mongoose');
const Song = mongoose.model("Song");

module.exports = {
    index(_, res) {
        Song.find()
            .then(songs => res.json({ songs }))
            .catch(e => res.json({ errors: e }));
    },

    create(req, res) {
        Song.create(req.body)
            .then(song => res.json({ song }))
            .catch(err => {
                const errors = [];
                for (let key of err.erros) {
                    errors.push(err.errors[key].message);
                }
                res.json({ errors });
            })
    },

    delete(req, res) {
        Song.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: "Successfully deleted song" }))
            .catch(e => res.json({ errors: e }));
    },

    update(req, res) {
        Song.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(song => res.json({ song }))
            .catch(err => {
                const errors = [];
                for (let key in err.errors) {
                    errors.push(err.errors[key].message);
                }
                res.json({ errors });
            })
    },

    getOne(req, res) {
        Song.findById(req.params.id)
            .then(song => res.json({ song }))
            .catch(e => res.json({ errors: e }));
    }
}