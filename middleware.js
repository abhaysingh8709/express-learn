
module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please Provide Age")
    }else if(req.query.age > 10){
        resp.send("You can't access this !")
    }else{
        next();
    }
}
