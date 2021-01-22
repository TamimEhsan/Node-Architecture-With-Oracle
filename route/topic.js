const router = require('express-promise-router')();

const TopicController = require('../controller/topic').TopicController;

let controller = new TopicController();

router.route('/topics').get(controller.list);
router.route('/topics/:id').get(controller.fetch);

module.exports = router;