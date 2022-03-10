<template><h1 id="全局api" tabindex="-1"><a class="header-anchor" href="#全局api" aria-hidden="true">#</a> 全局API</h1>
<p><code>IDM</code> 是一个对象，包含整个框架的全局<RouterLink to="/zh/setting/config.html">配置项</RouterLink>和框架提供组件使用的标准API。可以在应用启动之后通过<code>IDM.方法名</code> or <code>IDM.分类名.方法名</code> 访问下列Function：</p>
<h2 id="util" tabindex="-1"><a class="header-anchor" href="#util" aria-hidden="true">#</a> util</h2>
<p>此分类为基础的公共方法分类，此分类可省略类名（<code>IDM.方法名</code>）直接访问下列的方法，也可以追加分类（<code>IDM.util.方法名</code>）访问。</p>
<h3 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> UUID</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>UUID()</code></p>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//uuid生成范围 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token constant">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => MM8VhsDVwh9WYkhw</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>获取16位的唯一标识</p>
</li>
</ul>
<h3 id="uuid-1" tabindex="-1"><a class="header-anchor" href="#uuid-1" aria-hidden="true">#</a> uuid</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>uuid(len, radix)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{number} [len]</code> 要获取的长度</li>
<li><code>{number} [radix]</code> 基数大小，也就是指定uuid生成范围</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//uuid生成范围 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// => MM8VhsDVwh9WYkhw</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// => 0000110011110110</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>获取指定位数的唯一标识</p>
</li>
</ul>
<h3 id="getclientwh" tabindex="-1"><a class="header-anchor" href="#getclientwh" aria-hidden="true">#</a> getClientWH</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getClientWH()</code></p>
</li>
<li>
<p><strong>返回值</strong>：</p>
<p><code>{width:number,height:number}</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">getClientWH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => {width:1920,height:960}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>获取浏览器可视区域宽高方法</p>
</li>
</ul>
<h3 id="mix" tabindex="-1"><a class="header-anchor" href="#mix" aria-hidden="true">#</a> mix</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>mix()</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{boolean} [deep]</code> 可选。 Boolean类型 指示是否深度合并对象，默认为false。如果该值为true，且多个对象的某个同名属性也都是对象，则该&quot;属性对象&quot;的属性也将进行合并。</li>
<li><code>{Object} [target]</code> Object类型 目标对象，其他对象的成员属性将被附加到该对象上。</li>
<li><code>{Object} [object1]</code> 可选。 Object类型 第一个被合并的对象。</li>
<li><code>{Object} [objectN]</code> 可选。 Object类型 第N个被合并的对象。</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> object1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">apple</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">banana</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cherry</span><span class="token operator">:</span> <span class="token number">97</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> object2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">banana</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">durian</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/* object2 合并到 object1 中 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">mix</span><span class="token punctuation">(</span>object1<span class="token punctuation">,</span> object2<span class="token punctuation">)</span>

<span class="token comment">/* object1的最终结果 */</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"apple"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">"banana"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">200</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"cherry"</span><span class="token operator">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
  <span class="token string-property property">"durian"</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token comment">/* object2 合并到 object1 中 (深度合并对象) */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">mix</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> object1<span class="token punctuation">,</span> object2<span class="token punctuation">)</span>

<span class="token comment">/* object1的最终结果 */</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"apple"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">"banana"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"weight"</span><span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
      <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">200</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"cherry"</span><span class="token operator">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
  <span class="token string-property property">"durian"</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>类似jQuery.extend方法，可用于对象合并</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>不支持第一个参数传递 false 。</p>
<p>如果多个对象具有相同的属性，则后者会覆盖前者的属性值。</p>
</div>
</li>
</ul>
<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>error()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"IDM! 这是一个错误信息"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>代理console.error</p>
</li>
<li>
<p><strong>参考</strong>：</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error" target="_blank" rel="noopener noreferrer">console.error<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="warn" tabindex="-1"><a class="header-anchor" href="#warn" aria-hidden="true">#</a> warn</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>warn()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"IDM! 这是一个警告信息"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>代理console.warn</p>
</li>
<li>
<p><strong>参考</strong>：</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn" target="_blank" rel="noopener noreferrer">console.warn<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="timeend" tabindex="-1"><a class="header-anchor" href="#timeend" aria-hidden="true">#</a> timeEnd</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>timeEnd()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>代理console.timeEnd</p>
</li>
<li>
<p><strong>参考</strong>：</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd" target="_blank" rel="noopener noreferrer">console.timeEnd<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>time()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>代理console.time</p>
</li>
<li>
<p><strong>参考</strong>：</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/time" target="_blank" rel="noopener noreferrer">console.time<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>log()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => {a:1,b:2}</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">)</span> <span class="token comment">// => 123 456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>代理console.log</p>
</li>
<li>
<p><strong>参考</strong>：</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/log" target="_blank" rel="noopener noreferrer">console.log<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="isplainobject" tabindex="-1"><a class="header-anchor" href="#isplainobject" aria-hidden="true">#</a> isPlainObject</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>isPlainObject(obj)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>验证是否是一个纯粹的对象</p>
</li>
</ul>
<h3 id="hasown" tabindex="-1"><a class="header-anchor" href="#hasown" aria-hidden="true">#</a> hasOwn</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>hasOwn(obj, key)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
<li><code>{string} [key]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"b"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>验证对象中是否包含指定的key</p>
</li>
</ul>
<h3 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> isFunction</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>isFunction(fn)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Function} [fn]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>验证类型是否为函数</p>
</li>
</ul>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>type(obj)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => 'number'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => 'object'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => 'array'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span> <span class="token comment">// => 'string'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => 'function'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => 'boolean'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>获取对象类型</p>
</li>
</ul>
<h3 id="isundef" tabindex="-1"><a class="header-anchor" href="#isundef" aria-hidden="true">#</a> isUnDef</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>isUnDef(obj)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isUnDef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>验证是否为undefind或者null</p>
</li>
</ul>
<h3 id="isdef" tabindex="-1"><a class="header-anchor" href="#isdef" aria-hidden="true">#</a> isDef</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>isDef(obj)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>验证是否不为undefind或者null</p>
</li>
</ul>
<h3 id="isemptyobject" tabindex="-1"><a class="header-anchor" href="#isemptyobject" aria-hidden="true">#</a> isEmptyObject</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>isEmptyObject(obj)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [obj]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// =>true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// =>true</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// =>true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>验证是否为一个空对象</p>
</li>
</ul>
<h3 id="setstyletopagehead" tabindex="-1"><a class="header-anchor" href="#setstyletopagehead" aria-hidden="true">#</a> setStyleToPageHead</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>setStyleToPageHead(id,object)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [id]</code></li>
<li><code>{Object} [object]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cssObject <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'border'</span><span class="token operator">:</span><span class="token string">'1px solid #000000'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'background-color'</span><span class="token operator">:</span><span class="token string">'red'</span>
<span class="token punctuation">}</span>

<span class="token comment">//如果开头没有 # 或 . 会自动追加 #，例如此处会对 #ElementId 的元素生效</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">setStyleToPageHead</span><span class="token punctuation">(</span><span class="token string">'ElementId'</span><span class="token punctuation">,</span>cssObject<span class="token punctuation">)</span> 

<span class="token comment">//如果开头有 # 则不会追加 #，例如此处会对 #ElementId 的元素生效</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">setStyleToPageHead</span><span class="token punctuation">(</span><span class="token string">'#ElementId'</span><span class="token punctuation">,</span>cssObject<span class="token punctuation">)</span> 

<span class="token comment">//如果开头有 . 则不会追加 #，例如此处会对包含样式名为 ClassName 的元素生效</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">setStyleToPageHead</span><span class="token punctuation">(</span><span class="token string">'.ClassName'</span><span class="token punctuation">,</span>cssObject<span class="token punctuation">)</span> 

