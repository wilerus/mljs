
import Vue from 'vue';

export default Vue.component('my-component', {
    template: '<button v-on:click="handleClick" class="dev-launche-button" title="{{title}}">{{title}}</button>',

    props: ['title'],

    methods: {
        handleClick() {
            this.$emit('handleClick');
        }
    }
})