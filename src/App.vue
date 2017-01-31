<template lang='pug'>
#app
  // Status bar overlay for fullscreen mode
  f7-statusbar

  // Right panel with cover effect
  f7-panel(right, reveal)
    f7-block
      p Right panel content goes here
      
  // Left panel with cover effect
  f7-panel(left, reveal)
    f7-block
      p Left panel content goes here
      
  // Views
  f7-views
    // Left View
    f7-view(main, navbar-through, :dynamic-navbar='true')
      f7-navbar
        f7-nav-center(sliding) Contacts
        f7-nav-right
          f7-link(@click='openPrompt')
            f7-icon(icon="icon-plus") +
      f7-pages
        f7-page(name='index')
          f7-list(contacts)
            f7-list-group(v-for='(contacts, key) in groupedContacts')
              f7-list-item(:title='key', group-title)
              f7-list-item(v-for='contact in contacts', :title='contact.login', :link='"/contact/" + contact.login + "/"', :link-view='linkView')
          
    // Main View
    f7-view(navbar-through, :animatePages='!splitView').view-detail
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
      options: {
        propertyToIndex: 'login'
      }
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
    openPrompt () {
      var self = this
      self.$f7.prompt('Your name please!', 'New contact', function (value) {
        self.contacts.push({'login': value})
      })
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
      self.contacts = JSON.parse(data)
      // sorting array
      if (self.contacts.length > 1) {
        self.contacts.sort((a, b) => {
          a = a[self.options.propertyToIndex].toLowerCase()
          b = b[self.options.propertyToIndex].toLowerCase()
          return ((a > b) - (b > a))
        })
      }
    })
  },
  watch: {
    contacts () {
      var self = this
      // generate group list
      self.groupedContacts = self.groupList(self.contacts, self.options.propertyToIndex)
    }
  }
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
<style lang="sass?indentedSyntax">
  $panel-width: 320px

  .view-detail
    display: none
  
  @media('min-width: 769px')
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