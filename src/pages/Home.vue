/* eslint-disable vue/no-unused-components */
<template>
   <carousel :settings="settings" :breakpoints="breakpoints">

    <slide class="card_wrapper" v-for="item in items" :key="item.id">
      <app-card
      :name="`${item.lvl} lvl`"
      :title="item.title"
      :imgUrl="item.img"
      :link="`/${item.alias}`"
      >
      <template v-slot:body>
        {{ item.descr }}
      </template>

      <template v-slot:footer>
        <app-footer-card :statistics="item.info"></app-footer-card>
        <!-- <div class="card-stats">
          <div class="one-third" v-for="(stat, ind) in item.info" :key="ind">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat">{{ stat.title }}</div>
          </div>
        </div> -->
      </template>

      </app-card>
    </slide>
    <template #addons>
        <navigation />
      </template>
    </carousel>
</template>

<script>
import AppCard from '@/components/UI/AppCard.vue'
import AppFooterCard from '@/components/UI/AppFooterCard.vue'
import items from '@/seeders/items.js'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'Home',
  components: {
    AppCard,
    Carousel,
    Slide,
    Navigation,
    AppFooterCard
  },
  data () {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }

    }
  }
}
</script>

<style>

</style>
