const { connect, model } = require('mongoose')
module.exports = class BotDatabase {
    constructor(uri) {
        connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, autoIndex: false, keepAlive: true  }, e => {
            if(e) throw new Error("Mongoose Error: " + e)
            console.log(`Database by MongoDB`)
        })

        return {
            ...this,
            // help: model("Help", require('./Models/help')),
        }
    }
}