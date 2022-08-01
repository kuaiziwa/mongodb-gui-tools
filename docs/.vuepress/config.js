const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  base: 'mongodb-gui-tools',
  title: 'Top MongoDB GUI Tools',
  description: 'Features comparison of the following five MongoDB GUI tools, Compass, Navicat, NoSQLBooster, NoSQLManager and Studio 3T.',
  
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    sidebar: false,
    navbar: false,
    contributors: false,
  }),

  head: [
     ['link', { rel: 'icon', href: `/favicon.ico` }],
     //['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' }],

    //  ['link', { rel: 'stylesheet', href: 'http://fonts.cdnfonts.com/css/open-sans' }],
    //  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>, 
     //<link href="http://fonts.cdnfonts.com/css/open-sans" rel="stylesheet">
  ],
}