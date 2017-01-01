  var postOne = {
      "id": 1,
      "imageId": null,
      "title": "Liquid Swords",
      "description": "An album by GZA",
      "url": "https://www.youtube.com/watch?v=28N2taistdk"
  };
  var postTwo = {
      "id": 2,
      "imageId": null,
      "title": "Trogan War",
      "description": "A podcast covering the story and context of the Iliad by Homer",
      "url": "http://trojanwarpodcast.com/"
  };

  var blogPosts = [postOne, postTwo];

  Vue.component('task', {
      template: `<li>
                    <slot></slot>
                </li>`
  });

  Vue.component('blog-post', {
      props: ['number'],
      template: `<div class="blog-post">
                    <a :href="computedPost.url">{{computedPost.title}}</a>
                    <br>
                    <p>{{computedPost.description}}</p>
                </div>`,
      computed: {
          computedPost: function() {
              if (this.number != null) {
                  return blogPosts[this.number];
              }
              return null;
          }
      }
  });

  Vue.component('blog-list', {
      template: `<div>
                    <blog-post v-for="blogPost in blogPosts"></blog-post>
                </div>`,
      data() {
          return null;
      }
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
          currColor: '',
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
          },
          changeColor() {
              if (this.colorCounter++ < this.colors.length) {
                  this.currColor = this.colors[this.colorCounter]
              } else {
                  this.currColor = this.colors[0];
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
