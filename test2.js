// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// May share time and date, due to timezone
// Group by city, then sort by time, and number starting with 1
// Then rename: name of city, number of every phone in each group should have the same length, (add leading zeros to the numbers)
// should end with same extension

function solution(S) {
  const photos = S.split('\n').filter(Boolean);
  const byLocation = {
    // [Warsaw]: []
  };
  const photosLookup = {};

  // Group photos by location, and a look up with a unique key
  photos.forEach((photo) => {
    const [name, location, date] = photo.split(', ');
    const [, fileType] = name.split('.');
    const key = name + location + date;
    const data = { fileType, date, location, key };
    if (byLocation[location]) {
      byLocation[location].push(data);
    } else {
      byLocation[location] = [data];
    }
  });

  // Sort by date and prefix number count, by location so shared date doesn't matter
  Object.keys(byLocation).forEach((name) => {
    const count = byLocation[name].length;
    const maxNumberLength = String(count).length;
    byLocation[name]
      .sort((a, b) => a.date.localeCompare(b.date))
      .forEach(({ fileType, key, location }, index) => {
        let number = String(index + 1);
        const prefixZerosCount = maxNumberLength - number.length;
        if (prefixZerosCount) {
          number = '0'.repeat(prefixZerosCount) + number;
        }
        photosLookup[key] = `${location}${number}.${fileType}`;
      });
  });

  return photos
    .map((photo) => {
      const [name, location, date] = photo.split(', ');
      return photosLookup[name + location + date];
    })
    .join('\n');
}

const string = `
photo.jpg, Warsaw, 2013-09-05 14:08:15
Jay.png, London, 2015-06-20 15:13:22
myFriends.png, Warsaw, 2013-09-05 14:07:13
Eiffel.jpg, Paris, 2015-07-23 08:03:02
pisatower.jpg, Paris, 2015-07-22 23:59:59
BOB.jpg, London, 2015-08-05 00:02:03
notredame.png, Paris, 2015-09-01 12:00:00
me.jpg, Warsaw, 2013-09-06 15:40:22
a.png, Warsaw, 2016-02-13 13:33:50
b.jpg, Warsaw, 2016-01-02 15:12:22
c.jpg, Warsaw, 2016-01-02 14:34:30
d.jpg, Warsaw, 2016-01-02 15:15:01
e.png, Warsaw, 2016-01-02 09:49:09
f.png, Warsaw, 2016-01-02 10:55:32
g.jpg, Warsaw, 2016-02-29 22:13:11`;

console.log(solution(string));

// Warsaw02.jpg
// London1.png
// Warsaw01.png
// Paris2.jpg
// Paris1.jpg
// London2.jpg
// Paris3.png
// Warsaw03.jpg
// Warsaw09.png
// Warsaw07.jpg
// Warsaw06.jpg
// Warsaw08.jpg
// Warsaw04.png
// Warsaw05.png
// Warsaw10.jpg
