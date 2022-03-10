<template><h1 id="mock-data" tabindex="-1"><a class="header-anchor" href="#mock-data" aria-hidden="true">#</a> mock data</h1>
<p>用来模拟服务端返回数据，主要作用是在没有后端接口情况下也能正常使用或在开发环境的时候调试。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>默认的数据包存放在IDM代码包下的<code>static/mockdata</code>路径中</p>
</div>
<h2 id="componentmarketdata" tabindex="-1"><a class="header-anchor" href="#componentmarketdata" aria-hidden="true">#</a> ComponentMarketData</h2>
<p>用于模拟开发工具的左侧组件市场接口返回的数据结构</p>
<ul>
<li>
<p>后端接口属性配置： <RouterLink to="/zh/setting/config.html#componentmarketurl">componentMarketUrl</RouterLink></p>
</li>
<li>
<p>模拟接口属性配置： <RouterLink to="/zh/setting/config.html#componentmarketurl-1">componentMarketUrl</RouterLink></p>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
  <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"groupId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
      <span class="token property">"groupTitle"</span><span class="token operator">:</span> <span class="token string">"布局组件"</span><span class="token punctuation">,</span>
      <span class="token property">"componentList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"comId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
          <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
          <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
          <span class="token property">"comLangue"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
          <span class="token property">"asName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
          <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.layout.container"</span><span class="token punctuation">,</span>
          <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span>
          <span class="token property">"iconClass"</span><span class="token operator">:</span> <span class="token string">"idmicon idm-icon-rongqi4"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"platform"</span><span class="token punctuation">,</span>
          <span class="token property">"imgList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"~/static/img/demo/dbtablist.jpg"</span><span class="token punctuation">,</span>
              <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">1127</span><span class="token punctuation">,</span>
              <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">673</span><span class="token punctuation">,</span>
              <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"113664"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"lastVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
            <span class="token property">"projectNo"</span><span class="token operator">:</span> <span class="token string">"p1000"</span><span class="token punctuation">,</span>
            <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"versionList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
              <span class="token property">"projectNo"</span><span class="token operator">:</span> <span class="token string">"p1000"</span><span class="token punctuation">,</span>
              <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
              <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.1.0"</span><span class="token punctuation">,</span>
              <span class="token property">"projectNo"</span><span class="token operator">:</span> <span class="token string">"p1000"</span><span class="token punctuation">,</span>
              <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/v1.1.0/static/main.js"</span><span class="token punctuation">,</span>
              <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><ul>
