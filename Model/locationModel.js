const { Module } = require('module')
const mongoose = require('mongoose')

const location = mongoose.Schema({
    empNumber:{
        type:String,
        required:true,
        unique: true
    },
    longitude:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("location",location)