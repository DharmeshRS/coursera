const express=require('express')
const path=require('path')
const port=process.env.PORT || 3000;
const connect=require('./configs/db')
const app=express()

// const degreeController=require("./controllers/degree.controller")
// const courseController=require("./controllers/course.controller")
const allcourseController=require("./controllers/allcourse.controller")
const userController=require("./controllers/user.controller")

// const {register,login} = require("./controllers/auth_controller")
// app.use(express.json())
// app.use('/degree',degreeController)
// app.use('/course',courseController)
// app.use('/allcourse',allcourseController)
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/courses/",allcourseController)
app.use("/users",userController)
app.get("/", function (req, res) {
    return res.render("products/index");
  });

// app.use("/register", register);

//   app.get("/register",(req,res)=>{
//     res.render("register")
// })
// app.use("/login", login);
// app.get("/login",(req,res)=>{
//     res.render("login")
// })




const start=async()=>{
    const con=await connect();
    console.log("connection Established")
    app.listen(port,()=>{
    console.log(`Listening On port ${port}`)
 })
}

module.exports=start
