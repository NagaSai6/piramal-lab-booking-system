const Instrument = require("../models/instrument");

function homepagecontroller(){
  return {
    homePage(req,res){
      Instrument.distinct("category",(err,result)=>{
         res.render("home",{result})
      })
    },
    loginPage(req,res){
      res.render("sign")
    },
    userLogout(req,res){
      req.session = null ;
      req.logout();
      res.redirect("/")
    }
  }
}





module.exports = homepagecontroller;