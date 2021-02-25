const Seq = require ('./controller ')

module.exports = function(router) {
    router.post('/create', Seq.createSeq);
    router.get('/get', Seq.getSeqs);
    router.get('/get/:id', Seq.getSeq);
//    router.put('/update/:id', Song.updateSong);
//    router.delete('/remove/:id', Song.removeSong);
}
