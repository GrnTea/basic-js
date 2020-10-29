
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let diskTurns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor((3600 / turnsSpeed) * diskTurns);
  
  let tower= {
    turns: diskTurns,
    seconds: time
  };

  return tower;
};
