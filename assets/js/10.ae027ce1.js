(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{88:function(t,s,n){"use strict";n.r(s);var a={data:function(){return{tag:"2018-9-13"}}},e=n(0),r=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("Tag",{attrs:{tag:t.tag}}),t._m(1),t._m(2),n("p",[t._v("是设计图给的单位有问题嘛？当然不是2333。仔细看看UI小姐姐给的设计图会发现，她的图的大小是有一个特定的大小的，比如说她的画布的宽度为750px，也就是说她图上的所有元素的大小都只在宽度为750px的时候生效。那么我们需要做的事情就是让宽度在任何大小的情况下，页面中元素的大小都能等比的缩放，而在宽度为750px时，能做到和设计图一模一样。")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("我们先来看下rem是啥。")]),t._m(6),n("p",[t._v("emmmm……不是这个……我们看下维基百科上咋写的")]),t._m(7),n("p",[t._v("意思就是em是根据父元素的字体大小设置的，而rem是根据网页的根元素来设置大小的。大部分浏览器的默认字体大小是16px，那么这时候1rem=16px。")]),t._m(8),n("p",[t._v("如果我们有一个按钮的宽度是120px，那么转换成rem就是")]),t._m(9),n("p",[t._v("如果我们把根元素html的字体大小改变，button的大小也会随之改变。")]),t._m(10),n("p",[t._v("这样一来我们就知道我们可以通过改变根元素的字体大小来使得页面内其他元素等比缩放。")]),t._m(11),n("p",[t._v("这时候就产生一个问题，我们要如何确定根元素的字体大小。回想一下我们为啥要做这些事情，是因为UI小姐姐给的图嘛。所以我们的基准也应该按照给的设计图来。如果说给的是移动端的图，是以iPhone6为标准的话，给出的设计图宽度一般为750px。这时候我们可以设置根元素的字体大小为100px（计算起来方便一点）。那么1rem也就是100px。设计图上的尺寸只需要分别除以100再加上rem单位即可。")]),t._m(12),n("p",[t._v("那么如果我们的设备宽度为400呢？")]),t._m(13),n("p",[t._v("这样我们就只需要在页面加载的一开始获取设备的宽度，再设置根元素的字体大小就可以用rem实现自适应啦")]),t._m(14)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"rem了解一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem了解一下","aria-hidden":"true"}},[this._v("#")]),this._v(" Rem了解一下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("狐狸最近做的项目涉及到web的移动端页面。要做移动端页面的话第一反应是需要做"),s("strong",[this._v("适配")]),this._v("，毕竟手机型号千千万万，界面大小也是各式各样。那狐狸一开始想的是用一些框架，比如说Bootstrap这种以移动端适配为特色的。自己平时用框架写当然是很方便的，功能也很快就实现了，但是这时候UI小姐姐发了几个psd，让照着改，就出问题了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，UI小姐姐的"),s("strong",[this._v("设计图是以px为单位")]),this._v("的，也就是像素。但是像素这个单位是固定的，比如说一个字体大小为14px的字在iPhone4上面看正好，但是iPhone8S上面看就有点小。如果说我们完全按照设计图给的大小直接写在页面上，可能实际看起来的效果和图上想要的效果大相径庭。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("iPhone6上，字体大小为14px，即14*(375/375)px，则按钮宽为140px；\n则iphone6 plus上，字体大小约为15.5px，即14*(414/375)px，则按钮宽约为155px；\n则ipad上，字体大小约为28.8px，即14*(768/375)px，则按钮宽约为288px。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以看到在不同设备上，为了看到一样的效果，字体的大小，元素的宽高位置都需要进行"),s("strong",[this._v("等比的缩放")]),this._v("，直接使用设计图上的px单位是不合理的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关于rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于rem","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于Rem")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://118.89.248.161/owncloud/index.php/s/SC5df7cJLN2ezRT/download",alt:"1-1"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在层叠样式表中，单位em是字体点数或英寸数在名义上的高度。任何指定的字体在实际上、物理上的高度取决于用户定义的DPI设置、当前元素的字体大小以及所用的字体。为使样式规则只取决于默认的字体大小，发展出了另一个单位：rem。rem或root em是文件中根元素的字体大小。不同于会随着元素的不同而变化的em，rem在文件中是固定的。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 7.5rem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("/*120÷16=7.5(rem)*/")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 7.5rem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("/*7.5x20=150(px)*/")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实际操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 实际操作")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* 750px的设计稿上宽度为120px的button */")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2rem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("根元素字体大小 = 100 （设备宽度 / 750） = 100(400/750) = 53.33333(px)")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" win"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docEl "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    resizeEvt "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'resize'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token function-variable function"}},[t._v("recalc")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clientWidth "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" docEl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("clientWidth"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      docEl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientWidth "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("750")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'px'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("doc"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  win"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvt"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  doc"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])}],!1,null,null,null);s.default=r.exports}}]);