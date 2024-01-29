# moleculeworks

Built using [Vue.js](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)

## Project setup
### Pre-reqs
- [vue-cli](https://cli.vuejs.org/guide/installation.html)
- netlify cli
```
npm install -g @vue/cli

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deployment
1. Login to [SiteGround](https://www.siteground.com/).
2. Go to "My Accounts" Tab
3. Click the top red button "Go to cPanel"
4. `Files` section > click `File Manager`
5. Select open `Web Root (public_html/www)` when prompted
6. Select all current files > compress > old.zip
7. Locally run `npm run build`
8. Create a zip folder of the `dist/` directory. `dist.zip`
9. Upload > choose file > dist.zip
10. Go Back to  `“/home/molecule/public_html”`
11. Extract `dist.zip`
12. Click into `dist` folder
13. Select all > Right Click >  Move to `/public_html`
14. Delete empty `dist` folder, `dist.zip`, `old.zip`
15. Go to [www.moleculeworks.com](https://www.moleculeworks.com/)

