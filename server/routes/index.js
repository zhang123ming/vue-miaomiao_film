var express = require('express');
var router = express.Router();
const conn=require("./../db/db");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/api/userinfo",(req,res)=>{
	let sqlStr="SELECT*FROM info";
	conn.query(sqlStr,(error,results,fields)=>{
		if(error){
			res.json({
				err_code:0,
				message:"请求失败"
			})
		}else{
			res.json({
				success_code:200,
				message:results
			})
			}
	})
})
module.exports = router;
