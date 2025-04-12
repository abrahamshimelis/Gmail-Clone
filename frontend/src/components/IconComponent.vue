<template>
  <div id="IconComponent" v-if="icon">
    <div
      class="flex items-center justify-center rounded-full cursor-pointer w-10 h-10"
      :class="[hoverColor]"
      :data-tooltip-target="`tooltip-no-arrow-${iconString}`"
      data-tooltip-placement="bottom"
    >
      <component :is="icon" :size="iconSize" :fillColor="iconColor" />
    </div>

    <div
      :id="`tooltip-no-arrow-${iconString}`"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";

// import icons
import MenuIcon from "vue-material-design-icons/Menu.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import TuneIcon from "vue-material-design-icons/Tune.vue";
import HelpIcon from "vue-material-design-icons/Help.vue";
import CogIcon from "vue-material-design-icons/CogOutline.vue";
import AppsIcon from "vue-material-design-icons/Apps.vue";
import BackIcon from "vue-material-design-icons/ArrowLeft.vue";
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";

interface Props {
  iconString: string;
  iconSize?: number;
  iconColor?: string;
  hoverColor?: string;
  text?: string;
}

// Default values
const props = withDefaults(defineProps<Props>(), {
  iconSize: 24,
  iconColor: "#000000",
});

// icon resolution
const icon = computed<Component | null>(() => {
  switch (props.iconString.toLowerCase()) {
    case "menu":
      return MenuIcon;
    case "magnify":
      return MagnifyIcon;
    case "tune":
      return TuneIcon;
    case "help":
      return HelpIcon;
    case "cog":
      return CogIcon;
    case "apps":
      return AppsIcon;
    case "back":
      return BackIcon;
    case "trash":
      return TrashIcon;
    default:
      console.warn(`Unknown icon: ${props.iconString}`);
      return null;
  }
});
</script>
