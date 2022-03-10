<template><h1 id="组件属性" tabindex="-1"><a class="header-anchor" href="#组件属性" aria-hidden="true">#</a> 组件属性</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此页面文档假设你已经阅读过了 <RouterLink to="/zh/moduledevelop/easystart.html">组件快速上手</RouterLink>。如果你对组件开发还不太了解，推荐你先阅读它。</p>
</div>
<h2 id="属性文件" tabindex="-1"><a class="header-anchor" href="#属性文件" aria-hidden="true">#</a> 属性文件</h2>
<p>在我们的IDM开发工具-<RouterLink to="/zh/guide/developtool.html#%E5%B8%83%E5%B1%80%E4%BB%8B%E7%BB%8D">布局介绍</RouterLink>中提到了属性区用于显示组件的属性，这里显示的属性则是来源于我们在<code>public\static\attributes\</code>目录下新建一个与组件类名同名的属性注册文件，以<RouterLink to="/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91">组件快速上手</RouterLink>中的<code>Test001.json</code>为例，结构如下：</p>
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
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"innerComName"</span><span class="token operator">:</span> <span class="token string">"格子"</span><span class="token punctuation">,</span>
    <span class="token property">"innerAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
            <span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"inline"</span><span class="token punctuation">,</span>
            <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"内部容器属性"</span><span class="token punctuation">,</span>
            <span class="token property">"bindKey"</span><span class="token operator">:</span> <span class="token string">"innerAttrKey"</span><span class="token punctuation">,</span>
            <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul>