<span class="token comment">//可以指定多层级元素样式，例如此处会对包含样式名为 ClassName 下的所有div元素生效</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">setStyleToPageHead</span><span class="token punctuation">(</span><span class="token string">'.ClassName div'</span><span class="token punctuation">,</span>cssObject<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>把object样式转换为style标签样式并添加到head的标签中</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果id已经添加过会删除已经存在的相同ID并重新添加。</p>
</div>
</li>
</ul>
<h3 id="removestyletagforid" tabindex="-1"><a class="header-anchor" href="#removestyletagforid" aria-hidden="true">#</a> removeStyleTagForId</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>removeStyleTagForId(id)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [id]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//会移除form为 ElementId 的 style 标签样式</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">removeStyleTagForId</span><span class="token punctuation">(</span><span class="token string">'ElementId'</span><span class="token punctuation">)</span> 
<span class="token comment">//会移除form为 .ClassName div 的 style 标签样式</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">removeStyleTagForId</span><span class="token punctuation">(</span><span class="token string">'.ClassName div'</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>根据id移除style标签</p>
</li>
</ul>
<h3 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> difference</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>difference(object, base)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [object]</code> 旧对象</li>
<li><code>{Object} [base]</code> 要对比的新对象</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => {a: 1, b: 2}</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => {a: 1}</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">d</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">d</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// => {a: {c: 1}}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>对比被修改的值，返回被修改的旧对象</p>
</li>
</ul>
<h3 id="refreshvuedata" tabindex="-1"><a class="header-anchor" href="#refreshvuedata" aria-hidden="true">#</a> refreshVueData</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>refreshVueData(_this,dataName,attrData)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{vue对象} [_this]</code></li>
<li><code>{string} [dataName]</code></li>
<li><code>{Object} [attrData]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">refreshVueData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">"dataA.dataB"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>强制更新Vue的Data，更多详细的内部方法可参考：<a href="https://cn.vuejs.org/v2/api/#Vue-set" target="_blank" rel="noopener noreferrer">Vue.set<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h2>
<p>此分类为操作数组的公共方法分类，此分类需要追加分类名（<code>IDM.array.方法名</code>）访问下列的方法。</p>
<h3 id="ensure" tabindex="-1"><a class="header-anchor" href="#ensure" aria-hidden="true">#</a> ensure</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>ensure(target, item)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [target]</code> 要操作的数组</li>
<li><code>{Object} [item]</code> 要添加的元素</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/************示例1************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">//添加</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">ensure</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1, 2, 3]</span>

<span class="token doc-comment comment">/************示例2************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//添加</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">ensure</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1, 2]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>添加不存在的元素，只有当前数组不存在此元素时添加它</p>
</li>
</ul>
<h3 id="removeat" tabindex="-1"><a class="header-anchor" href="#removeat" aria-hidden="true">#</a> removeAt</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>removeAt(target, index)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [target]</code> 要操作的数组</li>
<li><code>{number} [index]</code> 要移除的索引位置</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/************示例1************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => false</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1,2]</span>

<span class="token doc-comment comment">/************示例2************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>移除数组中指定位置的元素，返回布尔表示成功与否</p>
</li>
</ul>
<h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>remove(target, item)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [target]</code> 要操作的数组</li>
<li><code>{Object} [item]</code> 要移除的元素</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>boolean</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/************示例1************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1,1,2]</span>

<span class="token doc-comment comment">/************示例2************/</span>
<span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ddd <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>abc<span class="token punctuation">,</span>ddd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => false</span>
<span class="token comment">//输出结果</span>
abc <span class="token comment">// => [1,2,1,2]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否</p>
</li>
</ul>
<h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h2>
<p>此分类为操作路径url相关的公共方法分类，此分类需要追加分类名（<code>IDM.url.方法名</code>）访问下列的方法。</p>
<h3 id="getwebpath" tabindex="-1"><a class="header-anchor" href="#getwebpath" aria-hidden="true">#</a> getWebPath</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getWebPath(url, rootPath, projectNo)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [url]</code> 要进行转换的地址</li>
<li><code>{String} [rootPath]</code> 可选，根目录前缀路径</li>
<li><code>{String} [projectNo]</code> 可选，项目编号</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 前缀 $ 转换 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"$/iconfont/iconfont.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出结果</span>
<span class="token comment">// => './static/iconfont/iconfont.css'</span>

<span class="token comment">/* 前缀 ~ 转换 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"~/iconfont/iconfont.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出结果</span>
<span class="token comment">// => './iconfont/iconfont.css'</span>

<span class="token comment">/* 前缀 @ 转换 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"@/iconfont/iconfont.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出结果</span>
<span class="token comment">// => './idm_modules/iconfont/iconfont.css'</span>

<span class="token comment">/* 无前缀转换 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"/iconfont/iconfont.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出结果</span>
<span class="token comment">// => '/DreamWeb/iconfont/iconfont.css'</span>

<span class="token comment">/* 无前缀转换，带 rootPath 参数 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"/iconfont/iconfont.css"</span><span class="token punctuation">,</span><span class="token string">"/ProjectName/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出结果</span>
<span class="token comment">// => '/ProjectName/iconfont/iconfont.css'</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>路径转换方法，如果参数 <code>url</code> 的前缀为<code>./</code>或<code>../</code>或<code>http://</code>或<code>https://</code>则不转换直接原内容返回。其他情况则按以下规则进行转换：</p>
<ul>
<li>
<p>前缀$代表：使用配置项 <code>webRoot &gt; assetsDir</code> 替换，参考<RouterLink to="/zh/setting/config.html#assetsdir">assetsDir</RouterLink></p>
</li>
<li>
<p>前缀~代表：使用配置项 <code>webRoot &gt; htmlDir</code> 替换，参考<RouterLink to="/zh/setting/config.html#htmldir">htmlDir</RouterLink></p>
</li>
<li>
<p>前缀@代表：使用配置项 <code>webRoot &gt; moduleDir</code> 替换，参考<RouterLink to="/zh/setting/config.html#moduledir">moduledir</RouterLink></p>
</li>
<li>
<p>其他情况使用配置项 <code>webRoot &gt; default</code> 替换（如果<code>rootPath</code>参数不为空则在地址前面追加<code>rootPath</code>的参数），参考<RouterLink to="/zh/setting/config.html#default">default</RouterLink></p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>
<p><code>url</code>参数开头为<code>/</code>会被移除再进行转换</p>
</li>
<li>
<p>如果前缀为@的情况，并且开启了<RouterLink to="/zh/setting/config.html#useprojectnosetting">useProjectNoSetting</RouterLink>的配置项，则会调用<RouterLink to="/zh/coreapi/api.html#getmoduleabsolutedir">getModuleAbsoluteDir</RouterLink>方法返回要拼接的前缀，否则就是按上述的规则进行转换</p>
</li>
</ol>
</div>
</li>
</ul>
<h3 id="getmoduleabsolutedir" tabindex="-1"><a class="header-anchor" href="#getmoduleabsolutedir" aria-hidden="true">#</a> getModuleAbsoluteDir</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getModuleAbsoluteDir(projectNo,rootPath)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [projectNo]</code> 可选，项目编号</li>
<li><code>{boolean} [rootPath]</code> 可选，是否使用根目录前缀路径</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getModuleAbsoluteDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果</span>
<span class="token comment">// => '/DreamWeb/p1000/idm/idm_modules/'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getModuleAbsoluteDir</span><span class="token punctuation">(</span><span class="token string">'p8888'</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果</span>
<span class="token comment">// => '/DreamWeb/p8888/idm/idm_modules/'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getModuleAbsoluteDir</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果</span>
<span class="token comment">// => 'p1000/idm/idm_modules/'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>根据项目编号获取配置项的组件的绝对路径，配置项参考<RouterLink to="/zh/setting/config.html#moduleabsolutedir">moduleAbsoluteDir</RouterLink></p>
</li>
</ul>
<h3 id="getmoduleassetswebpath" tabindex="-1"><a class="header-anchor" href="#getmoduleassetswebpath" aria-hidden="true">#</a> getModuleAssetsWebPath</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getModuleAssetsWebPath(url,module)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [url]</code> 资源的地址</li>
<li><code>{Object} [module]</code> 加载的组件对象，来源参考<RouterLink to="/zh/moduledevelop/attributes.html">组件属性</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 组件内使用以下方法获取组件包内的静态资源 */</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getModuleAssetsWebPath</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../assets/logo.png'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>moduleObject<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>根据配置返回组件模块的资源路径公共方法</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>moduleObject对象内容参考：<RouterLink to="/zh/moduledevelop/attributes.html">组件属性</RouterLink></p>
</div>
</li>
</ul>
<h3 id="getabsolutepath" tabindex="-1"><a class="header-anchor" href="#getabsolutepath" aria-hidden="true">#</a> getAbsolutePath</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getAbsolutePath(url)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [url]</code> 资源的地址</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token string">'~/assets/logo.png'</span><span class="token punctuation">)</span> <span class="token comment">// => '/DreamWeb/assets/logo.png'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token string">'/assets/logo.png'</span><span class="token punctuation">)</span> <span class="token comment">// => '/DreamWeb/assets/logo.png'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>直接获取从根目录的绝对路径</p>
</li>
</ul>
<h3 id="querystring" tabindex="-1"><a class="header-anchor" href="#querystring" aria-hidden="true">#</a> queryString</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>queryString(key)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [key]</code> 参数名称</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
<span class="token comment">//例如输出结果如下</span>
<span class="token comment">// => '#/preview/idm_console_homepage_03?abc=123&amp;dd=456'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">queryString</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => '123'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>直接获取hash后面指定的参数名称的值</p>
</li>
</ul>
<h3 id="stringify" tabindex="-1"><a class="header-anchor" href="#stringify" aria-hidden="true">#</a> stringify</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>stringify(params, options)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [params]</code></li>
<li><code>{Object} [options]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 'a[0]=b&amp;a[1]=c&amp;a[2]=d'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">indices</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 'a=b&amp;a=c&amp;a=d'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">'indices'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 'a[0]=b&amp;a[1]=c'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">'brackets'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 'a[]=b&amp;a[]=c'</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">'repeat'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 'a=b&amp;a=c'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>将对象 序列化成URL的形式，以&amp;进行拼接</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：<a href="https://www.npmjs.com/package/qs" target="_blank" rel="noopener noreferrer">qs<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>parse(str, options)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [str]</code></li>
<li><code>{Object} [options]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'id=1&amp;name=idm.yunit.cn'</span><span class="token punctuation">)</span>
<span class="token comment">// => {id: '1', name: 'idm.yunit.cn'}</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'a[hasOwnProperty]=b'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">plainObjects</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => {"a": {"hasOwnProperty": "b"}}</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'a[b][c][d][e][f][g][h][i]=j'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">depth</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => {"a": {"b": {"[c][d][e][f][g][h][i]": "j"}}}</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'a=b&amp;c=d'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">parameterLimit</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => {"a": "b"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>将URL解析成对象的形式</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：<a href="https://www.npmjs.com/package/qs" target="_blank" rel="noopener noreferrer">qs<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="analyzing" tabindex="-1"><a class="header-anchor" href="#analyzing" aria-hidden="true">#</a> analyzing</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>analyzing(url)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [url]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">analyzing</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
{
  "url": "http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&amp;dd=456",
  "protocol": "http:",
  "slash": "//",
  "host": "localhost",
  "port": "8080",
  "path": "/DreamWeb/p1000/idm/index.html",
  "queryString": "",
  "hash": "/preview/idm_console_homepage_03?abc=123&amp;dd=456",
  "query": {}
}
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>将URL解析成对象的形式</p>
</li>
</ul>
<h3 id="geturlroot" tabindex="-1"><a class="header-anchor" href="#geturlroot" aria-hidden="true">#</a> getURLRoot</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getURLRoot()</code></p>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getURLRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'http://localhost:8080/DreamWeb/'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>获取url的前缀根路径</p>
</li>
</ul>
<h3 id="getcontextweburl" tabindex="-1"><a class="header-anchor" href="#getcontextweburl" aria-hidden="true">#</a> getContextWebUrl</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getContextWebUrl(url)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [url]</code></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>string</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//生产环境</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getContextWebUrl</span><span class="token punctuation">(</span><span class="token string">"idm/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'http://localhost:8080/DreamWeb/idm/index.html'</span>

