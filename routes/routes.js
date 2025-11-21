const express = require('express');
const { getHeaderController } = require('../controllers/landing/header.controller');
const { getFooterController } = require('../controllers/landing/footer.controller');
const { getSpotlightController } = require('../controllers/landing/spotlight.controller');
const router = express.Router();
const controller = require('../controllers/landing/proLearn.controller');
const { getNewsLetterController } = require('../controllers/landing/newsLetter.controller');
const { getClient } = require('../controllers/landing/client.controller');
const { getPartner } = require('../controllers/landing/partner.controller');




router.get('/header', getHeaderController);
router.get('/footer',getFooterController);


//Landing page

router.get('/spotlight',getSpotlightController);

// ProLearn Routes
router.post('/prolearn', controller.createProgram);
router.get('/prolearn', controller.getPrograms);
router.post('/prolearn/:id/courses', controller.addCourse);
router.delete('/prolearn/:id/courses/:courseId', controller.deleteCourse);

//Newsletter Route

router.get('/newsLetter',getNewsLetterController);

//client

router.get('/client',getClient);
router.get('/partner',getPartner);

module.exports = router;