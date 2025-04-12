<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="flex justify-start items-center px-3.5">
        <IconComponent
          iconString="menu"
          :iconSize="18"
          hoverColor="hover:bg-gray-200"
          text="Main Menu"
          class="-ml-2 mr-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconComponent from "../components/IconComponent.vue";
</script>
