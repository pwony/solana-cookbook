import{_ as p,r as o,o as c,c as l,a as n,b as e,F as r,e as t,d as a}from"./app.28f6b3e6.js";const i={},u=t(`<h1 id="react-native-\u0E41\u0E25\u0E30-solana" tabindex="-1"><a class="header-anchor" href="#react-native-\u0E41\u0E25\u0E30-solana" aria-hidden="true">#</a> React Native \u0E41\u0E25\u0E30 Solana</h1><p>React Native \u0E40\u0E1B\u0E47\u0E19 open-source UI software framework \u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A dev mobile, web \u0E41\u0E25\u0E30 desktop applications \u0E42\u0E14\u0E22\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49 React framework \u0E01\u0E31\u0E1A native platform capabilities \u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E01\u0E31\u0E1A Solana SDK \u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 platform \u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 native Crypto apps.</p><p>\u0E17\u0E32\u0E07\u0E17\u0E35\u0E48\u0E40\u0E23\u0E47\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E01\u0E31\u0E1A React Native \u0E41\u0E25\u0E30 Solana \u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49 <a href="#solana-dapp-scaffold-for-react-native">Solana DApp Scaffold \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A React Native</a>.</p><h2 id="\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49-solana-web3-js-\u0E43\u0E19-react-native-app" tabindex="-1"><a class="header-anchor" href="#\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49-solana-web3-js-\u0E43\u0E19-react-native-app" aria-hidden="true">#</a> \u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49 @solana/web3.js \u0E43\u0E19 React Native app</h2><p>\u0E43\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 React Native app, \u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E41\u0E25\u0E30 configure <code>@solana/web3.js</code> SDK, \u0E41\u0E25\u0E30 dependencies \u0E15\u0E48\u0E32\u0E07\u0E46</p><p>\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E21\u0E35 app \u0E41\u0E25\u0E49\u0E27\u0E43\u0E2B\u0E49\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48 <a href="#install-dependencies">\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 dependencies</a>.</p><h3 id="\u0E2A\u0E23\u0E49\u0E32\u0E07-app-\u0E43\u0E2B\u0E21\u0E48" tabindex="-1"><a class="header-anchor" href="#\u0E2A\u0E23\u0E49\u0E32\u0E07-app-\u0E43\u0E2B\u0E21\u0E48" aria-hidden="true">#</a> \u0E2A\u0E23\u0E49\u0E32\u0E07 app \u0E43\u0E2B\u0E21\u0E48</h3><p>\u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 React Native app \u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 TypeScript, \u0E41\u0E25\u0E49\u0E27 <code>cd</code> \u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19 project directory, \u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E08\u0E30 execute commands \u0E15\u0E48\u0E32\u0E07\u0E46.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx react-native init SolanaReactNative --template react-native-template-typescript
<span class="token builtin class-name">cd</span> SolanaReactNative
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07-dependencies" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07-dependencies" aria-hidden="true">#</a> \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 dependencies</h3><p>\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E40\u0E23\u0E32\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 dependencies. \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E32\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Solana SDK, \u0E41\u0E25\u0E30\u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E19\u0E49\u0E35\u0E40\u0E23\u0E32\u0E22\u0E31\u0E07\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 package \u0E40\u0E1E\u0E37\u0E48\u0E2D patch <code>metro</code> configuration, \u0E41\u0E25\u0E30 polyfills 2 \u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49 patch \u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E2D\u0E07 React Native environment.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @solana/web3.js metro-config react-native-get-random-values react-native-url-polyfill
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="update-index-js" tabindex="-1"><a class="header-anchor" href="#update-index-js" aria-hidden="true">#</a> Update <code>index.js</code></h3><p>\u0E40\u0E1E\u0E37\u0E48\u0E2D load polyfills, \u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E34\u0E14 file <code>index.js</code> \u0E17\u0E35\u0E48 root \u0E02\u0E2D\u0E07 project \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 2 \u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E19\u0E35\u0E49\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E17\u0E35\u0E48 2 \u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07 file:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;react-native-get-random-values&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;react-native-url-polyfill/auto&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="update-metro-config-js" tabindex="-1"><a class="header-anchor" href="#update-metro-config-js" aria-hidden="true">#</a> Update <code>metro.config.js</code></h3><p>\u0E43\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49, \u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 <code>metro</code> configuration, \u0E21\u0E31\u0E19\u0E08\u0E30\u0E44\u0E14\u0E49 load files \u0E17\u0E35\u0E48\u0E21\u0E35\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 <code>cjs</code>.</p><p>\u0E40\u0E1B\u0E34\u0E14 file <code>metro.config.js</code> \u0E17\u0E35\u0E48 root \u0E02\u0E2D\u0E07 project \u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E41\u0E25\u0E30\u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E14\u0E49\u0E27\u0E22 snippet \u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>getDefaultConfig<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;metro-config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolver</span><span class="token operator">:</span> <span class="token punctuation">{</span>sourceExts<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">transformer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">getTransformOptions</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">experimentalImportSupport</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">inlineRequires</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolver</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourceExts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>sourceExts<span class="token punctuation">,</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="update-app-tsx" tabindex="-1"><a class="header-anchor" href="#update-app-tsx" aria-hidden="true">#</a> Update <code>App.tsx</code></h3><p>\u0E21\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 web3.js \u0E43\u0E2A\u0E48\u0E43\u0E19 app \u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E01\u0E31\u0E19\u0E14\u0E35\u0E01\u0E27\u0E48\u0E32!</p><p>\u0E40\u0E1B\u0E34\u0E14 file <code>App.tsx</code> \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 code \u0E19\u0E35\u0E49\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19 function<code>App</code>:</p><p>\u0E43\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49, \u0E40\u0E23\u0E32\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 connection \u0E44\u0E1B\u0E17\u0E35\u0E48 Solana Devnet \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D components load \u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E32\u0E08\u0E30\u0E25\u0E2D\u0E07\u0E2B\u0E32 version \u0E02\u0E2D\u0E07 cluster \u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22\u0E41\u0E25\u0E30 \u0E40\u0E01\u0E47\u0E1A version \u0E19\u0E31\u0E49\u0E19\u0E44\u0E27\u0E49\u0E43\u0E19 component state.</p><p>\u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E19\u0E35\u0E49, \u0E43\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E34\u0E18\u0E35 generate \u0E41\u0E25\u0E30\u0E40\u0E01\u0E47\u0E1A keypair.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&#39;devnet&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>version<span class="token punctuation">,</span> setVersion<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>keypair<span class="token punctuation">,</span> setKeypair<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Keypair<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">randomKeypair</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setKeypair</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>version<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  conn<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> <span class="token function">setVersion</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>version<span class="token punctuation">,</span> setVersion<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Lastly, in the template (or <code>render function</code>) add the following markup:</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token punctuation">{</span>version <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>version<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>keypair <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Keypair<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>keypair<span class="token operator">?.</span>publicKey<span class="token operator">?.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>New Keypair<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>randomKeypair<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07-cocoapods" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07-cocoapods" aria-hidden="true">#</a> \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 cocoapods</h3><p>\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E43\u0E2B\u0E49 polyfills \u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 <code>cocoapods</code> \u0E14\u0E49\u0E27\u0E22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ios <span class="token operator">&amp;&amp;</span> pod <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="start-application" tabindex="-1"><a class="header-anchor" href="#start-application" aria-hidden="true">#</a> Start application</h3><p>\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E32\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E32\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 start app \u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx react-native run-ios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E15\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E2B\u0E47\u0E19 React Native app \u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1A\u0E19 iOS simulator \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E25\u0E02 version \u0E02\u0E2D\u0E07 Solana Devnet.</p><h2 id="solana-dapp-scaffold-\u0E2A\u0E4D\u0E32\u0E2B\u0E23\u0E31\u0E1A-react-native" tabindex="-1"><a class="header-anchor" href="#solana-dapp-scaffold-\u0E2A\u0E4D\u0E32\u0E2B\u0E23\u0E31\u0E1A-react-native" aria-hidden="true">#</a> Solana DApp Scaffold \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A React Native</h2>`,35),d=a("\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 Scaffold \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 download \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 "),k={href:"https://github.com/solana-developers/dapp-scaffold-react-native",target:"_blank",rel:"noopener noreferrer"},b=a("Solana DApp Scaffold for React Native"),m=a("."),h=n("h2",{id:"\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E40\u0E08\u0E2D\u0E1A\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49-solana-web3-js-\u0E01\u0E31\u0E1A-react-native-app",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E40\u0E08\u0E2D\u0E1A\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49-solana-web3-js-\u0E01\u0E31\u0E1A-react-native-app","aria-hidden":"true"},"#"),a(" \u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E40\u0E08\u0E2D\u0E1A\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49 @solana/web3.js \u0E01\u0E31\u0E1A React Native app")],-1),f=n("h3",{id:"error-while-trying-to-resolve-module-superstruct-from-file",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#error-while-trying-to-resolve-module-superstruct-from-file","aria-hidden":"true"},"#"),a(" Error: While trying to resolve module superstruct from file")],-1),g=n("blockquote",null,[n("p",null,"error: Error: While trying to resolve module superstruct from file .../SolanaReactNative/node_modules/@solana/web3.js/lib/index.browser.cjs.js, the package .../SolanaReactNative/node_modules/superstruct/package.json was successfully found. However, this package itself specifies a main module field that could not be resolved (.../SolanaReactNative/node_modules/superstruct/lib/index.cjs.")],-1),v=a("\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E19\u0E35\u0E49\u0E40\u0E01\u0E34\u0E14\u0E08\u0E32\u0E01 "),y=n("code",null,"metro",-1),x=a(", React Native bundler \u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 "),_=n("code",null,"cjs",-1),w=a(" \u0E2D\u0E49\u0E32\u0E07\u0E16\u0E36\u0E07 "),j={href:"https://github.com/facebook/metro/issues/535",target:"_blank",rel:"noopener noreferrer"},S=a("open issue \u0E19\u0E35\u0E49"),R=a("."),N=t(`<p>\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E42\u0E14\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49 <code>metro.config.js</code> \u0E42\u0E14\u0E22\u0E40\u0E1E\u0E34\u0E48\u0E21 <code>cjs</code> \u0E43\u0E19<code>resolver.sourceExts</code> array \u0E15\u0E32\u0E21\u0E19\u0E35\u0E48\u0E1A\u0E2D\u0E01\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27</p><h3 id="error-url-protocol-is-not-implemented" tabindex="-1"><a class="header-anchor" href="#error-url-protocol-is-not-implemented" aria-hidden="true">#</a> Error: URL.protocol is not implemented</h3><pre><code>ERROR Error: URL.protocol is not implemented 
ERROR Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication). A frequent cause of the error is that the application entry file path is incorrect. This \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native. 
</code></pre><p>\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E19\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 polyfill \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A <code>URL</code> object \u0E43\u0E19 React Native.</p><p>\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 package <code>react-native-url-polyfill</code> \u0E41\u0E25\u0E30 import \u0E21\u0E31\u0E19\u0E43\u0E19 file \u0E02\u0E2D\u0E07 app (\u0E40\u0E0A\u0E48\u0E19: <code>index.js</code>), \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E41\u0E2A\u0E14\u0E07\u0E44\u0E27\u0E49\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49</p><h3 id="error-crypto-getrandomvalues-not-supported" tabindex="-1"><a class="header-anchor" href="#error-crypto-getrandomvalues-not-supported" aria-hidden="true">#</a> Error: crypto.getRandomValues() not supported</h3><pre><code>Error: crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported
</code></pre><p>\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E19\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 polyfill \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A <code>crypto</code> object \u0E43\u0E19 React Native.</p><p>\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 package <code>react-native-get-random-values</code> \u0E41\u0E25\u0E30 import \u0E21\u0E31\u0E19\u0E43\u0E19 file \u0E02\u0E2D\u0E07 app (\u0E40\u0E0A\u0E48\u0E19: <code>index.js</code>), \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E41\u0E2A\u0E14\u0E07\u0E44\u0E27\u0E49\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49</p>`,9);function E(q,K){const s=o("ExternalLinkIcon");return c(),l(r,null,[u,n("p",null,[d,n("a",k,[b,e(s)]),m]),h,f,g,n("p",null,[v,y,x,_,w,n("a",j,[S,e(s)]),R]),N],64)}var A=p(i,[["render",E]]);export{A as default};
