<template>
    <div class="input-container">
        <input type="text" class="inptcomp" v-model.trim="inputData" @input="onInput">
    </div>
</template>

<script>
export default {
    name : 'Input',
}
</script>