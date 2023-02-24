<script lang="ts" setup>
import { defineProps } from "vue";
import { FiledPropsDefine } from "../types";

const props = defineProps(FiledPropsDefine);

const handleChange = (e: any) => {
  props.onChange(Number(e.target.value));
};
</script>

<template>
  <div class="number-field">
    <input :value="value" type="number" @input="handleChange" />
  </div>
</template>
