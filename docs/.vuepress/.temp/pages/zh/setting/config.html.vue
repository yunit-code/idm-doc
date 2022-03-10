<template><h1 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h1>
<p>核心框架已经针对下面的所有属性提供了默认值，此配置文件与IDM的index.html页面在同级目录，该配置文件的配置信息主要用于覆盖IDM提供的默认值，如果以下默认值不适合自己可添加属性进行覆盖，配置文件名是<code>setting.js</code>，配置文件结构如下：</p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h2>
<ul>
<li>
<p>值类型：<code>string</code></p>
<p>框架的版本号</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请不要私自修改，如果配置文件内没有该属性则不需要添加，也不建议单独设置来覆盖框架的默认版本</p>
</div>
</li>
</ul>
<h2 id="webroot" tabindex="-1"><a class="header-anchor" href="#webroot" aria-hidden="true">#</a> webRoot</h2>
<p>框架的路径基本信息归类</p>
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
<h2 id="pageschema" tabindex="-1"><a class="header-anchor" href="#pageschema" aria-hidden="true">#</a> pageSchema</h2>
<p>页面结构的存储设置信息归类，主要针对页面设置数据的保存方式以及存储路径等。</p>
<h3 id="savetype" tabindex="-1"><a class="header-anchor" href="#savetype" aria-hidden="true">#</a> saveType</h3>
<ul>
<li>
<p>值类型：<code>string</code> | <code>'disk'</code> | <code>'database'</code></p>
</li>
<li>
<p>默认值：<code>database</code></p>
<p>页面配置的Schema结构数据保存方式，支持磁盘存储JSON格式 <code>disk</code> 和数据库存储 <code>database</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>请根据自己项目环境进行选择合理的存储方式，如果选择磁盘存储第一次始终是要请求一次接口的。</p>
</div>
</li>
</ul>
<h3 id="jsondir" tabindex="-1"><a class="header-anchor" href="#jsondir" aria-hidden="true">#</a> jsonDir</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/{projectNo}/idm/idm_pageschema/{pageid}/{version}.json</code></p>
<p>页面配置的Schema结构数据存储方式为 <code>disk</code> 的时候磁盘存储JSON页面配置文件的相对路径地址。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下格式会自动替换对应的实际值，请参考以下注释：</p>
<p><code>{projectNo}</code>：配置文件中配置的 <RouterLink to="/zh/setting/config.html#projectno">projectNo</RouterLink> 的值</p>
<p><code>{pageid}</code>：页面配置的页面ID</p>
<p><code>{version}</code>：页面保存的时候填写的版本号</p>
</div>
</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2>
<p>框架用到的api后端接口，如果需要框架正常使用或启用全部功能需要完成下面对应的后端接口开发，并返回指定格式的mockdata数据。mockdata数据格式参考：<RouterLink to="/zh/setting/mockdata.html">mockdata</RouterLink></p>
<p>以下属性如果为空则会使用 <RouterLink to="/zh/setting/config.html#mockurl">mockurl</RouterLink> 属性下面配置的对应mockdata数据地址。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下属性配置的接口地址会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
<h3 id="componentmarketurl" tabindex="-1"><a class="header-anchor" href="#componentmarketurl" aria-hidden="true">#</a> componentMarketUrl</h3>
<p>开发工具的左侧组件市场数据接口地址，带分组结构格式的</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchComponentMarketData</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<p>无</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#componentmarketdata">ComponentMarketData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="pageversionlisturl" tabindex="-1"><a class="header-anchor" href="#pageversionlisturl" aria-hidden="true">#</a> pageVersionListUrl</h3>
<p>开发工具的页面版本数据接口地址，主要用于工具的左侧顶部版本号列表</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchPageVersionList</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#pageversionlistdata">PageVersionListData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="pagesettingdataurl" tabindex="-1"><a class="header-anchor" href="#pagesettingdataurl" aria-hidden="true">#</a> pageSettingDataUrl</h3>
<p>用于获取当前打开的页面配置的数据结构的接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchPageSettingData</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>version</td>
<td>页面版本号（如果版本号为空则需要返回最新的版本号的数据，不管saveType为disk还是database都是如此）</td>
</tr>
<tr>
<td>savetype</td>
<td>当前配置的存储方式，参考 <RouterLink to="/zh/setting/config.html#savetype">saveType</RouterLink></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#pagesettingdatadata">pageSettingDataData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="custommodulesettingdataurl" tabindex="-1"><a class="header-anchor" href="#custommodulesettingdataurl" aria-hidden="true">#</a> customModuleSettingDataUrl</h3>
<p>用于获取当前打开的布局组件或业务组件配置的数据结构的接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchCustomModuleSettingData</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>schemaType</td>
<td>0：布局组件，1：业务组件</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#custommodulesettingdatadata">customModuleSettingDataData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="savepagesettingurl" tabindex="-1"><a class="header-anchor" href="#savepagesettingurl" aria-hidden="true">#</a> savePageSettingUrl</h3>
<p>用于保存页面配置全部信息的接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/savePageSchema</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>pageSettingData</td>
<td>页面结构数据json字符串，保存到数据库或json文件即可</td>
</tr>
<tr>
<td>version</td>
<td>当次保存的版本号</td>
</tr>
<tr>
<td>author</td>
<td>作者</td>
</tr>
<tr>
<td>remark</td>
<td>备注</td>
</tr>
<tr>
<td>isUse</td>
<td>是否将此版本设为使用版本，1代表使用，0代表不使用</td>
</tr>
<tr>
<td>traceList</td>
<td>历史记录操作数据,格式：[{actionType:动作类型、pageid：页面ID、pageVersion：页面版本、opDate：操作日期、opTime：操作时间、opContent：操作记录内容对象}]</td>
</tr>
<tr>
<td>projectNo</td>
<td>项目编号</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回结构：</p>
<p>只需要code返回值为 200 代表成功，否则为失败。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>根据自己环境选择保存方式，建议同时保存数据库和磁盘两种方式。</p>
</div>
</li>
</ul>
<h3 id="savecustommoduleurl" tabindex="-1"><a class="header-anchor" href="#savecustommoduleurl" aria-hidden="true">#</a> saveCustomModuleUrl</h3>
<p>用于保存自定义组件（业务组件）配置接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/saveCustomModule</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>title</td>
<td>填写的页面标题</td>
</tr>
<tr>
<td>previewImgJson</td>
<td>预览的图片JSON</td>
</tr>
<tr>
<td>moduleType</td>
<td>组件类型：0：布局组件，1：业务组件</td>
</tr>
<tr>
<td>moduleIconfont</td>
<td>组件图标class，使用iconfont，参考：<RouterLink to="/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87">字体图标</RouterLink></td>
</tr>
<tr>
<td>moduleContainerCount</td>
<td>布局组件的容器数量</td>
</tr>
<tr>
<td>pageSettingData</td>
<td>组件结构数据json字符串，保存到数据库即可</td>
</tr>
<tr>
<td>author</td>
<td>作者</td>
</tr>
<tr>
<td>remark</td>
<td>备注</td>
</tr>
<tr>
<td>traceList</td>
<td>历史记录操作数据,格式：[{actionType:动作类型、pageid：页面ID、pageVersion：页面版本、opDate：操作日期、opTime：操作时间、opContent：操作记录内容对象}]</td>
</tr>
<tr>
<td>projectNo</td>
<td>项目编号</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回结构：</p>
<p>只需要code返回值为 200 代表成功，否则为失败。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="uploadfileserverurl" tabindex="-1"><a class="header-anchor" href="#uploadfileserverurl" aria-hidden="true">#</a> uploadFileServerUrl</h3>
<p>用于上传图片、文件的接口地址（主要用于框架、公共上传方法）</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fileupload</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
</li>
<li>
<p>请求类型：<code>Content-Type: multipart/form-data</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>上传的类型值，这个由框架内决定性，例如图片上传属性控件的值为<code>dev_uploadimage_ctrl</code></td>
</tr>
<tr>
<td>file</td>
<td>上传的文件</td>
</tr>
<tr>
<td>...webRoot</td>
<td><RouterLink to="/zh/setting/config.html#webroot">webRoot</RouterLink> 属性下面的所有子属性都会传递到后端，可以利用此处配置合理的存储文件</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回结构：</p>
<p>需要返回以下格式数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"fileName"</span><span class="token operator">:</span><span class="token string">"文件名称.png"</span><span class="token punctuation">,</span>
      <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">"/upload/idmfiles/f22081da-9410-40bc-afa0-6b3106c45c1c.png"</span><span class="token punctuation">,</span>
      <span class="token property">"fileSize"</span><span class="token operator">:</span><span class="token string">"2188888"</span><span class="token punctuation">,</span>
      <span class="token property">"imageWidth"</span><span class="token operator">:</span><span class="token string">"图片的宽度，如果上传的文件为图片的情况下"</span><span class="token punctuation">,</span>
      <span class="token property">"imageHeight"</span><span class="token operator">:</span><span class="token string">"图片的高度，如果上传的文件为图片的情况下"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
