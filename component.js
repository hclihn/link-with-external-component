/*global Vue set_style_mixin */
Vue.component("link-with-external", {
  mixins: [set_style_mixin],
  props: {
    href: {
      type: String,
      required: true
    },
    extOnly: {
      type: Boolean,
      default: false
    },
    noExt: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      e_color: "#AA00FF",
      s_color: "#2962FF"
    };
  },
  template: `
  <span class="link-with-external">
    <span v-if="noExt">
      <a :href="href" :style="{color: s_color}"><slot>Your Link Text Here!</slot></a>
    </span>
    <span v-else-if="extOnly">
    <a :href="href" target="_blank" :style="{color: e_color}">
      <slot>Your Link Text Here!</slot><v-icon small 
      :color="e_color">mdi-open-in-new</v-icon></a>
    </span>
    <span v-else>
      <a :href="href" :style="{color: s_color}"><slot>Your Link Text Here!</slot></a>
      <a :href="href" target="_blank"><v-icon small 
        :color="e_color">mdi-open-in-new</v-icon></a>
      </span>
  </span>
  `,
  styles: `
  .link-with-external a:link, .link-with-external a:visited{
    text-decoration: none;
    font-weight: bold;
  }
  .link-with-external a:hover {
    text-decoration: underline;
  }
  `
});
