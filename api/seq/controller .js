const Seq = require('./model')

exports.createSeq = function (req, res, next) {
    const seq = {
        a1_index: req.body.a1_index,
        a1_value: req.body.a1_value,
        a2_index: req.body.a2_index,
        a2_value: req.body.a2_value,
        n_index : req.body.n_index
    }
    Seq.create(seq, function (err, seq) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Seq created successfully"
        })
    })
}



exports.getSeqs = async (req, res, next) => {
    console.log("seq param", req.param())
    let seqs = await Seq.find()
        .catch(err => {
            res.status(400).send("err router.get " + err)
            console.log("err router.get ", err)
        })
    let oneObj = {}    
    let resAr = []
    for (let i = 0; i < seqs.length; i++) {
        oneObj = {}    
        oneObj.id = seqs._id
        oneObj.a1_index = seqs.a1_index
        oneObj.a1_value = seqs.a1_value
        oneObj.a2_index = seqs.a2_index
        oneObj.a2_value = seqs.a2_value
        oneObj.n_index = seqs.n_index
        resAr.push(oneObj)
    }
    
    //console.log("seqs : ", seqs)
    res.json({
        seqs: seqs
    })
}




exports.getSeq = async (req, res, next) => {
    let seq = await Seq.findOne({ _id: req.params.id })
        .catch(err => {
            const errStr = `err router.get seq by id = ${req.params.id}`
            res.status(400).send(errStr + err)
            console.log(errStr, err)
        })
    let seqCut = {}
    seqCut._id = seq._id
    seqCut.a1_index = seq.a1_index
    seqCut.a1_value = seq.a1_value
    seqCut.a2_index = seq.a2_index
    seqCut.a2_value = seq.a2_value
    seqCut.n_index  = seq.n_index
    res.json({
        seq: seqCut
    })
}


