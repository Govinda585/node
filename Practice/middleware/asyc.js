module.exports = (handler) =>{
    return async(req,res,next) =>{
      try {
        await handler(req,res)
      } catch (er) {
        next(er)
      }
    }
    }