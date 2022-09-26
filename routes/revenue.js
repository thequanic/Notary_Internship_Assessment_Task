const express=require(`express`);
const Revenue = require(`../models/Revenue`);
const User=require('../models/User')

const router = express.Router();


// router.post('/create/User',async (req,res)=>{
    
    
//     //creating new user
//     user=User.create(
//         {
//             name:req.body.name,
//             email:req.body.email,

//         }
//     ).then(
//         user=>res.json(user)
//     )
//     .catch(err=>{
//         //if there is some error while creating user this will be executed
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
//     );
// })


// router.post('/create/revenue',async (req,res)=>{
    
    
//     //creating new user
//     revenue=Revenue.create(
//         {
//             amount:req.body.amount,
//             user:req.body.user
//         }
//     ).
//     then(revenue=>res.json(revenue))
//     .catch(err=>{
//         //if there is some error while creating user this will be executed
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
//     );
// })

router.get("/revenue/recieved/history",async (req,res)=>{
    revenues=Revenue.find();
    arr={};
    for(var x=0;x<revenues.length;x++)
    {
        _user=User.findById(revenues[x].user);
        obj={
            name:_user.name,
            email:_user.email,
            amount:revenues[x].amount,
            dateRecieved:revenues[x].dateRecieved
        }
        arr[x]=obj;

    }

    res.send(arr);
})

module.exports=router