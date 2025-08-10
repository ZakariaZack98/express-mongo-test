const blogModel = require("./../model/blog.model");
const asyncOpsHandler = require("./../utils/asyncHandler.utils");
const bodyValidator = require('../helper/bodyValidator');

exports.createBlog = asyncOpsHandler.asyncHandler(async (req, res) => {
  bodyValidator.checkBody(req, res);
  console.log(req.file);
  const {blogTitle, blogDescription, user} = req.body;
  const blog = await new blogModel({blogTitle, blogDescription, image: `${process.env.HOST_URL}/static/${req.file.originalname}`, user}).save();
  console.log(blogTitle, blogDescription)
  return res.status(200).json({
    msg: "blog saved.",
    data: blog
  })
});
