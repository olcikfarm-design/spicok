document.addEventListener('click', (event) => {
  const target = event.target.closest('.has-tooltip');
  
  if (!target) return;
  
  event.preventDefault();

  document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.remove());

  const text = target.getAttribute('title');
  if (!text) return;

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = text;

  const position = target.dataset.position || 'bottom';
  const rect = target.getBoundingClientRect();

  document.body.appendChild(tooltip);

  if (position === 'top') {
    tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;
    tooltip.style.left = `${rect.left}px`;
  } else if (position === 'bottom') {
    tooltip.style.top = `${rect.bottom}px`;
    tooltip.style.left = `${rect.left}px`;
  } else if (position === 'left') {
    tooltip.style.top = `${rect.top}px`;
    tooltip.style.left = `${rect.left - tooltip.offsetWidth}px`;
  } else if (position === 'right') {
    tooltip.style.top = `${rect.top}px`;
    tooltip.style.left = `${rect.right}px`;
  }
});