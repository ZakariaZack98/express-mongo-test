exports.checkBody = (req, res) => {
  if(!req) return;
  for(let field in req.body) {
      if(req.body[field].length === 0) {
        return res.status(401).json({
          msg: `${field} is Missing`
        })
      }
    }
}