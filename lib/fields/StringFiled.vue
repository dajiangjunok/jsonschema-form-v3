<script lang="ts" setup>
import { defineProps } from "vue";
import { FiledPropsDefine } from "../types";

const props = defineProps(FiledPropsDefine);

const handleChange = (e: any) => {
  props.onChange(e.target.value);
};
</script>

<template>
  <div class="string-field">
    <input :value="value" type="text" @input="handleChange" />
  </div>
</template>
