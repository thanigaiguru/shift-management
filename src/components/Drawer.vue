<template>
    <div>
        <div class="rhs-bar-child">
            <!-- Head section -->
            <span class="title">Create/Edit</span>
            <div class="mT20">
                <div>Title</div>
                <Input v-model="title"/>
            </div>
            <div class="mT20">
                <div>Description</div>
                <Description v-model="description"/>
            </div>

            <!-- Seleted Date List -->
            <div class="mT20">
                <div>Dates</div>
                <div class="mT10 dropdown flexC">
                    <div>{{ dateListStr }}</div>
                    <div> calander</div>
                </div>
            </div>

            <div class="mT10">
                <div class="flexC">
                    <div class="flexG">12-12-2020</div>
                    <span>X</span>
                </div>
                <div class="rhs-card mT10">
                    <div class="flexC" style="justify-content: space-around;">
                        <div class="card-optn">
                            <div>Start Time</div>
                            <div class="dropdown flexC">
                                <span class="flexG">08:00</span>
                                <span></span>
                            </div>
                        </div>
                        <div class="card-optn">
                            <div>End Time</div>
                            <div class="dropdown flexC">
                                <span class="flexG">12:00</span>
                                <span></span>
                            </div>
                        </div>
                        <div class="card-optn">
                            <div>Price</div>
                            <div class="dropdown flexC">
                                <span class="flexG">75</span>
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                    <div class="mT20">
                        <div>Type</div>
                        <div class="mT10 dropdown flexC">
                            <div>12-12-2020, 15-12-2020</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mT10">
                <div class="flexC">
                    <div class="flexG">12-12-2020</div>
                    <span>X</span>
                </div>
                <div class="rhs-card mT10">
                    <div class="flexC">
                        <div>
                            <div>Start Time</div>
                            <div class="dropdown flexC">
                                <span class="flexG">08:00</span>
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <div>End Time</div>
                            <div class="dropdown flexC">
                                <span class="flexG">12:00</span>
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <div>Price</div>
                            <div class="dropdown flexC">
                                <span class="flexG">75</span>
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                    <div class="mT20">
                        <div>Type</div>
                        <div class="mT10 dropdown flexC">
                            <div>12-12-2020, 15-12-2020</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer section -->
        <div class="flexC p10">
            <Button :btnHandler="closeHandler" btnClass="white-btn" btnText="Delete"></Button>
            <Button :btnHandler="addOrUpdateHandler" btnClass="mL10" btnText="Save"></Button>
        </div>
    </div>
</template>

<script>

import Input from './Input.vue';
import Description from './Description.vue';
import Button from '@/components/Button.vue';
export default {
    name: 'Drawer',
    props: {
        preTitle: {
            type: String,
            default: ""
        },
        preDescription: {
            type: String,
            default: ""
        },
        preId: {
            type: String,
            default: ""
        },
        preSolts: {
            type: Array,
            default: ()=> []
        },
        addOrUpdateHandler: {
            type: Function,
            default: () => {}
        },
        closeHandler: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            id:"",
            title: "",
            description: "",
            slots: []
        }
    },
    beforeMount() {
        this.id = this.preId || new Date().getMilliseconds();
        this.title = this.preTitle;
        this.description = this.preDescription;
        this.slots = this.preSolts;
    },
    computed: {
        dateListStr() {
            let dList = [];
            this.slots.forEach((slot) => {
                dList.push(slot.date);
            });
            return dList.join(',');
        }
    },
    methods: {
        updateHandler() {
            let vm = this;
            let shiftData = {
                id: vm.id,
                title: vm.title,
                description: vm.description,
                slots: vm.slots
            }
            this.addOrUpdateHandler(shiftData);
        }
    },
    components: {
        Input,
        Description,
        Button
    }
}

</script>
