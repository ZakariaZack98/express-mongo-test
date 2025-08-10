const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  blogTitle: {
    type: String,
    trim: true,
    required: true,
  },
  blogDescription: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  slug: {
    type: String,
  },
});

//making a slug of blog title
blogSchema.pre("save", function (next) {
  if (this.isModified) {
    const trimmedTitle = this.blogTitle.replaceAll(" ", "-").toLowerCase();
    this.slug = trimmedTitle;
    next();
  }
  next();
});

module.exports = mongoose.model("blog", blogSchema);
