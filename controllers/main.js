//index page
exports.indexPage = async function(req,res){
    res.render("index");
    res.end()
}

//test page 2
exports.testPage2 = async function(req,res){
    res.render("test");
    res.end();
}