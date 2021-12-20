const express=require('express');
const mongoose=require('mongoose');
const allcourseModel = require('../models/allcourse.model');
// const degreeModel = require('../models/course.model');

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const user_data=await allcourseModel.create(req.body)
        return res.status(201).json({data:user_data})
        
    }catch(err){
        return res.status(400).json({message:err.message,status:"Invalid Data"})
    }
})

router.get("/",async(req,res)=>{
    try{
        const user_data=await allcourseModel.find({}).lean().exec();
        return res.status(200).json({data:user_data})
    }catch(err){
        res.status(400).json(err)
    }
}
)

router.get("/home", function (req, res) {
    return res.render("index");
  });

router.get("",async function (req, res) {
    const data = await allcoursesModel.find({}).lean().exec();  
   return res.send(data)
          
 });

router.get("/search",async function (req, res) {
    const data = await allcourseModel.find().lean().exec(); 
    console.log(data) 
   return res.render("course_list_page",{
       data
   })
          
 });

 router.get("/desc",async function (req, res) {
    const data = await allcourseModel.find().lean().exec(); 
    console.log(data) 
    res.render("courseDescription",{
    
        coursename: req.query.coursename,
        institute: req.query.institute,
        type: req.query.type,
        img: req.query.img,
        category: req.query.category,
        duration: req.query.duration,
        duration1:req.query.duration1,
        
        
      });
          
 });

router.get("/enterprises",function (req, res) {
    return res.render("Enterprises");
})
router.get("/students",function (req, res) {
    return res.render("students");
})

router.get("/teams",function (req, res) {
    return res.render("teams");
})
router.get("/login",function (req, res) {
    return res.render("login");
})
router.get("/register",function (req, res) {
    return res.render("register");
})
router.get("/payment",function (req, res) {
    return res.render("payment");
})

module.exports=router;