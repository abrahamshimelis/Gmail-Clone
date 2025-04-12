<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="flex justify-start items-center px-3.5">
        <IconComponent :icon="MenuIcon" iconSize="24" iconColor="#000000" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconComponent from "../components/IconComponent.vue";
// @ts-ignore
import MenuIcon from "vue-material-design-icons/Menu.vue";
</script>
