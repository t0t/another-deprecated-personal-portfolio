# T-O-D-H
http://t0t.github.io/t-o-d-h.com o http://t-o-d-h.com

This is the source code of [t-o-d-h.com](http://t-o-d-h.com), a personal blog and portfolio of Sergio Forés [sergiofores.es](http://sergiofores.es)


## Qué incluye un prototipo evolutivo

- Arquitectura HTML
- Motor de plantillas (Jade, Liquid)
- Maquetación CSS
- Guía de estilo
- Favicon
- Javascript Puro básico orientado a DOM
- Html Semántico
- Tecnicas SVG
- Animaciones y transiciones CSS
- Minima configuración SEO
- Formulario de contacto operativo
- Optimización imágenes
- Una nomenclatura clara y entendible
- Compartir en twitter, facebook
- Backtotop button
- Entorno de desarrollo
  - Minificado CSS
  - Minificado imagenes
  - Preprocesamiento Sass
  - Concatenación de JS
  - Compresión CSS
  - Compresión HTML
  - Responsive Layout
  - Deployment
  - BrowserSync
  - Watch

## Que no necesita incluir un prototipo evolutivo

- PostCSS
- Critical CSS
- Javascript avanzado
- Frameworks o librerías (Angular, React...)
- Backend
- CMS
- Testing JS
- hash CSS en producción



`<!-- <img src="{{t.image_path | prepend: "/assets/images/" | prepend: base_path}}" alt="{%if t.image_description %}{{t.image_description}}{%endif%}"> -->`


`<header class="container page-header"
{% if page.image.feature %}style="background-image: url('{{ site.url }}/assets/images/{{ page.image.feature }}');"{% endif %}
>`


`<svg class="icon icon--todh">
  <use xlink:href="#icon-imagen-post"></use>
</svg>`


### To Do
- [ ] Bower for frontend libraries like:
  - Typed.js for animated text typing effect
  - fitVids.js (without jquery) for responsive videos
  - Image processing with something like  [Imagemagick](http://www.imagemagick.org/)
- [x] Gulp + Jekyll Frontend workflow
- [x] [Formspree](www.formspree.io) For basic forms
- [ ] [Forestry](www.forestry.io) For Easy CMS
- [ ] [Snip Cart](https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll) Shopping carts
- Improve JS building process with browserify or similar...

### Plugins Used

* [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap) (GitHub Pages supported)
* [Jekyll Archives](https://github.com/jekyll/jekyll-archives)
* [Jekyll Related Posts](https://github.com/jumanji27/related_posts-jekyll_plugin)
* [Jemoji](https://github.com/jekyll/jemoji)

### Images

Images `page.feature.images` are placed in `src/assets/images/feature`. These `feature` images will be converted into various sizes to be responsively served by browsers that support [`srcset` attribute](https://responsiveimages.org/).

### Static site local development

Let Jekyll do what it does best and transform your content into HTML. Asset management is handled by Gulp:

- build `style.css` (preprocess SCSS, add vendor prefixes, concatenate, minify, hash, and gzip, sourcemaps...)
- build critical path CSS
- build `index.js` (concatenate, minify, hash, and gzip)
- optimize images
- optimize and resize `feature` images
- optimize and combine SVG icon set
- serve site with Browser Sync

Default structure (modify paths in `gulpfile.js` and `_config.yml` if altered):

```bash
├── gulp                      # => gulp tasks
├── src                       # => source Jekyll files and assets
|  ├── _includes
|  ├── _layouts
|  ├── _plugins
|  ├── ...
|  ├── _posts
|  ├── assets
|  |  ├── icons
|  |  ├── images
|  |  |   └── feature
|  |  ├── javascript
|  |  |   ├── plugins
|  |  |   ├── vendor
|  |  |   └── main.js
|  |  ├── stylesheets
|  |  |   ├── vendor
|  |  |   ├── ...
|  |  |   └── style.scss
├── .editorconfig
├── .gitignore
├── _config.dev.yml
├── _config.yml
├── Gemfile
├── gulpfile.js
├── package.json
├── rsync-credentials.json
├── ...
```

## Getting Started

### Dependencies:

- **Ruby**: >2.0 with Bundler >1.10
- **Node**: >4.2
- **Gulp**: Since the release candidate is running Gulp 4.0 you need to install `gulp-cli`: `npm install gulp-cli -g`


## Usage

**Dev** Run `gulp`. A development version of the site should be generated and opened in a browser with Browser Sync at `http://localhost:4000`.

**Prod** Run `gulp [--prod]` for build your assets and site with development settings. You'll get
sourcemaps, your drafts will be generated. As you are changing your posts, pages and assets they will
automatically update and inject into your browser via [BrowserSync][browsersync].

> `gulp build --prod` `gulp cname` `gulp upload`

Once you are done and want to verify that everything works with production
settings you add the flag `--prod` and your assets will be optimized. Your CSS,
JS and HTML will be minified and gzipped, plus the CSS and JS will be cache busted. The images will be compressed and Jekyll will generate a site with all your posts and no drafts.

### `gulp build [--prod]`

This command is identical to the normal `gulp [--prod]` however it will not
create a BrowserSync session in your browser.

### `gulp (build) [--prod]` main subtasks

> `gulp jekyll [--prod]`

Without production settings Jekyll will only create both future posts and drafts.
With `--prod` none of that is true and it will generate all your posts.

> `gulp styles|scripts [--prod]`

Both your CSS and JS will have sourcemaps generated for them under development
settings. Once you generate them with production settings sourcemap generation
is disabled. Both will be minified, gzipped and cache busted with production
settings.

> `gulp images`

Optimizes and caches your images. This is a set it and forget it command for the
most part.

> `gulp images`

Similar to the previous task but for `feature` images. Resizes each image into various
sizes to be served responsively with `<img>` `srcset` or `<picture>` elements.

> `gulp html --prod`

**Does nothing without `--prod`.** Minifies and gzips your HTML files.

> `gulp serve`

If you just want to watch your site you can run this command. If wanted you can
also edit the `serve` task to allow it to tunnel via [localtunnel][localtunnel]
so people outside your local network can view it as well:

```js
    // tunnel: true,
```

You can also change the behavior for how it opens the URL when you run `gulp
[--prod]`, you can see the options [here][browsersync-open]:

```js
    // open: false,
```

### `gulp icons`

SVG assets are optimized and smashed together into `_includes/icons.svg` and can be referenced by name (They are symbol-sprites).
To update or add new assets place appropriately named `.svg` files into the `src/assets/svg` folder.

> `gulp submit:sitemap`

Submit sitemap XML file to Google and Bing.

### `gulp check`

Runs `bundle exec jekyll doctor` to look for potential errors.

### `gulp clean`

Deletes your assets from their `.tmp` directory as well as in `dist` and deletes
any gzipped files. **NOTE:** Does not delete your images from `.tmp` to reduce
the time to build your site due to image optimizations.

### `gulp rebuild`

Only use this if you want to regenerate everything, this will delete everything
(images, assets, your generated Jekyll site). You really shouldn't need to do
this unless you have phantom image assets floating around you want to clear.

### `gulp critical`

Extract critical path CSS from `article`, `glitch`, and `archive` pages to inline
via Jekyll `_includes`.

## Subtasks

All of the subtasks lives in their own files in the `gulp` directory and are
named after what they do. You can edit or look at any of them to see how they
actually work. They're all commented.

## Inject more than one JavaScript file

If you want to split up your JavaScript files into say a `index.js` and a
`vendor.js` file with files from [Bower][bower] you can do this quite easily. Create a
copy of the `scripts` gulp task and rename it to `scripts:vendor` and change the
`gulp.src` files you need:

```js
  gulp.src([
    'bower_components/somelibrary.js/dist/somelibrary.js',
    'bower_components/otherthing.js/dist/otherthing.js'
  ])
```

and then change `.pipe(concat('index.js'))` into
`.pipe(concat('vendor.js'))`. Then you go to the bottom of the gulpfile and
change the `assets` task:

```js
gulp.task('assets', gulp.series(
  gulp.series('clean:assets'),
  gulp.parallel('styles', 'scripts:vendor', 'scripts', 'fonts', 'images')
));
```

Notice the `scripts:vendor` task that has been added. Also be ware that things
are injected in alphabetical order, so if you need your vendor scripts before
the `index.js` file you have to either rename the `index.js` file or rename the
`vendor.js` file. When you now run `gulp` or `gulp build` it will create a
`vendor.js` file and automatically inject it at the bottom of your HTML. When
running with `--prod` it'll automatically optimize as well.

```
feature:
  visible: true
  headline: "Featured Articles"
  category: articles
```

### Posts and Pages

By default social sharing and Google AdSense are enabled on all posts and pages. To disable add `share: false` or `ads: false` to the YAML Front Matter.

Comments are disabled by default. To enable add `comments: true` to the YAML Front Matter.

Special thanks to:
- [Made Mistakes](http://mademistakes.com)
- Jekyll
