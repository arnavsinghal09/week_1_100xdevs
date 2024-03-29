/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

//SOLVED
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const { category, price } = transaction;
   
      if (!categoryTotals[category]) {
          categoryTotals[category] = price;
      } else {
          categoryTotals[category] += price;
      }
  }
  const result = [];
  for (const category in categoryTotals) {
      result.push({ category: category, totalSpent: categoryTotals[category] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
