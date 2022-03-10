<template><h1 id="文档管理" tabindex="-1"><a class="header-anchor" href="#文档管理" aria-hidden="true">#</a> 文档管理</h1>
<p>文档管理即为组件的帮助文档创建与编辑，基于<a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noopener noreferrer">markdown<ExternalLinkIcon/></a>语法与<a href="http://ckang1229.gitee.io/vue-markdown-editor/zh/" target="_blank" rel="noopener noreferrer">v-md-editor<ExternalLinkIcon/></a>技术框架开发的一款专用于管理IDM的组件代码包的文档管理工具。</p>
<h2 id="快速访问" tabindex="-1"><a class="header-anchor" href="#快速访问" aria-hidden="true">#</a> 快速访问</h2>
<p>访问地址取决于你把IDM集成包放置的位置，例如我们列出了下面两种模式：</p>
<ul>
<li>
<p><RouterLink to="/zh/guide/integrated.html#%E4%BA%A7%E5%93%81%E6%A8%A1%E5%BC%8F">产品模式</RouterLink>访问地址：</p>
<p><code>http(s)://?domain/ProjectName/p1000/idm/index.html#/document</code></p>
</li>
<li>
<p><RouterLink to="/zh/guide/integrated.html#%E9%A1%B9%E7%9B%AE%E6%A8%A1%E5%BC%8F">项目模式</RouterLink>访问地址：</p>
<p><code>http(s)://?domain/ProjectName/idm/index.html#/document</code></p>
</li>
</ul>
<h2 id="布局介绍" tabindex="-1"><a class="header-anchor" href="#布局介绍" aria-hidden="true">#</a> 布局介绍</h2>
<p>本章节主要介绍了文档管理工具的结构和功能，帮助您快速使用文档管理工具管理组件文档。</p>
<div style="margin-top:10px"></div>
<img :src="$withBase('/images/document_tool_mark_01.png')" alt="布局介绍" />
<table>
<thead>
<tr>
<th>序号</th>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>代码包</td>
<td>用于切换显示当前操作指定代码包、指定版本的代码包的所有组件列表与文档，切换后组件列表会显示选定的代码包的组件列表</td>
</tr>
<tr>
<td>2</td>
<td>组件列表</td>
<td>组件列表第一行为代码包的文档，此文档为代码包的介绍，下面的则为此代码包版本的所有可用的组件</td>
</tr>
<tr>
<td>3</td>
<td>文档编辑区</td>
<td>此处为组件列表选定某个组件后显示的可编辑的文档，如果该文档已存在则会直接回显可再次进行编辑修改，如果没有该文档会根据模板进行初始化，模板请参考 <RouterLink to="/zh/guide/documentmanage.html#%E6%96%87%E6%A1%A3%E6%A8%A1%E6%9D%BF">文档模板</RouterLink></td>
</tr>
<tr>
<td>4</td>
<td>保存与下载</td>
<td>用于保存当前编辑的文档至对应的服务器目录中，也可下载当前文档到对应的组件开发环境中</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>因保存文档是运行在生产环境上，但是开发环境下也会默认提供文档，因此保存完后建议下载文档到对应版本的开发环境下，相关路径配置信息参考：<RouterLink to="/zh/setting/config.html#document">文档管理配置</RouterLink></p>
</div>
<h2 id="文档模板" tabindex="-1"><a class="header-anchor" href="#文档模板" aria-hidden="true">#</a> 文档模板</h2>
<p>文档模板会直接初始化为模板格式的对应的代码包或组件的文档，只需要往初始化后的文档填写实际的文档内容即可，无需再单独编写目录。</p>
<h3 id="代码包文档模板" tabindex="-1"><a class="header-anchor" href="#代码包文档模板" aria-hidden="true">#</a> 代码包文档模板</h3>
<p>模板路径为：</p>
<p><code>idm/static/doctemp/codepackageMDTemp.md</code></p>
<p>模板内容为：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 代码包说明</span>
<span class="token strike"><span class="token punctuation">~~</span><span class="token content">当前为自动生成的模板，保存前请删除此行</span><span class="token punctuation">~~</span></span>
本节将介绍包名为 <span class="token bold"><span class="token punctuation">**</span><span class="token content">@[className]</span><span class="token punctuation">**</span></span> 的代码包。
<span class="token title important"><span class="token punctuation">##</span> 特性</span>
<span class="token list punctuation">-</span> 特性说明1
<span class="token list punctuation">-</span> 特性说明2
<span class="token title important"><span class="token punctuation">##</span> 包名</span>
@[className]
<span class="token title important"><span class="token punctuation">##</span> 版本</span>
@[version]
<span class="token title important"><span class="token punctuation">##</span> 组件列表</span>
<span class="token comment">&lt;!-- moduleList：组件列表，生成模板格式：序号. 组件名称（组件ClassName）—组件ClassId --></span>
@[moduleList]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>@[a.b]</code>或<code>@[a[0].b]</code>为获取组件信息的表达式，可填写的表达式参考组件高级开发的 <RouterLink to="/zh/moduledevelop/config.html">组件注册</RouterLink></p>
</div>
<h3 id="组件文档模板" tabindex="-1"><a class="header-anchor" href="#组件文档模板" aria-hidden="true">#</a> 组件文档模板</h3>
<p>模板路径为：</p>
<p><code>idm/static/doctemp/moduleMDTemp.md</code></p>
<p>模板内容为：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> @[comName]</span>
<span class="token strike"><span class="token punctuation">~~</span><span class="token content">当前为自动生成的模板，保存前请删除此行</span><span class="token punctuation">~~</span></span>
这里用来描述组件的具体作用说明，描述内容建议简明扼要。
<span class="token title important"><span class="token punctuation">##</span> 组件类名（className）</span>
@[className]
<span class="token title important"><span class="token punctuation">##</span> 组件类ID（classId）</span>
@[classId]
<span class="token title important"><span class="token punctuation">##</span> 组件开发语言（comLangue）</span>
@[comLangue]
<span class="token title important"><span class="token punctuation">##</span> 组件类型（comType）</span>
@[comType]
<span class="token title important"><span class="token punctuation">##</span> 所在代码包版本</span>
@[versionObject.className]@@[versionObject.version]
<span class="token title important"><span class="token punctuation">##</span> 组件属性</span>
<span class="token comment">&lt;!-- compositeAttrToc：综合属性目录，生成模板格式：会根据层级生产对应的h3、h4、h5、h6 --></span>
@[compositeAttrToc]
<span class="token comment">&lt;!-- innerAttrDataToc：内部容器属性目录，生成模板格式：会根据层级生产对应的h3、h4、h5、h6 --></span>
@[innerAttrDataToc]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>@[a.b]</code>或<code>@[a[0].b]</code>为获取组件信息的表达式，可填写的表达式参考组件高级开发的 <RouterLink to="/zh/moduledevelop/config.html">组件注册</RouterLink> 和 <RouterLink to="/zh/moduledevelop/attributes.html">组件属性</RouterLink></p>
</div>
</template>
