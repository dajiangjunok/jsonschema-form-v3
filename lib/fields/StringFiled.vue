<script lang="ts" setup>
import { defineProps } from "vue";
import { FiledPropsDefine, CommonWidgetNames } from "../types";
import { getWidget } from "../Theme";

const props = defineProps(FiledPropsDefine);
const TextWidget = getWidget(CommonWidgetNames.TextWidget).value;

const handleChange = (v: any) => {
  props.onChange(v);
};
</script>

<template>
  <div class="string-field">
    <TextWidget :value="props.value" :onChange="handleChange" />
  </div>
</template>
