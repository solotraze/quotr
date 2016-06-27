var quotr = require('./quotr/quotr');

quotr.getQuote('ALLBAN', function(err, data) {
  if (err) {
    console.log('Failed. Error: '+err);
  }
  else {
    console.log(JSON.stringify(data,null,2));
  }
});