<span class="token comment">//开发环境</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getContextWebUrl</span><span class="token punctuation">(</span><span class="token string">"idm/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => '/DreamWeb/idm/index.html'</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>根据环境的不同获取对应的url，IDM开发环境与生产环境所获取的地址根据配置和实际url拼接的地址。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>注意上述开发环境用法是调用 <RouterLink to="/zh/coreapi/api.html#getwebpath">getWebPath</RouterLink> 实现的，生产环境情况下是调用 <RouterLink to="/zh/coreapi/api.html#geturlroot">getURLRoot</RouterLink> +<code>参数url</code> 实现的</p>
</div>
</li>
</ul>
<h3 id="queryobject" tabindex="-1"><a class="header-anchor" href="#queryobject" aria-hidden="true">#</a> queryObject</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>queryObject(query)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{string} [query]</code> 可选，url地址</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/************示例1************/</span>
<span class="token keyword">var</span> url1 <span class="token operator">=</span> <span class="token string">"http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&amp;dd=456"</span><span class="token punctuation">;</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">queryObject</span><span class="token punctuation">(</span>url1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {abc: '123', dd: '456'}</span>

<span class="token doc-comment comment">/************示例2************/</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token comment">//如果输出结果为：</span>
<span class="token comment">//"http://localhost:8080/DreamWeb/p1000/idm/index.html?abc=123&amp;dd=456#/preview/idm_console_homepage_03"</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">queryObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {abc: '123', dd: '456'}</span>

<span class="token doc-comment comment">/************示例3************/</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token comment">//如果输出结果为：</span>
<span class="token comment">//"http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&amp;dd=456"</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">queryObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {abc: '123', dd: '456'}</span>

