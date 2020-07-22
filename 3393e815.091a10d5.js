(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),i=(r(0),r(191)),o=r(193),c=r(201),d={id:"component-drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},s={id:"version-1.6.1/component-drawer-layout",title:"Drawer Layout",description:"This is a cross-platform replacement for React Native's DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.",source:"@site/versioned_docs/version-1.6.1/component-drawer-layout.mdx",permalink:"/react-native-gesture-handler/docs/component-drawer-layout",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/component-drawer-layout.mdx",version:"1.6.1",sidebar_label:"DrawerLayout",sidebar:"version-1.6.1/docs",previous:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/component-touchables"},next:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/contributing"}},l=[{value:"Usage:",id:"usage",children:[]},{value:"Properties:",id:"properties",children:[{value:"<code>drawerType</code>",id:"drawertype",children:[]},{value:"<code>edgeWidth</code>",id:"edgewidth",children:[]},{value:"<code>hideStatusBar</code>",id:"hidestatusbar",children:[]},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",children:[]},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>children</code>",id:"children",children:[]}]},{value:"Example:",id:"example",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a cross-platform replacement for React Native's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"DrawerLayoutAndroid")," component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"React Native docs")," for the detailed usage for standard parameters."),Object(i.b)("h2",{id:"usage"},"Usage:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DrawerLayout")," component isn't exported by default from the ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';\n")),Object(i.b)("h2",{id:"properties"},"Properties:"),Object(i.b)("p",null,"On top of the standard list of parameters DrawerLayout has an additional set of attributes to customize its behavior. Please refer to the list below:"),Object(i.b)("h3",{id:"drawertype"},Object(i.b)("inlineCode",{parentName:"h3"},"drawerType")),Object(i.b)("p",null,"possible values are: ",Object(i.b)("inlineCode",{parentName:"p"},"front"),", ",Object(i.b)("inlineCode",{parentName:"p"},"back")," or ",Object(i.b)("inlineCode",{parentName:"p"},"slide")," (default is ",Object(i.b)("inlineCode",{parentName:"p"},"front"),"). It specifies the way the drawer will be displayed. When set to ",Object(i.b)("inlineCode",{parentName:"p"},"front")," the drawer will slide in and out along with the gesture and will display on top of the content view. When ",Object(i.b)("inlineCode",{parentName:"p"},"back")," is used the drawer displays behind the content view and can be revealed with gesture of pulling the content view to the side. Finally ",Object(i.b)("inlineCode",{parentName:"p"},"slide")," option makes the drawer appear like it is attached to the side of the content view; when you pull both content view and drawer will follow the gesture."),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-slide.gif"),width:"280"})),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"front"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-front.gif"),width:"280"})),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"back"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-back.gif"),width:"280"})),Object(i.b)("h3",{id:"edgewidth"},Object(i.b)("inlineCode",{parentName:"h3"},"edgeWidth")),Object(i.b)("p",null,"number, allows for defining how far from the edge of the content view the gesture should activate."),Object(i.b)("h3",{id:"hidestatusbar"},Object(i.b)("inlineCode",{parentName:"h3"},"hideStatusBar")),Object(i.b)("p",null,"boolean, when set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," Drawer component will use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html"}),"StatusBar"),' API to hide the OS status bar whenever the drawer is pulled or when its in an "open" state.'),Object(i.b)("h3",{id:"statusbaranimation"},Object(i.b)("inlineCode",{parentName:"h3"},"statusBarAnimation")),Object(i.b)("p",null,"possible values are: ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),", ",Object(i.b)("inlineCode",{parentName:"p"},"none")," or ",Object(i.b)("inlineCode",{parentName:"p"},"fade")," (defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),"). Can be used when ",Object(i.b)("inlineCode",{parentName:"p"},"hideStatusBar")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and will select the animation used for hiding/showing the status bar. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html#statusbaranimation"}),"StatusBar")," documentation for more details."),Object(i.b)("h3",{id:"overlaycolor"},Object(i.b)("inlineCode",{parentName:"h3"},"overlayColor")),Object(i.b)("p",null,"color (default to ",Object(i.b)("inlineCode",{parentName:"p"},'"black"'),") of a semi-transparent overlay to be displayed on top of the content view when drawer gets open. A solid color should be used as the opacity is added by the Drawer itself and the opacity of the overlay is animated (from 0% to 70%)."),Object(i.b)("h3",{id:"rendernavigationview"},Object(i.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(i.b)("p",null,"function. This attribute is present in the standard implementation already and is one of the required params. Gesture handler version of DrawerLayout make it possible for the function passed as ",Object(i.b)("inlineCode",{parentName:"p"},"renderNavigationView")," to take an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened). This can be used by the drawer component to animated its children while the drawer is opening or closing."),Object(i.b)("h3",{id:"children"},Object(i.b)("inlineCode",{parentName:"h3"},"children")),Object(i.b)("p",null,"component or function. Children is a component which is rendered by default and is wrapped by drawer. However, it could be also a render function which takes an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened) is the same way like ",Object(i.b)("inlineCode",{parentName:"p"},"renderNavigationView")," prop."),Object(i.b)("h2",{id:"example"},"Example:"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/horizontalDrawer/index.js"}),"drawer example")," from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'class Drawerable extends Component {\n  renderDrawer = () => {\n    return (\n      <View>\n        <Text>I am in the drawer!</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <View style={{ flex: 1 }}>\n        <DrawerLayout\n          drawerWidth={200}\n          drawerPosition={DrawerLayout.positions.Right}\n          drawerType="front"\n          drawerBackgroundColor="#ddd"\n          renderNavigationView={this.renderDrawer}>\n          <View>\n            <Text>Hello, it\'s me</Text>\n          </View>\n        </DrawerLayout>\n      </View>\n    );\n  }\n}\n')))}b.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return r?a.a.createElement(h,c(c({ref:t},s),{},{components:r})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},192:function(e,t,r){"use strict";var n=r(0),a=r(51);t.a=function(){return Object(n.useContext)(a.a)}},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(194);var n=r(192);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},194:function(e,t,r){"use strict";var n=r(17),a=r(35),i=r(197),o="".startsWith;n(n.P+n.F*r(198)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},195:function(e,t,r){var n=r(17);n(n.S+n.F,"Object",{assign:r(199)})},196:function(e,t){t.f=Object.getOwnPropertySymbols},197:function(e,t,r){var n=r(72),a=r(24);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},198:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},199:function(e,t,r){"use strict";var n=r(11),a=r(23),i=r(196),o=r(71),c=r(50),d=r(73),s=Object.assign;e.exports=!s||r(18)((function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[r]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var r=c(e),s=arguments.length,l=1,p=i.f,b=o.f;s>l;)for(var u,h=d(arguments[l++]),m=p?a(h).concat(p(h)):a(h),f=m.length,w=0;f>w;)u=m[w++],n&&!b.call(h,u)||(r[u]=h[u]);return r}:s},201:function(e,t,r){"use strict";r(195);var n=r(0),a=r.n(n),i={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return a.a.createElement("div",{style:i.container},n.Children.map(t,(function(e){return Object(n.cloneElement)(e,Object.assign(Object.assign({},e.props.style),{},{style:i.img}))})))}}}]);