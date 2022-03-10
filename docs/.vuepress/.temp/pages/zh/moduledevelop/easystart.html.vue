<template><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<p>因为组件开发无限制您使用哪种技术栈，所以在开始之前，请根据你即将要开发的组件使用哪种技术栈来进行针对性的了解以下文档</p>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>
<p>首先得有 node，并确保 node 版本是 14.17 或以上。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
v14.17.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3>
<p>首先得有 node，并确保 node 版本是 14.17 或以上。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
v14.17.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> Jquery</h3>
<p>无需准备任何环境</p>
<h2 id="脚手架初始化" tabindex="-1"><a class="header-anchor" href="#脚手架初始化" aria-hidden="true">#</a> 脚手架初始化</h2>
<ul>
<li><strong>步骤1</strong>: 创建并进入一个新目录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> packageName
<span class="token builtin class-name">cd</span> packageName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>步骤2</strong>: 初始化脚手架</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="Vue" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/yunit-source/idm-module-vue.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤3</strong>: 安装脚手架依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="Vue" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤4</strong>: 在本地启动服务器来开发你的组件</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="Vue" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤5</strong>: 在浏览器中输入<code>http://localhost:8080/index.html#/?className=IText</code>地址访问您的组件<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>参数className为组件的类名</p>
</div>
</li>
</ul>
<h2 id="开始开发" tabindex="-1"><a class="header-anchor" href="#开始开发" aria-hidden="true">#</a> 开始开发</h2>
<p>在开始开发之前建议先了解下 <RouterLink to="/zh/moduledevelop/scaffoldtoc.html">脚手架目录结构</RouterLink></p>
<h3 id="vue-1" tabindex="-1"><a class="header-anchor" href="#vue-1" aria-hidden="true">#</a> Vue</h3>
<ul>
<li><strong>步骤1</strong>: 在<code>public\static\config.json</code>文件中注册一个新的组件类名为<code>Test001</code>的组件。</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"lasttime"</span><span class="token operator">:</span> <span class="token string">"2022-3-7 18:10:21"</span><span class="token punctuation">,</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"申龙"</span><span class="token punctuation">,</span>
    <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"packageName"</span><span class="token punctuation">,</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.packagename.test001"</span><span class="token punctuation">,</span>
            <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"示例001"</span><span class="token punctuation">,</span>
            <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Test001"</span><span class="token punctuation">,</span>
            <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"comLangue"</span><span class="token operator">:</span> <span class="token string">"vue"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li><strong>步骤2</strong>: 在<code>public\static\attributes\</code>目录下新建一个与组件类名同名的<code>Test001.json</code>属性注册文件。</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.packagename.test001"</span><span class="token punctuation">,</span>
    <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"示例001"</span><span class="token punctuation">,</span>
    <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Test001"</span><span class="token punctuation">,</span>
    <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
    <span class="token property">"comLangue"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
            <span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"inline"</span><span class="token punctuation">,</span>
            <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"唯一标识"</span><span class="token punctuation">,</span>
            <span class="token property">"bindKey"</span><span class="token operator">:</span> <span class="token string">"ctrlId"</span><span class="token punctuation">,</span>
            <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"@[packageid]"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"textarea"</span><span class="token punctuation">,</span>
            <span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"inline"</span><span class="token punctuation">,</span>
            <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"文本内容"</span><span class="token punctuation">,</span>
            <span class="token property">"bindKey"</span><span class="token operator">:</span> <span class="token string">"fontContent"</span><span class="token punctuation">,</span>
            <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"文本内容"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul>
<li><strong>步骤3</strong>: 在<code>src\components\</code>目录下新建一个与组件类名同名的<code>Test001.vue</code>组件代码文件。</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">idm-ctrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idm_module<span class="token punctuation">"</span></span>
   <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moduleObject.id<span class="token punctuation">"</span></span> 
   <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moduleObject.id<span class="token punctuation">"</span></span> 
   <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>propData.htmlTitle?propData.fontContent:<span class="token punctuation">'</span><span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
      组件内部容器
      增加class="drag_container" 必选
      idm-ctrl-id：组件的id，这个必须不能为空
      idm-container-index  组件的内部容器索引，不重复唯一且不变，必选
    --></span>
    {{propData.fontContent}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Test001'</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">moduleObject</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propData</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>propData<span class="token punctuation">.</span>compositeAttr<span class="token operator">||</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>moduleObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>moduleObject
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 提供父级组件调用的刷新prop数据组件
     */</span>
    <span class="token function">propDataWatchHandle</span><span class="token punctuation">(</span><span class="token parameter">propData</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>propData <span class="token operator">=</span> propData<span class="token punctuation">.</span>compositeAttr<span class="token operator">||</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><ul>
<li><strong>步骤4</strong>: 在浏览器中输入<code>http://localhost:8080/index.html#/?className=Test001</code>地址访问您的组件</li>
</ul>
<h3 id="react-1" tabindex="-1"><a class="header-anchor" href="#react-1" aria-hidden="true">#</a> React</h3>
<p>TODO</p>
<h3 id="jquery-1" tabindex="-1"><a class="header-anchor" href="#jquery-1" aria-hidden="true">#</a> Jquery</h3>
<p>TODO</p>
<h2 id="构建及部署" tabindex="-1"><a class="header-anchor" href="#构建及部署" aria-hidden="true">#</a> 构建及部署</h2>
<h3 id="vue-2" tabindex="-1"><a class="header-anchor" href="#vue-2" aria-hidden="true">#</a> Vue</h3>
<ul>
<li><strong>步骤1</strong>: 执行build打包命令</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><strong>步骤2</strong>: 把dist下面的全部文件拷贝到配置项<RouterLink to="/zh/setting/config.html#moduledir">moduleDir</RouterLink>配置的目录下，一般情况直接到目录<code>idm_modules/packageName(包名)/1.0.0(版本号)/</code>下直接粘贴即可。然后在组件市场中注册（如果已经把配置项<RouterLink to="/zh/setting/config.html#componentmarketurl">componentMarketUrl</RouterLink>改成了接口形式）即可，如果接口为空则在mockurl配置项<RouterLink to="/zh/setting/config.html#componentmarketurl-1">componentMarketUrl</RouterLink>的数据注册即可。<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>建议搭配IDM页面控制台就能实现组件包自动化更新维护，只要上传rar压缩包即可实现整个过程的更新，目前已内部使用，敬请期待公开产品！！</p>
</div>
</li>
</ul>
<h3 id="react-2" tabindex="-1"><a class="header-anchor" href="#react-2" aria-hidden="true">#</a> React</h3>
<p>TODO</p>
<h3 id="jquery-2" tabindex="-1"><a class="header-anchor" href="#jquery-2" aria-hidden="true">#</a> Jquery</h3>
<p>TODO</p>
</template>