<span class="token doc-comment comment">/************示例4************/</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token comment">//如果输出结果为：</span>
<span class="token comment">//"http://localhost:8080/DreamWeb/p1000/idm/index.html?abc=123&amp;dd=456#/preview/idm_console_homepage_03?abc=abc&amp;dd=def"</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">queryObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {abc: 'abc', dd: 'def'}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>可根据参数获取url转换的object对象，也可不传参数直接获取页面url的参数转换为object对象</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果没有传<code>query</code>参数，则自动优先获取hash后面拼接的参数，如果hash后面没有参数再获取第一个问号后面的参数。</p>
</div>
</li>
</ul>
<h2 id="validate" tabindex="-1"><a class="header-anchor" href="#validate" aria-hidden="true">#</a> validate</h2>
<p>此分类为内容的校验相关的公共方法，此方法（<code>IDM.validate(arg1,arg2,argN)</code>）第一个参数为校验类型，第二个参数起为校验所需要的内容，以下列出了可使用的校验类型：</p>
<h3 id="isexternal" tabindex="-1"><a class="header-anchor" href="#isexternal" aria-hidden="true">#</a> isExternal</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否外部的资源，可校验url地址、邮箱、电话等。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isExternal"</span><span class="token punctuation">,</span><span class="token string">"http://www.yunit.cn"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isExternal"</span><span class="token punctuation">,</span><span class="token string">"www.yunit.cn"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isExternal"</span><span class="token punctuation">,</span><span class="token string">"tel:13212341234"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isExternal"</span><span class="token punctuation">,</span><span class="token string">"mailto:960504980@qq.com"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="isnull" tabindex="-1"><a class="header-anchor" href="#isnull" aria-hidden="true">#</a> isNull</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否为空。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNull"</span><span class="token punctuation">,</span><span class="token string">"http://www.yunit.cn"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
<h3 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否是一个数字。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">123.12</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">123.12</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">123.12</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumber"</span><span class="token punctuation">,</span><span class="token number">123.123</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第三个参数为精度校验</p>
</div>
</li>
</ul>
<h3 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否是一个字符串。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isString"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isString"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isString"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isString"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray" aria-hidden="true">#</a> isArray</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否是一个数组。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isArray"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isArray"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isArray"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isArray"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="isnumberover" tabindex="-1"><a class="header-anchor" href="#isnumberover" aria-hidden="true">#</a> isNumberOver</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验数字是否超出指定数字。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberOver"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberOver"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberOver"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberOver"</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第二个参数为要校验的数字，第三个参数为校验第二个参数是否超过此数字大小</p>
</div>
</li>
</ul>
<h3 id="isnumberunder" tabindex="-1"><a class="header-anchor" href="#isnumberunder" aria-hidden="true">#</a> isNumberUnder</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验数字是否小于指定数字。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberUnder"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberUnder"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberUnder"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isNumberUnder"</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第二个参数为要校验的数字，第三个参数为校验第二个参数是否小于此数字大小</p>
</div>
</li>
</ul>
<h3 id="precision" tabindex="-1"><a class="header-anchor" href="#precision" aria-hidden="true">#</a> precision</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验数字数字精度。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1.1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1.12</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1.12</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"precision"</span><span class="token punctuation">,</span><span class="token number">1.12</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第三个参数为校验第二个数字参数的精度是否小于或等于此参数大小</p>
</div>
</li>
</ul>
<h3 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength" aria-hidden="true">#</a> maxLength</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验字符串超出指定长度。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"maxLength"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"maxLength"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"maxLength"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第三个参数为校验第二个字符串参数的长度是否大于此参数大小</p>
</div>
</li>
</ul>
<h3 id="minlength" tabindex="-1"><a class="header-anchor" href="#minlength" aria-hidden="true">#</a> minLength</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验字符小于指定长度。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"minLength"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"minLength"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"minLength"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"minLength"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>第三个参数为校验第二个字符串参数的长度是否小于此参数大小</p>
</div>
</li>
</ul>
<h3 id="isidcard" tabindex="-1"><a class="header-anchor" href="#isidcard" aria-hidden="true">#</a> isIDCard</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否为身份证号码。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIDCard"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIDCard"</span><span class="token punctuation">,</span><span class="token string">"262361943401011371"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIDCard"</span><span class="token punctuation">,</span><span class="token string">"26236194340101137X"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
<h3 id="ismobile" tabindex="-1"><a class="header-anchor" href="#ismobile" aria-hidden="true">#</a> isMobile</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否手机号码。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobile"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobile"</span><span class="token punctuation">,</span><span class="token number">1232221234</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobile"</span><span class="token punctuation">,</span><span class="token number">13232221234</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobile"</span><span class="token punctuation">,</span><span class="token string">"13232221234"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="istelphone" tabindex="-1"><a class="header-anchor" href="#istelphone" aria-hidden="true">#</a> isTelPhone</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否座机号码。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isTelPhone"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isTelPhone"</span><span class="token punctuation">,</span><span class="token number">1232221234</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isTelPhone"</span><span class="token punctuation">,</span><span class="token number">1213125</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isTelPhone"</span><span class="token punctuation">,</span><span class="token string">"0754-1213195"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="ismobileortelphone" tabindex="-1"><a class="header-anchor" href="#ismobileortelphone" aria-hidden="true">#</a> isMobileOrTelPhone</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否手机号码或座机号码。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobileOrTelPhone"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobileOrTelPhone"</span><span class="token punctuation">,</span><span class="token number">1232221234</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobileOrTelPhone"</span><span class="token punctuation">,</span><span class="token number">1213125</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobileOrTelPhone"</span><span class="token punctuation">,</span><span class="token number">13232221234</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMobileOrTelPhone"</span><span class="token punctuation">,</span><span class="token string">"0754-1213195"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
<h3 id="isemail" tabindex="-1"><a class="header-anchor" href="#isemail" aria-hidden="true">#</a> isEmail</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否电子邮箱。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isEmail"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isEmail"</span><span class="token punctuation">,</span><span class="token string">"1@q.com"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h3 id="isplatenumber" tabindex="-1"><a class="header-anchor" href="#isplatenumber" aria-hidden="true">#</a> isPlateNumber</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否车牌号码。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isPlateNumber"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isPlateNumber"</span><span class="token punctuation">,</span><span class="token string">"冀873672"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isPlateNumber"</span><span class="token punctuation">,</span><span class="token string">"冀·873672"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
<h3 id="isurl" tabindex="-1"><a class="header-anchor" href="#isurl" aria-hidden="true">#</a> isUrl</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否网址。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isUrl"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isUrl"</span><span class="token punctuation">,</span><span class="token string">"http://"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isUrl"</span><span class="token punctuation">,</span><span class="token string">"http://www.yunit.c"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isUrl"</span><span class="token punctuation">,</span><span class="token string">"http://www.yunit.cn"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isUrl"</span><span class="token punctuation">,</span><span class="token string">"ftp://www.yunit.cn"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
<h3 id="isipaddress" tabindex="-1"><a class="header-anchor" href="#isipaddress" aria-hidden="true">#</a> isIpAddress</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否ip地址。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIpAddress"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIpAddress"</span><span class="token punctuation">,</span><span class="token string">"192.168.1.2"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIpAddress"</span><span class="token punctuation">,</span><span class="token string">"192.256.1.2"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isIpAddress"</span><span class="token punctuation">,</span><span class="token string">"255.255.255.0"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
<h3 id="ismacaddress" tabindex="-1"><a class="header-anchor" href="#ismacaddress" aria-hidden="true">#</a> isMacAddress</h3>
<ul>
<li>
<p><strong>说明</strong>：</p>
<p>校验是否mac地址。</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMacAddress"</span><span class="token punctuation">,</span><span class="token string">"128:330:20:0A:8C:6D"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">"isMacAddress"</span><span class="token punctuation">,</span><span class="token string">"08:00:20:0A:8C:6D"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h2>
<p>此分类为数据资源请求相关的公共方法分类，此分类需要追加分类名（IDM.http.方法名）访问下列的方法。</p>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>get(path, params, options, rootPath)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [path]</code> 请求地址，此地址会经 <RouterLink to="/zh/coreapi/api.html#getwebpath">getWebPath</RouterLink> 转换</li>
<li><code>{Object} [params]</code>  携带参数</li>
<li><code>{Object} [options]</code>  请求选项，如果为字符串则会直接当做rootPath参数</li>
<li><code>{String} [rootPath]</code>  可选，如果options参数为字符串则此参数无效</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'api/getMyInfo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">'1b1d18d830c44b509d4fa730fa9d0b9b'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟Get请求成功'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟Get请求失败'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">always</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">debugger</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>基于 <a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a> 的 get 请求方法。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：</p>
<p>Axios 中文文档：<a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">Axios中文<ExternalLinkIcon/></a></p>
<p>Axios 英文文档：<a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios英文<ExternalLinkIcon/></a></p>
<p>Axios Github：<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>post(path, params, options, rootPath)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [path]</code> 请求地址，此地址会经 <RouterLink to="/zh/coreapi/api.html#getwebpath">getWebPath</RouterLink> 转换</li>
<li><code>{Object} [params]</code>  携带参数</li>
<li><code>{Object} [options]</code>  请求选项，如果为字符串则会直接当做rootPath参数</li>
<li><code>{String} [rootPath]</code>  可选，如果options参数为字符串则此参数无效</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'api/saveMyInfo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">userName</span><span class="token operator">:</span><span class="token string">"申龙"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">mobile</span><span class="token operator">:</span><span class="token string">"11000000000"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟Post请求成功'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟Post请求失败'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">always</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">debugger</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>基于 <a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a> 的 post 请求方法。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：</p>
<p>Axios 中文文档：<a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">Axios中文<ExternalLinkIcon/></a></p>
<p>Axios 英文文档：<a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios英文<ExternalLinkIcon/></a></p>
<p>Axios Github：<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> all</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>all(arr)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [arr]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345/permissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> acct <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> perm <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>基于 <a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a> 的 all 并发请求方法。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：</p>
<p>Axios 中文文档：<a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">Axios中文<ExternalLinkIcon/></a></p>
<p>Axios 英文文档：<a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios英文<ExternalLinkIcon/></a></p>
<p>Axios Github：<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="upload" tabindex="-1"><a class="header-anchor" href="#upload" aria-hidden="true">#</a> upload</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>upload(path, file, params, options, rootPath)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [path]</code> 请求地址，此地址会经 <RouterLink to="/zh/coreapi/api.html#getwebpath">getWebPath</RouterLink> 转换</li>
<li><code>{File} [file]</code>  文件对象</li>
<li><code>{Object} [params]</code>  上传时携带的参数</li>
<li><code>{Object} [options]</code>  请求选项，如果为字符串则会直接当做rootPath参数</li>
<li><code>{String} [rootPath]</code>  可选，如果options参数为字符串则此参数无效</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">'api/uploadFileServerUrl'</span><span class="token punctuation">,</span> file<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">"uploadType"</span><span class="token operator">:</span><span class="token string">"custom"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟上传文件成功'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'模拟上传文件失败'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">always</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">debugger</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>基于 <a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a> 的 post 实现的文件上传方法。
上传的文件字段名为<code>file</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更多用法请参考：</p>
<p>Axios 中文文档：<a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">Axios中文<ExternalLinkIcon/></a></p>
<p>Axios 英文文档：<a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios英文<ExternalLinkIcon/></a></p>
<p>Axios Github：<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a></p>
</div>
</li>
</ul>
<h3 id="importfiles" tabindex="-1"><a class="header-anchor" href="#importfiles" aria-hidden="true">#</a> importFiles</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>importFiles(files)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [files]</code> 要加载的资源数组</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> configUrl <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"$/js/libs/UEditor/ueditor.config.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fileUrl <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">getWebPath</span><span class="token punctuation">(</span><span class="token string">"$/js/libs/UEditor/ueditor.all.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">importFiles</span><span class="token punctuation">(</span><span class="token punctuation">[</span>configUrl<span class="token punctuation">,</span>fileUrl<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//加载完成</span>
  <span class="token comment">//this.renderEditor();</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"加载UEditor.js文件出错"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>       
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>动态加载js、css等静态资源。</p>
</li>
</ul>
<h2 id="broadcast" tabindex="-1"><a class="header-anchor" href="#broadcast" aria-hidden="true">#</a> broadcast</h2>
<p>此分类为消息桥接、广播、组件通信等相关的公共方法分类，此分类需要追加分类名（IDM.broadcast.方法名）访问下列的方法。</p>
<h3 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>send(object)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [object]</code></li>
</ul>
<p>Object的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span>any<span class="token punctuation">,</span>
  <span class="token property">"rangeModule"</span><span class="token operator">:</span><span class="token null keyword">null</span>|Array<span class="token punctuation">,</span>
  <span class="token property">"className"</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
  <span class="token property">"globalSend"</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span>
  <span class="token property">"messageKey"</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
  <span class="token property">"triggerType"</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><table>
