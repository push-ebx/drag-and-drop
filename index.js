const drop_area = document.getElementsByClassName('card')[0];
const load_button = document.getElementsByClassName('btn-info')[0];

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  drop_area.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  }, false)
});

drop_area.addEventListener('drop', (e) => {
  document.getElementById('file').files = e.dataTransfer.files;
  load_button.text = e.dataTransfer.files[0].name;
});

['dragenter', 'dragover'].forEach(eventName => {
  drop_area.addEventListener(eventName, _ => {
    drop_area.style.cssText = 'box-shadow: 0 0 .5rem rgba(0,250,0,.75) !important;'
  }, false)
});

['dragleave', 'drop'].forEach(eventName => {
  drop_area.addEventListener(eventName, _ => {
    drop_area.style.cssText = 'box-shadow: var(--suai-shadow) !important'
  }, false)
});