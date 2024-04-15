const numberOfCategories = document.querySelectorAll('.item').length;
console.log('Number of categories: ', numberOfCategories);

const categoryEl = document.querySelectorAll('.item');

categoryEl.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log('Category: ', categoryName);
  const numberOfElements = category.querySelectorAll('li').length;
  console.log('Elements: ', numberOfElements);
});
