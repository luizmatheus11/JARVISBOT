module.exports.deleteMessage = (message, time) => {
    setTimeout(() => message.delete(), time)
}