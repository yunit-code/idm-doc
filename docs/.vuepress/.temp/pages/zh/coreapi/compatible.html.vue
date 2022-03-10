<template><h1 id="兼容api" tabindex="-1"><a class="header-anchor" href="#兼容api" aria-hidden="true">#</a> 兼容API</h1>
<h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h2>
<p>增加string的trim函数</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">" 234 "</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => '234'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h2 id="startswiths" tabindex="-1"><a class="header-anchor" href="#startswiths" aria-hidden="true">#</a> startsWiths</h2>
<p>增加string的startsWiths</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"a234b"</span><span class="token punctuation">.</span><span class="token function">startsWiths</span><span class="token punctuation">(</span><span class="token string">"a2"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token string">"a234b"</span><span class="token punctuation">.</span><span class="token function">startsWiths</span><span class="token punctuation">(</span><span class="token string">"a1"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h2 id="endswiths" tabindex="-1"><a class="header-anchor" href="#endswiths" aria-hidden="true">#</a> endsWiths</h2>
<p>增加string的endsWiths</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"a234b"</span><span class="token punctuation">.</span><span class="token function">endsWiths</span><span class="token punctuation">(</span><span class="token string">"4b"</span><span class="token punctuation">)</span> <span class="token comment">// => true</span>

<span class="token string">"a234b"</span><span class="token punctuation">.</span><span class="token function">endsWiths</span><span class="token punctuation">(</span><span class="token string">"a2"</span><span class="token punctuation">)</span> <span class="token comment">// => false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h2>
<p>兼容低版本浏览器没有forEach</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => 1 </span>
<span class="token comment">// => 2 </span>
<span class="token comment">// => 3 </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h2>
<p>兼容低版本浏览器没有filter函数</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token operator">></span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => [2,3] </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
<h2 id="classlist" tabindex="-1"><a class="header-anchor" href="#classlist" aria-hidden="true">#</a> classList</h2>
<p>兼容低版本浏览器没有classList</p>
<ul>
<li><strong>用法</strong>：<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"idm_dialog_wrap"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList
<span class="token comment">/*
{
  "0": "idm_module",
  "1": "component_x8iFzJ7vZMfz0RVC"
}
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
</template>
