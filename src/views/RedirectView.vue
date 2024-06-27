<script setup lang="ts"></script>
<template>
  <div
    class="w-fit h-screen flex flex-col justify-start content-center items-center mx-2 md:mx-4 lg:mx-5"
  >
    <h1
      class="pt-6 pb-10 text-sky-950 text-center text-5xl lg:text-7xl font-lucida-black"
    >
      El Tormo
    </h1>

    <p
      class="text-sky-800 text-center font-bold font-raleway text-2xl lg:text-4xl"
    >
      {{ $t('maintenance.subtitle') }}
    </p>
    <p
      class="pt-4 text-sky-700 text-center font-raleway font-medium text-base lg:text-lg"
    >
      {{ $t('maintenance.description') }}
    </p>
    <img
      alt="El Tormo logo"
      class="pt-4 w-[360px] md:w-[400px] lg:w-[600px] grow-0"
      src="@/assets/illustrations/Restaurant-Chief.svg"
    />
    <div
      class="flex flex-col lg:flex-row justify-center items-center content-center pt-2"
    >
      <p class="text-sky-700 font-raleway text-sm lg:text-base text-center">
        {{ $t('maintenance.reservations') }}
      </p>
      <div class="flex justify-center items-end">
        <p class="pl-1 text-sky-900 font-bold text-md text-sm lg:text-base">
          <a href="https://restauranteeltormo.myrestoo.net/es/reservar">{{
            $t('maintenance.to-reservations')
          }}</a>
        </p>
        <p class="font-material-symbols-outlined text-sm lg:text-base">
          <span>arrow_right_alt</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
