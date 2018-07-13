const router = require('express').Router();
const controller = require('./controllers');

router.route('/todoList')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

module.exports = router;