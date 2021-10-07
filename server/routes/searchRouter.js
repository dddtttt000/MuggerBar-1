const controllersSearch = require('../controllers/search.js')

// total 들어오는 경로
//'/search'

router.post('/login', controllersSearch.search)