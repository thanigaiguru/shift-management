<template>
    <div>
        <select v-model="selected">
            <option>Slect Type</option>
            <option v-for="cType in consultingTypes" :key="cType">{{ cType }}</option>
        </select>
    </div>
</template>

<script>
import DatePicker from '../../components/DatePicker.vue';
export default {
    name : 'Healthcare',
    data(){
        return {
            consultingTypes: ['Consultation', 'Telephone', 'Ambulance']
        }
    }
}
</script>
