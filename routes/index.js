const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/indexController');


router.get('/', IndexController.getIndexPage);
router.get('/connect', IndexController.connectToDrive);
router.get('/active', IndexController.getActiveFolder);
router.get('/history', IndexController.getHistoryFolder);
router.get('/regulatory', IndexController.getRegulatoryFolder);
router.get('/training', IndexController.getTrainingFolder);
router.get('/wip', IndexController.getWIPFolder);
/*
router.use('/', require('./root'));
router.use('/customer', require('./customer'));
router.use('/staff', require('./staff'));
router.use('/booking', require('./booking'));

router.get('/about', IndexController.getAbout);
router.get('/contact', IndexController.getContact);
router.get('/aircraftDetails', IndexController.getAircraftDetails);
router.get('/privacy', IndexController.getPrivacy);

router.use((req, res) => res.status(404).render('404'));
*/

module.exports = router;