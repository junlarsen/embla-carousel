"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[2014],{8298:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return v}});var a=n(5392),l=n(2784);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",div:"div",pre:"pre",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Slide Gaps"),"\n",l.createElement(t.p,null,"Embla Carousel allows you to use ",l.createElement(t.strong,null,"any CSS to stack your slides")," in the chosen scroll ",l.createElement(t.a,{href:"/api/options/#axis"},"axis"),", whether it's CSS Grid, flexbox, inline-blocks or anything else. It will conveniently ",l.createElement(t.strong,null,"pick up any spacings")," between the slides and ",l.createElement(t.strong,null,"automatically adjust the scroll snaps")," accordingly."),"\n",l.createElement(t.h2,{id:"declaring-gaps",style:{position:"relative"}},l.createElement(t.a,{href:"#declaring-gaps","aria-label":"declaring gaps permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Declaring gaps"),"\n",l.createElement(t.p,null,"It's recommended to declare gaps between slides ",l.createElement(t.strong,null,"using CSS"),". Any CSS that will render space between the slides is valid. You may add spacing in one direction like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__slide {\n  margin-right: 20px;\n}\n")),"\n",l.createElement(t.p,null,"It's also valid to add gaps in both directions:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__slide {\n  margin-right: 20px;\n  margin-left: 10px;\n}\n")),"\n",l.createElement(t.p,null,"If you're using CSS Grid you can declare your gaps like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__container {\n  grid-column-gap: 20px;\n}\n")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note!")," If you don't have ",l.createElement(t.a,{href:"/api/options/#loop"},"loop")," enabled, Embla Carousel will ignore any gaps at the start and end edge of the carousel."),"\n"),"\n",l.createElement(t.h2,{id:"variable-gaps",style:{position:"relative"}},l.createElement(t.a,{href:"#variable-gaps","aria-label":"variable gaps permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Variable gaps"),"\n",l.createElement(t.p,null,"Just like ",l.createElement(t.a,{href:"/guides/slide-sizes/#variable-sizes"},"variable")," slide sizes, variable gap sizes is ",l.createElement(t.strong,null,"supported out of the box"),". Declare your gap sizes in your CSS to achieve this:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__slide:nth-child(1) {\n  margin-right: 10px;\n}\n.embla__slide:nth-child(2) {\n  margin-right: 20px;\n  margin-left: 10px;\n}\n")),"\n",l.createElement(t.h2,{id:"responding-to-breakpoints",style:{position:"relative"}},l.createElement(t.a,{href:"#responding-to-breakpoints","aria-label":"responding to breakpoints permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Responding to breakpoints"),"\n",l.createElement(t.p,null,"Embla Carousel will ",l.createElement(t.strong,null,"automatically pick up")," any ",l.createElement(t.strong,null,"changes in gap sizes")," when the ",l.createElement(t.strong,null,"window is resized"),". It's very simple to set different sizes based on your breakpoints:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__slide {\n  margin-right: 10px; /* Default slide gap */\n}\n@media (min-width: 768px) {\n  .embla__slide {\n    margin-right: 20px; /* Breakpoint SM gap */\n  }\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(4234),o=n(3785),s=n(8116),m=n(3559),d=n(7377),g=n(286),u=n(1429),p=n(8944),h=n(9387);const E=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,s.$)(),{title:i,description:m,date:d}=t.mdx.frontmatter,g=(0,l.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return l.createElement(c.p,{title:i,description:m,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,p.P)(a)+'",\n        "description": "'+m+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+i+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+g+'",\n        "dateModified": "'+g+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+o.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:i,id:c}=t;return l.createElement(l.Fragment,null,l.createElement(g.V,{id:c}),l.createElement("article",{id:u.O},l.createElement(h.i,null,n)),l.createElement(m.l,{pageUrl:i}),l.createElement(d.R,{previous:r,next:a}))};function v(e){return l.createElement(f,e,l.createElement(i,e))}},286:function(e,t,n){n.d(t,{V:function(){return f}});var a=n(2784),l=n(1195),r=n(9196),i=(n(7694),n(4049)),c=n(5211);var o=n(6807),s=n(7042),m=n(727),d=n(127);const g=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,d.v.THREE),u=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),p=(0,l.default)(r.Z).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],u),h=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],u),E=(0,l.default)(o.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,c.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,i.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(g,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:i}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(p,{to:r},i),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},i)})))}},3559:function(e,t,n){n.d(t,{l:function(){return g}});var a=n(2784),l=n(1195),r=n(9196),i=n(7042),c=n(727),o=n(127),s=n(2657),m=n(6722);const d=(0,l.default)(r.Z).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.u.COMPLEMENTARY,o.v.ONE,o.v.ONE,o.v.EIGHT,i.DM.TEXT_LOW_CONTRAST),g=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(m.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return E}});var a=n(2784),l=n(1195),r=n(9196),i=n(7697),c=n(7042),o=n(127),s=n(6722);const m=o.v.FOUR,d=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],o.v.EIGHT,m),g=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],m,c.DM.BRAND_PRIMARY,c.DM.BRAND_SECONDARY),u=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],c.DM.TEXT_LOW_CONTRAST,o.v.ONE),p=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),h=l.default.span.withConfig({displayName:"PagePagination__GradientText",componentId:"sc-3ejrow-4"})(["",";"],i.W),E=e=>{const{next:t,previous:n}=e;return a.createElement(d,{"aria-label":"Pagination Navigation"},a.createElement(g,null,n&&a.createElement(r.Z,{to:n.slug},a.createElement(u,null,"Previous"),a.createElement(p,null,a.createElement(s.M,{iconSvg:"arrowLeft"},a.createElement(h,null,n.title))))),a.createElement(g,null,t&&a.createElement(r.Z,{to:t.slug},a.createElement(u,null,"Next"),a.createElement(p,null,a.createElement(s.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(h,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return c}});var a=n(2784),l=n(8116),r=n(8944),i=n(3471);const c=e=>{const{title:t,description:n,lang:c="en",url:o,children:s}=e,m=(0,l.$)(),d=t+" | "+(0,i.g)(m.title),g=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:c}),a.createElement("title",null,d),a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:g}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:g}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:o}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:g}),s)}},3471:function(e,t,n){n.d(t,{g:function(){return a}});const a=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-guides-slide-gaps-md-839f127c963d87bebb8c.js.map