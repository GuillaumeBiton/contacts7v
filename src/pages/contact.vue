<template lang='pug'>
f7-page(name="detail")
  f7-navbar(back-link="Back", sliding)
  .contact-header
    img(:data-src='contact.avatar_url').lazy.lazy-fadein
    | {{contact.login}}
</template>

<script>
export default {
  data () {
    return {
      contact: {}
    }
  },
  created () {
    this.contact = this.$root.contacts.find((contact) => {
      return contact.id.toString() === this.$route.params.id
    })
  }
}
</script>

<style lang='sass?indentedSyntax'>
  .contact-header
    height: 176px
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
    width: 90px
  
  .view[data-page='detail'] .page-content
    padding-top: 0

  .view[data-page='detail'] .navbar,
  .view[data-page='detail'] .navbar:after,
    background: none

</style>