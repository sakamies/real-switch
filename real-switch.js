document.addEventListener('DOMContentLoaded', function () {

  var realSwitch = {};
  realSwitch.elm = document.querySelector('.real-switch');
  realSwitch.dragged = false;

  FastClick.attach(document.body);

  // realSwitch.elm.addEventListener('mousedown', function () {
  //   event.preventDefault();
  // });
  realSwitch.elm.addEventListener('click', function () {
    if (realSwitch.dragged == false && this.value == 0) {
      this.value = 1;
      this.classList.add('checked');
    } else if (realSwitch.dragged == false) {
      this.value = 0;
      this.classList.remove('checked');
    }
    realSwitch.dragged = false;
  });
  realSwitch.elm.addEventListener('keypress', function () {
    if (event.which == 32) {
      this.click();
    };
  });
  realSwitch.elm.addEventListener('input', function () {
    realSwitch.dragged = true;
    if (this.value == 1) {
      this.classList.add('checked');
    } else {
      this.classList.remove('checked');
    }
  });
})
