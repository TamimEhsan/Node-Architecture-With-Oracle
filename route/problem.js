const router = require('express-promise-router')();

const ProblemController = require('../controller/problem').ProblemController;

let controller = new ProblemController();

router.route('/problems/recent').get(controller.recent);

module.exports = router;