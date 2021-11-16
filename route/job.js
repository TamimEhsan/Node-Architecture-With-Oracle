const router = require('express-promise-router')();

const JobController = require('../controller/job').JobController;
let controller = new JobController();

router.get('/all',controller.list);
router.get('/:id',controller.fetch);

router.delete('/',);
router.put('/',);

module.exports = router;