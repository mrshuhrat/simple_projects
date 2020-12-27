// Select All Panels
const panels = document.querySelectorAll('.panel');

// Add Panel's active class to classList
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// Remove Panel's active class to classList
function removeActiveClasses () {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
};
