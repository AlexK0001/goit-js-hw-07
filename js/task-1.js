const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems}`);
  });
  