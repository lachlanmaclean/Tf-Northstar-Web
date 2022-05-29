var express = require('express');
const { json } = require('express/lib/response');
var fetch = require('node-fetch')
var router = express.Router();



const checkUpdate = async function() {
  let res = await fetch('https://northstar.tf/client/servers');
  if (res.ok){
    const data = await res.json()
    //console.log(data[1].name)
    return data
  }

}
/* GET home page. */
router.get('/', async function(req, res, next) {
  var data = await checkUpdate();
  serverCount = Object.keys(data).length
  count = 0;
  data.forEach(item => {
    
    count += item.playerCount
  });
  

  res.render('index', { title: 'Express', data: data, count: count, serverCount: serverCount });
});

module.exports = router;
