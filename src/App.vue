<template>
  <div id="index">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script type="text/ecmascript-6">

import FooterGuide from './components/FooterGuide/FooterGuide';
import Msite from './pages/Msite/Msite';

export default {
  components: {
    FooterGuide,
    Msite,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #index
    width 100%
    height 100%
    position relative
</style>
