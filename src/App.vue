<script setup>
import { routes } from '@/router'
</script>

<template>
  <v-app>
    <!-- Outer background: your side images show here (see main.css) -->
    <div class="page-bg">
      <!-- Center column: the actual website -->
      <div class="site-frame">
        <!-- NAV MENU (builds itself from src/router/index.js) -->
        <nav class="site-nav">
          <router-link to="/" class="site-logo">Pochacco Travels</router-link>
          <div class="nav-links">
            <router-link v-for="r in routes" :key="r.path" :to="r.path" class="nav-link">
              {{ r.meta.title }}
            </router-link>
          </div>
        </nav>

        <!-- PAGE CONTENT -->
        <main class="site-main">
          <router-view />
        </main>

        <footer class="site-footer">© {{ new Date().getFullYear() }} Pochacco Travels</footer>
      </div>
    </div>
  </v-app>
</template>