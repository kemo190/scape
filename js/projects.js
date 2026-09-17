document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('proj-grid');
  const filterBtns = document.querySelectorAll('.p-filter-btn');

  // Initial Render
  renderProjects('all');

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add to clicked
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  function renderProjects(filter) {
    grid.innerHTML = '';
    
    let filteredData = projectsData;
    if (filter !== 'all') {
      filteredData = projectsData.filter(p => p.categoryId === filter);
    }

    filteredData.forEach((project, index) => {
      // Layout pattern logic:
      // Index 0: Full width
      // Index 1: Half width
      // Index 2: Half width
      // Index 3: Full width
      // Index 4: Half width
      // ... and so on.
      // Modulo 4 gives us: 0=full, 1=half, 2=half, 3=full
      const mod = index % 4;
      const isFullWidth = (mod === 0 || mod === 3);

      const cardClass = isFullWidth ? 'proj-card--full' : 'proj-card--half';
      
      // Formatting the index number to be 01, 02, etc.
      const formattedNum = String(index + 1).padStart(2, '0');

      // Create card element
      const card = document.createElement('a');
      card.href = project.imagePath;
      card.className = `proj-card ${cardClass}`;
      card.setAttribute('data-fancybox', 'projects-gallery');
      card.setAttribute('data-caption', `${project.title} - ${project.client || ''}`);

      card.innerHTML = `
        <div class="proj-card__image-wrapper">
          <img src="${project.imagePath}" alt="${project.title}" class="proj-card__image" loading="lazy">
        </div>
        <div class="proj-card__content">
          <div class="proj-card__num">${formattedNum}</div>
          <h3 class="proj-card__title">${project.title}</h3>
          ${project.client && project.client !== '---' ? `<div class="proj-card__subtitle">${project.client}</div>` : '<div class="proj-card__subtitle">مشروع معماري متكامل</div>'}
          
          <div class="proj-card__meta">
            ${project.area && project.area !== '---' ? `
            <div class="proj-card__meta-item">
              <i class="fa-solid fa-expand"></i>
              <span>${project.area}</span>
            </div>
            ` : ''}
            ${project.location && project.location !== '---' ? `
            <div class="proj-card__meta-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>${project.location}</span>
            </div>
            ` : ''}
          </div>

          <div class="proj-card__arrow">
            اكتشف المشروع
            <i class="fa-solid fa-arrow-left"></i>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }
});