<li>
<p><strong>基本结构介绍</strong></p>
<table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>classId</td>
<td>组件的类ID，在同一环境的IDM框架中保持唯一即可</td>
</tr>
<tr>
<td>comName</td>
<td>组件的中文名称</td>
</tr>
<tr>
<td>className</td>
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
<tr>
<td>compositeAttr</td>
<td>组件的综合属性数组</td>
</tr>
<tr>
<td>innerComName</td>
<td>组件内部容器的容器名称，比如如果要在开发工具中能单独设置这个容器的属性，则此属性就是可以定义该容器的名称</td>
</tr>
<tr>
<td>innerAttr</td>
<td>组件内部容器的综合属性数组，比如如果要在开发工具中能单独设置这个容器的属性，则此属性就是可以定义该容器有哪些属性值能设置</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>compositeAttr</code> 和 <code>innerAttr</code> 数组内的单个属性key介绍请继续往下阅读 <RouterLink to="/zh/moduledevelop/attributes.html#%E5%B1%9E%E6%80%A7%E4%BB%8B%E7%BB%8D">属性介绍</RouterLink></p>
</div>
</li>
</ul>
<h2 id="属性介绍" tabindex="-1"><a class="header-anchor" href="#属性介绍" aria-hidden="true">#</a> 属性介绍</h2>
<h3 id="key大全" tabindex="-1"><a class="header-anchor" href="#key大全" aria-hidden="true">#</a> Key大全</h3>
<p>此处描述组件的单个属性支持设定哪些属性Key，以下列出了支持的属性Key：</p>
<ul>
<li>
<p><strong>type</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>属性使用的控件类型，支持的控件请参考<RouterLink to="/zh/moduledevelop/attributes.html#%E5%B1%9E%E6%80%A7%E6%8E%A7%E4%BB%B6">属性控件</RouterLink></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>值为<code>group</code>、<code>inlineGroup</code>不是控件，是分别代表折叠面板分组、行内分组，他们都有共同的一个<code>children</code>属性，用于存放子级属性控件</p>
</div>
</li>
<li>
<p><strong>layoutType</strong></p>
<ul>
<li>值类型：string | 'inline' | 'block'</li>
</ul>
<p>控件布局的模式，inline：支持一行显示，也就是标题和控件在一行。block：支持换行显示，也就是标题和控件在两行显示</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>控件类型为<code>box</code>、<code>border</code>的只能是<code>block</code>，为<code>table</code>、<code>font</code>的此属性无效</p>
</div>
</li>
<li>
<p><strong>text</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>显示的属性标题名称，布局模式为<code>inline</code>的字数不建议超过4个字，如果超过4个字建议使用<code>block</code>的布局模式</p>
</li>
<li>
<p><strong>tabText</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置表格类型每行数据的标题，支持<code>[index]</code>的索引变量（从1开始），例如如果设置了<code>标题[index]</code>，在设置的时候设置了两条数据则会显示<code>标题1</code>、<code>标题2</code></p>
</li>
<li>
<p><strong>bindKey</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>此属性控件对应的key标识，在开发组件的时候可以根据此key值来获取在开发工具中配置的属性实际值。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>使用方法可以参考<RouterLink to="/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91">开始开发</RouterLink>的步骤3中的<code>propData.fontContent</code>,<code>fontContent</code>就代表的是此处设置的key</p>
</div>
</li>
<li>
<p><strong>disabled</strong></p>
<ul>
<li>值类型：boolean</li>
</ul>
<p>设置此属性控件是否禁用，默认为false不禁用，true代表禁用。</p>
</li>
<li>
<p><strong>default</strong></p>
<ul>
<li>值类型：Any</li>
</ul>
<p>设置此属性控件的默认值，请根据控件类型来设置对应的默认值。</p>
</li>
<li>
<p><strong>placeholder</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置此属性控件的提示内容。</p>
</li>
<li>
<p><strong>display</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置此属性控件是否显示，这里可以填写表达式，具体请参考<RouterLink to="/zh/coreapi/api.html#eval">express.eval</RouterLink>，返回true则显示，返回false不显示</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>表达式中可以直接使用当前组件所有的属性值，例如：<code>@[fontContent!='']</code>，fontContent为其他属性设置的bindKey</p>
</div>
</li>
<li>
<p><strong>width</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置此属性控件的宽度，单位可以为px或%，只对部分控件有效，例如：<code>richtext</code></p>
</li>
<li>
<p><strong>styleType</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置此属性控件的风格，只对部分控件有效。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持的类型：</p>
<p>radio单选支持两种【按钮方式：button（默认），单选方式：radio】</p>
</div>
</li>
<li>
<p><strong>desc</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置此属性控件的帮助提示，鼠标悬浮至问号上的悬浮提示，如果提示内容过多建议在<RouterLink to="/zh/guide/documentmanage.html">文档管理</RouterLink>中维护，然后维护<code>helpAnchorText</code> 要跳转的锚点文本或为空使用默认模板提供的值，在开发工具中点击问号会自行跳转。</p>
</li>
<li>
<p><strong>helpAnchorText</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置点击此属性控件的问号图标跳转的锚点文本，如果文档管理中维护的组件文档使用默认模板则此处可以留空。</p>
</li>
<li>
<p><strong>maxLength</strong></p>
<ul>
<li>值类型：number</li>
</ul>
<p>设置控件的可输入文字的最大长度，一般只对输入控件有效</p>
</li>
<li>
<p><strong>max</strong></p>
<ul>
<li>值类型：number</li>
</ul>
<p>设置控件的最大数值，一般只对数字控件有效</p>
</li>
<li>
<p><strong>min</strong></p>
<ul>
<li>值类型：number</li>
</ul>
<p>设置控件的最小数值，一般只对数字控件有效</p>
</li>
<li>
<p><strong>multiple</strong></p>
<ul>
<li>值类型：boolean</li>
</ul>
<p>设置提供了多选的是否支持多选模式，目前只有<code>actionSelect</code>、<code>iconSelect</code>、<code>pageModuleSelect</code>、<code>select``treeSelect</code>才有效。</p>
</li>
<li>
<p><strong>dataSourceUrl</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置控件所需要的数据源地址，目前只有<code>checkbox</code>、<code>numberunit</code>、<code>radio</code>、<code>select</code>、<code>treeselect</code> 类型的控件才有效。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数据源返回的格式要求请参考：<RouterLink to="/zh/moduledevelop/attributes.html#%E5%B1%9E%E6%80%A7%E6%8E%A7%E4%BB%B6">属性控件</RouterLink></p>
</div>
</li>
<li>
<p><strong>dictionary</strong></p>
<ul>
<li>值类型：Array</li>
</ul>
<p>设置控件所需要的数据字典，目前只有<code>checkbox</code>、<code>numberunit</code>、<code>radio</code>、<code>select</code>、<code>treeselect</code> 类型的控件才有效。</p>
</li>
<li>
<p><strong>buttonText</strong></p>
<ul>
<li>值类型：string</li>
</ul>
<p>设置控件中的按钮显示的文本，目前只有<code>richtext</code>类型的控件才有效。</p>
</li>
<li>
<p><strong>children</strong></p>
<ul>
<li>值类型：Array</li>
</ul>
<p>用于存放子级属性控件，主要用于分组、分层级显示，只有<code>group</code>、<code>inlineGroup</code>才有效。</p>
</li>
</ul>
<h3 id="层级结构" tabindex="-1"><a class="header-anchor" href="#层级结构" aria-hidden="true">#</a> 层级结构</h3>
<p>IDM开发工具组件的属性控件展示是支持树结构展示形式的，但是展示的层级以及控件是有限定的，格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-分组
-----二级分组
---------行内分组
-------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级table
---------三级分组
---------------四级行内分组
--------------------具体的属性控件
---------------具体的属性控件（支持全部）
---------三级行内分组
--------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级行内分组
---------具体的属性控件
-----具体的属性控件（支持全部）
-表格
-----二级分组
---------三级行内分组
-------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级行内分组
---------具体的属性控件
-----具体的属性控件（支持全部）
-行内分组
-----具体的属性控件
-具体的属性控件（支持全部）
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>行内分组下都只支持 input、inputNumber、select、treeSelect、switch、datePicker、colorPicker、uploadImage、richText</p>
</div>
<h2 id="属性控件" tabindex="-1"><a class="header-anchor" href="#属性控件" aria-hidden="true">#</a> 属性控件</h2>
<p>目前开发工具右侧属性中支持的控件类型有以下几种：</p>
<h3 id="actionselect" tabindex="-1"><a class="header-anchor" href="#actionselect" aria-hidden="true">#</a> actionSelect</h3>
<ul>
<li>
<p>中文名：动作选择</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_themeCustomFunction.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"IdmBuiltin_ShowModule"</span><span class="token punctuation">,</span>
        <span class="token property">"param"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"targetModule"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"moduleId"</span><span class="token operator">:</span> <span class="token string">"ceslayout_001"</span><span class="token punctuation">,</span>
                    <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"页面"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"idmBuiltin"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回值示例并不代表一定是此结构，示例中的只是一种情况，实际返回结果是根据选择的动作决定的，需要更加详细请参考：<RouterLink to="/zh/moduledevelop/pageextend.html">页面扩展开发</RouterLink></p>
