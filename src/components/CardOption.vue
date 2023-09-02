<template>
    <div class="card-optn">
        <div>{{ cardTitle }}</div>
        <div>
            <Input/>
            <span v-if="errorMessage"></span>
            <span v-if="showDoller">$</span>
        </div>
    </div>
</template>

<script>

import Input from './Input.vue';
export default {
    name : '',

    props: {
        cardTitle: {
            type: String,
            required: true
        },

        showDoller: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            errorMessage: ""
        }
    },

    components: {
        Input
    }
}
</script>