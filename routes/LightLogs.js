const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/LightLogController');
const validate = require('../middlewares/validate');

router.post('/:id/light', validate.color, controller.createLightLog);
router.get('/:id/log', controller.getAllLogs);
router.get('/:id/log/:logId', controller.getLogById);
router.put('/:id/log/:logId', validate.color, controller.updateLightLog);
router.delete('/:id/log/:logId', controller.deleteLightLog);

module.exports = router;
