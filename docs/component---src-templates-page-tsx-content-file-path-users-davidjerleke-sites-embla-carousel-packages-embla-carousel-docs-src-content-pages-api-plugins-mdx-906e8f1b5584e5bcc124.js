"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9046],{547:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return y}});var n=a(5392),l=a(2784),o=a(4385),r=a(6854);function c(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",div:"div",h3:"h3",pre:"pre",code:"code"},(0,n.ah)(),e.components),{Admonition:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Admonition",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Plugins"),"\n",l.createElement(t.p,null,"It's possible to ",l.createElement(t.strong,null,"extend")," Embla carousel with additional features using ",l.createElement(t.strong,null,"plugins"),". The complete list of official plugins can be found ",l.createElement(t.a,{href:"/plugins/"},"here"),"."),"\n",l.createElement(t.h2,{id:"usage",style:{position:"relative"}},l.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",l.createElement(t.p,null,"The Embla Carousel ",l.createElement(t.strong,null,"constructor")," accepts an ",l.createElement(t.strong,null,"array of plugins"),". Each plugin has its own ",l.createElement(t.a,{href:"/api/plugins/#constructor-options"},"options")," and ",l.createElement(t.a,{href:"/api/plugins/#calling-methods"},"methods"),"."),"\n",l.createElement(t.h3,{id:"adding-a-plugin",style:{position:"relative"}},l.createElement(t.a,{href:"#adding-a-plugin","aria-label":"adding a plugin permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding a plugin"),"\n",l.createElement(t.p,null,"The constructor plugin array is the default way of providing plugins to Embla Carousel. In the following example, the ",l.createElement(t.a,{href:"/plugins/autoplay/"},"Autoplay")," plugin is added to the carousel."),"\n",l.createElement(o.mQ,{groupId:"library"},l.createElement(r.L,{label:"Vanilla",value:"vanilla"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js{4}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n"))),l.createElement(r.L,{label:"React",value:"react"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx{5}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport const EmblaCarousel = () => {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])\n  // ...\n}\n"))),l.createElement(r.L,{label:"Vue",value:"vue"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{7}"},"<script>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  export default {\n    setup() {\n      const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay()])\n      // ...\n    },\n  }\n<\/script>\n")))),"\n",l.createElement(a,null,l.createElement(t.p,null,"Note that it's possible to ",l.createElement(t.strong,null,"change plugins")," passed to the Embla Carousel\nconstructor ",l.createElement(t.strong,null,"after initialization")," with the ",l.createElement(t.a,{href:"/api/methods/#reinit"},"reInit"),"\nmethod.")),"\n",l.createElement(t.h3,{id:"constructor-options",style:{position:"relative"}},l.createElement(t.a,{href:"#constructor-options","aria-label":"constructor options permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Constructor options"),"\n",l.createElement(t.p,null,"Plugins have their own specific ",l.createElement(t.strong,null,"options")," which is the first argument of the plugin constructor. This allows for configuring the plugin to your liking."),"\n",l.createElement(o.mQ,{groupId:"library"},l.createElement(r.L,{label:"Vanilla",value:"vanilla"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js{5}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [\n  Autoplay({ delay: 4000 }),\n])\n"))),l.createElement(r.L,{label:"React",value:"react"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx{6}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport const EmblaCarousel = () => {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [\n    Autoplay({ delay: 4000 }),\n  ])\n  // ...\n}\n"))),l.createElement(r.L,{label:"Vue",value:"vue"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{8}"},"<script>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  export default {\n    setup() {\n      const [emblaNode] = emblaCarouselVue({ loop: true }, [\n        Autoplay({ delay: 4000 }),\n      ])\n      // ...\n    },\n  }\n<\/script>\n")))),"\n",l.createElement(t.h3,{id:"global-options",style:{position:"relative"}},l.createElement(t.a,{href:"#global-options","aria-label":"global options permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Global options"),"\n",l.createElement(t.p,null,"Most plugins allows you to set ",l.createElement(t.strong,null,"global options")," that will be applied to all instances. This allows for overriding the default plugin options with your own:"),"\n",l.createElement(o.mQ,{groupId:"library"},l.createElement(r.L,{label:"Vanilla",value:"vanilla"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js{4}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nAutoplay.globalOptions = { delay: 4000 }\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n"))),l.createElement(r.L,{label:"React",value:"react"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx{4}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nAutoplay.globalOptions = { delay: 4000 }\n\nexport const EmblaCarousel = () => {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])\n  // ...\n}\n"))),l.createElement(r.L,{label:"Vue",value:"vue"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{5}"},"<script>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  Autoplay.globalOptions = { delay: 4000 }\n\n  export default {\n    setup() {\n      const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay()])\n      // ...\n    },\n  }\n<\/script>\n")))),"\n",l.createElement(a,{type:"warning"},l.createElement(t.p,null,"Make sure to assign global options ",l.createElement(t.strong,null,"before")," initializing any carousel and\n",l.createElement(t.strong,null,"only assign it once"),". Re-assigning global options might lead to confusing\ncode and unexpected behaviour.")),"\n",l.createElement(t.h3,{id:"calling-methods",style:{position:"relative"}},l.createElement(t.a,{href:"#calling-methods","aria-label":"calling methods permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Calling methods"),"\n",l.createElement(t.p,null,"Additionally, some plugins expose their own ",l.createElement(t.strong,null,"API methods"),". You can access plugin methods by calling the ",l.createElement(t.a,{href:"/api/methods/#plugins"},"plugin")," method like demonstrated below."),"\n",l.createElement(o.mQ,{groupId:"library"},l.createElement(r.L,{label:"Vanilla",value:"vanilla"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js{6}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n\nemblaApi.plugins().autoplay.stop()\n"))),l.createElement(r.L,{label:"React",value:"react"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx{9}"},"import { useEffect } from 'react'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport const EmblaCarousel = () => {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])\n\n  useEffect(() => {\n    if (emblaApi) emblaApi.plugins().autoplay.stop()\n  }, [emblaApi])\n\n  // ...\n}\n"))),l.createElement(r.L,{label:"Vue",value:"vue"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{13}"},"<script>\n  import { watchEffect } from 'vue'\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  export default {\n    setup() {\n      const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true }, [\n        Autoplay(),\n      ])\n\n      watchEffect(() => {\n        if (emblaApi.value) emblaApi.value.plugins().autoplay.stop()\n      })\n\n      // ...\n    },\n  }\n<\/script>\n")))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)};var m=a(4234),s=a(3785),u=a(8116),p=a(3559),d=a(7377),g=a(286),E=a(1429),h=a(8944),b=a(9387);const f=e=>{const{data:t,pageContext:a}=e,{siteUrl:n,author:o}=(0,u.$)(),{title:r,description:c,date:i}=t.mdx.frontmatter,p=(0,l.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return l.createElement(m.p,{title:r,description:c,url:""+n+a.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,h.P)(n)+'",\n        "description": "'+c+'",\n        "url": "'+n+a.slug+'",\n        "headline": "'+r+'",\n        "image": "'+n+'/share-image.png",\n        "datePublished": "'+p+'",\n        "dateModified": "'+p+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+o+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+o+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+n+s.Z+'"\n          }\n        }\n      }\n    '))},v=e=>{const{pageContext:t,children:a}=e,{next:n,previous:o,filePath:r,id:c}=t;return l.createElement(l.Fragment,null,l.createElement(g.V,{id:c}),l.createElement("article",{id:E.O},l.createElement(b.i,null,a)),l.createElement(p.l,{pageUrl:r}),l.createElement(d.R,{previous:o,next:n}))};function y(e){return l.createElement(v,e,l.createElement(i,e))}},286:function(e,t,a){a.d(t,{V:function(){return b}});var n=a(2784),l=a(1195),o=a(9196),r=(a(7694),a(4049)),c=a(5211);var i=a(6807),m=a(7042),s=a(727),u=a(127);const p=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.u.COMPLEMENTARY,u.v.THREE),d=(0,l.css)(["color:",";padding:"," 0;"],m.DM.TEXT_LOW_CONTRAST,u.v.ONE),g=(0,l.default)(o.Z).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],d),E=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],d),h=(0,l.default)(i.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],m.DM.TEXT_LOW_CONTRAST,u.v.ONE),b=e=>{const{id:t}=e,a=(e=>{const{flat:t}=(0,c.V)(),a=t.find((t=>t.id===e));return t.filter((e=>(0,r.D)(e.slug,(null==a?void 0:a.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===a.length?null:n.createElement(p,{"aria-label":"Breadcrumb Navigation"},a.map(((e,t)=>{let{id:l,slug:o,title:r}=e;return t!==a.length-1?n.createElement(n.Fragment,{key:l},n.createElement(g,{to:o},r),n.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):n.createElement(E,{key:l},r)})))}},3559:function(e,t,a){a.d(t,{l:function(){return p}});var n=a(2784),l=a(1195),o=a(9196),r=a(7042),c=a(727),i=a(127),m=a(2657),s=a(6722);const u=(0,l.default)(o.Z).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,r.DM.TEXT_LOW_CONTRAST),p=e=>{const{pageUrl:t}=e,a=m.n.GITHUB_DOCUMENTATION+"/"+t;return n.createElement(u,{to:a},n.createElement(s.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,a){a.d(t,{R:function(){return h}});var n=a(2784),l=a(1195),o=a(9196),r=a(7697),c=a(7042),i=a(127),m=a(6722);const s=i.v.FOUR,u=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],i.v.EIGHT,s),p=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],s,c.DM.BRAND_PRIMARY,c.DM.BRAND_SECONDARY),d=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],c.DM.TEXT_LOW_CONTRAST,i.v.ONE),g=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),E=l.default.span.withConfig({displayName:"PagePagination__GradientText",componentId:"sc-3ejrow-4"})(["",";"],r.W),h=e=>{const{next:t,previous:a}=e;return n.createElement(u,{"aria-label":"Pagination Navigation"},n.createElement(p,null,a&&n.createElement(o.Z,{to:a.slug},n.createElement(d,null,"Previous"),n.createElement(g,null,n.createElement(m.M,{iconSvg:"arrowLeft"},n.createElement(E,null,a.title))))),n.createElement(p,null,t&&n.createElement(o.Z,{to:t.slug},n.createElement(d,null,"Next"),n.createElement(g,null,n.createElement(m.M,{iconSvg:"arrowRight",iconSide:"right"},n.createElement(E,null,t.title))))))}},4234:function(e,t,a){a.d(t,{p:function(){return c}});var n=a(2784),l=a(8116),o=a(8944),r=a(3471);const c=e=>{const{title:t,description:a,lang:c="en",url:i,children:m}=e,s=(0,l.$)(),u=t+" | "+(0,r.g)(s.title),p=a||s.description;return n.createElement(n.Fragment,null,n.createElement("html",{lang:c}),n.createElement("title",null,u),n.createElement("link",{rel:"canonical",href:i}),n.createElement("meta",{name:"description",content:p}),n.createElement("meta",{name:"og:title",content:t}),n.createElement("meta",{name:"og:description",content:p}),n.createElement("meta",{name:"og:type",content:"article"}),n.createElement("meta",{name:"og:locale",content:"en_EN"}),n.createElement("meta",{name:"og:url",content:i}),n.createElement("meta",{name:"og:site_name",content:(0,o.P)(s.siteUrl)}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:s.author}),n.createElement("meta",{name:"twitter:title",content:t}),n.createElement("meta",{name:"twitter:description",content:p}),m)}},3471:function(e,t,a){a.d(t,{g:function(){return n}});const n=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,a){a.d(t,{P:function(){return n}});const n=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,a){t.Z=a.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-api-plugins-mdx-906e8f1b5584e5bcc124.js.map