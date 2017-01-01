  Vue.component('task', {
      template: '<li><slot></slot></li>'
  });

  new Vue({
      el: '#root',
      data: {
          message: 'Hello World',
          names: ['Joe', 'Mary', 'Jane', 'Jack'],
          newName: '',
          title: 'oh hi there. Please add your name to the list and come back ',
          disabled: true,
          colors: ['color-purple', 'color-red', 'color-orange', 'color-yellow', 'color-green', 'color-blue'],
          color: '',
          colorCounter: 0
      },
      methods: {
          addName() {
              this.names.push(this.newName);
              this.newName = '';
              this.title = 'Welcome to the list ' + this.names.slice(-1)[0] + '!';
          },
          enableOtherButton() {
              this.disabled = !this.disabled;
              console.log('clicked');
          },
          changeColor() {
              console.log('color change happening!');
              if (this.colorCounter++ < this.colors.length) {
                  this.color = this.colors[this.colorCounter]
              } else {
                  this.color = this.colors[0];
                  this.colorCounter = 0;
              }
          }
      },
      mounted() {

      },
      computed: {
          reversedMessage() {
              return this.message.split('').reverse().join('');
          }
      }
  });