</div>
</li>
</ul>
<h3 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> border</h3>
<ul>
<li>
<p>中文名：边框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_border.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"border"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"top"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span>
            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"widthUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
            <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"请参考下述colors对象结构"</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"right"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span>
            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"widthUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
            <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"请参考下述colors对象结构"</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"bottom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span>
            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"widthUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
            <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"请参考下述colors对象结构"</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"left"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span>
            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"widthUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
            <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"请参考下述colors对象结构"</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"leftTop"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"radiusUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"rightTop"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"radiusUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"leftBottom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"radiusUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"rightBottom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">"radiusUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p><strong>colors对象结构：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"hsl"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.9056090841655702</span><span class="token punctuation">,</span>
        <span class="token property">"l"</span><span class="token operator">:</span> <span class="token number">0.5052490000000001</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"hex"</span><span class="token operator">:</span> <span class="token string">"#F30F0F"</span><span class="token punctuation">,</span>
    <span class="token property">"hex8"</span><span class="token operator">:</span> <span class="token string">"#F30F0FFF"</span><span class="token punctuation">,</span>
    <span class="token property">"rgba"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"r"</span><span class="token operator">:</span> <span class="token number">243</span><span class="token punctuation">,</span>
        <span class="token property">"g"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">"b"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"hsv"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.94</span><span class="token punctuation">,</span>
        <span class="token property">"v"</span><span class="token operator">:</span> <span class="token number">0.9533</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"oldHue"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"hsva"</span><span class="token punctuation">,</span>
    <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li>
