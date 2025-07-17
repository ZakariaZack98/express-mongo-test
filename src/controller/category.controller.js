const categoryModel = require('../model/category.model');
const bodyValidator = require('../helper/bodyValidator')

exports.createCategory = async (req, res) => {
  const {categoryName, categoryDetails, isActive} = req.body;
  try {
    bodyValidator.checkBody(req.body);
    const alreadyExists = await categoryModel.findOne({categoryName: categoryName});
    if(alreadyExists) return res.status(401).json({
      msg: `${categoryName} already exists.`
    })
    await new categoryModel({categoryName, categoryDetails, isActive}).save();
    return res.status(200).json({
      msg: 'Category saved successfully.'
    })
  } catch (error) {
    console.error('Error creating category: ', error)
  }
}

exports.getAllCategory = async (req, res) => {
  try {
    const allCategory = await categoryModel.find({})
    if(allCategory.length === 0) return res.status(404).json({
      msg: 'no category found'
    })
    return res.status(200).json(allCategory)
  } catch (error) {
    console.error('Error fetching category data', error)
  }
}

exports.getSingleCategory = async (req, res) => {
  try {
    const {name} = req.params;
    const matchedCategory = await categoryModel.findOne({categoryName: name});
    console.log(matchedCategory)
    if(!matchedCategory) return res.status(404).json({
      msg: 'Category not found.'
    })
    return res.status(200).json(matchedCategory);
  } catch (error) {
    console.error('Error fetching category data', error)
  }
}

exports.updateCategory = async (req, res) => {
  const {categoryName, categoryDetails, isActive} = req.body;
  try {
    const {id} = req.params;
    const matchedCategory = await categoryModel.findOne({_id: id});

    if(!matchedCategory) return res.status(404).json({
      msg: 'category not found'
    })

    if(categoryName) {
      matchedCategory.categoryName = categoryName;
    }
    if(categoryDetails) {
      matchedCategory.categoryDetails = categoryDetails;
    }
    if(isActive) {
      matchedCategory.isActive = isActive;
    }
    await matchedCategory.save();
    return res.status(200).json({
      msg: 'Category data update successful'
    })
  } catch (error) {
    console.error('Error updating category data', error)
  }
}

exports.deleteCategory = async (req, res) => {
  const {id} = req.params;
  try {
    await categoryModel.findOneAndDelete({_id: id})
    res.status(200).json({
      msg: 'category deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting category data', error)
  }
}