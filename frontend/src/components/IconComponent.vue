<template>
  <div id="IconComponent" class="hello">
    <div
      class="flex items-center justify-center rounded-full cursor-pointer w-10 h-10"
    >
      <component :is="icon" :size="iconSize" :fillColor="iconColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  icon: Component;
  iconSize?: string;
  iconColor?: string;
}

withDefaults(defineProps<Props>(), {
  iconSize: "24",
  iconColor: "#000000",
});

</script>
