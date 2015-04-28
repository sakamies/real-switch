document.addEventListener('DOMContentLoaded', function () {

  var realSwitch = {};
  realSwitch.container = document.querySelector('.switch');
  realSwitch.elm = document.querySelector('.real-switch');
  realSwitch.dragged = false;

  FastClick.attach(document.body);

  // realSwitch.elm.addEventListener('mousedown', function () {
  //   event.preventDefault();
  // });
  realSwitch.container.addEventListener('click', function () {
    var elm = realSwitch.elm;
    console.log('click?');
    if (realSwitch.dragged == false && elm.value == 0) {
      elm.value = 1;
      elm.classList.add('checked');
    } else if (realSwitch.dragged == false) {
      elm.value = 0;
      elm.classList.remove('checked');
    }
    realSwitch.dragged = false;
  });
  realSwitch.container.addEventListener('touchend', function () {
    this.click();
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