<li>
<p>数据结构内相关key说明：</p>
<table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>groupId</td>
<td>组件分组的ID</td>
</tr>
<tr>
<td>groupTitle</td>
<td>组件分组展示的名称</td>
</tr>
<tr>
<td>componentList</td>
<td>组件分组的数组key值</td>
</tr>
<tr>
<td>comId</td>
<td>组件的id，唯一且不重复</td>
</tr>
<tr>
<td>comName</td>
<td>组件的原名称</td>
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
<td>asName</td>
<td>组件的别名，同一组件复用可以用这个属性区分</td>
</tr>
<tr>
<td>classId</td>
<td>组件的类ID，该属性由组件开发者提供，全局生态中唯一且不重复即可</td>
</tr>
<tr>
<td>className</td>
<td>组件的类名，该属性由组件开发者提供，当前代码包内不重复即可，请注意格式</td>
</tr>
<tr>
<td>iconClass</td>
<td>组件在开发工具中显示的图标，可以参考 <RouterLink to="/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87">字体图标</RouterLink></td>
</tr>
<tr>
<td>type</td>
<td>组件类型，目前可以为platform、project</td>
</tr>
<tr>
<td>imgList</td>
<td>组件的效果图片数组集合</td>
</tr>
<tr>
<td>src</td>
<td>图片的路径，会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></td>
</tr>
<tr>
<td>lastVersion</td>
<td>当前组件的最后一个版本</td>
</tr>
<tr>
<td>versionList</td>
<td>当前组件的所有版本集合</td>
</tr>
<tr>
<td>version</td>
<td>组件的版本编号</td>
</tr>
<tr>
<td>projectNo</td>
<td>组件的版本所属哪个项目编号</td>
</tr>
<tr>
<td>codeSrc</td>
<td>组件的当前版本加载组件代码的入口地址，此地址应该从代码包名开始</td>
</tr>
<tr>
<td>datetime</td>
<td>版本上传的时间</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h2 id="pageversionlistdata" tabindex="-1"><a class="header-anchor" href="#pageversionlistdata" aria-hidden="true">#</a> PageVersionListData</h2>
<p>用于模拟开发工具的左侧顶部版本号列表接口返回的数据结构</p>
<ul>
<li>
<p>后端接口属性配置： <RouterLink to="/zh/setting/config.html#pageversionlisturl">pageVersionListUrl</RouterLink></p>
</li>
<li>
<p>模拟接口属性配置： <RouterLink to="/zh/setting/config.html#pageversionlisturl-1">pageVersionListUrl</RouterLink></p>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
            <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"作者"</span><span class="token punctuation">,</span>
            <span class="token property">"remark"</span><span class="token operator">:</span> <span class="token string">"版本备注"</span><span class="token punctuation">,</span>
            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-02-23 12:50:14"</span><span class="token punctuation">,</span>
            <span class="token property">"projectNo"</span><span class="token operator">:</span><span class="token string">"p1000"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>
