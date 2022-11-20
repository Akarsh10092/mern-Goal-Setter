const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token
//in http headers we have authorization object that's what we will check
//Bearer token this is the way it is contained in the header 
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from  bearer header
      //split turns it into an array
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      //decode payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      //assinging to req.user so that can use it any route that is protected
      //won't include password
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }