
const log = (req, res, next) =>
{
    console.log("logger...")
    next()
}

export default log;