function superbowlWin(record) {
    let winningYear = record.find(function(entry) {
      return entry.result === 'W';
    });
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
  