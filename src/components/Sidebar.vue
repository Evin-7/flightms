<template>
  <div class="h-full p-4">
    <ul class="space-y-4">
      <li>
        <router-link
          to="/"
          class="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          🏠 Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          ℹ️ About
        </router-link>
      </li>
    </ul>
  </div>
</template>
