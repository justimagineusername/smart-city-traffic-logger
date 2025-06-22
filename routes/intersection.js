const express = require('express');
const router = express.Router();
const controller = require('../controllers/intersectionController');
const validate = require('../middlewares/validate');

router.post('/', validate.name, controller.createIntersection);
router.get('/', controller.getAllIntersections);
router.get('/:id', controller.getIntersectionById);
router.put('/:id', validate.name, controller.updateIntersection);
router.delete('/:id', controller.deleteIntersection);

module.exports = router;