</ul>
<h3 id="box" tabindex="-1"><a class="header-anchor" href="#box" aria-hidden="true">#</a> box</h3>
<ul>
<li>
<p>中文名：盒子边距</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_box.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"marginTopVal"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"marginRightVal"</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span>
    <span class="token property">"marginBottomVal"</span><span class="token operator">:</span> <span class="token string">"5px"</span><span class="token punctuation">,</span>
    <span class="token property">"marginLeftVal"</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span>
    <span class="token property">"paddingTopVal"</span><span class="token operator">:</span> <span class="token string">"9px"</span><span class="token punctuation">,</span>
    <span class="token property">"paddingRightVal"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"paddingBottomVal"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"paddingLeftVal"</span><span class="token operator">:</span> <span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
</ul>
<h3 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox" aria-hidden="true">#</a> checkbox</h3>
<ul>
<li>
<p>中文名：复选框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_checkboxtest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">"image"</span><span class="token punctuation">,</span>
    <span class="token string">"none"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p><code>dictionary</code>数据字典格式示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
      <span class="token property">"label"</span><span class="token operator">:</span><span class="token string">"显示的文本"</span><span class="token punctuation">,</span>
      <span class="token property">"value"</span><span class="token operator">:</span><span class="token string">"字典的值"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p><code>dataSourceUrl</code>接口返回示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"参考dictionary数据字典"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="colorpicker" tabindex="-1"><a class="header-anchor" href="#colorpicker" aria-hidden="true">#</a> colorPicker</h3>
<ul>
<li>
<p>中文名：颜色选择</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_watermarkColor.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"hsl"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.895734597156398</span><span class="token punctuation">,</span>
        <span class="token property">"l"</span><span class="token operator">:</span> <span class="token number">0.45011575</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"hex"</span><span class="token operator">:</span> <span class="token string">"#DA0C0C"</span><span class="token punctuation">,</span>
    <span class="token property">"hex8"</span><span class="token operator">:</span> <span class="token string">"#DA0C0CFF"</span><span class="token punctuation">,</span>
    <span class="token property">"rgba"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"r"</span><span class="token operator">:</span> <span class="token number">218</span><span class="token punctuation">,</span>
        <span class="token property">"g"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token property">"b"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"hsv"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.945</span><span class="token punctuation">,</span>
        <span class="token property">"v"</span><span class="token operator">:</span> <span class="token number">0.8533</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"oldHue"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"hsva"</span><span class="token punctuation">,</span>
    <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果未修改属性值的时候设置了默认值为字符串，则返回的值也可能是字符串，比如设置了&quot;#DA0C0CFF&quot;，则也是返回此格式，所以开发的时候请注意判断数据类型</p>
