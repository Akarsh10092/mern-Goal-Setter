const asynHandler = require('express-async-handler')
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals =  asynHandler (async(req,res)=>{
   

    res.status(200).json({message:"Get goals"});
})
// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asynHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400).json({message:'Please add message'})
    }
    res.status(200).json({message:'Set goals'})
})
// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asynHandler(async(req,res)=>{
    res.status(200).json({message:`Update goals ${req.params.id}` })
})
// @desc    Delete goals
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = asynHandler(async(req,res)=>{
    res.status(200).json({message:`Delete goals ${req.params.id}`})
})
module.exports = {getGoals,setGoal,updateGoal,deleteGoal};