</ul>
<h3 id="developtracelisturl" tabindex="-1"><a class="header-anchor" href="#developtracelisturl" aria-hidden="true">#</a> developTraceListUrl</h3>
<p>开发工具的获取操作痕迹的列表记录接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchDevelopTraceListInfo</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageid</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>startIndex</td>
<td>分页的开始索引</td>
</tr>
<tr>
<td>pageNumber</td>
<td>每页显示大小</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回结构：</p>
<p>需要返回以下格式数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"数据ID，没有实际意义，只有有删除功能才有意义"</span><span class="token punctuation">,</span>
      <span class="token property">"actionType"</span><span class="token operator">:</span> <span class="token string">"动作类型数字"</span><span class="token punctuation">,</span>
      <span class="token property">"pageId"</span><span class="token operator">:</span><span class="token string">"页面ID"</span><span class="token punctuation">,</span>
      <span class="token property">"pageVersion"</span><span class="token operator">:</span><span class="token string">"页面版本"</span><span class="token punctuation">,</span>
      <span class="token property">"opDate"</span><span class="token operator">:</span><span class="token string">"操作日期"</span><span class="token punctuation">,</span>
      <span class="token property">"opTime"</span><span class="token operator">:</span><span class="token string">"操作时间"</span><span class="token punctuation">,</span>
      <span class="token property">"opContent"</span><span class="token operator">:</span><span class="token string">"操作实际内容"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>动作类型数字：1-15分别代表以下含义：
