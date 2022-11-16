const asynHandler = require('express-async-handler');
const Goal = require('../models/goalModel')
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals =  asynHandler (async(req,res)=>{
   
  const goals =  await Goal.find() 
    res.status(200).json(goals);
})
// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asynHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400).json({message:'Please add message'})
    }
    const goal= await Goal.create({
        text : req.body.text
    })
    res.status(200).json(goal)
})
// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asynHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    //executes an `findOneAndUpdate` query by req.params.id
    //req.body updated text we want to update as using postman hence req.body
    //new true if not created then create one
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })

    res.status(200).json(updatedGoal)
})
// @desc    Delete goals
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = asynHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    
    await goal.remove()
    res.status(200).json({id:req.params.id})
})
module.exports = {getGoals,setGoal,updateGoal,deleteGoal};