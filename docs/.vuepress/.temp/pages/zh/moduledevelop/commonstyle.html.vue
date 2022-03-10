<template><h1 id="样式规范" tabindex="-1"><a class="header-anchor" href="#样式规范" aria-hidden="true">#</a> 样式规范</h1>
<h2 id="基础样式" tabindex="-1"><a class="header-anchor" href="#基础样式" aria-hidden="true">#</a> 基础样式</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*样式重写，这里其实就跟ant design vue的base.less基本一致，所以这里重写也覆盖预览页面，这是基础样式，所有组件都以此样式为基础*/</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.65<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">font-variant</span><span class="token punctuation">:</span> tabular-nums<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-feature-settings</span><span class="token punctuation">:</span> <span class="token string">"tnum"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> pingfang SC<span class="token punctuation">,</span> helvetica neue<span class="token punctuation">,</span> arial<span class="token punctuation">,</span> hiragino sans gb<span class="token punctuation">,</span> microsoft yahei ui<span class="token punctuation">,</span> microsoft yahei<span class="token punctuation">,</span> simsun<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-ms-clear,
input::-ms-reveal</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-ms-viewport</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> device-width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-ms-viewport</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> device-width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="样式规范-1" tabindex="-1"><a class="header-anchor" href="#样式规范-1" aria-hidden="true">#</a> 样式规范</h2>
</template>
