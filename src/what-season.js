  module.exports = function getSeason(date) {
    
    if (date === undefined) {
        return 'Unable to determine the time of year!';}

    month = date.getMonth();
  if (date = Number(date)) {
      if (month >= 2 && month <= 4) {
          return 'spring'}
            else if (month >= 5 && month <= 7) {return 'summer'}
                  else if (month >= 8 && month <= 10) {return "autumn"}
                      else {return "winter"}; }
  };
