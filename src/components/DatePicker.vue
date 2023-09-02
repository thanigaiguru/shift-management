<template>
    <v-calendar v-model="date" mode="date" @dayclick="viewDay"/>
</template>

<script>
const date = new Date();
export default {
    name : 'DatePicker',

    props: {
       
    },

    data() {
        return {
            date
        }
    },

    computed: {
        
    },

    watch: {
        date: {
            immediate: true,
            handler() {
               console.log(this.date);
            }
        }
    },

    methods: {
        viewDay(date){
            console.log(date);
        }
    }
}
</script>