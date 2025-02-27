<template>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-6">
    <!-- Tabs Navigation -->
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
      <li class="me-2">
        <button @click="activeTab = 'about'" :class="tabClass('about')">About</button>
      </li>
      <li class="me-2">
        <button @click="activeTab = 'services'" :class="tabClass('services')">Services</button>
      </li>
      <li class="me-2">
        <button @click="activeTab = 'statistics'" :class="tabClass('statistics')">Facts</button>
      </li>
    </ul>

    <!-- Tab Content -->
    <div>
      <!-- About Tab -->
      <div v-if="activeTab === 'about'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Powering innovation & trust at 200,000+ companies worldwide
        </h2>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Empower Developers, IT Ops, and business teams to collaborate at high velocity.
        </p>
      </div>

      <!-- Services Tab -->
      <div v-if="activeTab === 'services'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We invest in the world’s potential
        </h2>
        <ul class="space-y-4 text-gray-500 dark:text-gray-400">
          <li v-for="(service, index) in services" :key="index" class="flex space-x-2 items-center">
            <svg class="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="leading-tight">{{ service }}</span>
          </li>
        </ul>
      </div>

      <!-- Facts Tab -->
      <div v-if="activeTab === 'statistics'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div v-for="(stat, index) in statistics" :key="index" class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">{{ stat.value }}</dt>
            <dd class="text-gray-500 dark:text-gray-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Horizontal Cards Below Tabs -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <!-- Card 1 -->
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Future of AI</h5>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          AI is transforming industries with automation, efficiency, and intelligence.
        </p>
        <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          Read more
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>

      <!-- Card 2 -->
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Rise of Blockchain</h5>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Blockchain is revolutionizing security, transparency, and decentralization in finance.
        </p>
        <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          Read more
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <br>

  <div>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-6"></div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";

// Track the active tab
const activeTab = ref("about");

// Services list
const services = ref([
  "Dynamic reports and dashboards",
  "Templates for everyone",
  "Development workflow",
  "Limitless business automation",
]);

// Statistics data
const statistics = ref([
  { value: "73M+", label: "Developers" },
  { value: "100M+", label: "Public repositories" },
  { value: "1000s", label: "Open source projects" },
]);

// Dynamic class for tab buttons
const tabClass = (tab) =>
  `inline-block p-4 rounded-ss-lg transition-all ${
    activeTab.value === tab
      ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
      : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
  }`;
</script>
