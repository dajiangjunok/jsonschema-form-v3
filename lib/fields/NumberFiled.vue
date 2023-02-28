<script lang="ts" setup>
import { defineProps } from "vue";
import { FiledPropsDefine } from "../types";

const props = defineProps(FiledPropsDefine);

const handleChange = (e: any) => {
  const number = Number(e.target.value);
  props.onChange(number);
};
</script>

<template>
  <div class="number-field">
    <input
      :value="value"
      type="number"
      :errors="$props.errorSchema.__errors"
      @input="handleChange"
    />
  </div>
</template>
