import express from "express"
import userRoute from "./routes/userRouter.js"
import productRoute from "./routes/productRouter.js"
import path from "path"
import session from "express-session"
import nocache from "nocache"

const app = express()
const port = 5000

app.use(session({
    secret : "myNameIsFaraz",
    resave:false,
    saveUninitialized:true
}))
app.use(express.urlencoded({extended:true}))
app.use(nocache());

app.set('view engine', 'hbs');
const __dirname = path.resolve()
app.set('views',path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.send("Api is running ...")
})

// user rotuer
app.use("/user",userRoute)

// product rotuer
app.use("/products",productRoute)

app.listen(port || 50001,()=>{
    console.log(`Server is running on port ${port}`);
})