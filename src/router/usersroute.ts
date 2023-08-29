import * as express from "express"
import {  UserDataSource} from "../data-source";
import { User } from "../entity/User"

var router = express.Router();
const userRepository = UserDataSource.getRepository(User);
/* GET users listing. */

router.get('/new',function(req,res,next){
  res.render("newuser.ejs");

});

router.post('/',async function(req,res,next) {
 const U=new User();
 U.userName=req.body.firstName;
 U.password=req.body.age;
 await userRepository.save(U);
 res.redirect("/users/"+U.id);
});



router.get('/:id',async function(req, res, next) {
  console.log("geting id")
  const uid=await userRepository.findOneBy({id:req.params.id});
  res.render("user.ejs",{firstName:uid.userName});
});

router.delete('/:id',async function (req,res,next) {
  console.log(req.params);
  const uid=await userRepository.findOneBy({id:req.params.id});
  console.log(uid);
  await userRepository.remove(uid);
  res.sendStatus(200);
});


export {router as UsersRouter}
