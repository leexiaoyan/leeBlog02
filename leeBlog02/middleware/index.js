//必须登录之后才能访问
exports.checkLogin =function(req,res,next){
    if(!req.session.user){
        req.flash('error','未登录您不能访问！');
        return res.redirect('/users/login');
    }
    next();
}

    //必须登录之前才能访问
exports.checkNotLogin =function(req,res,next){
    if(req.session.user){
        req.flash('error','已登录！');
        return res.redirect('back'); //返回之前的页面
    }
    next();
}