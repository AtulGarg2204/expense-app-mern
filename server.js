const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDb')
const path=require('path');
dotenv.config();

const app=express();
connectDb();
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
 //static files
app.use(express.static(path.join(__dirname,'./client/build')));
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});
const PORT =8090 || process.env.PORT;
app.use("/api/v1/users",require('./routes/userRoute'));

//PORT

 //transaction routes
 app.use("/api/v1/transactions",require('./routes/transactionRoute'));


app.listen(PORT,()=>{
    console.log(`Application is successfully running on ${PORT}`);
});