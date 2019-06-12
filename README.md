# ant-goods
This site is deployed to `gh-pages`. [You can visit it here](https://newyork-anthonyng.github.io/ant-goods/).

## Getting started
* `npm install`
* `npm run dev` # start dev server on localhost:8080

## Notes
* I chose `Preact`, a lightweight alternative to `React`. I chose it because there was some data rendering that it is perfect for (re-rendering sorted tables).
* I went with `inline-styles` because of time. If I had more time to play with setting up an HTML template for my `html-webpack-plugin`, I would've used a vanilla CSS stylesheet.
* I wanted to pay respect to the `marquee` tag.
* I forgot to look at the `key` attribute, to make sure that the DOM updates were as minimal as possible
