const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const parentContainer = this.closest('.tabs');
    
    parentContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('tab_active'));
    parentContainer.querySelectorAll('.tab__content').forEach(c => c.classList.remove('tab__content_active'));
    
    this.classList.add('tab_active');
    
    const activeTabIndex = Array.from(parentContainer.querySelectorAll('.tab')).indexOf(this);
    parentContainer.querySelectorAll('.tab__content')[activeTabIndex].classList.add('tab__content_active');
  });
});