<template>
    <div class="card mT20">
        <span class="title">{{ title }}</span>
        <span style="text-align: end;display: block;cursor: pointer;" @click="editShiftList">Edit</span>
        <p>{{ description }}</p>
        <div class="title mT10">Dates</div>
        <SlotItem v-for="(slot,index) in slots" :key="index+'_'+id" v-bind="slot"></SlotItem>
    </div>
</template>
<script>
import SlotItem from './SlotItem.vue';
export default {
    name: "ShiftList",
    props: {
        id: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "thanigai"
        },
        description: {
            type: String,
            default: ""
        },
        slots: {
            type: Array,
            required: true
        },
        editShiftList: {
            type: Function,
            default: () => {}
        }
    },
    data(){
        return {

        }
    },
    components: {
        SlotItem
    }
}
</script>
