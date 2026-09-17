document.addEventListener("DOMContentLoaded", () => {
  // Ensure portfolioImages is loaded from portfolio-data.js
  if (typeof portfolioImages === 'undefined') {
    console.error("portfolioImages is not defined. Ensure portfolio-data.js is loaded before portfolio.js");
    return;
  }

  const grid = document.getElementById("portfolio-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const filterBtns = document.querySelectorAll(".p-filter-btn");

  let currentCategory = 'all';
  let currentIndex = 0;
  const itemsPerPage = 12; // Load 12 items at a time
  let filteredImages = [];

  // Function to shuffle array
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Function to filter images based on category
  function filterImages(category) {
    if (category === 'all') {
      // Create a mixed (shuffled) array for "all"
      filteredImages = shuffleArray(portfolioImages);
    } else {
      filteredImages = portfolioImages.filter(img => img.categoryId === category);
    }
  }

  // Function to render a batch of images
  function renderImages(startIndex, count) {
    const endIndex = Math.min(startIndex + count, filteredImages.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      const img = filteredImages[i];
      
      // Dynamic masonry pattern: every group of 3 items gets one large item, 
      // ensuring exactly 4 columns per row.
      let isLarge = false;
      const rowPattern = Math.floor(i / 3) % 4; // 4 different row patterns
      const colPattern = i % 3; // 0, 1, or 2
      
      if (rowPattern === 0 && colPattern === 0) isLarge = true; // Large, Normal, Normal
      else if (rowPattern === 1 && colPattern === 2) isLarge = true; // Normal, Normal, Large
      else if (rowPattern === 2 && colPattern === 1) isLarge = true; // Normal, Large, Normal
      else if (rowPattern === 3 && colPattern === 0) isLarge = true; // Large, Normal, Normal

      const card = document.createElement('a');
      card.href = img.imagePath; // Set href to image path for fancybox
      card.setAttribute("data-fancybox", "portfolio-gallery");
      card.setAttribute("data-caption", img.title);
      card.className = `p-card ${isLarge ? 'item-large' : ''}`;
      
      // Calculate the display number (e.g. 01 / 12)
      // We'll use the overall index in the filtered array + 1
      const displayNum = String(i + 1).padStart(2, '0');
      const totalNum = String(filteredImages.length).padStart(2, '0');

      card.innerHTML = `
        <div class="p-card__image-wrap">
          <img src="${img.imagePath}" alt="${img.title}" class="p-card__image" loading="lazy">
        </div>
        <div class="p-card__content">
          <div class="p-card__info">
            <span class="p-card__meta">${displayNum} / ${totalNum}</span>
            <h3 class="p-card__title">${img.title}</h3>
          </div>
          <div class="p-card__arrow">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    }
    
    // Update current index
    currentIndex = endIndex;
    
    // Show/Hide Load More Button
    if (currentIndex >= filteredImages.length) {
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }

  // Initial load
  filterImages('all');
  renderImages(0, itemsPerPage);

  // Load More Click Handler
  loadMoreBtn.addEventListener('click', () => {
    renderImages(currentIndex, itemsPerPage);
  });

  // Filter Click Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked
      e.target.classList.add('active');
      
      // Get category
      currentCategory = e.target.getAttribute('data-filter');
      
      // Reset grid and index
      grid.innerHTML = '';
      currentIndex = 0;
      
      // Filter and render
      filterImages(currentCategory);
      renderImages(0, itemsPerPage);
    });
  });

});