<p>数据结构内相关key说明：</p>
<table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>version</td>
<td>组件的版本编号</td>
</tr>
<tr>
<td>projectNo</td>
<td>组件的版本所属哪个项目编号</td>
</tr>
<tr>
<td>datetime</td>
<td>版本上传的时间</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h2 id="pagesettingdatadata" tabindex="-1"><a class="header-anchor" href="#pagesettingdatadata" aria-hidden="true">#</a> pageSettingDataData</h2>
<p>用于模拟开发工具获取当前打开的页面配置的数据结构</p>
<ul>
<li>
<p>后端接口属性配置： <RouterLink to="/zh/setting/config.html#pagesettingdataurl">pageSettingDataUrl</RouterLink></p>
</li>
<li>
<p>模拟接口属性配置： <RouterLink to="/zh/setting/config.html#pagesettingdataurl-1">pageSettingDataUrl</RouterLink></p>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
        <span class="token property">"developInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"guides"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"posX"</span><span class="token operator">:</span> <span class="token number">413</span><span class="token punctuation">,</span>
                    <span class="token property">"posY"</span><span class="token operator">:</span> <span class="token number">-45</span><span class="token punctuation">,</span>
                    <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pageBaseInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"页面标题"</span><span class="token punctuation">,</span>
            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"dragAreaSizeInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">346</span><span class="token punctuation">,</span>
            <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">802</span><span class="token punctuation">,</span>
            <span class="token property">"showText"</span><span class="token operator">:</span> <span class="token string">"适应当前"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"subKey"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"page"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"componentsMap"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                    <span class="token property">"packageid"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                    <span class="token property">"comId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"页面"</span><span class="token punctuation">,</span>
                    <span class="token property">"asName"</span><span class="token operator">:</span> <span class="token string">"页面"</span><span class="token punctuation">,</span>
                    <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.root"</span><span class="token punctuation">,</span>
                    <span class="token property">"iconClass"</span><span class="token operator">:</span> <span class="token string">"idmicon idm-icon-rongqi"</span><span class="token punctuation">,</span>
                    <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span>
                    <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"platform"</span><span class="token punctuation">,</span>
                    <span class="token property">"imgList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"~/static/img/page_default.jpg"</span><span class="token punctuation">,</span>
                            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
                            <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">270</span><span class="token punctuation">,</span>
                            <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"187298"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">"currentVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                        <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                        <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
                            <span class="token property">"padding"</span><span class="token operator">:</span> <span class="token string">"20px"</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">"dataAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"globalId"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"comId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
                    <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                    <span class="token property">"asName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
                    <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.layout.container"</span><span class="token punctuation">,</span>
                    <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span>
                    <span class="token property">"iconClass"</span><span class="token operator">:</span> <span class="token string">"idmicon idm-icon-rongqi4"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"platform"</span><span class="token punctuation">,</span>
                    <span class="token property">"imgList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"~/static/img/demo/dbtablist.jpg"</span><span class="token punctuation">,</span>
                            <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">1127</span><span class="token punctuation">,</span>
                            <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">673</span><span class="token punctuation">,</span>
                            <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"113664"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">"lastVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                        <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                        <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"versionList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                            <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.1.0"</span><span class="token punctuation">,</span>
                            <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/v1_1_0/static/main.js"</span><span class="token punctuation">,</span>
                            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">"packageid"</span><span class="token operator">:</span> <span class="token string">"component_L67dhUY8Z3Q13kKB"</span><span class="token punctuation">,</span>
                    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"component_L67dhUY8Z3Q13kKB_inner"</span><span class="token punctuation">,</span>
                    <span class="token property">"relationType"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
                    <span class="token property">"relationId"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"develop"</span><span class="token punctuation">,</span>
                    <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"currentVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                        <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                        <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"globalId"</span><span class="token operator">:</span> <span class="token string">"abc1234.component_L67dhUY8Z3Q13kKB"</span><span class="token punctuation">,</span>
                    <span class="token property">"attrSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"layout"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                <span class="token property">"packageid"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                <span class="token property">"comId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"页面"</span><span class="token punctuation">,</span>
                <span class="token property">"asName"</span><span class="token operator">:</span> <span class="token string">"页面"</span><span class="token punctuation">,</span>
                <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.root"</span><span class="token punctuation">,</span>
                <span class="token property">"iconClass"</span><span class="token operator">:</span> <span class="token string">"idmicon idm-icon-rongqi"</span><span class="token punctuation">,</span>
                <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span>
                <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"platform"</span><span class="token punctuation">,</span>
                <span class="token property">"imgList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"~/static/img/page_default.jpg"</span><span class="token punctuation">,</span>
                        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
                        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">270</span><span class="token punctuation">,</span>
                        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"187298"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"currentVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                    <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"attrSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">"dataAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
                        <span class="token property">"padding"</span><span class="token operator">:</span> <span class="token string">"20px"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">"dataAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"comId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                        <span class="token property">"comName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
                        <span class="token property">"comType"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                        <span class="token property">"asName"</span><span class="token operator">:</span> <span class="token string">"容器"</span><span class="token punctuation">,</span>
                        <span class="token property">"classId"</span><span class="token operator">:</span> <span class="token string">"idm.componet.layout.container"</span><span class="token punctuation">,</span>
                        <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span>
                        <span class="token property">"iconClass"</span><span class="token operator">:</span> <span class="token string">"idmicon idm-icon-rongqi4"</span><span class="token punctuation">,</span>
                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"platform"</span><span class="token punctuation">,</span>
                        <span class="token property">"imgList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"~/static/img/demo/dbtablist.jpg"</span><span class="token punctuation">,</span>
                                <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">1127</span><span class="token punctuation">,</span>
                                <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">673</span><span class="token punctuation">,</span>
                                <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"113664"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">"lastVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                            <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">"versionList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                                <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                                <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.1.0"</span><span class="token punctuation">,</span>
                                <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/v1_1_0/static/main.js"</span><span class="token punctuation">,</span>
                                <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">"packageid"</span><span class="token operator">:</span> <span class="token string">"component_L67dhUY8Z3Q13kKB"</span><span class="token punctuation">,</span>
                        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"component_L67dhUY8Z3Q13kKB_inner"</span><span class="token punctuation">,</span>
                        <span class="token property">"relationType"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
                        <span class="token property">"relationId"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span><span class="token punctuation">,</span>
                        <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"develop"</span><span class="token punctuation">,</span>
                        <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">"currentVersion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                            <span class="token property">"codeSrc"</span><span class="token operator">:</span> <span class="token string">"layout/1.0.0/static/main.js"</span><span class="token punctuation">,</span>
                            <span class="token property">"datetime"</span><span class="token operator">:</span> <span class="token string">"2021-03-23 12:50:14"</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">"globalId"</span><span class="token operator">:</span> <span class="token string">"abc1234.component_L67dhUY8Z3Q13kKB"</span><span class="token punctuation">,</span>
                        <span class="token property">"attrSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"compositeAttr"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"globalId"</span><span class="token operator">:</span> <span class="token string">"abc1234"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br></div></div><ul>
