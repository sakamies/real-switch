function RangeSwitch(containerEl) {
  element = containerEl.querySelector('input[type="range"');
  dragState = false;

  containerEl.addEventListener('click', function () {
    var elm = element;
    if (dragState == false && elm.value == 0) {
      elm.value = 1;
      elm.classList.add('checked');
    } else if (dragState == false) {
      elm.value = 0;
      elm.classList.remove('checked');
    }
    dragState = false;
  });
  containerEl.addEventListener('touchend', function () {
    this.click();
  });
  element.addEventListener('keypress', function () {
    if (event.which == 32) {
      this.click();
    };
  });
  element.addEventListener('input', function () {
    dragState = true;
    if (this.value == 1) {
      this.classList.add('checked');
    } else {
      this.classList.remove('checked');
    }
  });
}
