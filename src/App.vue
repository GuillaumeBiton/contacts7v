<template lang='pug'>
#app
  // Status bar overlay for fullscreen mode
  f7-statusbar
  
  // Views
  f7-views
    // Main View
    f7-view(main, navbar-through, :dynamic-navbar='true')
      f7-navbar
        f7-nav-center(sliding) Contacts
      f7-pages
        f7-page(name='index')
          f7-list(contacts)
            f7-list-group(v-for='(contacts, key) in groupedContacts')
              f7-list-item(:title='key', group-title)
              f7-list-item(v-for='contact in contacts', :title='contact.login', :link='"/contact/" + contact.id + "/"', :link-view='linkView')
          
    // Detail View
    f7-view(navbar-through, :animatePages='!splitView', v-show='splitView').view-detail
      // Pages
      f7-pages
        // Page, data-page contains page name
        f7-page(name='main')
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      groupedContacts: {},
      contacts: [],
      splitView: false,
      linkView: '',
      propertyToIndex: 'login'
    }
  },
  methods: {
    checkSplitView () {
      if (this.$$(window).width() < 767) {
        this.splitView = false
        this.linkView = ''
      } else {
        this.splitView = true
        this.linkView = '.view-detail'
      }
    },
    groupList (list, propertyToIndex, filter) {
      var data = {}
      filter = filter || function (item) { return item.charAt(0).toUpperCase() }
      list.forEach(function (item) {
        data[filter(item[propertyToIndex])] = data[filter(item[propertyToIndex])] || []
        data[filter(item[propertyToIndex])].push(item)
      })
      return data
    }
  },
  created () {
    var self = this
    this.checkSplitView()
    this.$$(window).resize(this.checkSplitView)
    this.$$.get('https://api.github.com/repos/nolimits4web/framework7/contributors', (data) => {
      self.contacts = this.$root.contacts = JSON.parse(data)
      // sorting array
      if (self.contacts.length > 1) {
        self.contacts.sort((a, b) => {
          a = a[self.propertyToIndex].toLowerCase()
          b = b[self.propertyToIndex].toLowerCase()
          return ((a > b) - (b > a))
        })
      }
    })
  },
  watch: {
    contacts () {
      var self = this
      self.groupedContacts = self.groupList(self.contacts, self.propertyToIndex)
    }
  }
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
<style lang="sass?indentedSyntax">
  $panel-width: 320px
  
  @media('min-width: 768px')
    .view-main
      float: left
      width: $panel-width
      border-right: 1px solid #b2b2b2
    
    .view-detail
      display: block
      width: calc(100% - #{$panel-width})
    
    .view-detail .navbar .navbar-inner .back
      display: none
  
    .item-link .item-content .item-inner
      background-image: none
</style>