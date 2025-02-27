<template>
  <!-- First Box -->
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6">
    <!-- Profile Form -->
    <form class="space-y-12">
      <!-- Profile Section -->
      <div class="border-b border-gray-300 pb-10">
        <h2 class="text-xl font-semibold text-gray-900">Profile</h2>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly
        </p>

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <!-- Username -->
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium text-gray-900">Username</label>
            <div class="mt-2 flex items-center rounded-md bg-white pl-3 border border-gray-300">
              <span class="shrink-0 text-sm text-gray-500">workcation.com/</span>
              <input
                type="text"
                id="username"
                class="block w-full py-2 px-3 text-base text-gray-900 bg-transparent placeholder-gray-400 focus:outline-none"
                placeholder="ErSaddi"
              />
            </div>
          </div>

          <!-- About -->
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium text-gray-900">About</label>
            <textarea
              id="about"
              rows="4"
              class="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 bg-white placeholder-gray-400 focus:border-indigo-600"
            ></textarea>
            <p class="mt-2 text-sm text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <!-- Profile Photo -->
          <div class="col-span-full flex items-center gap-6">
            <UserCircleIcon class="w-16 h-16 text-gray-300" aria-hidden="true" />
            <button
              type="button"
              class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md shadow-sm hover:bg-indigo-500"
            >
              Change Photo
            </button>
          </div>

          <!-- Cover Photo -->
          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium text-gray-900">Cover Photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-14">
              <div class="text-center">
                <PhotoIcon class="mx-auto w-16 h-16 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm text-gray-600">
                  <label for="file-upload" class="cursor-pointer text-indigo-600 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Information -->
      <div class="border-b border-gray-300 pb-10">
        <h2 class="text-xl font-semibold text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <!-- First Name -->
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-900">First Name</label>
            <input
              type="text"
              id="first-name"
              class="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 bg-white placeholder-gray-400 focus:border-indigo-600"
            />
          </div>

          <!-- Last Name -->
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-900">Last Name</label>
            <input
              type="text"
              id="last-name"
              class="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 bg-white placeholder-gray-400 focus:border-indigo-600"
            />
          </div>

          <!-- Email -->
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium text-gray-900">Email Address</label>
            <input
              type="email"
              id="email"
              class="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 bg-white placeholder-gray-400 focus:border-indigo-600"
            />
          </div>

          <!-- Country Dropdown -->
          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-900">Country</label>
            <div class="relative">
              <select
                id="country"
                class="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 bg-white focus:border-indigo-600"
              >
                <option>Philippines</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <ChevronDownIcon
                class="absolute right-4 top-3 w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-6 flex justify-end">
        <button type="button" class="px-5 py-2 text-sm font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          class="ml-3 px-5 py-2 bg-indigo-600 text-white text-sm rounded-md shadow-sm hover:bg-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
</script>
