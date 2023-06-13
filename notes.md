# Responsive images

// if i needed image loaders in my webpack

 {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Process image files as assets,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'my-images',
            },
          },
        ],
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery',
      },

img src='img/cat-500.jpg' 
    srcset='img/cat-500.jpg 500w,
            img/cat-1000.jpg 2x 1000w,
            img/cat-2000.jpg' 3x 1500w',
    # sizes for query
    sizes="(min-width: 760px) 50vw, 100vw"
    alt=' srcset images '
    >

  stylint commands
  ```
  npm init -y
  npm install --save-dev hint@7.x
  npx hint .
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
  npx stylelint "**/*.{css,scss}"
  npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
  npx eslint . --fix
   ```


- doesn't know the size, so use w baby
- disable cash in devtools>Network if the emages don't refresh
- ``` devide PX/500w> DPR==device(1,2,3) ```

Two column grid - image left, text right

@media (min-width: 760px){
  body {
    display: grid;
    grid: auto / repeat(2,1fr);
    grid-gap: 2em;
  }
}
img {
  width: 100%;
}

> 1 CSS px = 1 px > One dot of light on your screen is a hardware pixel.

> background shorthand syntax
``` background: [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];



function loadJS(url){
 let script = document.createElement('script');
 script.src = url;
   document.body.appendChild(script);
}

 loadJS('./load.js');

document.body.appendChild(displayNav);
displayNav.textContent = 'hi';
displayNav.style.backgroundColor= 'grey';
