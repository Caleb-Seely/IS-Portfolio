function openProjectModal(slug) {
  const project = window.projectsData.find(p => p.slug === slug);
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  // Set modal title
  modalTitle.textContent = project.data.title;
  
  // Handle multiple images or single image
  const images = Array.isArray(project.data.image) 
    ? project.data.image 
    : [project.data.image];
  
  // Format date for display
  const projectDate = new Date(project.data.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
  
  // Generate image gallery HTML
  let imageGalleryHtml;
  if (images.length > 1) {
    imageGalleryHtml = `
      <div class="mb-4">
        <div class="mb-3">
          <img id="featuredImage" src="${images[0]}" alt="${project.data.title}" 
            class="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02]" 
            onclick="expandImage('${images[0]}')">
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${images.map((img, index) => `
            <img src="${img}" alt="Thumbnail ${index + 1}" 
              class="w-full h-16 object-cover rounded-md cursor-pointer transition-all hover:opacity-80 ${index === 0 ? 'ring-2 ring-forest ring-offset-2' : ''}" 
              onclick="updateFeaturedImage('${img}', this)">
          `).join('')}
        </div>
      </div>`;
  } else {
    imageGalleryHtml = `
      <div class="mb-4">
        <img src="${images[0]}" alt="${project.data.title}" 
          class="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02]" 
          onclick="expandImage('${images[0]}')">
      </div>`;
  }
  
  // Generate materials list with improved styling
  const materialsList = project.data.materials.map(material => 
    `<li class="flex items-start mb-2 last:mb-0">
      <span class="inline-block w-2 h-2 bg-forest rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
      <span class="text-gray-700">${material}</span>
    </li>`
  ).join('');
  
  // Process markdown content
  let processedContent = project.content
    // Fix heading patterns
    .replace(/#{1,3}\s*\n#{1,3}\s*\n#{1,3}\s*/g, '### ')
    // Process headings with bolder text and consistent spacing
    .replace(/### (.*?)(?:\n|$)/g, '<h3 class="text-lg font-bold text-black !important mt-6 mb-3 tracking-tight" style="color: black !important; font-weight: bold !important;">$1</h3>')
    .replace(/## (.*?)(?:\n|$)/g, '<h2 class="text-xl font-bold text-forest mt-8 mb-4 tracking-tight">$1</h2>')
    // Process lists with better spacing and bullets
    .replace(/^- (.*?)$/gm, '<li class="mb-2 text-gray-700">$1</li>')
    // Wrap lists with consistent styling
    .replace(/(<li.*?<\/li>\n?)+/g, '<ul class="list-disc space-y-2 mb-6 ml-5 text-gray-700">$&</ul>')
    // Process bold text with consistent styling
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-forest font-semibold">$1</strong>')
    // Process paragraphs with improved typography
    .replace(/^(?!<[hou])(.+?)$/gm, '<p class="text-gray-700 leading-relaxed mb-4 text-base">$1</p>')
    // Clean up extra newlines
    .replace(/\n{3,}/g, '\n\n');

  // Set modal content with improved layout and spacing
  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center text-gray-500 space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <time datetime="${project.data.date}">${projectDate}</time>
      </div>
      
      ${imageGalleryHtml}
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <div class="max-w-none">
            ${processedContent}
          </div>
        </div>
        <div>
          <div class="bg-sand p-6 rounded-lg shadow-md sticky top-4">
            <h3 class="font-bold text-lg mb-4 text-forest tracking-tight">Materials Used</h3>
            <ul class="space-y-3">
              ${materialsList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Show modal with smooth transition
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.add('opacity-100');
    modal.classList.remove('opacity-0');
  });
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('opacity-0');
  modal.addEventListener('transitionend', function handler() {
    modal.classList.add('hidden');
    modal.removeEventListener('transitionend', handler);
  });
  document.body.style.overflow = 'auto';
}