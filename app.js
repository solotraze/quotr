var quotr = require('./quotr/quotr');
var stdin = process.openStdin();

console.log('Enter stock code: ');
stdin.addListener("data", function(d) {
  var code = d.toString().trim();

  quotr.getQuote(code, function(err, data) {
    if (err) {
      console.log('Failed. Error: '+err);
    }
    else {
      //console.log(JSON.stringify(data,null,2));
      console.log('Last Trade:\nNSE: ' + data.nse.lastTradedPrice + '\nBSE: ' + data.bse.lastTradedPrice);
    }  
    process.exit(0);
  });
});
