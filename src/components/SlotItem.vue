<template>
    <div class="date-box mT10">
        <span class="w150">{{ dateStr }}</span>
        <span class="w50">{{ startTime }}</span>
        <span class="w50">{{ endTime }}</span>
        <span class="flexG">{{ slotType }}</span>
        <span class="w50">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    name : 'SlotItem',
    props: ['dateStr', 'startTime', 'endTime', 'slotType', 'amount']
}
</script>
