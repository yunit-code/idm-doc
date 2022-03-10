<template><h1 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h1>
<p><code>IDM</code> 是一个对象，包含整个框架的全局<RouterLink to="/zh/setting/config.html">配置项</RouterLink>和框架提供组件使用的标准API。可以在应用启动之后通过<code>IDM.变量名or变量对象</code> 访问下列property：</p>
<h2 id="env-dev" tabindex="-1"><a class="header-anchor" href="#env-dev" aria-hidden="true">#</a> env_dev</h2>
<ul>
<li>
<p><strong>类型</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>env_dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果执行结果值为<code>true</code>标志着是基于核心框架的模式下运行的</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此属性可以用来判断组件是独立运行的还是在IDM框架下以组件方式加载运行的。</p>
</div>
</li>
</ul>
<h2 id="setting" tabindex="-1"><a class="header-anchor" href="#setting" aria-hidden="true">#</a> setting</h2>
<ul>
<li>
<p><strong>类型</strong>：<code>{ [key: string]: string | {} }</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//访问当前版本号</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>setting<span class="token punctuation">.</span>version
<span class="token comment">//访问当前配置的框架所属项目的根目录名称</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>setting<span class="token punctuation">.</span>webRoot<span class="token punctuation">.</span>default
<span class="token comment">//更多属性参考配置项</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用于获取框架的配置项信息，更多属性请参考 <RouterLink to="/zh/setting/config.html">配置项</RouterLink></p>
</li>
</ul>
</template>
