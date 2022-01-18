<template>
  <div class="footer-wrapper">
    <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>

    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/>
  </div>
</template>


<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }
@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>