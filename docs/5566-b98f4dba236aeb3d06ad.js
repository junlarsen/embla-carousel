"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5566],{5566:function(e,o,r){r.r(o),o.default="import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport EmblaCarousel from './Autoplay/EmblaCarousel';\nimport Header from './Header';\nimport Footer from './Footer';\nimport '../css/base.css';\nimport '../css/sandbox.css';\nimport '../css/embla.css';\n\nconst OPTIONS = {};\nconst SLIDE_COUNT = 5;\nconst SLIDES = Array.from(Array(SLIDE_COUNT).keys());\n\nconst App = () => (<>\n    <Header />\n    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>\n    <Footer />\n  </>);\n\nReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>\n    <App />\n  </React.StrictMode>);\n"}}]);
//# sourceMappingURL=5566-b98f4dba236aeb3d06ad.js.map