</div>
</li>
</ul>
<h3 id="datepicker" tabindex="-1"><a class="header-anchor" href="#datepicker" aria-hidden="true">#</a> datePicker</h3>
<ul>
<li>
<p>中文名：日期选择</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_datepickertest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"2022-03-09T14:45:18.382Z"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h3>
<ul>
<li>
<p>中文名：字体</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_font.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"fontFamily"</span><span class="token operator">:</span> <span class="token string">"impact, 'microsoft yahei'"</span><span class="token punctuation">,</span>
    <span class="token property">"fontColors"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"hsl"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.8957345971563979</span><span class="token punctuation">,</span>
            <span class="token property">"l"</span><span class="token operator">:</span> <span class="token number">0.49585</span><span class="token punctuation">,</span>
            <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"hex"</span><span class="token operator">:</span> <span class="token string">"#F00D0D"</span><span class="token punctuation">,</span>
        <span class="token property">"hex8"</span><span class="token operator">:</span> <span class="token string">"#F00D0DFF"</span><span class="token punctuation">,</span>
        <span class="token property">"rgba"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"r"</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span>
            <span class="token property">"g"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">"b"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"hsv"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"h"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"s"</span><span class="token operator">:</span> <span class="token number">0.945</span><span class="token punctuation">,</span>
            <span class="token property">"v"</span><span class="token operator">:</span> <span class="token number">0.94</span><span class="token punctuation">,</span>
            <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"oldHue"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"hsva"</span><span class="token punctuation">,</span>
        <span class="token property">"a"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"fontWeight"</span><span class="token operator">:</span> <span class="token string">"600 Semi Bold"</span><span class="token punctuation">,</span>
    <span class="token property">"fontStyle"</span><span class="token operator">:</span> <span class="token string">"normal"</span><span class="token punctuation">,</span>
    <span class="token property">"fontSize"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">"fontSizeUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
    <span class="token property">"fontLineHeight"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">"fontLineHeightUnit"</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span>
    <span class="token property">"fontTextAlign"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    <span class="token property">"fontDecoration"</span><span class="token operator">:</span> <span class="token string">"underline"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li>
</ul>
<h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h3>
<ul>
<li>
<p>中文名：网格布局</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_gridtest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"12:12"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="iconselect" tabindex="-1"><a class="header-anchor" href="#iconselect" aria-hidden="true">#</a> iconSelect</h3>
<ul>
<li>
<p>中文名：图标选择</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_iconselecttest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">"idm-icon-iframe2"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此处可选择的图标选项使用的IDM的<RouterLink to="/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87">字体图标</RouterLink></p>
</div>
</li>
</ul>
<h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3>
<ul>
<li>
<p>中文名：文本框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_watermarkFont.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"梦创@申龙"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3>
<ul>
<li>
<p>中文名：弹性布局组合</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_layout.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
    <span class="token property">"direction"</span><span class="token operator">:</span> <span class="token string">"column"</span><span class="token punctuation">,</span>
    <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    <span class="token property">"justify"</span><span class="token operator">:</span> <span class="token string">"flex-end"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<h3 id="inputnumber" tabindex="-1"><a class="header-anchor" href="#inputnumber" aria-hidden="true">#</a> inputNumber</h3>
<ul>
<li>
<p>中文名：数字框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_watermarkSize.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="inputnumberunit" tabindex="-1"><a class="header-anchor" href="#inputnumberunit" aria-hidden="true">#</a> inputNumberUnit</h3>
<ul>
<li>
<p>中文名：数字单位组合</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_positionX.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"inputVal"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">"selectVal"</span><span class="token operator">:</span> <span class="token string">"px"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p><code>dictionary</code>数据字典格式示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
      <span class="token property">"label"</span><span class="token operator">:</span><span class="token string">"显示的文本"</span><span class="token punctuation">,</span>
      <span class="token property">"value"</span><span class="token operator">:</span><span class="token string">"字典的值"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p><code>dataSourceUrl</code>接口返回示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"参考dictionary数据字典"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="pagemoduleselect" tabindex="-1"><a class="header-anchor" href="#pagemoduleselect" aria-hidden="true">#</a> pageModuleSelect</h3>
<ul>
<li>
<p>中文名：页面组件选择</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_pagemoduleselecttest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"moduleId"</span><span class="token operator">:</span> <span class="token string">"component_rndS0VgbZH7niLuU"</span><span class="token punctuation">,</span>
        <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"选项卡"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<h3 id="radio" tabindex="-1"><a class="header-anchor" href="#radio" aria-hidden="true">#</a> radio</h3>
