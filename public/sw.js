if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-a186a8f5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9KXzHRisnj8hoXrcUSkWm/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/9KXzHRisnj8hoXrcUSkWm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/222-078df670761b03ff.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/254-6ca2eaf635daac26.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/310-c952132a0dea1df0.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/457-30e22fa800e59e3e.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/530-0692eeaa032cad2c.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/661-781999de7ef76fc3.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/685-dbe168637bc020a2.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/741-87fb15aae5bcbc41.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/%5B...not_found%5D/layout-be2d596dbd00c4ca.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/%5B...not_found%5D/page-2177b10f96c37d46.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/about-us/layout-d6a9c379ab9d7dda.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/about-us/page-688ee1d004ef10f0.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/fonts/%5Bid%5D/layout-1435bf6bf219644d.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/fonts/%5Bid%5D/page-3430b099f75feda5.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-a26a42984642cb91.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/myanmar-fonts-generator/layout-8567416480c5f15b.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/myanmar-fonts-generator/page-0c468c374a6446d3.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-e310c32cc16f7e32.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-7f7cedb2813c267d.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/premium/%5Bid%5D/page-985f4bff71c68d3e.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/premium/layout-5da0996740b3363d.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/premium/page-7872a2d096c46860.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/privacy-policy/layout-6b190b7bd61b6cc5.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/privacy-policy/page-d8450ffd40871914.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/terms-of-service/layout-a3b1dd1f31533373.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/app/%5Blocale%5D/terms-of-service/page-866195886fb633e1.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/bf6a786c-fb19089e4aa4c0e7.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/main-app-b4bf12612319f5ca.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/main-b83cbd86572644c0.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4ef6b10c851d9f0a.js",revision:"9KXzHRisnj8hoXrcUSkWm"},{url:"/_next/static/css/098b75f8708ea9ea.css",revision:"098b75f8708ea9ea"},{url:"/_next/static/media/038cb846110458cf-s.p.ttf",revision:"04a4144166db285cb767daf55c17ebab"},{url:"/_next/static/media/15c1627afb6690f7-s.p.ttf",revision:"e45f423121dd96401dce3a064e14a5ce"},{url:"/_next/static/media/2335de768d2b3058-s.p.ttf",revision:"01cb1f8d5311392c0c1c80927ad6af7b"},{url:"/_next/static/media/53e52db3b247b3ca-s.p.ttf",revision:"ddf2838a7e00604a12ba5a73bca67c48"},{url:"/_next/static/media/7a746a7bc5bdc142-s.p.ttf",revision:"cab8504f7254d8e6e4395ce360b62f95"},{url:"/_next/static/media/a0f194487e41fed7-s.p.ttf",revision:"1356f8b2d302a8c0afa856765f4990bc"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/ce6e9ac0572d25ca-s.p.ttf",revision:"5a8706163e3fd3d500cc66f128ad0322"},{url:"/_next/static/media/dd204cae8dfa23a4-s.p.ttf",revision:"f6d1384d789bdd27ce902a395f7f16f1"},{url:"/_next/static/media/icon.12b37562.png",revision:"0252ce9b980160343425ce5860e23600"},{url:"/_next/static/media/icons8-columns.b6a0ed57.png",revision:"f3b21ed2648f9a763a73e0fcabceaa87"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
