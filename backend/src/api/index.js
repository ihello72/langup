/**
 * Module dependencies.
 */

const koaRouter = require('koa-router');
const router = new koaRouter();

/**
 * Router dependencies.
 */

const auth = require('./auth');
const search = require('./search');
const user = require('./user');

/**
 * Middle ware dependencies.
 * 
 * 미들웨어 테스트 성공
 */
const authMiddleware = require('../middlewares/auth');


/**
 * 
 * REST API LIST
 * - 인증
 * - 단어 검색
 * 
 */

// account
router.use('/auth', auth.routes());
router.use('/search', authMiddleware, search.routes());
router.use('/user', authMiddleware, user.routes());

module.exports = router;
