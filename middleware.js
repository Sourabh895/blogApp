
const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash('error', 'Please login to used in this Blog');
        return res.redirect('/login')
    }
    next();
}


module.exports = {
    isLoggedIn
}


