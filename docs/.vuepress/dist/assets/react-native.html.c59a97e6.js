import{_ as p,r as i,o,c,a,b as e,F as r,e as t,d as n}from"./app.f70ed2c6.js";const l={},u=t(`<h1 id="react-native-und-solana" tabindex="-1"><a class="header-anchor" href="#react-native-und-solana" aria-hidden="true">#</a> React Native und Solana</h1><p>React Native ist ein Open-Source-UI-Software-Framework, das zur Entwicklung von Mobil-, Web- und Desktop-Anwendungen verwendet wird, indem es Entwicklern erm\xF6glicht, das React-Framework zusammen mit nativen Plattformfunktionen zu verwenden. Mit dem Solana SDK ausgestattet, ist dies eine gro\xDFartige Plattform, um schnell leistungsstarke native Crypto-Apps zu erstellen.</p><p>Der schnellste Weg, um mit React Native und Solana zu beginnen, ist die Verwendung des <a href="#solana-dapp-scaffold-for-react-native">Solana DApp Scaffold for React Native</a>.</p><h2 id="how-to-use-solana-web3-js-in-a-react-native-app" tabindex="-1"><a class="header-anchor" href="#how-to-use-solana-web3-js-in-a-react-native-app" aria-hidden="true">#</a> How to use @solana/web3.js in a React Native app</h2><p>In diesem Tutorial erfahren Sie, wie Sie eine neue React Native-App erstellen und das SDK \u201E@solana/web3.js\u201C und seine Abh\xE4ngigkeiten installieren und konfigurieren.</p><p>Wenn Sie bereits \xFCber eine vorhandene App verf\xFCgen, fahren Sie mit <a href="#install-dependencies">Installation der Abh\xE4ngigkeiten</a> fort.</p><h3 id="erstellen-sie-eine-neue-anwendung" tabindex="-1"><a class="header-anchor" href="#erstellen-sie-eine-neue-anwendung" aria-hidden="true">#</a> Erstellen Sie eine neue Anwendung</h3><p>Wir starten eine neue React Native-Anwendung, die TypeScript verwendet, dann <code>cd</code> in das Projektverzeichnis, wo wir den Rest der Befehle ausf\xFChren werden.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx react-native@0.70.0 init SolanaReactNative --template react-native-template-typescript
<span class="token builtin class-name">cd</span> SolanaReactNative
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="abhangigkeiten-installieren" tabindex="-1"><a class="header-anchor" href="#abhangigkeiten-installieren" aria-hidden="true">#</a> Abh\xE4ngigkeiten installieren</h3><p>Als n\xE4chstes installieren wir die Abh\xE4ngigkeiten. Das Solana JavaScript SDK, ein Paket zum Patchen des React Native Build-Systems (Metro), ein sicherer Zufallszahlengenerator und ein Fix zum Patchen der fehlenden \u201EURL\u201C-Klasse von React Native.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">\\</span>
  @solana/web3.js <span class="token punctuation">\\</span>
  react-native-get-random-values <span class="token punctuation">\\</span>
  react-native-url-polyfill
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="patchen-sie-babel-um-die-hermes-transformationen-zu-verwenden" tabindex="-1"><a class="header-anchor" href="#patchen-sie-babel-um-die-hermes-transformationen-zu-verwenden" aria-hidden="true">#</a> Patchen Sie Babel, um die Hermes-Transformationen zu verwenden</h3><p>Ab August 2022 aktiviert die Vorlage, aus der neue React Native-Apps erstellt werden, standardm\xE4\xDFig die Hermes-JavaScript-Engine, aber nicht die Hermes-Codetransformationen. Aktivieren Sie sie, indem Sie die folgende \xC4nderung an <code>babel.config.js</code> vornehmen:</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   presets: [&#39;module:metro-react-native-babel-preset&#39;],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   presets: [
</span><span class="token prefix inserted">+</span><span class="token line">     [
</span><span class="token prefix inserted">+</span><span class="token line">       &#39;module:metro-react-native-babel-preset&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">       {unstable_transformProfile: &#39;hermes-stable&#39;},
</span><span class="token prefix inserted">+</span><span class="token line">     ],
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span></span>};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="aktualisieren-sie-\u201Eindex-js" tabindex="-1"><a class="header-anchor" href="#aktualisieren-sie-\u201Eindex-js" aria-hidden="true">#</a> Aktualisieren Sie \u201Eindex.js\u201C</h3><p>Um die Polyfills zu laden, \xF6ffnen wir die Datei \u201Eindex.js\u201C im Stammverzeichnis des Projekts und f\xFCgen am Anfang der Datei die folgenden zwei Zeilen hinzu:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;react-native-get-random-values&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;react-native-url-polyfill/auto&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="aktualisieren-sie-\u201Eapp-tsx" tabindex="-1"><a class="header-anchor" href="#aktualisieren-sie-\u201Eapp-tsx" aria-hidden="true">#</a> Aktualisieren Sie \u201EApp.tsx\u201C</h3><p>F\xFCgen wir unserer App ein web3.js-Beispiel hinzu!</p><p>\xD6ffnen Sie die Datei \u201EApp.tsx\u201C und f\xFCgen Sie den folgenden Code in die \u201EApp\u201C-Funktion ein:</p><p>In diesem Beispiel richten wir eine Verbindung zu Solana Devnet ein und wenn die Komponenten geladen werden, erhalten wir die Version des Clusters, mit dem wir verbunden sind, und speichern die Version im Komponentenstatus.</p><p>Au\xDFerdem zeigt dieses Beispiel, wie ein Schl\xFCsselpaar generiert und gespeichert wird.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>keypair<span class="token punctuation">,</span> setKeypair<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Keypair<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">randomKeypair</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setKeypair</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>version<span class="token punctuation">,</span> setVersion<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&#39;devnet&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  conn<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setVersion</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Zuletzt f\xFCgen Sie in der Vorlage (oder &quot;Render-Funktion&quot;) das folgende Markup hinzu:</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token punctuation">{</span>version <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>version<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>keypair <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Keypair<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>keypair<span class="token operator">?.</span>publicKey<span class="token operator">?.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>New Keypair<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>randomKeypair<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="ios-only-install-cocoapods" tabindex="-1"><a class="header-anchor" href="#ios-only-install-cocoapods" aria-hidden="true">#</a> [iOS only] Install cocoapods</h3><p>Damit unsere Polyfills unter iOS automatisch verkn\xFCpft werden k\xF6nnen, m\xFCssen wir die \u201ECocoapods\u201C installieren.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ios <span class="token operator">&amp;&amp;</span> pod <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="anwendung-starten" tabindex="-1"><a class="header-anchor" href="#anwendung-starten" aria-hidden="true">#</a> Anwendung starten</h3><p>Sobald wir alle oben genannten Schritte abgeschlossen haben, k\xF6nnen wir unsere Anwendung im Android- oder iOS-Simulator starten.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> android
<span class="token function">yarn</span> ios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Wenn alles gut gelaufen ist, sollte in Ihrem Simulator eine React Native-App gestartet werden, die die Version von Solana Devnet abruft.</p><h2 id="solana-dapp-scaffold-fur-react-native" tabindex="-1"><a class="header-anchor" href="#solana-dapp-scaffold-fur-react-native" aria-hidden="true">#</a> Solana DApp Scaffold f\xFCr React Native</h2>`,34),d=n("Wenn Sie sofort durchstarten m\xF6chten, k\xF6nnen Sie das "),k={href:"https://github.com/solana-developers/dapp-scaffold-react-native",target:"_blank",rel:"noopener noreferrer"},h=n("Solana DApp Scaffold for React Native"),b=n(" herunterladen."),m=a("h2",{id:"haufige-probleme-bei-der-verwendung-von-kryptobibliotheken-in-einer-react-native-app",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#haufige-probleme-bei-der-verwendung-von-kryptobibliotheken-in-einer-react-native-app","aria-hidden":"true"},"#"),n(" H\xE4ufige Probleme bei der Verwendung von Kryptobibliotheken in einer React Native-App")],-1),g=a("h3",{id:"fehler-\u201Ewatchman-crawling-fehlgeschlagen",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#fehler-\u201Ewatchman-crawling-fehlgeschlagen","aria-hidden":"true"},"#"),n(" Fehler: \u201EWatchman-Crawling fehlgeschlagen\u201C.")],-1),f=n("Der Teil des Build-Systems, der Ihr Dateisystem auf \xC4nderungen \xFCberwacht, hei\xDFt Watchman. Bestimmte Versionen von Mac OS "),v={href:"https://github.com/facebook/watchman/issues/751",target:"_blank",rel:"noopener noreferrer"},w=n("verweigern"),S=n(" Watchman die Erlaubnis, bestimmte Verzeichnisse wie \u201E~/Documents/\u201C und \u201E~/Desktop/\u201C zu beobachten."),y=n("Sie wissen, dass Sie dieses Problem haben, wenn der Metro-Bundler "),x={href:"https://gist.github.com/steveluscher/d0ae13225b57bc59dc0eac871509dcd7",target:"_blank",rel:"noopener noreferrer"},_=n("einen Fehler"),A=n(" ausgibt, der die Worte \u201EWatchman-Crawling fehlgeschlagen.\u201D"),R=t(`<p>Um dies zu l\xF6sen, verschieben Sie Ihr React Native-Projekt in das Stammverzeichnis Ihres Benutzerverzeichnisses.</p><h3 id="fehler-url-protocol-ist-nicht-implementiert" tabindex="-1"><a class="header-anchor" href="#fehler-url-protocol-ist-nicht-implementiert" aria-hidden="true">#</a> Fehler: URL.protocol ist nicht implementiert</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ERROR Error: URL.protocol is not implemented
ERROR Invariant Violation: Module AppRegistry is not a registered callable module <span class="token punctuation">(</span>calling runApplication<span class="token punctuation">)</span>. A frequent cause of the error is that the application entry <span class="token function">file</span> path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Dies ist ein Problem, das durch die Verwendung eines Polyfill f\xFCr das \u201EURL\u201C-Objekt in React Native behoben werden kann.</p><p>Installieren Sie das Paket <code>react-native-url-polyfill</code> und importieren Sie es in die Hauptdatei Ihrer App (zB: <code>index.js</code>), wie oben gezeigt.</p><h3 id="fehler-crypto-getrandomvalues-wird-nicht-unterstutzt" tabindex="-1"><a class="header-anchor" href="#fehler-crypto-getrandomvalues-wird-nicht-unterstutzt" aria-hidden="true">#</a> Fehler: crypto.getRandomValues() wird nicht unterst\xFCtzt</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Error: crypto.getRandomValues<span class="token punctuation">(</span><span class="token punctuation">)</span> not supported. See https://github.com/uuidjs/uuid<span class="token comment">#getrandomvalues-not-supported</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Dies ist ein Problem, das durch die Verwendung eines Polyfill f\xFCr das \u201EKrypto\u201C-Objekt in React Native behoben werden kann.</p><p>Installieren Sie das Paket <code>react-native-get-random-values</code> und importieren Sie es in die Hauptdatei Ihrer App (zB: <code>index.js</code>), wie oben gezeigt.</p>`,9);function z(N,j){const s=i("ExternalLinkIcon");return o(),c(r,null,[u,a("p",null,[d,a("a",k,[h,e(s)]),b]),m,g,a("p",null,[f,a("a",v,[w,e(s)]),S]),a("p",null,[y,a("a",x,[_,e(s)]),A]),R],64)}var D=p(l,[["render",z]]);export{D as default};
