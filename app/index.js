export const calcAvg = (nums) =>
  nums.reduce((total, num) => total + num, 0) / nums.length;

export const calcCartTotal = (cart) =>
  cart.reduce((total, item) => total + item.price * item.qty, 0);

export const tallyByCategory = (items) =>
  items.reduce((tally, item) => {
    if (tally[item.category]) {
      tally[item.category] += item.qty;
    } else {
      tally[item.category] = item.qty;
    }

    return tally;
  }, {});
