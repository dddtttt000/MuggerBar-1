module.exports = {
    login: require('./users/login'),
    Logout: require('./users/Logout'),
    Signup: require('./users/Signup'),
    info: require('./users/info'),
    search: require('./main/search'),
    make: require('./posts/make'),
    get: require('./posts/get'),
    delete: require('./posts/delete'),
    recommend: require('./posts/recommend'),
    comment: require('./posts/comment'),
    list: require('./mypage/list'),
    edit: require('./mypage/edit'),
};