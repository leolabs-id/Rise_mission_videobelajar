const sections = document.querySelectorAll('.footer-section h4');
  sections.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('active');
    });
  });