<thead>
<tr>
<th>key</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>消息类型，内置协议值参考下方</td>
</tr>
<tr>
<td>message</td>
<td>实际的消息对象</td>
</tr>
<tr>
<td>rangeModule</td>
<td>为空发送给全部，指定组件对象的packageid值，用法参考下方rangeModule 获取方式</td>
</tr>
<tr>
<td>className</td>
<td>指定组件的类名，比如只给文本组件（类名：IText）发送，然后再去过滤上面的值</td>
</tr>
<tr>
<td>globalSend</td>
<td>如果为true则全站发送消息（即相邻的跨页面发送），注意全站rangeModule是无效的，只有className才有效，默认为false</td>
</tr>
<tr>
<td>messageKey</td>
<td>消息的key值</td>
</tr>
<tr>
<td>triggerType</td>
<td>消息变化触发的类型值，AT：自动触发的，MT：手动切换触发的，OT：其他方式触发的</td>
</tr>
<tr>
<td>...</td>
<td>其他自定义的类型值，但是建议要在组件文档中写明用处，方便其他组件配合适用</td>
</tr>
</tbody>
</table>
<p><strong>type 内置协议值</strong>：</p>
<ul>
<li>linkageResult：组件联动传结果值</li>
<li>linkageDemand：组件联动传需求值</li>
<li>linkageReload：联动组件重新加载</li>
<li>linkageOpenDialog：打开弹窗</li>
<li>linkageCloseDialog：关闭弹窗</li>
<li>linkageShowModule：显示组件</li>
<li>linkageHideModule：隐藏组件</li>
<li>linkageResetDefaultValue：重置默认值</li>
</ul>
<p><strong>rangeModule 获取方式</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//rangeModule 需要的数组</span>
<span class="token keyword">var</span> moduleIdArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">/*
此处为vue的写法，
propData为组件属性的实际设置值对象，
linkageDemandPageModule为具体的属性值（这里代表为下拉框联动的组件范围），
使用了组件属性控件type为pageModuleSelect的属性控件
*/</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>linkageDemandPageModule<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span><span class="token punctuation">{</span>
  moduleIdArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>moduleId<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//下拉框选择的对象</span>
<span class="token keyword">var</span> selectObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//rangeModule 需要的数组</span>
<span class="token keyword">var</span> moduleIdArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">/*
此处为vue的写法，
propData为组件属性的实际设置值对象，
linkageDemandPageModule为具体的属性值（这里代表为下拉框联动的组件范围），
使用了组件属性控件type为pageModuleSelect的属性控件
*/</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>linkageDemandPageModule<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span><span class="token punctuation">{</span>
  moduleIdArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>moduleId<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * formFiledKey代表为表单字段的key，这里只是做示例，实际请根据自己定义的属性与需求修改
 * ctrlId代表组件的id，也是自己定义的
 * option代表触发消息所变动的类型，AT：自动触发的（比如数据回显绑定切换的），MT：手动触发的（比如手动切换下拉框值）
 */</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"linkageDemand"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span>selectObject<span class="token punctuation">,</span>
  <span class="token literal-property property">rangeModule</span><span class="token operator">:</span>moduleIdArray<span class="token punctuation">,</span>
  <span class="token literal-property property">messageKey</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>formFiledKey<span class="token operator">||</span><span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>ctrlId<span class="token punctuation">,</span>
  <span class="token literal-property property">triggerType</span><span class="token operator">:</span>option<span class="token operator">===</span><span class="token boolean">true</span><span class="token operator">?</span><span class="token string">'AT'</span><span class="token operator">:</span><span class="token punctuation">(</span>option<span class="token operator">?</span><span class="token string">'MT'</span><span class="token operator">:</span><span class="token string">'OT'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>用于组件直接的消息发送，消息广播，组件之间的通信等等。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>组件接收消息请参考：组件开发的<RouterLink to="/zh/moduledevelop/communication.html">组件通信</RouterLink> 或 <RouterLink to="/zh/moduledevelop/builtin.html">内置方法</RouterLink> - <RouterLink to="/zh/moduledevelop/builtin.html#receivebroadcastmessage">receiveBroadcastMessage</RouterLink></p>
</div>
</li>
</ul>
<h3 id="getmodulecontextvalue" tabindex="-1"><a class="header-anchor" href="#getmodulecontextvalue" aria-hidden="true">#</a> getModuleContextValue</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getModuleContextValue(pageModuleList,groupKey)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [pageModuleList]</code> 可选，组件的集合</li>
<li><code>{String} [groupKey]</code> 可选，组件的分组key，要使用此参数（组件的分组属性）的话组件属性的<code>bindKey</code>必须为<code>formGroupKey</code>值。</li>
</ul>
<p>pageModuleList的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token property">"moduleId"</span><span class="token operator">:</span><span class="token string">"组件的packageid"</span><span class="token punctuation">,</span>
  <span class="token property">"moduleName"</span><span class="token operator">:</span><span class="token string">"组件的asName"</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p><strong>返回值</strong>：<code>Object</code>|<code>{resultData:组件返回的数据对象,errorData:&quot;组件验证的错误的数据对象&quot;}</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token doc-comment comment">/**
 * 组件范围选择返回的格式：
  * [
  *  <span class="token punctuation">{</span>
  *  moduleId:packageid,
  *  moduleName:asName
  *  <span class="token punctuation">}</span>
  * ]
  */</span>
<span class="token keyword">let</span> pageModuleSelectDataMultiple <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>pageModuleSelectDataMultiple<span class="token punctuation">;</span>
<span class="token comment">//表单分组标识</span>
<span class="token keyword">let</span> formGroupKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>formGroupKey<span class="token punctuation">;</span>
<span class="token comment">//所有返回结果</span>
<span class="token keyword">let</span> moduleAllData <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">getModuleContextValue</span><span class="token punctuation">(</span>pageModuleSelectDataMultiple<span class="token punctuation">,</span>formGroupKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>moduleAllData<span class="token punctuation">.</span>errorData<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//有校验失败的，不提交数据</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//验证通过，可以对 moduleAllData.resultData进行提交处理</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>用于获取组件内部处理后的上下文数据结果，可用于组件的数据获取、进行整体表单数据提交至后端保存等等功能需求。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>获取组件处理后结果需要组件提供了内部方法：组件开发的<RouterLink to="/zh/moduledevelop/builtin.html">内置方法</RouterLink> - <RouterLink to="/zh/moduledevelop/builtin.html#getcontextvalue">getContextValue</RouterLink></p>
</div>
</li>
</ul>
<h3 id="getrangemodule" tabindex="-1"><a class="header-anchor" href="#getrangemodule" aria-hidden="true">#</a> getRangeModule</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getRangeModule(pageModuleList,groupKey)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Array} [pageModuleList]</code> 必选，组件的集合</li>
<li><code>{String} [groupKey]</code> 必选，组件的分组key，要使用此参数（组件的分组属性）的话组件属性的<code>bindKey</code>必须为<code>formGroupKey</code>值。</li>
</ul>
<p>pageModuleList的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token property">"moduleId"</span><span class="token operator">:</span><span class="token string">"组件的packageid"</span><span class="token punctuation">,</span>
  <span class="token property">"moduleName"</span><span class="token operator">:</span><span class="token string">"组件的asName"</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p><strong>返回值</strong>：<code>Array</code>|<code>[&quot;packageid&quot;,...]</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 组件范围选择返回的格式：
  * [
  *  <span class="token punctuation">{</span>
  *  moduleId:packageid,
  *  moduleName:asName
  *  <span class="token punctuation">}</span>
  * ]
  */</span>
<span class="token keyword">let</span> pageModuleSelectDataMultiple <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>pageModuleSelectDataMultiple<span class="token punctuation">;</span>
<span class="token comment">//表单分组标识</span>
<span class="token keyword">let</span> formGroupKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>formGroupKey<span class="token punctuation">;</span>
<span class="token keyword">let</span> moduleIdArray <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">getRangeModule</span><span class="token punctuation">(</span>pageModuleSelectDataMultiple<span class="token punctuation">,</span>formGroupKey<span class="token punctuation">)</span>
<span class="token comment">//获取后可用于发送 linkageResetDefaultValue：重置默认值 类型进行表单重置等等用途</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>根据提供的组件集合和组件分组key来获取所有组件的 packageid。</p>
</li>
</ul>
<h3 id="opendialog" tabindex="-1"><a class="header-anchor" href="#opendialog" aria-hidden="true">#</a> openDialog</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>openDialog(option)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [option]</code></li>
</ul>
<p>option的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"moduleId"</span><span class="token operator">:</span><span class="token string">"窗口ID"</span><span class="token punctuation">,</span>
  <span class="token comment">/*当只有一个iframe的时候直接为iframe的地址string类型即可，
  当弹出窗内有多个iframe时候请使用数组形式，
  [{name:'iframe的name',url:''}]，
  如果为非iframe则留空即可*/</span>
  <span class="token property">"openUrl"</span><span class="token operator">:</span><span class="token string">"打开的url地址"</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span><span class="token string">"层弹出后的成功回调方法"</span><span class="token punctuation">,</span>
  <span class="token property">"yes"</span><span class="token operator">:</span><span class="token string">"确定按钮回调方法"</span><span class="token punctuation">,</span>
  <span class="token property">"cancel"</span><span class="token operator">:</span><span class="token string">"关闭触发的回调"</span><span class="token punctuation">,</span>
  <span class="token property">"end"</span><span class="token operator">:</span><span class="token string">"层销毁后触发的回调"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//比如打开的窗口为iframe内嵌网页的窗口，这个窗口的内容是由页面配置，并非单个组件提供的</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">"moduleId"</span><span class="token operator">:</span><span class="token string">"dkjdfkdfiukjasas123fj123"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"openUrl"</span><span class="token operator">:</span><span class="token string">"http://www.yunit.cn"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"success"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"yes"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"cancel"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"end"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>用于打开指定ID的窗口类型的组件，此方法一般在页面动作中要自定义扩展js的时候会非常有用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此方法可全站打开窗口（即相邻的跨页面打开窗口）</p>
</div>
</li>
</ul>
<h3 id="closedialog" tabindex="-1"><a class="header-anchor" href="#closedialog" aria-hidden="true">#</a> closeDialog</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>closeDialog(option)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [option]</code></li>
</ul>
<p>option的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"moduleId"</span><span class="token operator">:</span><span class="token string">"窗口ID"</span> or <span class="token punctuation">[</span><span class="token string">"窗口ID1"</span><span class="token punctuation">,</span><span class="token string">"窗口ID2"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">closeDialog</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dkjdfkdfiukjasas123fj123"</span><span class="token punctuation">,</span><span class="token string">"233443344354545fgffggf"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于关闭指定ID的窗口类型的组件，此方法一般在页面动作中要自定义扩展js的时候会非常有用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此方法可全站关闭窗口（即相邻的跨页面关闭窗口）</p>
</div>
</li>
</ul>
<h3 id="opencontrolsetpanel" tabindex="-1"><a class="header-anchor" href="#opencontrolsetpanel" aria-hidden="true">#</a> openControlSetPanel</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>openControlSetPanel(option)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [option]</code></li>
</ul>
<p>option的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">"param"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">"marketModuleId"</span><span class="token operator">:</span><span class="token string">"必填，市场组件的ID，组件内取this.moduleObject.comId即可"</span><span class="token punctuation">,</span>
  <span class="token property">"pageId"</span><span class="token operator">:</span><span class="token string">"必填，页面的ID，直接使用 IDM.broadcast.pageModule.id 即可获取"</span><span class="token punctuation">,</span>
  <span class="token property">"packageid"</span><span class="token operator">:</span><span class="token string">"必填，组件实例的ID，主要用于区别页面的同一个组件，直接使用 this.moduleObject.packageid 即可获取到"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token property">"showTop"</span><span class="token operator">:</span><span class="token string">"默认为true，设置是否显示在最顶级页面中，这样做的目的是为了在跨页面的时候遮罩显示在最外面，能覆盖整个窗口"</span><span class="token punctuation">,</span>
 <span class="token property">"success"</span><span class="token operator">:</span><span class="token string">"层弹出后的成功回调方法"</span><span class="token punctuation">,</span>
 <span class="token property">"yes"</span><span class="token operator">:</span><span class="token string">"确定按钮回调方法"</span><span class="token punctuation">,</span>
 <span class="token property">"reset"</span><span class="token operator">:</span><span class="token string">"重置后的回调"</span><span class="token punctuation">,</span>
 <span class="token property">"other"</span><span class="token operator">:</span><span class="token string">"关闭或其他按钮触发回调方法"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
<li>
<p><strong>返回值</strong>：<code>String</code> 返回控制中心窗口的ID</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//组件内调用</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">openControlSetPanel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">"param"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">"marketModuleId"</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleObject<span class="token punctuation">.</span>comId<span class="token punctuation">,</span>
    <span class="token string-property property">"pageId"</span><span class="token operator">:</span><span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span>pageModule<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token string-property property">"packageid"</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleObject<span class="token punctuation">.</span>packageid
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"showTop"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"success"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"yes"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//确定后控制中心的表单数据保存了，可以再次调用获取方法获取已经保存的个性化组件属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"reset"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//重置后可重新获取到初始值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"other"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//关闭或其他按钮触发回调方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>用于打开控制中心的设置窗口，此方法一般在页面动作中要自定义扩展js的时候会非常有用或者组件内部js直接调用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此方法可全站打开控制中心的设置窗口（即相邻的跨页面打开）</p>
</div>
</li>
</ul>
<h3 id="closecontrolsetpanel" tabindex="-1"><a class="header-anchor" href="#closecontrolsetpanel" aria-hidden="true">#</a> closeControlSetPanel</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>closeControlSetPanel(option)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [option]</code></li>
</ul>
<p>option的格式为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"controlSetPanelId"</span><span class="token operator">:</span><span class="token string">"控制面板窗口ID"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">closeControlSetPanel</span><span class="token punctuation">(</span><span class="token string">"233443344354545fgffggf"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于关闭指定ID（上述<RouterLink to="/zh/coreapi/api.html#opencontrolsetpanel">打开方法</RouterLink>返回的ID）的控制中心窗口，此方法一般在页面动作中要自定义扩展js的时候会非常有用或者组件内部js直接调用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此方法可全站关闭控制中心的设置窗口（即相邻的跨页面关闭）</p>
</div>
</li>
</ul>
<h2 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h2>
<p>此分类为表达式获取内容等相关的公共方法分类，此分类需要追加分类名（IDM.express.方法名）访问下列的方法。</p>
<p><strong>表达式基础语法：</strong></p>
<ul>
<li>
<p><strong><code>@[a.b.c]</code></strong></p>
<p>用于从对象 <code>{a:{b:{c:1}}}</code> 中获取c的值</p>
</li>
<li>
<p><strong><code>@[a[n].b[n].c]</code></strong></p>
<p>用于从对象 <code>{a:[{b:[{c:1}]}]}</code> 中获取c的值</p>
</li>
<li>
<p><strong><code>@[url('abc')]</code></strong></p>
<p>用于从当前页面的 url 中获取参数abc的值</p>
</li>
<li>
<p><strong><code>@[has('@[123]')]</code></strong></p>
<p>用于判断指定的字符串中是否存在表达式</p>
</li>
<li>
<p><strong><code>@[filePath('[{&quot;relativePath&quot;:&quot;abc/1.0.0/main.js&quot;}]')]</code></strong></p>
<p>用于获取数组或对象中的relativePath的值</p>
</li>
<li>
<p><strong><code>@[map([{\&quot;abc\&quot;:\&quot;123\&quot;}],0,'abc')]</code></strong></p>
<p>用于获取指定数组中的对象索引并从对象中获取指定key的值</p>
</li>
</ul>
<h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>replace(expressStr, data, isFlag)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [expressStr]</code> 带有表达式的字符串</li>
<li><code>{Object} [data]</code> 携带的数据对象，表达式可以从这里面获取</li>
<li><code>{Boolean} [isFlag]</code> 未找到是否返回空字符串，true：返回空字符串，false：返回undefined，默认为 true</li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>String</code> 返回替换表达式后的结果</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[a]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">ab</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => ''</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[a]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">ab</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// => undefined</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[a]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => 1233</span>

<span class="token comment">/*假设url中携带abc=123参数*/</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[url('abc')+'---'+abc]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">abc</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => '123---1233'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[has('@[123]')]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[has('123')]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[filePath('[{\"relativePath\":\"abc/1.0.0/main.js\"}]')]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// => 'abc/1.0.0/main.js'</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[map([{\"abc\":\"123\"}],0,'abc')]"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token comment">// => '123'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>用于替换第一个参数<code>expressStr</code>中书写了表达式的值，并返回替换后的结果。这个方法非常实用，在组件开发中、属性填写中、页面扩展js中都能用到。</p>
</li>
</ul>
<h3 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>eval(expressStr, data)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [expressStr]</code> 带有表达式的脚本字符串</li>
<li><code>{Object} [data]</code> 携带的数据对象，表达式可以从这里面获取</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"alert(@[a])"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">ab</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => 弹出 undefined</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"alert(@[a])"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => 弹出 1233</span>

<span class="token comment">/*假设url中携带abc=123参数*/</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"alert(@[url('abc')+'---'+abc])"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">abc</span><span class="token operator">:</span><span class="token number">1233</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => 弹出 '123---1233'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用于执行第一个参数<code>expressStr</code>中书写了表达式的脚本。</p>
</li>
</ul>
<h3 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>has(expressStr)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [expressStr]</code> 带有表达式的字符串</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"@[url('abc')]"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[has('123')]"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>

<span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"@[has('@[123]')]"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用于判断表达式字符串中是否有合格表达式，表达式语法请参考：<RouterLink to="/zh/coreapi/api.html#express">表达式基础语法</RouterLink></p>
</li>
</ul>
<h2 id="cachepool" tabindex="-1"><a class="header-anchor" href="#cachepool" aria-hidden="true">#</a> cachePool</h2>
<p>此分类为map缓存池的公共方法分类，此分类不需要追加分类名直接调用，并传最大缓存池参数（<code>IDM.cachePool(最大缓存数字).方法名</code>）进行调用以下方法</p>
<h3 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>put(key, value)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [key]</code></li>
<li><code>{Object} [value]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mapCache <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">cachePool</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr0"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr1"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr2"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>此方法用于往缓存池追加map数据，如果数量超过指定的最大值，则删除前面的缓存map数据</p>
</li>
</ul>
<h3 id="get-1" tabindex="-1"><a class="header-anchor" href="#get-1" aria-hidden="true">#</a> get</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>get(key)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [key]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mapCache <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span><span class="token function">cachePool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr0"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr1"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr0"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"keystr2"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mapCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"keystr0"</span><span class="token punctuation">)</span> <span class="token comment">// => undefined</span>

mapCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"keystr2"</span><span class="token punctuation">)</span> <span class="token comment">// => 456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>此方法用于获取缓存池中的数据</p>
</li>
</ul>
<h2 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> app</h2>
<p>此分类为应用程序信息存储的公共方法分类，此分类需要追加分类名（IDM.app.方法名）访问下列的方法。</p>
<h3 id="getappinfo" tabindex="-1"><a class="header-anchor" href="#getappinfo" aria-hidden="true">#</a> getAppInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getAppInfo()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">getAppInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => {...}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于获取当前页面存储共享应用程序信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E5%BA%94%E7%94%A8%E4%BF%A1%E6%81%AF">应用信息</RouterLink></p>
</li>
</ul>
<h3 id="setappinfo" tabindex="-1"><a class="header-anchor" href="#setappinfo" aria-hidden="true">#</a> setAppInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>setAppInfo(object)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [object]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">setAppInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">appName</span><span class="token operator">:</span><span class="token string">"IDM低代码"</span><span class="token punctuation">,</span><span class="token literal-property property">appId</span><span class="token operator">:</span><span class="token string">"abc123"</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于设置当前页面共享应用程序信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E5%BA%94%E7%94%A8%E4%BF%A1%E6%81%AF">应用信息</RouterLink></p>
</li>
</ul>
<h2 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h2>
<p>此分类为当前登录用户信息存储的公共方法分类，此分类需要追加分类名（IDM.user.方法名）访问下列的方法。</p>
<h3 id="getcurrentuserinfo" tabindex="-1"><a class="header-anchor" href="#getcurrentuserinfo" aria-hidden="true">#</a> getCurrentUserInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getCurrentUserInfo()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">getCurrentUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => {...}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于获取当前登录用户信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF">用户信息</RouterLink></p>
</li>
</ul>
<h3 id="setcurrentuserinfo" tabindex="-1"><a class="header-anchor" href="#setcurrentuserinfo" aria-hidden="true">#</a> setCurrentUserInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>setCurrentUserInfo(object)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [object]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">setCurrentUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userName</span><span class="token operator">:</span><span class="token string">"IDM无限"</span><span class="token punctuation">,</span><span class="token literal-property property">userId</span><span class="token operator">:</span><span class="token string">"user123"</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于设置当前登录用户信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF">用户信息</RouterLink></p>
</li>
</ul>
<h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h2>
<p>此分类为当前登录用户主题存储的公共方法分类，此分类需要追加分类名（IDM.theme.方法名）访问下列的方法。</p>
<h3 id="getcurrentthemeinfo" tabindex="-1"><a class="header-anchor" href="#getcurrentthemeinfo" aria-hidden="true">#</a> getCurrentThemeInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>getCurrentThemeInfo()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>theme<span class="token punctuation">.</span><span class="token function">getCurrentThemeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => {...}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于获取当前用户设置的主题信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E5%BA%94%E7%94%A8%E4%B8%BB%E9%A2%98">应用主题</RouterLink></p>
</li>
</ul>
<h3 id="setcurrentthemeinfo" tabindex="-1"><a class="header-anchor" href="#setcurrentthemeinfo" aria-hidden="true">#</a> setCurrentThemeInfo</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>setCurrentThemeInfo(object)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [object]</code></li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>theme<span class="token punctuation">.</span><span class="token function">setCurrentThemeInfo</span><span class="token punctuation">(</span><span class="token string">"idm-theme-blue"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于设置当前登录用户的主题信息，信息初始化参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E5%BA%94%E7%94%A8%E4%B8%BB%E9%A2%98">应用主题</RouterLink></p>
</li>
</ul>
<h2 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark" aria-hidden="true">#</a> watermark</h2>
<p>此分类为水印设置与关闭的公共方法分类，此分类需要追加分类名（IDM.watermark.方法名）访问下列的方法。</p>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>set($el, type, mainContent, text1, option)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{HTMLElement} [$el]</code> 要添加到的元素位置</li>
<li><code>{Number} [type]</code> 0：背景水印，1：水印置顶</li>
<li><code>{String} [mainContent]</code> 可为图片路径（只支持带.png,.jpg,.jpeg后缀的），可为文字内容。如果为路径会经过IDM提供的核心方法<code>IDM.url.getWebPath</code>进行地址转换，更多用法请参考： <RouterLink to="/zh/coreapi/api.html#getwebpath">标准API</RouterLink></li>
<li><code>{String} [text1]</code> 再次要添加的文字内容</li>
<li><code>{Object} [option]</code> 其他选项
option的格式为：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"fontColor"</span><span class="token operator">:</span><span class="token string">"字体颜色"</span><span class="token punctuation">,</span>
  <span class="token property">"fontSize"</span><span class="token operator">:</span><span class="token string">"字体大小，例如：18px"</span><span class="token punctuation">,</span>
  <span class="token property">"width"</span><span class="token operator">:</span> <span class="token string">"水印宽度，例如：200"</span><span class="token punctuation">,</span>
  <span class="token property">"height"</span><span class="token operator">:</span> <span class="token string">"水印高度，例如：200"</span><span class="token punctuation">,</span>
  <span class="token property">"rotate"</span><span class="token operator">:</span> <span class="token string">"旋转角度，例如：45"</span><span class="token punctuation">,</span>
  <span class="token property">"imgSize"</span><span class="token operator">:</span> <span class="token string">"图片大小，例如：44"</span><span class="token punctuation">,</span>
  <span class="token property">"imgLeftSize"</span><span class="token operator">:</span> <span class="token string">"图片偏移(X)，例如：11"</span><span class="token punctuation">,</span>
  <span class="token property">"fontLeftSize"</span><span class="token operator">:</span><span class="token string">"文字偏移(X)，例如：11"</span><span class="token punctuation">,</span>
  <span class="token property">"opacity"</span><span class="token operator">:</span> <span class="token string">"水印透明度，例如：0.11"</span><span class="token punctuation">,</span>
  <span class="token property">"topSize"</span><span class="token operator">:</span> <span class="token string">"整体偏移(Y)，例如：11"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//propData为页面设置的属性数据</span>
<span class="token keyword">var</span> _watermarkFont <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>propData<span class="token punctuation">.</span>watermarkFont<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token constant">IDM</span><span class="token operator">:</span> <span class="token constant">IDM</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  _watermarkFont1 <span class="token operator">=</span> <span class="token constant">IDM</span><span class="token punctuation">.</span>express<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>propData<span class="token punctuation">.</span>watermarkFont1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token constant">IDM</span><span class="token operator">:</span> <span class="token constant">IDM</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//文字水印</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>watermark<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>idm_page_root<span class="token punctuation">,</span>
  propData<span class="token punctuation">.</span>watermarkZindex<span class="token punctuation">,</span>
  propData<span class="token punctuation">.</span>watermarkType <span class="token operator">!=</span> <span class="token string">"font"</span>
    <span class="token operator">?</span> propData<span class="token punctuation">.</span>watermarkImg
    <span class="token operator">:</span> _watermarkFont<span class="token punctuation">,</span>
  propData<span class="token punctuation">.</span>watermarkType <span class="token operator">==</span> <span class="token string">"image"</span> <span class="token operator">?</span> <span class="token string">""</span> <span class="token operator">:</span> _watermarkFont1<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">fontColor</span><span class="token operator">:</span>
      propData<span class="token punctuation">.</span>watermarkColor <span class="token operator">&amp;&amp;</span> propData<span class="token punctuation">.</span>watermarkColor<span class="token punctuation">.</span>hex8<span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propData<span class="token punctuation">.</span>watermarkFontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkSize<span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkSize<span class="token punctuation">,</span>
    <span class="token literal-property property">rotate</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkRotate<span class="token punctuation">,</span>
    <span class="token literal-property property">imgSize</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkImgSize<span class="token punctuation">,</span>
    <span class="token literal-property property">imgLeftSize</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkImgLeftSize<span class="token punctuation">,</span>
    <span class="token literal-property property">fontLeftSize</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkFontLeftSize<span class="token punctuation">,</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkOpacity <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">topSize</span><span class="token operator">:</span> propData<span class="token punctuation">.</span>watermarkTopSize<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>用于设置水印样式，参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E6%B0%B4%E5%8D%B0%E8%AE%BE%E7%BD%AE">水印设置</RouterLink></p>
</li>
</ul>
<h3 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>close($el)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{HTMLElement} [$el]</code> 要移除水印的元素位置</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>watermark<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>idm_page_root<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于移除水印样式，参考：页面属性的 <RouterLink to="/zh/guide/developtool.html#%E6%B0%B4%E5%8D%B0%E8%AE%BE%E7%BD%AE">水印设置</RouterLink></p>
</li>
</ul>
<h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h2>
<p>此分类为消息提醒功能的公共方法分类，此分类需要追加分类名（IDM.message.方法名）访问下列的方法。</p>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>config(cfg)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [cfg]</code> 全局配置信息
cfg的格式为：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"position"</span><span class="token operator">:</span><span class="token string">"位置，仅支持'center','right','left',默认'center'"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"类型，支持'info','warning','success','error','loading'"</span><span class="token punctuation">,</span> 
  <span class="token property">"showClose"</span><span class="token operator">:</span><span class="token string">"是否显示关闭图标，默认为false不显示"</span><span class="token punctuation">,</span>
  <span class="token property">"timeout"</span><span class="token operator">:</span><span class="token string">"多久后自动关闭，单位ms,默认2500"</span><span class="token punctuation">,</span>
  <span class="token property">"autoClose"</span><span class="token operator">:</span><span class="token string">"是否自动关闭，默认true,注意在type为loading的时候自动关闭为false"</span><span class="token punctuation">,</span>
  <span class="token property">"content"</span><span class="token operator">:</span><span class="token string">"提示的内容"</span><span class="token punctuation">,</span>
  <span class="token property">"onClose"</span><span class="token operator">:</span><span class="token string">"关闭的回调函数"</span><span class="token punctuation">,</span>
  <span class="token property">"maxNums"</span><span class="token operator">:</span><span class="token string">"5 最大的提醒数量"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//设置消息弹出的默认配置信息</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"position"</span><span class="token operator">:</span><span class="token string">"right"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用成功消息提醒，显示在右边</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"保存成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>用于全局修改覆盖消息提醒的默认配置项。</p>
</li>
</ul>
<h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>info(txt,config)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [txt]</code> 要提醒的内容</li>
<li><code>{Object} [config]</code> 可修改覆盖默认配置项，请参考<RouterLink to="/zh/coreapi/api.html#config">config</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code> 当前提醒的对象</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"信息提醒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于弹出信息提醒</p>
</li>
</ul>
<h3 id="warning" tabindex="-1"><a class="header-anchor" href="#warning" aria-hidden="true">#</a> warning</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>warning(txt,config)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [txt]</code> 要提醒的内容</li>
<li><code>{Object} [config]</code> 可修改覆盖默认配置项，请参考<RouterLink to="/zh/coreapi/api.html#config">config</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code> 当前提醒的对象</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">"警告提醒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于弹出警告提醒</p>
</li>
</ul>
<h3 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> success</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>success(txt,config)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [txt]</code> 要提醒的内容</li>
<li><code>{Object} [config]</code> 可修改覆盖默认配置项，请参考<RouterLink to="/zh/coreapi/api.html#config">config</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code> 当前提醒的对象</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"成功提醒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于弹出成功提醒</p>
</li>
</ul>
<h3 id="error-1" tabindex="-1"><a class="header-anchor" href="#error-1" aria-hidden="true">#</a> error</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>error(txt,config)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [txt]</code> 要提醒的内容</li>
<li><code>{Object} [config]</code> 可修改覆盖默认配置项，请参考<RouterLink to="/zh/coreapi/api.html#config">config</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code> 当前提醒的对象</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"错误提醒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于弹出错误提醒</p>
</li>
</ul>
<h3 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> loading</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>loading(txt,config)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [txt]</code> 要提醒的内容</li>
<li><code>{Object} [config]</code> 可修改覆盖默认配置项，请参考<RouterLink to="/zh/coreapi/api.html#config">config</RouterLink></li>
</ul>
</li>
<li>
<p><strong>返回值</strong>：<code>Object</code> 当前提醒的对象</p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">"正在加载中..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于弹出加载中状态</p>
</li>
</ul>
<h3 id="remove-1" tabindex="-1"><a class="header-anchor" href="#remove-1" aria-hidden="true">#</a> remove</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>remove(id)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{String} [id]</code> 要删除的ID，可以从上述返回值的取到</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于移除指定ID的提醒</p>
</li>
</ul>
<h3 id="closeall" tabindex="-1"><a class="header-anchor" href="#closeall" aria-hidden="true">#</a> closeAll</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>closeAll()</code></p>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">IDM</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">closeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于移除所有的提醒</p>
</li>
</ul>
<h2 id="develop" tabindex="-1"><a class="header-anchor" href="#develop" aria-hidden="true">#</a> develop</h2>
<p>此分类为操作开发工具的公共方法分类，此分类需要追加分类名（IDM.develop.方法名）访问下列的方法。</p>
<h3 id="externalmixattributechangehandle" tabindex="-1"><a class="header-anchor" href="#externalmixattributechangehandle" aria-hidden="true">#</a> externalMixAttributeChangeHandle</h3>
<ul>
<li>
<p><strong>定义</strong>：</p>
<p><code>externalMixAttributeChangeHandle(attrData,modulePackageid,attrDataInnerIndex,responseProps)</code></p>
</li>
<li>
<p><strong>参数</strong>：</p>
<ul>
<li><code>{Object} [attrData]</code>  {attrKey1,attrKey2}  要变更的属性对象</li>
<li><code>{String} [modulePackageid]</code> 对应的组件包ID</li>
<li><code>{String} [attrDataInnerIndex]</code> 属性对应的类型，默认为-1是组件属性，如果为组件内部的容器属性，则需要传指定容器的idm-container-index</li>
<li><code>{Boolean} [responseProps]</code> 是否响应props属性，默认为false，如果为true，将会调用idmProps方法把最新的熟悉传递给组件进行响应</li>
</ul>
</li>
<li>
<p><strong>用法</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//newAttrData 为  {attrKey1,attrKey2}  格式</span>
<span class="token comment">//attrDataInnerIndex 为内部组件</span>
<span class="token constant">IDM</span><span class="token punctuation">.</span>develop<span class="token punctuation">.</span><span class="token function">externalMixAttributeChangeHandle</span><span class="token punctuation">(</span>newAttrData<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleObject<span class="token punctuation">.</span>packageid<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>此方法用于开发工具对外开放的组件属性修改改变处理函数</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>详细使用请参考组件开发=&gt;组件属性=&gt;<RouterLink to="/zh/moduledevelop/attributes.html#%E5%8F%8D%E5%90%91%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7">反向设置属性</RouterLink></p>
</div>
</li>
</ul>
</template>
