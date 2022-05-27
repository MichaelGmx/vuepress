/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "33a9a9749d2a92223600b31d0e469866"
  },
  {
    "url": "android/android-build-error.html",
    "revision": "3b5cef0ecb5f4ae5dea98212f8ec7f00"
  },
  {
    "url": "angular/angular-js/angularjs-directive-scope.html",
    "revision": "2b2c3781accf5cb03ed87cb4f7efa278"
  },
  {
    "url": "assets/css/0.styles.225b7e1c.css",
    "revision": "f05249d25ec9dff3abe1ac66d68dbf06"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/android_sdk_support_error.f023fa11.png",
    "revision": "f023fa110275932bf63ca8b58ed58e04"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.9ec44cb8.js",
    "revision": "78c7629178bfb7ca7339dc4fdd102e63"
  },
  {
    "url": "assets/js/10.f1732d14.js",
    "revision": "deb6745213e959e47bd1c4b5b4d5a7de"
  },
  {
    "url": "assets/js/11.da83d717.js",
    "revision": "be3a045eb29b2a97572ca7b323601fac"
  },
  {
    "url": "assets/js/12.63cc8360.js",
    "revision": "322e5c540ac9864e6cddc1d9c144a458"
  },
  {
    "url": "assets/js/13.78e45bce.js",
    "revision": "804dd587f16a647a92b104c90d38225a"
  },
  {
    "url": "assets/js/14.a94ae397.js",
    "revision": "7cc6572b8e3e8fafdf441f9db3f82b61"
  },
  {
    "url": "assets/js/15.3f866b52.js",
    "revision": "9f804fd3d92472dab33b57053aca6d61"
  },
  {
    "url": "assets/js/16.0eb7b154.js",
    "revision": "26aa499adc9131edf6404e77733e9b95"
  },
  {
    "url": "assets/js/17.99eb5ff4.js",
    "revision": "4b59e5bb77d4b4595d2f56db97f0d546"
  },
  {
    "url": "assets/js/18.1e445949.js",
    "revision": "36aca665567f0db76358e45d930d9ea3"
  },
  {
    "url": "assets/js/19.d80cb9ad.js",
    "revision": "84f041405dcee2a64f38ca6b094541b3"
  },
  {
    "url": "assets/js/20.ff0115d6.js",
    "revision": "778577726f1ef7415fba0798a59dabe3"
  },
  {
    "url": "assets/js/21.cf6e213c.js",
    "revision": "b40d06ab84107f632bca4af173a2fada"
  },
  {
    "url": "assets/js/22.a5004692.js",
    "revision": "3627fe16950f82c113d914a1b586733d"
  },
  {
    "url": "assets/js/23.919f5a60.js",
    "revision": "f296fbb9d161d16f8c6d9138a02f4514"
  },
  {
    "url": "assets/js/24.23c83ec6.js",
    "revision": "b2c2ef15fe7ca1c27f06ac5152b98938"
  },
  {
    "url": "assets/js/25.573a883c.js",
    "revision": "4cd359a5ff06ded9a0f976e278a849cc"
  },
  {
    "url": "assets/js/3.936b814f.js",
    "revision": "2c0ff86b1f0da3a3e1ca7f052f357470"
  },
  {
    "url": "assets/js/4.838dc6bf.js",
    "revision": "1e524543b07b1ffdf587e92b2eab5fdb"
  },
  {
    "url": "assets/js/5.a992c172.js",
    "revision": "424a8419cc87b03b24a0ec126fa3f036"
  },
  {
    "url": "assets/js/6.b04a5d26.js",
    "revision": "fc9eadb0fd6d384a468a04871fad5a4e"
  },
  {
    "url": "assets/js/7.f4b47f16.js",
    "revision": "1d50fe8601eb20a87142d66ba6715658"
  },
  {
    "url": "assets/js/8.3d84fbf2.js",
    "revision": "0136c070e439f615e68234784df7013e"
  },
  {
    "url": "assets/js/9.47e910b0.js",
    "revision": "2454beda5b38376b2134960c28f4bc93"
  },
  {
    "url": "assets/js/app.db64137c.js",
    "revision": "bf990e2c3b054811b906dccb6419af79"
  },
  {
    "url": "categories/index.html",
    "revision": "173f2fc4f114e0881be51151790bced6"
  },
  {
    "url": "git/git-cli.html",
    "revision": "64b393cefc0a9c066dc0fa08d3b682e7"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "c0ef09c08051acec8c652cbcb378cafa"
  },
  {
    "url": "images/icons/android-chrome-384x384.png",
    "revision": "600868e6bb98850e82e457795f32e825"
  },
  {
    "url": "images/logo.jpg",
    "revision": "f607320d2e2cfec008a6726907568947"
  },
  {
    "url": "index.html",
    "revision": "3ffdcda7636cf49df18b980793514801"
  },
  {
    "url": "react/index.html",
    "revision": "1c768155cf3180719fe7b56553092142"
  },
  {
    "url": "react/prop-types.html",
    "revision": "72f1b0f3781afdad6d635b2d64c3cdaa"
  },
  {
    "url": "react/react-class.html",
    "revision": "c3caf901b3d40329035948d32e3f1f22"
  },
  {
    "url": "react/react-form.html",
    "revision": "1dfa17a244e3a98a8f1982b02d720751"
  },
  {
    "url": "react/react-hook.html",
    "revision": "aeea0728954dbf79761de76caef7aac6"
  },
  {
    "url": "react/router/index.html",
    "revision": "e459da251c3e226bbb63f9fcfa5d1f48"
  },
  {
    "url": "react/router/react-router-dom5.x.html",
    "revision": "1abe97b4f66504207c09083384e1ba28"
  },
  {
    "url": "react/router/react-router-dom6.x.html",
    "revision": "f74e15932f4b11a014379dc719fb98e7"
  },
  {
    "url": "tag/index.html",
    "revision": "4641d06d339693b6f94d9aa3631345fb"
  },
  {
    "url": "timeline/index.html",
    "revision": "e558262decdff7232da38d34ed504383"
  },
  {
    "url": "vue/vue-getting-started.html",
    "revision": "60d1d96ebaf2ca1cfb528f0f534493f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
