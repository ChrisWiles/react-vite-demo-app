// View this image of a Word Clock
// https://i.imgur.com/LlSe4hs.png

const hours_lookup = {
  1: 'ONE',
  2: 'TWO',
  3: 'THREE',
  4: 'FOUR',
  5: 'FIVE',
  6: 'SIX',
  7: 'SEVEN',
  8: 'EIGHT',
  9: 'NINE',
  10: 'TEN',
  11: 'ELEVEN',
  12: 'TWELVE',
};

const mins_lookup = {
  5: 'FIVE MINUTES',
  10: 'TEN MINUTES',
  15: 'QUARTER',
  20: 'TWENTY MINUTES',
  25: 'TWENTY FIVE MINUTES',
  30: 'HALF',
};

// round min to nearest 5 minutes
function roundMinutes(minutes) {
  return Math.round(minutes / 5) * 5;
}

/*
 * Given hours and minutes, return the phrase that the Word Clock would
 * illuminate for that time of day.
 * @hours: (number) The number of hours in the current time
 * @minutes: (number) The number of minutes in the current time
 *
 * @return: (string) The phrase displayed the clocks illuminated words. e.g. "IT IS THREE O'CLOCK"
 */
function timeToWords(hours, minutes) {
  if (!roundMinutes(minutes)) {
    return `IT IS ${hours_lookup[hours]} O'CLOCK`;
  }

  let _hours = hours_lookup[hours + 1];
  if (hours === 12) {
    _hours = hours_lookup[1];
  }

  if (roundMinutes(minutes) === 60) {
    return `IT IS ${_hours} O'CLOCK`;
  }

  if (roundMinutes(minutes) <= 30) {
    const min = mins_lookup[roundMinutes(minutes)];
    return `IT IS ${min} PAST ${hours_lookup[hours]}`;
  }

  if (minutes > 30) {
    const min = mins_lookup[roundMinutes(60 - minutes)];
    return `IT IS ${min} TO ${_hours}`;
  }
}

Array(60)
  .fill()
  .forEach((_, index) => {
    console.log(index, timeToWords(12, index));
  });