<code>添加组件</code>、<code>移动组件</code>、<code>删除组件</code>、<code>修改组件属性</code>、
<code>切换组件版本</code>、<code>修改页面标题</code>、<code>保存页面</code>、<code>修改页面尺寸</code>、
<code>修改页面配置</code>、<code>复制组件</code>、<code>剪切组件</code>、<code>创建辅助线</code>、<code>删除辅助线</code>、<code>清除全部辅助线</code>、<code>移动辅助线</code></p>
</div>
</li>
</ul>
<h3 id="applicationinfourl" tabindex="-1"><a class="header-anchor" href="#applicationinfourl" aria-hidden="true">#</a> applicationInfoUrl</h3>
<p>获取应用信息的默认接口地址，页面属性会使用此配置，但页面属性能更改接口地址，所以此处只作为页面属性的默认接口地址，此处建议返回应用的一些基本信息，IDM框架会取出存放至全局变量中提供所有组件使用。</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchApplicationInfo</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>返回结构：</p>
<p>需要返回以下格式数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>应用信息的数据放置在data下即可</p>
</div>
</li>
</ul>
<h3 id="userinfourl" tabindex="-1"><a class="header-anchor" href="#userinfourl" aria-hidden="true">#</a> userInfoUrl</h3>
<p>获取当前登录用户信息的默认接口地址，页面属性会使用此配置，但页面属性能更改接口地址，所以此处只作为页面属性的默认接口地址，此处建议返回当前登录用户的基本信息，IDM框架会取出存放至全局变量中提供所有组件使用。</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchUserInfo</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>返回结构：</p>
<p>需要返回以下格式数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当前登录用户信息的数据放置在data下即可</p>
</div>
</li>
</ul>
<h3 id="saveusercustomizationurl" tabindex="-1"><a class="header-anchor" href="#saveusercustomizationurl" aria-hidden="true">#</a> saveUserCustomizationUrl</h3>
<p>页面个性化保存的接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/saveUserCustomization</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此功能暂未开通，敬请期待</p>
</div>
</li>
</ul>
<h3 id="usercustomizationurl" tabindex="-1"><a class="header-anchor" href="#usercustomizationurl" aria-hidden="true">#</a> userCustomizationUrl</h3>
<p>页面个性化获取的接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/fetchUserCustomization</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此功能暂未开通，敬请期待</p>
</div>
</li>
</ul>
<h3 id="saveformsmetadataurl" tabindex="-1"><a class="header-anchor" href="#saveformsmetadataurl" aria-hidden="true">#</a> saveFormsMetaDataUrl</h3>
<p>表单提交元数据的URl地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/saveFormsMetaData</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
</li>
<li>
<p>请求类型：<code>Content-Type: application/json;charset=UTF-8</code></p>
<p>此处建议使用json格式提交数据，方便后端获取解析，当然也可以在组件开发内使用 <code>multipart/form-data</code> 方式提交数据</p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageId</td>
<td>当前配置的页面id</td>
</tr>
<tr>
<td>urlData</td>
<td>页面url地址携带的所有参数，使用 <code>IDM.url.queryObject()</code> 获取得到的结果</td>
</tr>
<tr>
<td>moduleData</td>
<td>所有已经校验通过的组件返回结果,数组形式，里面的格式由组件内自行决定</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构不固定，可以自行解析处理返回的结果</p>
</div>
</li>
</ul>
<h3 id="allcodepackageurl" tabindex="-1"><a class="header-anchor" href="#allcodepackageurl" aria-hidden="true">#</a> allCodepackageUrl</h3>
<p>获取文档管理的左上角代码包切换数据接口地址</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/console/fetchAllCodePackageList</code></p>
</li>
<li>
<p>请求方式：<code>GET</code></p>
</li>
<li>
<p>请求参数：</p>
<p>无</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回的数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#allcodepackagelistdata">AllCodePackageListData</RouterLink></p>
</div>
</li>
</ul>
<h2 id="mockurl" tabindex="-1"><a class="header-anchor" href="#mockurl" aria-hidden="true">#</a> mockurl</h2>
<p>mockdata地址，只有对应的api地址为空的时候才会使用这里的静态数据。mockdata数据格式参考：<RouterLink to="/zh/setting/mockdata.html">mockdata</RouterLink></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下属性配置的mockdata会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
<h3 id="componentmarketurl-1" tabindex="-1"><a class="header-anchor" href="#componentmarketurl-1" aria-hidden="true">#</a> componentMarketUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>$/mockdata/ComponentMarketData.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#componentmarketdata">ComponentMarketData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="pageversionlisturl-1" tabindex="-1"><a class="header-anchor" href="#pageversionlisturl-1" aria-hidden="true">#</a> pageVersionListUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>$/mockdata/PageVersionListData.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#pageversionlistdata">PageVersionListData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="pagesettingdataurl-1" tabindex="-1"><a class="header-anchor" href="#pagesettingdataurl-1" aria-hidden="true">#</a> pageSettingDataUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>$/mockdata/pageSettingDataData.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#pagesettingdatadata">pageSettingDataData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="custommodulesettingdataurl-1" tabindex="-1"><a class="header-anchor" href="#custommodulesettingdataurl-1" aria-hidden="true">#</a> customModuleSettingDataUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>$/mockdata/customModuleSettingDataData.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#custommodulesettingdatadata">customModuleSettingDataData</RouterLink></p>
</div>
</li>
</ul>
<h3 id="allcodepackageurl-1" tabindex="-1"><a class="header-anchor" href="#allcodepackageurl-1" aria-hidden="true">#</a> allCodepackageUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>$/mockdata/AllCodePackageListData.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据结构请参考：<RouterLink to="/zh/setting/mockdata.html#allcodepackagelistdata">AllCodePackageListData</RouterLink></p>
</div>
</li>
</ul>
<h2 id="develop" tabindex="-1"><a class="header-anchor" href="#develop" aria-hidden="true">#</a> develop</h2>
<p>主要用来对<RouterLink to="/zh/guide/developtool.html">开发工具</RouterLink>的功能进行配置的属性归类</p>
<h3 id="schoolsurl" tabindex="-1"><a class="header-anchor" href="#schoolsurl" aria-hidden="true">#</a> schoolsUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>http://school.yunit.cn</code></p>
<p>开发工具<RouterLink to="/zh/guide/developtool.html#%E5%8A%9F%E8%83%BD%E8%8F%9C%E5%8D%95">功能菜单</RouterLink>中的<RouterLink to="/zh/guide/developtool.html#IDM%E5%AD%A6%E9%99%A2">IDM学院</RouterLink>地址，可以是相对路径，也可以是绝对路径</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>地址会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
</li>
</ul>
<h3 id="devcomponenturl" tabindex="-1"><a class="header-anchor" href="#devcomponenturl" aria-hidden="true">#</a> devComponentUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>http://idm.yunit.cn</code></p>
<p>开发工具<RouterLink to="/zh/guide/developtool.html#%E5%8A%9F%E8%83%BD%E8%8F%9C%E5%8D%95">功能菜单</RouterLink>中的<RouterLink to="/zh/guide/developtool.html#%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91">组件开发</RouterLink>地址，可以是相对路径，也可以是绝对路径</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>地址会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
</li>
</ul>
<h3 id="helpdocumenturl" tabindex="-1"><a class="header-anchor" href="#helpdocumenturl" aria-hidden="true">#</a> helpDocumentUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>http://www.yunit.cn/help</code></p>
<p>开发工具<RouterLink to="/zh/guide/developtool.html#%E5%8A%9F%E8%83%BD%E8%8F%9C%E5%8D%95">功能菜单</RouterLink>中的<RouterLink to="/zh/guide/developtool.html#%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3">帮助文档</RouterLink>地址，可以是相对路径，也可以是绝对路径</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>地址会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
</li>
</ul>
<h3 id="documentmanageurl" tabindex="-1"><a class="header-anchor" href="#documentmanageurl" aria-hidden="true">#</a> documentManageUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>./index.html#/document</code></p>
<p>开发工具<RouterLink to="/zh/guide/developtool.html#%E5%8A%9F%E8%83%BD%E8%8F%9C%E5%8D%95">功能菜单</RouterLink>中的<RouterLink to="/zh/guide/developtool.html#%E6%96%87%E6%A1%A3%E7%AE%A1%E7%90%86">文档管理</RouterLink>地址，可以是相对路径，也可以是绝对路径</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>地址会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></p>
</div>
</li>
</ul>
<h3 id="dragareasizelist" tabindex="-1"><a class="header-anchor" href="#dragareasizelist" aria-hidden="true">#</a> dragAreaSizeList</h3>
<ul>
<li>
<p>值类型：<code>array</code></p>
</li>
<li>
<p>默认值：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">3</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">1366</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> '<span class="token number">1366</span>*<span class="token number">768</span>'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">4</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> '<span class="token number">1920</span>*<span class="token number">1080</span>'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">5</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">667</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> 'iphone6/<span class="token number">7</span>/<span class="token number">8</span>'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">6</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">414</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">736</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> 'iphone6/<span class="token number">7</span>/<span class="token number">8</span> Plus'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">7</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> 'iPad(<span class="token number">768</span>*<span class="token number">1024</span>)'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> '<span class="token number">8</span>'<span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span>
        showText<span class="token operator">:</span> 'iPad(<span class="token number">1024</span>*<span class="token number">768</span>)'<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>拖拽区域的大小列表配置，主要用于顶部工具栏中间部分的下拉选项配置。以下是各个属性的解释：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    key<span class="token operator">:</span> '从<span class="token number">3</span>开始，保证不重复即可'<span class="token punctuation">,</span>
    width<span class="token operator">:</span> '拖拽区域的实际宽度（px）'<span class="token punctuation">,</span>
    height<span class="token operator">:</span> '拖拽区域的实际高度（px）'<span class="token punctuation">,</span>
    showText<span class="token operator">:</span> '要显示的文本'<span class="token punctuation">,</span>
    type<span class="token operator">:</span> '类型值<span class="token punctuation">,</span><span class="token number">-1</span><span class="token operator">:</span>线条<span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">:</span>系统内置的尺寸'
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="dragareasizedefaultkey" tabindex="-1"><a class="header-anchor" href="#dragareasizedefaultkey" aria-hidden="true">#</a> dragAreaSizeDefaultKey</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>1</code></p>
<p>拖拽区域大小默认值key，此默认key会被url中传入的 <RouterLink to="/zh/guide/developtool.html#dragsizekey">dragSizeKey</RouterLink> 参数覆盖。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>默认值<code>1</code>代表为工具内置的 <code>适应当前</code> 尺寸</p>
<p>可填写的默认值可参考 <RouterLink to="/zh/setting/config.html#dragareasizelist">dragAreaSizeList</RouterLink> 属性配置的数组，只能从这里面选择一个或者使用默认值为<code>1</code>的设置</p>
</div>
</li>
</ul>
<h3 id="componentmarketlistdefaulttype" tabindex="-1"><a class="header-anchor" href="#componentmarketlistdefaulttype" aria-hidden="true">#</a> componentMarketListDefaultType</h3>
<ul>
<li>
<p>值类型：<code>string</code> | <code>'grid'</code> | <code>'list'</code></p>
</li>
<li>
<p>默认值：<code>grid</code></p>
<p>开发工具中的组件市场的列表默认显示类型，目前有两种显示类型，<code>list</code> 代表为默认显示列表类型，<code>grid</code> 代表为默认显示网格类型，虽然此处设置了默认显示，但是在开发工具中可以进行切换显示</p>
</li>
</ul>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h2>
<p>主要用来对<RouterLink to="/zh/guide/documentmanage.html">文档管理</RouterLink>的功能进行配置的属性归类</p>
<h3 id="codepackagedocumentpath" tabindex="-1"><a class="header-anchor" href="#codepackagedocumentpath" aria-hidden="true">#</a> codepackageDocumentPath</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>static/doc/</code></p>
<p>代码包内的文档相对路径，此文档主要用于介绍代码包的，文档文件名称固定为<code>index.md</code>，比如代码包打包后存放的地址为：<code>idm/idm_modules/basic/1.0.0/</code>，而此代码包的文档<code>index.md</code>文件在 <code>idm/idm_modules/basic/1.0.0/static/doc/</code> 目录下面，则此处就应该填写 <code>static/doc/</code>。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>路径中的各个文件夹名含义：</p>
<p>idm：为框架的文件夹名，参考 <RouterLink to="/zh/setting/config.html#idm">idm</RouterLink> 属性配置</p>
<p>idm_modules：组件的目录，参考 <RouterLink to="/zh/setting/config.html#moduledir">moduleDir</RouterLink> 属性配置</p>
<p>basic：组件包的文件夹名</p>
<p>1.0.0：组件包的版本号文件夹</p>
<p>static：组件打包的静态资源目录，参考 <RouterLink to="/zh/moduledevelop/easystart.html">组件开发</RouterLink></p>
<p>doc：文档存放的目录，参考 <RouterLink to="/zh/moduledevelop/easystart.html">组件文档</RouterLink></p>
</div>
</li>
</ul>
<h3 id="moduledocumentpath" tabindex="-1"><a class="header-anchor" href="#moduledocumentpath" aria-hidden="true">#</a> moduleDocumentPath</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>static/doc/components/</code></p>
<p>代码包内的组件的文档相对路径，此处的文档主要用于介绍代码包内每个组件的，一个组件对应一个文档，文档文件名称固定为 <code>组件的类名.md</code>，比如代码包打包后存放的地址为：<code>idm/idm_modules/basic/1.0.0/</code>，而此代码包内的组件的文档文件在 <code>idm/idm_modules/basic/1.0.0/static/doc/components/</code> 目录下面，则此处就应该填写 <code>static/doc/components/</code>，例如按钮的文档名称为：<code>IButton.md</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>路径中的各个文件夹名含义参考 <RouterLink to="/zh/setting/config.html#codepackagedocumentpath">codepackageDocumentPath</RouterLink> 的提示</p>
</div>
</li>
</ul>
<h3 id="savemarkdownfileurl" tabindex="-1"><a class="header-anchor" href="#savemarkdownfileurl" aria-hidden="true">#</a> saveMarkDownFileUrl</h3>
<p>用于根据上述的属性配置保存md文件到上述配置的对应目录中</p>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/idm/api/saveDocumentMdFile</code></p>
</li>
<li>
<p>请求方式：<code>POST</code></p>
</li>
<li>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>mdPath</td>
<td>md对应要生成的文件地址</td>
</tr>
<tr>
<td>type</td>
<td>code代表代码包的路径，module代表组件的文档路径</td>
</tr>
<tr>
<td>moduleClassName</td>
<td>组件的类名</td>
</tr>
<tr>
<td>mdContent</td>
<td>md文档的内容</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回结构：</p>
<p>只需要code返回值为 200 代表成功，否则为失败。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h2 id="applications" tabindex="-1"><a class="header-anchor" href="#applications" aria-hidden="true">#</a> applications</h2>
<p>主要用来对整个框架的功能进行配置的属性归类</p>
<h3 id="defaultloginpageurl" tabindex="-1"><a class="header-anchor" href="#defaultloginpageurl" aria-hidden="true">#</a> defaultLoginPageUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>/ctrl/login</code></p>
<p>页面设置统一的默认登录页地址，此处为页面属性 <RouterLink to="/zh/guide/developtool.html#%E7%99%BB%E5%BD%95%E9%A1%B5%E5%9C%B0%E5%9D%80%E3%80%90loginpageurl%E3%80%91">登录页地址</RouterLink> 的默认地址，不会是页面设置的最终登录页地址。</p>
</li>
</ul>
<h3 id="themenameprefix" tabindex="-1"><a class="header-anchor" href="#themenameprefix" aria-hidden="true">#</a> themeNamePrefix</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>idm-theme-</code></p>
<p>主题class名称的前缀，所有的组件主题可以依据此属性来写不同主题的样式。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>详细请参考：<RouterLink to="/zh/moduledevelop/theme.html">主题皮肤</RouterLink></p>
</div>
</li>
</ul>
<h3 id="modulecontrolcentersettingurl" tabindex="-1"><a class="header-anchor" href="#modulecontrolcentersettingurl" aria-hidden="true">#</a> moduleControlCenterSettingUrl</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>~/index.html#/preview/idm_control_setting_panel_001</code></p>
<p>组件控制中心的默认设置url，此处为页面属性 <RouterLink to="/zh/guide/developtool.html#%E6%8E%A7%E5%88%B6%E5%9C%B0%E5%9D%80%E3%80%90modulecontrolcentersettingurl%E3%80%91">控制地址</RouterLink>的默认地址，不会是页面设置的最终控制中心页地址。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更详细的控制中心解释请参考：组件开发的 <RouterLink to="/zh/moduledevelop/controlcenter.html">控制中心</RouterLink></p>
</div>
</li>
</ul>
<h3 id="useprojectnosetting" tabindex="-1"><a class="header-anchor" href="#useprojectnosetting" aria-hidden="true">#</a> useProjectNoSetting</h3>
<ul>
<li>
<p>值类型：<code>boolean</code></p>
</li>
<li>
<p>默认值：true</p>
<p>应用程序是否启用项目编号模式的配置，也就是平台代码与组件代码分离的方式，默认为true</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>中途修改转换可能会造成程序读取异常，请在初始化的时候配置好</p>
</div>
</li>
</ul>
<h3 id="moduleattrfoldername" tabindex="-1"><a class="header-anchor" href="#moduleattrfoldername" aria-hidden="true">#</a> moduleAttrFolderName</h3>
<ul>
<li>
<p>值类型：<code>string</code></p>
</li>
<li>
<p>默认值：<code>attributes</code></p>
<p>组件包内的组件属性文件的存储所在的文件夹名称，具体可参考组件的 <RouterLink to="/zh/moduledevelop/attributes.html">高级开发-组件属性</RouterLink></p>
</li>
</ul>
<h3 id="fontfamilylist" tabindex="-1"><a class="header-anchor" href="#fontfamilylist" aria-hidden="true">#</a> fontFamilyList</h3>
<ul>
<li>
<p>值类型：<code>array</code></p>
</li>
<li>
<p>默认值：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"arial, helvetica, 'microsoft yahei'"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Arial, Helvetica, 微软雅黑"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"arial, helvetica, simhei"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Arial, Helvetica, 黑体"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"'comic sans ms', 'microsoft yahei'"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Comic Sans MS, 微软雅黑"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"'comic sans ms', simhei"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Comic Sans MS, 黑体"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"impact, 'microsoft yahei'"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Impact, 微软雅黑"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"impact, simhei"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Impact, 黑体"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"'lucida sans unicode', 'microsoft yahei'"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Lucida Sans Unicode, 微软雅黑"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span><span class="token string">"'lucida sans unicode', simhei"</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span><span class="token string">"Lucida Sans Unicode, 黑体"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>组件属性控件 <RouterLink to="/zh/moduledevelop/attributes.html#font">font</RouterLink> 控件中的字体列表，<code>value</code> 代表实际应用的值，<code>label</code> 代表下拉选项显示的值</p>
</li>
</ul>
</template>
