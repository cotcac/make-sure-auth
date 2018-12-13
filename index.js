exports.isAdmin = function(req, res, next){
	if(req.user && (req.user.role==='admin' || req.user.role==='developer')){
		return next();
	}else{
		res.redirect('/not-allow');
	}
}
exports.isWoker = function(req, res, next){
	if(req.user && (req.user.role==='worker' || req.user.role==='admin' || req.user.role==='developer')){
		return next();
	}else{
		res.redirect('/not-allow');
	}
}
exports.isUser = function(req, res, next){
	if(req.user){
		return next();
	}else{
		res.redirect('/login');
	}
}
