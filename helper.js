module.exports = {
    simpleListToArray: function (listStr) {
        return listStr.split(/\s+/)
    },
    spacedLog: function (msg) {
        console.log(msg, '\n')
    }
}
