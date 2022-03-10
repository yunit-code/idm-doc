<template><h1 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此页面文档假设你已经阅读过了 <RouterLink to="/zh/moduledevelop/easystart.html">组件快速上手</RouterLink>。如果你对组件开发还不太了解，推荐你先阅读它。</p>
</div>
<h2 id="组件包" tabindex="-1"><a class="header-anchor" href="#组件包" aria-hidden="true">#</a> 组件包</h2>
<p>什么是组件包呢？组件包的含义在此框架中是指单个组件或多个组件的组合。也就是说可以一个组件一个组件包，也可以多个组件放一个组件包中，这样做的目的是为了渲染引擎能实现组件的按需渲染，所以建议同类型的组件建议放在同一个组件包中。</p>
<h3 id="组件包名" tabindex="-1"><a class="header-anchor" href="#组件包名" aria-hidden="true">#</a> 组件包名</h3>
<p>在<RouterLink to="/zh/moduledevelop/easystart.html#%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9D%E5%A7%8B%E5%8C%96">脚手架初始化</RouterLink>的时候第一步需要给它一个文件夹名字，该文件夹名建议作为组件包名，在上面的脚手架初始化中，组件包的名称是<code>packageName</code>。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>组件包名不可重复，因此如果在同一环境下建议先检查包名是否存在，以免出现不必要的错误。</li>
<li>组件包的名称请使用字母、数字或下划线进行命名，禁止采用特殊字符命名。</li>
</ul>
</div>
<h3 id="关键用处" tabindex="-1"><a class="header-anchor" href="#关键用处" aria-hidden="true">#</a> 关键用处</h3>
<p>对组件包的命名可能你想知道在哪使用它了，以下列出了所有使用到组件包名的地方：</p>
<ul>
<li>
<p><RouterLink to="/zh/moduledevelop/easystart.html#%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9D%E5%A7%8B%E5%8C%96">脚手架初始化</RouterLink>的时候文件夹名。</p>
</li>
<li>
<p>在public\static\config.json文件中的根对象的<code>className</code>，请参考<RouterLink to="/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91">开始开发</RouterLink>的第一步。</p>
</li>
<li>
<p>在<RouterLink to="/zh/moduledevelop/easystart.html#%E6%9E%84%E5%BB%BA%E5%8F%8A%E9%83%A8%E7%BD%B2">构建及部署</RouterLink>的第二步时候，配置项<RouterLink to="/zh/setting/config.html#moduledir">moduleDir</RouterLink>配置的目录下都是以组件包名称作为文件夹名称。</p>
</li>
</ul>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>在IDM框架中，组件的意义就是通过用户拖拽到页面上然后对组件的属性进行个性化定制，从而实现一个组件的复用。在上述组件包中也描述到了可以一个组件一个组件包，也可以多个组件一个组件包，所以在IDM中的组件和组件包中的组件都是对应关系，组件包中有几个组件，那就代表在IDM的组件市场也需要同时注册对应的组件包中的组件，这样才能正常使用他们，组件的开发请参考<RouterLink to="/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91">开始开发</RouterLink>的步骤。</p>
<h3 id="组件类名" tabindex="-1"><a class="header-anchor" href="#组件类名" aria-hidden="true">#</a> 组件类名</h3>
<p>在注册一个组件的时候，不管如何我们都需要给它一个名字。比如在<code>public\static\config.json</code>文件中注册的时候我们已经看到了：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Test001"</span><span class="token punctuation">,</span>
            ...
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在上面的例子中，组件的名称是“Test001”，也就是组件的类名。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>组件类名在同一个组件包内不可重复。</li>
<li>在定义组件时，定义组件类名的方式建议采用PascalCase (首字母大写命名)的方式。</li>
</ul>
</div>
<h2 id="配置文件介绍" tabindex="-1"><a class="header-anchor" href="#配置文件介绍" aria-hidden="true">#</a> 配置文件介绍</h2>
<p>在<RouterLink to="/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91">开始开发</RouterLink>的第一步时候我们需要在<code>public\static\config.json</code>文件中注册组件，此文件为当前组件包的所有组件集合，未在此文件中注册的文件可能无法为IDM框架正常使用，文件结构如下：</p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>version</td>
<td>组件包的版本号，建议n.n.n的格式，请务用特殊符号，每打包一次代码建议修改一下此版本号</td>
</tr>
<tr>
<td>lasttime</td>
<td>最后的修改时间</td>
</tr>
<tr>
<td>author</td>
<td>组件包的作者</td>
</tr>
<tr>
<td>className</td>
<td>组件包名，请参考<RouterLink to="/zh/moduledevelop/config.html#%E7%BB%84%E4%BB%B6%E5%8C%85%E5%90%8D">组件包名</RouterLink></td>
</tr>
<tr>
<td>module</td>
<td>组件注册的数组，用于存放所有组件注册的对象</td>
</tr>
<tr>
<td>classId</td>
<td>组件的类ID，在同一环境的IDM框架中保持唯一即可</td>
</tr>
<tr>
<td>comName</td>
<td>组件的中文名称</td>
</tr>
<tr>
<td>className(module)</td>
<td>组件的类名，请参考<RouterLink to="/zh/moduledevelop/config.html#%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%90%8D">组件类名</RouterLink></td>
</tr>
<tr>
<td>comType</td>
<td>组件的类型，common：通用型组件，dialog：弹窗类型组件，请根据组件用途谨慎选择</td>
</tr>
<tr>
<td>comLangue</td>
<td>组件的技术栈，可以为vue、react、angular、jquery以及其他</td>
</tr>
</tbody>
</table>
</template>