<ul>
<li>
<p>中文名：单选框</p>
</li>
<li>
<p>效果图：</p>
<ul>
<li>button类型</li>
</ul>
<img :src="$withBase('/images/attr/page_attr_watermarkType.jpg')" alt="预览效果" />
<ul>
<li>radio类型</li>
</ul>
<img :src="$withBase('/images/attr/page_attr_themeFetchType.jpg')" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"font"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="richtext" tabindex="-1"><a class="header-anchor" href="#richtext" aria-hidden="true">#</a> richText</h3>
<ul>
<li>
<p>中文名：富文本</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_richtexttest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>测试例子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 49.6436%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>列1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 49.6436%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>列2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 49.6436%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 49.6436%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回值为HTML格式的字符串形式。</p>
</div>
</li>
</ul>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3>
<ul>
<li>
<p>中文名：下拉框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_interfaceContentType.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"FormData"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>dictionary</code>数据字典格式示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
      <span class="token property">"label"</span><span class="token operator">:</span><span class="token string">"显示的文本"</span><span class="token punctuation">,</span>
      <span class="token property">"value"</span><span class="token operator">:</span><span class="token string">"字典的值"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p><code>dataSourceUrl</code>接口返回示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"参考dictionary数据字典"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="slider" tabindex="-1"><a class="header-anchor" href="#slider" aria-hidden="true">#</a> slider</h3>
<ul>
<li>
<p>中文名：数字滑块</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_watermarkOpacity.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">90</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3>
<ul>
<li>
<p>中文名：开关</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_showMobileStatusBar.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="textarea" tabindex="-1"><a class="header-anchor" href="#textarea" aria-hidden="true">#</a> textarea</h3>
<ul>
<li>
<p>中文名：多行文本框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_themeDataFiled.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"字符串形式"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="treeselect" tabindex="-1"><a class="header-anchor" href="#treeselect" aria-hidden="true">#</a> treeSelect</h3>
<ul>
<li>
<p>中文名：树结构下拉选择框</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_treeselecttest.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">"0-0-2"</span><span class="token punctuation">,</span>
    <span class="token string">"0-0"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p><code>dictionary</code>数据字典格式示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Node1"</span><span class="token punctuation">,</span>
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"0-0"</span><span class="token punctuation">,</span>
      <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"0-0"</span><span class="token punctuation">,</span>
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"0-0-1"</span><span class="token punctuation">,</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"0-0-1"</span><span class="token punctuation">,</span>
              <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Child Node1"</span><span class="token punctuation">,</span>
              <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
              <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Child Node2"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"0-0-2"</span><span class="token punctuation">,</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"0-0-2"</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Node2"</span><span class="token punctuation">,</span>
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"0-1"</span><span class="token punctuation">,</span>
      <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"0-1"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li>
<li>
<p><code>dataSourceUrl</code>接口返回示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"参考dictionary数据字典"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage" aria-hidden="true">#</a> uploadImage</h3>
<ul>
<li>
<p>中文名：图片上传</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_icoImgUrl.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"/p1000/idm/upload/imgname.jpg"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h3>
<ul>
<li>
<p>中文名：表格</p>
</li>
<li>
<p>效果图：</p>
<img :src="$withBase('/images/attr/page_attr_resourceList.jpg')" style="margin-top:10px" alt="预览效果" />
</li>
<li>
<p>返回值示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"resourceType"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span>
        <span class="token property">"resourceUrl"</span><span class="token operator">:</span> <span class="token string">"hhhh"</span><span class="token punctuation">,</span>
        <span class="token property">"async"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"resourceType"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
        <span class="token property">"resourceUrl"</span><span class="token operator">:</span> <span class="token string">"dddddd"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>返回值示例中的格式是正确的，以数组形式返回，但数组中每个对象里面的具体属性值是根据自己配置的属性返回的。</p>
</div>
</li>
</ul>
</template>
