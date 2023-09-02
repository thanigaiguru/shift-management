<template>
    <button :class="btnClass" @click="onClickHandler">{{ btnText }}</button>
</template>

<script>
export default {
    name : 'Button',

    props: {
        btnText: {
            type: String,
            required: true
        },

        btnHandler: {
            type: Function,
            default: ()=> {}
        },

        btnClass: {
            type: String,
            default: ''
        },

        data: {
            type:[String, Object, Array, Boolean, Number, Function],
            default:""
        }
    },

    data() {
        return {
            
        }
    },

    methods: {
        onClickHandler() {
            this.btnHandler(this.data);
        }
    }
}
</script>