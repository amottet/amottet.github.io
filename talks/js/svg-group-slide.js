class SVGGroupSlide {
  constructor(config) {

    this.config = config;
    this.groups = document.querySelectorAll(this.config.selector + ' g');
    this.complexities = document.querySelectorAll(this.config.selector_text + ' span');
    this.index = 0;

    console.log('this.groups', this.groups);
    console.log('this.complexities', this.complexities);

    var first = this.groups[this.index];
    var first_text = this.complexities[this.index];
    first.style.opacity = 1;
    first_text.style.opacity = 1;
  }

  fadeOut(index) {

    if(!this.config.fadeOut) {
      return;
    }

    var current = this.groups[index];
    var current_text = this.complexities[index];
    if (current) {
      current.classList.remove('fade-in');
      current.classList.add('fade-out');

      current_text.classList.remove('fade-in');
      current_text.classList.add('fade-out');
    }

  }

  fadeIn(index) {
    var next = this.groups[index];
    var next_text = this.complexities[index];
    //console.log('fadeIn', next);
    if (next) {
      next.classList.remove('fade-out');
      next.classList.add('fade-in');

      next_text.classList.remove('fade-out');
      next_text.classList.add('fade-in');
    }
  }

  start() {

    this.animation = setInterval(() => {

      this.fadeOut(this.index);

      if (this.config.loop) {
        if (this.index === this.groups.length-1) {
          this.index = 0;
        } else {
          this.index = this.index + 1;
        }
      } else {
        this.index = this.index + 1;
      }

      this.fadeIn(this.index);

      if(!this.config.loop) {
        if(this.index === this.groups.length-1) {
          clearInterval(this.animation);
        }
      }

    }, 1500);

  }

  stop() {
    clearInterval(this.animation);
    this.fadeOut(this.index);
    this.fadeIn(this.groups.length-1);
  }
}
