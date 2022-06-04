<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr">
      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <AppFooterCard :statistics="item.info">
      </AppFooterCard>
      <!-- <div class="card-stats">
        <div class="one-third" v-for="(stat, ind) in item.info" :key="ind">
          <div class="stat-value">{{ stat.value }}</div>
           <div class="stat">{{ stat.title }}</div>
        </div>
      </div> -->
  <div>
    <router-link to="/" class="btn btnPrimary">Back to home</router-link>
  </div>

    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import AppFooterCard from '@/components/UI/AppFooterCard.vue'
export default {
  components: {
    AppFooterCard
  },
  data () {
    return {
      item: null
    }
  },
  created () {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    this.item = item
    if (!item) {
      console.log('ddddddd')
      this.$router.push({ name: '404' })
    }
  }

}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
}
.card-stats {
  border-radius: 14px;
  margin: 30px 0;
}

</style>
