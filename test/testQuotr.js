var assert = require('chai').assert;
var quotr = require('../quotr/quotr');

/* Configure test env */
var webTestTimeout = 5000; // Seconds for test timeout if a web request is involved
/* Test Data */
var stockCode = 'ALLBAN';

describe('quotr.js', function(){
  describe('Using povider IC', function(){
    it('should be able to fetch quote data', function(done){
      this.timeout(webTestTimeout);
      quotr.getQuote(stockCode, function(err, data) {
        if(err) { done(err); return; }
        assert.isNotNull(data, 'Quote data returned was null');
        done(); // Mark test complete
      });
    });

    it('should provide quote data in expected JSON structure', function(done){
      this.timeout(webTestTimeout);
      quotr.getQuote(stockCode, function(err, data) {
        if(err) { done(err); return; }
        assert.isNotNull(data.nse, 'NSE data empty');
        assert.isNumber(data.nse.lastTradedPrice, 'NSE data invalid');
        assert.isNotNull(data.bse, 'BSE data empty');
        assert.isNumber(data.bse.lastTradedPrice, 'BSE data invalid');
        done(); // Mark test complete
      });
    });
  });
});
