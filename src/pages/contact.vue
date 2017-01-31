<template lang='pug'>
f7-page(name="about")
  f7-navbar(back-link="Back")
  .contact-header
    img(src='http://placehold.it/90')
    | {{$route.params.name}}
</template>

<script>
export default {}
</script>

<style lang='sass?indentedSyntax'>
  .contact-header
    height: 175px
    z-index: 10
    box-shadow: 0px 2px 3px rgba(0,0,0,0.1)
    box-sizing: border-box
    padding: 20px 15px
    background: #fff
    text-align: center
    font-size: +2em
  .contact-header img
    display: block
    margin: 0 auto
    border-radius: 90px
</style>