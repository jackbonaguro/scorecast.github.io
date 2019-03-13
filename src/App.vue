<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    title: 'ScoreCast',
  },
};
</script>

<style lang="scss">
</style>
