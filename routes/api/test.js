const router = require('express').Router();
const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({
  title: String,
  description: String
},{ versionKey: false });
const infoModel = mongoose.model('info', infoSchema)

/**
 * Insert intial dummy data
 */
(async function(infoModel) {
  const info = await infoModel.find({})
  if (info.length === 0) {
    const arr = [{
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      title: 'Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      title: 'Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];
    arr.forEach(function(x) {
      const info = new infoModel(x)
      info.save()
    })
  }
}(mongoose.model('info', infoSchema)))

router.get('/', function(req, res) {
  res.send({
    message: 'hello world!'
  })
});

router.get('/info', async function(req, res) {
  const info = await mongoose.model('info', infoSchema).find({})
  res.send(info)
});

module.exports = router;
