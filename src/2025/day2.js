/**
 * Day 2: Advent of Code 2025
 * Problem: [Add problem description here]
 */

// Day 2 - Actual Data
const input = `3299143-3378031,97290-131156,525485-660941,7606-10180,961703-1031105,6856273537-6856492968,403537-451118,5330-7241,274725-384313,27212572-27307438,926609-954003,3035-3822,161-238,22625-31241,38327962-38415781,778-1155,141513-192427,2-14,47639-60595,4745616404-4745679582,1296-1852,80-102,284-392,4207561-4292448,404-483,708177-776613,65404-87389,5757541911-5757673432,21-38,485-731,1328256-1444696,11453498-11629572,41-66,2147-3014,714670445-714760965,531505304-531554460,4029-5268,3131222053-3131390224`;

// Day 2 - Sample Data
const sampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

const paresInput = (input) =>
  input.split(',').map((range) => {
    const [min, max] = range.split('-').map(Number);
    return { min, max };
  });

const giftShop = (data) => {
  const ranges = paresInput(data);
  let total = 0;

  ranges.forEach(({ min, max }) => {
    for (let i = min; i <= max; i++) {
      const strNum = i.toString();
      const len = strNum.length;
      if (len % 2 !== 0) continue; // Must have even number of digits

      const mid = len / 2;
      if (strNum.slice(0, mid) === strNum.slice(mid)) {
        total += i;
      }
    }
  });
  return total;
};

// console.log(
//   'Day 2 Sample Result:',
//   giftShop(sampleInput),
//   giftShop(sampleInput) === 1227775554
// );

// console.log(
//   'Day 2 Sample Result:',
//   giftShop(input),
//   giftShop(input) === 37314786486
// );

const giftShop2 = (data) => {
  const ranges = paresInput(data);
  let total = 0;

  ranges.forEach(({ min, max }) => {
    for (let i = min; i <= max; i++) {
      let found = false;
      const strNum = i.toString();
      const len = strNum.length;

      for (let j = 1; j <= len / 2; j++) {
        if (found) continue;
        if (len % j !== 0) continue;

        let str = strNum.slice(0, j);
        let repeated = str.repeat(len / j);

        if (repeated === strNum) {
          total += i;
          found = true;
        }
      }
    }
  });
  return total;
};

console.log(
  'Day 2 Sample Result:',
  giftShop2(sampleInput),
  giftShop2(sampleInput) === 4174379265
);

console.log(
  'Day 2 Sample Result:',
  giftShop2(input),
  giftShop2(input) === 47477053982
);
