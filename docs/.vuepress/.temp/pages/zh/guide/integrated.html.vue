<template><h1 id="快速集成" tabindex="-1"><a class="header-anchor" href="#快速集成" aria-hidden="true">#</a> 快速集成</h1>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<p>首先得有一个后端环境，不管是java、.net还是php，只要确保后端能正常启动访问即可集成IDM。</p>
<p><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">java后端集成包<ExternalLinkIcon/></a></p>
<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2>
<p>IDM目前不需要任何环境，只需要<RouterLink to="/zh/CHANGELOG.html">下载最新版本</RouterLink>或<RouterLink to="/zh/CHANGELOG.html">历史版本</RouterLink>的代码包放到你的后端任意目录下即可完成安装，修改相应的<RouterLink to="/zh/setting/config.html">配置项</RouterLink>即可使用</p>
<ul>
<li><RouterLink to="/zh/CHANGELOG.html">IDM最新版下载</RouterLink></li>
<li><RouterLink to="/zh/CHANGELOG.html">IDM更新日志</RouterLink></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>二次开发参考： <RouterLink to="/zh/guide/extenddevelop.html">开源</RouterLink></p>
</div>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<p>IDM的配置文件与IDM的index.html页面在同级目录，配置文件名是<code>setting.js</code>，配置文件结构如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>window.$$IDMSetting = <span class="token punctuation">{</span>
    <span class="token comment">//框架的版本</span>
    version<span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
    <span class="token comment">//IDM的文件夹名称</span>
    webRoot<span class="token operator">:</span> <span class="token punctuation">{</span>
        idm<span class="token operator">:</span><span class="token string">"idm"</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">}</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>配置参考： <RouterLink to="/zh/setting/config.html">webRoot</RouterLink></p>
</div>
<h3 id="idm" tabindex="-1"><a class="header-anchor" href="#idm" aria-hidden="true">#</a> idm</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>idm</code></p>
<p>IDM的文件夹名称</p>
</li>
</ul>
<h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/DreamWeb/</code></p>
<p>框架的所属项目的根目录名称，比如你的应用程序名称为<code>projectName</code>,这里应该填写<code>/projectName/</code>，如果没有应用程序名称(例如：http://?.com/能直接访问首页)，这里应该直接为<code>/</code></p>
</li>
</ul>
<h3 id="htmldir" tabindex="-1"><a class="header-anchor" href="#htmldir" aria-hidden="true">#</a> htmlDir</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>./</code></p>
<p>页面的前置路径，可相对或绝对（示例：<code>./</code>或<code>../idm/</code>或<code>/projectName/idm/</code>）</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>示例中的<code>idm</code>为<code>webRoot.idm</code>配置的名称，保持一致即可</p>
</div>
</li>
</ul>
<h3 id="assetsdir" tabindex="-1"><a class="header-anchor" href="#assetsdir" aria-hidden="true">#</a> assetsDir</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>./static/</code></p>
<p>打包编译的静态资源文件，相对于当前的页面路径</p>
</li>
</ul>
<h3 id="moduledir" tabindex="-1"><a class="header-anchor" href="#moduledir" aria-hidden="true">#</a> moduleDir</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>./idm_modules/</code></p>
<p>开发的组件相对IDM框架所在项目的目录</p>
</li>
</ul>
<h3 id="platformno" tabindex="-1"><a class="header-anchor" href="#platformno" aria-hidden="true">#</a> platformNo</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>p1000</code></p>
<p>如果你的项目工程模式为产品（平台）-&gt;项目（二次开发）模式，则此处代表的是平台的编号，此项相当于一个产品的基本编号，所有IDM核心框架源码编译后的代码都应该放到这个编号下面，如无编号可留空</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><code>DreamWeb</code>的默认为<code>p1000</code>,项目组请勿修改，否则造成程序无法访问</p>
</div>
</li>
</ul>
<h3 id="projectno" tabindex="-1"><a class="header-anchor" href="#projectno" aria-hidden="true">#</a> projectNo</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>p1000</code></p>
<p>如果你的项目工程模式为产品（平台）-&gt;项目（二次开发）模式，则此处代表的是项目的编号，此项相当于一个项目的扩展编号，所有上传的文件和配置产生的文件都会保存在此编号的文件夹下面，如果与<code>platformNo</code>相同的编号则默认为都是平台的，也就是项目组配置的和自定义开发的组件都是存放在<code>platformNo</code>的编号文件夹中。如果工程就是项目，则此处可留空或与<code>platformNo</code>相同即可</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><code>DreamWeb</code>的默认为<code>p1000</code>,项目组根据项目编号自行修改</p>
</div>
</li>
</ul>
<h3 id="moduleabsolutedir" tabindex="-1"><a class="header-anchor" href="#moduleabsolutedir" aria-hidden="true">#</a> moduleAbsoluteDir</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/{projectNo}/idm/idm_modules/</code></p>
<p>组件的存放路径，相对于程序根目录的绝对的路径</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>{projectNo}</code>会自动使用<code>projectNo</code>属性设置的值进行替换</p>
</div>
</li>
</ul>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<p>结合上述配置我们再来看看下面两种工程模式的目录结构</p>
<h3 id="产品模式" tabindex="-1"><a class="header-anchor" href="#产品模式" aria-hidden="true">#</a> 产品模式</h3>
<p>以我们工程ProjectName的名称为产品（平台）-&gt;项目（二次开发）模式为例，目录结构如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>└─ ProjectName  <span class="token comment"># &lt;- 工程名</span>
   ├─ p1000  <span class="token comment"># &lt;- 产品（平台）编号</span>
   <span class="token operator">|</span>  └─ idm  <span class="token comment"># &lt;- IDM的文件夹名称</span>
   <span class="token operator">|</span>     └─ idm_modules  <span class="token comment"># &lt;- 存放组件代码包的文件夹</span>
   <span class="token operator">|</span>     <span class="token operator">|</span>  └─ basics  <span class="token comment"># &lt;- 基础组件代码包文件夹名</span>
   <span class="token operator">|</span>     <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token number">1.0</span>.0  <span class="token comment"># &lt;- 代码包的版本号</span>
   <span class="token operator">|</span>     <span class="token operator">|</span>  └─ layout  <span class="token comment"># &lt;- 布局组件代码包文件夹名</span>
   <span class="token operator">|</span>     <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>.
   <span class="token operator">|</span>     └─ idm_pageschema  <span class="token comment"># &lt;- 存放页面配置schema的文件夹</span>
   <span class="token operator">|</span>     └─ lib  <span class="token comment"># &lt;- 框架所需要用到的核心包存储文件夹</span>
   <span class="token operator">|</span>     └─ static  <span class="token comment"># &lt;- 框架编译后的资源目录</span>
   <span class="token operator">|</span>     └─ upload  <span class="token comment"># &lt;- 配置与开发过程中上传的资源目录</span>
   <span class="token operator">|</span>     └─ index.html  <span class="token comment"># &lt;- 核心框架的页面入口</span>
   <span class="token operator">|</span>     └─ favicon.ico  <span class="token comment"># &lt;- 图标ico</span>
   <span class="token operator">|</span>     └─ setting.js  <span class="token comment"># &lt;- 核心框架的自定义配置文件</span>
   └─ p2580  <span class="token comment"># &lt;- 项目（二次开发）编号</span>
   <span class="token operator">|</span>  └─ idm  <span class="token comment"># &lt;- IDM的文件夹名称</span>
   <span class="token operator">|</span>     └─ idm_modules  <span class="token comment"># &lt;- 存放项目（二次开发）的组件代码包的文件夹</span>
   <span class="token operator">|</span>     └─ idm_pageschema  <span class="token comment"># &lt;- 存放项目（二次开发）的页面配置schema的文件夹</span>
   <span class="token operator">|</span>     └─ upload  <span class="token comment"># &lt;- 存放项目（二次开发）的配置与开发过程中上传的资源目录</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="项目模式" tabindex="-1"><a class="header-anchor" href="#项目模式" aria-hidden="true">#</a> 项目模式</h3>
<p>以我们工程以ProjectName的为名称的项目模式为例，目录结构如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>└─ ProjectName  <span class="token comment"># &lt;- 工程名</span>
   └─ idm  <span class="token comment"># &lt;- IDM的文件夹名称</span>
   <span class="token operator">|</span>  └─ idm_modules  <span class="token comment"># &lt;- 存放组件代码包的文件夹</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ basics  <span class="token comment"># &lt;- 基础组件代码包文件夹名</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token number">1.0</span>.0  <span class="token comment"># &lt;- 代码包的版本号</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ layout  <span class="token comment"># &lt;- 布局组件代码包文件夹名</span>
   <span class="token operator">|</span>  <span class="token operator">|</span>  └─ <span class="token punctuation">..</span>.
   <span class="token operator">|</span>  └─ idm_pageschema  <span class="token comment"># &lt;- 存放页面配置schema的文件夹</span>
   <span class="token operator">|</span>  └─ lib  <span class="token comment"># &lt;- 框架所需要用到的核心包存储文件夹</span>
   <span class="token operator">|</span>  └─ static  <span class="token comment"># &lt;- 框架编译后的资源目录</span>
   <span class="token operator">|</span>  └─ upload  <span class="token comment"># &lt;- 配置与开发过程中上传的资源目录</span>
   <span class="token operator">|</span>  └─ index.html  <span class="token comment"># &lt;- 核心框架的页面入口</span>
   <span class="token operator">|</span>  └─ favicon.ico  <span class="token comment"># &lt;- 图标ico</span>
   <span class="token operator">|</span>  └─ setting.js  <span class="token comment"># &lt;- 核心框架的自定义配置文件</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
