<template>
  <section class="layout">

    <!-- Overviwe section -->
    <aside class="column1">
        
        <!-- Slide section -->
        <div class="title">Filter</div>
        <div class="slider">
            <div>Filter on price</div>
            <range-slider 
                class="slider" 
                min="0" 
                max="500" 
                v-model="filterAmout"
                thumb-label="always">
            </range-slider>
        </div>
        <p>Amout: {{ filterAmout }}</p>

        <div class="mT20 title-wrap">
			<span class="title">Shifts</span>
			<Button 
                btnText="Add Shift"
                :btnHandler="openAddShitSection"
            ></Button>
		</div>

        <!-- list section -->
        <div v-if="filterdList.length">
            <ShiftList v-for="(shiftItem, index) in filterdList" 
                :key="index"
                v-bind="shiftItem"
                :editShiftList="openAddShitSection"
            />
        </div>
        <!-- No list case -->
        <div v-else class="no-list">No Shits List found.</div>
    </aside>

    <aside v-if="showAddSection" class="rhs-bar">
        <drawer v-bind="selectedShift" :closeHandler="closeAddShitSection"></drawer>
    </aside>

  </section>
</template>

<script>

const MAX_AMOUNT = "500";

import { mapState, mapGetters } from 'vuex';
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
import ShiftList from '../../components/ShiftList.vue';
export default {
    name : 'Healthcare',

    data() {
        return {
            filterAmout: MAX_AMOUNT,
            showAddSection: false,
            selectedShiftId: ''
        }
    },

    computed: {
        ...mapState({
            shiftList : ({healthcarestore}) => healthcarestore.shiftList
        }),

        ...mapGetters({
            getShitList: 'healthcarestore/getShitList'
        }),

        selectedShift() {
            return this.getShitList(this.selectedShiftId)
        },

        filterdList() {
           return []
        },

        idList(){
            return [];
        }
    },

    methods: {
        openAddShitSection(id="") {
            this.showAddSection = true;
            this.selectedShiftId = id;
        },

        closeAddShitSection() {
            this.showAddSection = false;
        }
    },

    components: {
        Button,
        Drawer,
        ShiftList
    },
}
</script>

<style scoped>

</style>
