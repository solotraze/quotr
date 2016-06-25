//http://getquote.icicidirect.com/trading_stock_quote.aspx?symbol=nifty
/*
Expected stock quote structure:
{
    stockName: <str>,
    stockCode: <str>,
    accessDateTime: <datetime>,

    sensex: <num>,
    sensexChange: <num>,

    nifty: <num>,
    niftyChange: <num>,

    nse: {
      lastTradeDate: <date>,
      lastTradeTime: <time>,
      lastTradedPrice: <num>,

      bestBid: <num>,
      bestBidQuantity: <int>,

      bestOffer: <num>,
      bestOfferQuantity: <int>,

      stats: {
        dayOpen: <num>,
        dayClose: <num>,
        closeLastDay: <num>,

        dayChange: <num>,
        dayChangePercentage: <num>,

        dayHigh: <num>,
        dayLow: <num>,
        yearHigh: <num>,
        yearLow: <num>,
        lifeHigh: <num>,
        lifeLow: <num>,

        dayVolume: <int>
      }
    },
    bse: {...}
    }
*/

var mockData = {
  nse: {lastTradedPrice: 50, lastBid: 49, lastOffer: 51},
  bse: {lastTradedPrice: 50, lastBid: 49, lastOffer: 51}
};

var getQuote = function (stockCode, callback) {
  // Return dummy data
  callback(null, mockData);
};

exports.getQuote = getQuote;
