const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
  console.log(req.params)
  console.log(req.query)
  // req.params是路由自参数
  // req.query是？后面的参数
  res.render('users',{
    name: req.params.name,
    id: req.query.id
  })
})

module.exports = router;