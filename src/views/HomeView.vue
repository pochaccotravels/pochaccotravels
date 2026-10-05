<template>
  <!-- SECTION 1: title with text under it -->
  <section class="section text-center">
    <h1 class="title">Welcome!</h1>
    <p class="mx-auto" style="max-width: 600px">
      Write a short intro about your site here.
    </p>
  </section>

  <!-- SECTION 2: text on the left, image on the right -->
  <section class="section">
    <v-row align="center">
      <v-col cols="12" md="7">
        <h2 class="title">Second Title</h2>
        <p>Write more text here.</p>
      </v-col>
      <v-col cols="12" md="5">
        <!-- Swap this box for: <v-img src="images/your-photo.jpg" rounded="lg" /> -->
        <div class="image-placeholder">image here</div>
      </v-col>
    </v-row>
  </section>
</template>