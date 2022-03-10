<template><h1 id="脚手架结构" tabindex="-1"><a class="header-anchor" href="#脚手架结构" aria-hidden="true">#</a> 脚手架结构</h1>
<p>本章节主要介绍所有已经发布的脚手架目录结构。</p>
<h2 id="idm-module-vue" tabindex="-1"><a class="header-anchor" href="#idm-module-vue" aria-hidden="true">#</a> idm-module-vue</h2>
<p>基于<a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue<ExternalLinkIcon/></a>开发的组件脚手架</p>
<ul>
<li>
<p><strong>脚手架地址</strong></p>
<p><a href="https://github.com/yunit-source/idm-module-vue/" target="_blank" rel="noopener noreferrer">https://github.com/yunit-source/idm-module-vue/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><strong>目录结构</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>└─ idm-module-vue  <span class="token comment"># &lt;- 脚手架名，建议改成相应的包名</span>
   ├─ public  <span class="token comment"># &lt;- 静态资源文件目录</span>
   <span class="token operator">|</span>  └─ lib  <span class="token comment"># &lt;- 核心包目录，此目录的不会被打包进去，只有组件单独访问的时候才会使用</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ idm.base.css  <span class="token comment"># &lt;- idm提供的基本样式文件，所有组件都需要基于此样式进行开发</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ idm.core.js  <span class="token comment"># &lt;- idm提供的标准API文件，组件独立运行也能调用idm提供的标准API</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>. <span class="token comment"># &lt;- 其他lib文件</span>
   <span class="token operator">|</span>  └─ static  <span class="token comment"># &lt;- 静态资源目录</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ attributes  <span class="token comment"># &lt;- 存放所有组件的属性注册json文件</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ IText.json  <span class="token comment"># &lt;- 文本组件的属性注册文件，开发的时候可删除，这里只是作为参考示例</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>.
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ doc  <span class="token comment"># &lt;- 存放组件包和组件文档（MD）的目录</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ components  <span class="token comment"># &lt;- 存放组件文档的目录</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ IText.md  <span class="token comment"># &lt;- 文本组件的描述文档文件，开发的时候可删除，这里只是作为参考示例</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>.
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ index.md  <span class="token comment"># &lt;- 组件包的描述文档文件</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ config.json  <span class="token comment"># &lt;- 组件注册文件，开发新组件的时候需要修改</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ main.js  <span class="token comment"># &lt;- 组件包加载入口，此文件不需要做任何改动，否则组件加载可能异常</span>
   <span class="token operator">|</span>  └─ favicon.ico  <span class="token comment"># &lt;- ico图标</span>
   <span class="token operator">|</span>  └─ index.html  <span class="token comment"># &lt;- 组件包的页面</span>
   └─ src  <span class="token comment"># &lt;- 源码目录</span>
   <span class="token operator">|</span>  └─ api  <span class="token comment"># &lt;- 可用于存放公共api封装的目录</span>
   <span class="token operator">|</span>  └─ assets  <span class="token comment"># &lt;- 静态资源文件目录</span>
   <span class="token operator">|</span>  └─ components  <span class="token comment"># &lt;- 所有组件存放的目录，目录下一个Vue文件一个组件</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ IText.vue  <span class="token comment"># &lt;- 文本组件代码，开发的时候可删除，这里只是作为参考示例</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>.
   <span class="token operator">|</span>  └─ core  <span class="token comment"># &lt;- 脚手架核心代码存储目录，开发组件一般不需要修改此处</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ regModule.js  <span class="token comment"># &lt;- 组件注册的脚本文件，开发组件不需要修改此文件</span>
   <span class="token operator">|</span>  └─ icons  <span class="token comment"># &lt;- svg格式的icon自动引入的目录</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ svg  <span class="token comment"># &lt;- 存放svg图标文件目录</span>
   <span class="token operator">|</span>  └─ plugins  <span class="token comment"># &lt;- 组件包所用到的其他插件的加载入口文件</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ antd.js  <span class="token comment"># &lt;- ant design vue组件按需引入脚本文件，不需要antd的插件可以不用理会</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ antdicons.js  <span class="token comment"># &lt;- ant design vue图标按需引入脚本文件，不需要antd的插件可以不用理会</span>
   <span class="token operator">|</span>  └─ main.js  <span class="token comment"># &lt;- 代码包主入口脚本文件</span>
   <span class="token operator">|</span>  └─ Main.vue  <span class="token comment"># &lt;- 代码包主入口Vue文件</span>
   └─ .gitignore
   └─ babel.config.js
   └─ LICENSE
   └─ package.json
   └─ package-lock.json
   └─ README.md
   └─ vue.config.js  <span class="token comment"># &lt;- 脚手架的配置文件</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></li>
</ul>
</template>
