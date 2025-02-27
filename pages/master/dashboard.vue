<template>
  <div class="w-screen h-screen flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-[400px] h-full bg-gray-200 text-white overflow-y-auto" v-show="showSide">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Er Trial Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px] overflow-y-auto">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link to="/home" class="nav-link">Home</router-link>
            <router-link to="/profile" class="nav-link">Profile</router-link>
            <router-link to="/items" class="nav-link">Items</router-link>
            <router-link to="/download" class="nav-link">Download</router-link>
          </div>
          <div class="h-[50px]">
            <router-link to="/setting" class="nav-link">Setting</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col w-full h-full">
      <!-- Navbar -->
      <div class="h-[50px] bg-blue-900 flex items-center shadow-sm px-[20px] border-b">
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <div class="w-full flex justify-center">
          <form class="w-[500px] flex items-center">
            <div class="relative w-full">
              <input type="text" class="search-input" placeholder="Search..." required />
            </div>
          </form>
        </div>
        <div class="w-[200px] flex items-center justify-start space-x-4" @click="toggleDrop">
          <div class="font-semibold text-left text-white">
            <div>Er Saddi</div>
            <div class="text-xs text-gray-300">Admin</div>
          </div>
        </div>
      </div>

      <!-- Scrollable Content -->
      <div class="h-full bg-gray-50 p-[20px] overflow-y-auto">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>

<style scoped>
/* Sidebar Links */
.nav-link {
  @apply inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-300 ease-in-out;
}

/* Search Input */
.search-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white;
}
</style>
