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
            f7-list-group(v-for='(group, key, index) in contacts', :key='index')
              f7-list-item(:title='key', group-title)
              f7-list-item(v-for='name in group', :title='name', :link='"/contact/" + name + "/"', :link-view='linkView')
          
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
      contacts: {
        'A': [
          'Aaron',
          'Abbie',
          'Adam',
          'Adele',
          'Agatha',
          'Agnes',
          'Albert',
          'Alexander'
        ],
        'B': [
          'Bailey',
          'Barclay',
          'Bartolo',
          'Bellamy',
          'Belle',
          'Benjamin'
        ],
        'C': [
          'Caiden',
          'Calvin',
          'Candy',
          'Carl',
          'Cherilyn',
          'Chester',
          'Chloe'
        ],
        'V': [
          'Vladimir'
        ]
      },
      splitView: false,
      linkView: ''
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
    openPrompt: function () {
      var self = this
      self.$f7.prompt('Your name please!', 'Prompt Title', function (value) {
        var group = value.charAt(0).toUpperCase()
        // needed becuase we are adding object keys
        // see: http://rc.vuejs.org/guide/reactivity.html#Change-Detection-Caveats
        if (!self.contacts[group]) self.$set(self.contacts, group, [])
        self.contacts[group].push(value)
      })
    }
  },
  created () {
    this.checkSplitView()
    this.$$(window).resize(this.checkSplitView)
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
</style>