<li>
<p>数据结构内相关key说明：</p>
<p>TODO</p>
</li>
</ul>
<h2 id="custommodulesettingdatadata" tabindex="-1"><a class="header-anchor" href="#custommodulesettingdatadata" aria-hidden="true">#</a> customModuleSettingDataData</h2>
<p>用于模拟开发工具获取当前打开的自定义业务（布局）组件的数据结构</p>
<ul>
<li>
<p>后端接口属性配置： <RouterLink to="/zh/setting/config.html#custommodulesettingdataurl">customModuleSettingDataUrl</RouterLink></p>
</li>
<li>
<p>模拟接口属性配置： <RouterLink to="/zh/setting/config.html#custommodulesettingdataurl-1">customModuleSettingDataUrl</RouterLink></p>
</li>
</ul>
<p>同 <RouterLink to="/zh/setting/mockdata.html#pagesettingdatadata">pageSettingDataData</RouterLink> 的数据结构</p>
<h2 id="allcodepackagelistdata" tabindex="-1"><a class="header-anchor" href="#allcodepackagelistdata" aria-hidden="true">#</a> AllCodePackageListData</h2>
<p>用于模拟获取文档管理的左上角代码包切换数据接口返回的数据结构</p>
<ul>
<li>
<p>后端接口属性配置： <RouterLink to="/zh/setting/config.html#allcodepackageurl">allCodepackageUrl</RouterLink></p>
</li>
<li>
<p>模拟接口属性配置： <RouterLink to="/zh/setting/config.html#allcodepackageurl-1">allCodepackageUrl</RouterLink></p>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"createUnitId"</span><span class="token operator">:</span> <span class="token string">"180505162656YILYYOzw1FnE5OzzNxm"</span><span class="token punctuation">,</span>
            <span class="token property">"versionCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"createDeptId"</span><span class="token operator">:</span> <span class="token string">"180627211146kvt9gFekZIxpF5Gm6xh"</span><span class="token punctuation">,</span>
            <span class="token property">"createUserId"</span><span class="token operator">:</span> <span class="token string">"1806272111460YuoHeG49QtxcWmH568"</span><span class="token punctuation">,</span>
            <span class="token property">"createUnitName"</span><span class="token operator">:</span> <span class="token string">"江西省"</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateUnitName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"forms"</span><span class="token punctuation">,</span>
            <span class="token property">"currentCodeLanguage"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
            <span class="token property">"currentCodePath"</span><span class="token operator">:</span> <span class="token string">"forms/1.0.0/"</span><span class="token punctuation">,</span>
            <span class="token property">"versionList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"configText"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"createUnitId"</span><span class="token operator">:</span> <span class="token string">"180505162656YILYYOzw1FnE5OzzNxm"</span><span class="token punctuation">,</span>
                    <span class="token property">"createDeptId"</span><span class="token operator">:</span> <span class="token string">"180627211146kvt9gFekZIxpF5Gm6xh"</span><span class="token punctuation">,</span>
                    <span class="token property">"createUserId"</span><span class="token operator">:</span> <span class="token string">"1806272111460YuoHeG49QtxcWmH568"</span><span class="token punctuation">,</span>
                    <span class="token property">"createUnitName"</span><span class="token operator">:</span> <span class="token string">"江西省"</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateUnitName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"className"</span><span class="token operator">:</span> <span class="token string">"forms"</span><span class="token punctuation">,</span>
                    <span class="token property">"remark"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"zipPath"</span><span class="token operator">:</span> <span class="token string">"/upload/idmconsole/b224be9c-c698-41b6-a2f3-b9b3c8fac9e0.zip"</span><span class="token punctuation">,</span>
                    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"211029004423iI5Ga83vE0WiV8agBrw"</span><span class="token punctuation">,</span>
                    <span class="token property">"codeLanguage"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateDeptId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateUnitId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"createDeptName"</span><span class="token operator">:</span> <span class="token string">"综合处"</span><span class="token punctuation">,</span>
                    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"申龙"</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateUserId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
                    <span class="token property">"createUName"</span><span class="token operator">:</span> <span class="token string">"申龙"</span><span class="token punctuation">,</span>
                    <span class="token property">"lasttime"</span><span class="token operator">:</span> <span class="token string">"2021年8月12日18:46:37"</span><span class="token punctuation">,</span>
                    <span class="token property">"codePath"</span><span class="token operator">:</span> <span class="token string">"forms/1.0.0/"</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateUName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"2021-10-29 00:44:23"</span><span class="token punctuation">,</span>
                    <span class="token property">"projectId"</span><span class="token operator">:</span> <span class="token string">"p1001"</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateDeptName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"lastUpdateTime"</span><span class="token operator">:</span> <span class="token string">"2021-10-29 00:44:22"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"21102900442112k8aeCoGdyptmKfFG1"</span><span class="token punctuation">,</span>
            <span class="token property">"currentZipPath"</span><span class="token operator">:</span> <span class="token string">"/upload/idmconsole/b224be9c-c698-41b6-a2f3-b9b3c8fac9e0.zip"</span><span class="token punctuation">,</span>
            <span class="token property">"currentLasttime"</span><span class="token operator">:</span> <span class="token string">"2021年8月12日18:46:37"</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateDeptId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateUnitId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"createDeptName"</span><span class="token operator">:</span> <span class="token string">"综合处"</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateUserId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"currentAuthor"</span><span class="token operator">:</span> <span class="token string">"申龙"</span><span class="token punctuation">,</span>
            <span class="token property">"currentVersion"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
            <span class="token property">"createUName"</span><span class="token operator">:</span> <span class="token string">"申龙"</span><span class="token punctuation">,</span>
            <span class="token property">"currentRemark"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateUName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"2021-10-29 00:44:22"</span><span class="token punctuation">,</span>
            <span class="token property">"currentConfigText"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"projectId"</span><span class="token operator">:</span> <span class="token string">"p1001"</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateDeptName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"lastUpdateTime"</span><span class="token operator">:</span> <span class="token string">"2021-10-29 00:44:22"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><ul>
<li>
<p>数据结构内相关key说明：</p>
<table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>versionCount</td>
<td>组件包内的所有版本数量</td>
</tr>
<tr>
<td>className</td>
<td>组件包的类名</td>
</tr>
<tr>
<td>currentCodeLanguage、codeLanguage</td>
<td>当前版本代码包的技术栈语言</td>
</tr>
<tr>
<td>currentCodePath、codePath</td>
<td>当前版本代码包的部分路径</td>
</tr>
<tr>
<td>currentConfigText、configText</td>
<td>当前版本代码包的组件注册的配置文件</td>
</tr>
<tr>
<td>currentVersion、version</td>
<td>组件的版本编号</td>
</tr>
<tr>
<td>versionList</td>
<td>组件的所有版本集合</td>
</tr>
</tbody>
</table>
</li>
</ul>
</template>
