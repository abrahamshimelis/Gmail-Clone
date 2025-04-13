<script setup lang="ts">
import IconComponent from "../components/IconComponent.vue";
import UserComponent from "../components/UserComponent.vue";
</script>

<template>
  <div id="NavbarView" class="w-full bg-gray-50 px-2">
    <div class="w-full flex items-center p-2">
      <div class="min-w-[238px] flex justify-start items-center pr-3">
        <IconComponent iconString="menu" text="Main Menu" />
        <img
          width="107"
          src="/img/GmailLogo.png"
          alt="Gmail Logo"
          class="ml-2"
        />
      </div>
      <div class="flex w-full justify-between">
        <div
          class="max-w-[720px] w-full rounded-full bg-gray-200 flex items-center p-1 px-2"
        >
          <IconComponent iconString="magnify" text="Search" />
          <input
            type="text"
            placeholder="Search mail"
            class="w-full h-10 bg-gray-200 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900"
          />
          <IconComponent iconString="tune" text="Show search options" />
        </div>
        <div class="w-50 flex justify-between items-center ml-6">
          <IconComponent iconString="help" text="Support" />
          <IconComponent iconString="cog" text="Settings" />
          <IconComponent iconString="apps" text="Google apps" />
          <UserComponent />
        </div>
      </div>
    </div>
  </div>
</template>
