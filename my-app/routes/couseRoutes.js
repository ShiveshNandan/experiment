const { Router } = require('express');
const { getCourses, uploadCourses } = require('../controllers/controllers');

const router = Router();

router.get('/' , getCourses);
router.post('/add' , uploadCourses);

module.exports = router;