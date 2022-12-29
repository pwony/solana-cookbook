import{_ as t,r as i,o as r,c as o,a as e,b as a,F as l,e as p,d as s}from"./app.f70ed2c6.js";const d={},u=p(`<h1 id="debuggen-von-solana-programmen" tabindex="-1"><a class="header-anchor" href="#debuggen-von-solana-programmen" aria-hidden="true">#</a> Debuggen von Solana-Programmen</h1><p>Es gibt eine Reihe von Optionen und unterst\xFCtzenden Tools zum Testen und Debuggen eines Solana-Programms.</p><h2 id="fakten" tabindex="-1"><a class="header-anchor" href="#fakten" aria-hidden="true">#</a> Fakten</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Die Kiste <code>solana-program-test</code> erm\xF6glicht die Verwendung von Bare Bones <strong><em>local runtime</em></strong>, wo Sie testen und debuggen k\xF6nnen Ihr Programm interaktiv (z. B. in vscode).</li><li>Die Kiste \u201Esolana-validator\u201C erm\xF6glicht die Verwendung der \u201Esolana-test-validator\u201C-Implementierung f\xFCr mehr robustere Tests, die auf einem <strong><em>local validator node</em></strong> stattfinden. Sie k\xF6nnen den Editor ausf\xFChren <strong><em>aber Haltepunkte in der Programm werden ignoriert</em></strong>.</li><li>Das CLI-Tool <code>solana-test-validator</code> f\xFChrt und l\xE4dt Ihr Programm und verarbeitet die Transaktionsausf\xFChrung Befehlszeilen-Rust-Anwendungen oder Javascript-/Typescript-Anwendungen, die web3 verwenden.</li><li>F\xFCr alle oben genannten Punkte wird die gro\xDFz\xFCgige Verwendung des <code>msg!</code>-Makros in Ihrem Programm zu Beginn und danach empfohlen. Entfernen Sie sie beim Testen und stellen Sie ein felsenfestes Verhalten sicher. Denken Sie daran, dass &quot;msg!&quot; Recheneinheiten verbraucht, die Ihr Programm schlie\xDFlich scheitern lassen kann, indem Sie die Budgetobergrenzen f\xFCr Compute Units erreichen.</li></ul></div><p>Die Schritte in den folgenden Abschnitten verwenden die <a href="#resources">solana-program-bpf-template</a>. Klonen Sie das auf Ihre Maschine:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:mvines/solana-bpf-program-template.git
<span class="token builtin class-name">cd</span> solana-bpf-program-template
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="laufzeittests-und-debugging-im-editor" tabindex="-1"><a class="header-anchor" href="#laufzeittests-und-debugging-im-editor" aria-hidden="true">#</a> Laufzeittests und Debugging im Editor</h2><p>\xD6ffnen Sie die Datei <code>src/lib.rs</code></p><p>Sie werden sehen, dass das Programm ziemlich einfach ist und im Grunde nur die empfangenen Inhalte protokolliert die Programmeintrittspunktfunktion: <code>process_instruction</code></p><ol><li>Gehen Sie zum Abschnitt \u201E#[cfg(test)]\u201C und klicken Sie auf \u201ETests ausf\xFChren\u201C. Dadurch wird das Programm erstellt und dann F\xFChren Sie den Test \u201Easync fn test_transaction()\u201C aus. Sie sehen die Protokollmeldungen (vereinfacht) im vscode-Terminal unten der Quelle.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
<span class="token string">&quot;bpf_program_template&quot;</span> program loaded as native code
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success
<span class="token builtin class-name">test</span> test::test_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">33</span>.41s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>Setzen Sie einen Haltepunkt in der Zeile \u201Emsg!\u201C des Programms (11)</li><li>Zur\xFCck im Testmodul klicken Sie auf \u201EDebug\u201C und innerhalb von Sekunden stoppt der Debugger am Haltepunkt und k\xF6nnen jetzt die Daten untersuchen, Funktionen schrittweise durchlaufen usw. usw.</li></ol><p>Diese Tests werden auch \xFCber die Befehlszeile ausgef\xFChrt mit: <code>cargo test</code> oder <code>cargo test-bpf</code>. Eventuelle Haltepunkte werden nat\xFCrlich ignoriert.</p><p>Wie groovig kann man werden!</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Denken Sie daran, dass Sie keinen Validierungsknoten verwenden, sodass Standardprogramme, Blockhashes usw. nicht dargestellt werden oder sich nicht so verhalten, wie sie es tun w\xFCrden, wenn im Validator-Knoten ausgef\xFChrt w\xFCrden. Deshalb hat uns die Solana Gang Lokales-Node-Validierungs-testing gegeben.</p></div><h2 id="testen-des-lokalen-validator-knotens-im-editor" tabindex="-1"><a class="header-anchor" href="#testen-des-lokalen-validator-knotens-im-editor" aria-hidden="true">#</a> Testen des lokalen Validator-Knotens im Editor</h2><p>Integrationstests mit programmgesteuertem Laden eines lokalen Validierungsknotens sind in definiert Datei \u201Etests/integration.rs\u201C.</p><p>Standardm\xE4\xDFig k\xF6nnen die Vorlagenrepo-Integrationstests nur \xFCber die Befehlszeile mit <code>cargo test-bpf</code> ausgef\xFChrt werden. Mit den folgenden Schritten k\xF6nnen Sie auch die Anzeige von Programm-Validator-Logs und <code>msg!</code>-Ausgaben Ihres Programms, innerhalb des Editors arbeiten:</p><ol><li>F\xFChren Sie im Repo-Verzeichnis <code>cargo build-bpf</code> aus, um das Beispielprogramm zu erstellen</li><li>\xD6ffnen Sie im Editor \u201Etests/integration.rs\u201C.</li><li>Zeile 1 auskommentieren -&gt; <code>// #![cfg(feature = &quot;test-bpf&quot;)]</code></li><li>\xC4ndern Sie es in Zeile 19 wie folgt: <code>.add_program(&quot;target/deploy/bpf_program_template&quot;, program_id)</code></li><li>F\xFCgen Sie in Zeile 22 Folgendes ein: <code>solana_logger::setup_with_default(&quot;solana_runtime::message=debug&quot;);</code></li><li>Klicken Sie \xFCber der Funktion \u201Etest_validator_transaction()\u201C auf \u201ETest ausf\xFChren\u201C.</li></ol><p>Dadurch wird der Validator-Knoten geladen und Sie k\xF6nnen dann eine Transaktion erstellen (auf Rust-Weise) und unter Verwendung des <code>RcpClient</code> an den Knoten \xFCbermitteln.</p><p>Die Ausgabe des Programms wird auch im Editor-Terminal ausgedruckt. Zum Beispiel (vereinfacht):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">1</span><span class="token punctuation">..</span>.
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">2</span><span class="token punctuation">..</span>.
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM consumed <span class="token number">13027</span> of <span class="token number">200000</span> compute <span class="token function">units</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success

<span class="token builtin class-name">test</span> test_validator_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">6</span>.40s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Das Debuggen hier erm\xF6glicht es Ihnen, die im <strong><em>test body</em></strong> verwendeten Funktionen und Methoden zu debuggen, wird aber kein Haltepunkt in Ihrem Programm.</p><p>Die Knie der Biene, oder?</p><h2 id="testen-lokaler-validator-knoten-von-client-apps" tabindex="-1"><a class="header-anchor" href="#testen-lokaler-validator-knoten-von-client-apps" aria-hidden="true">#</a> Testen lokaler Validator-Knoten von Client-Apps</h2><p>Schlie\xDFlich k\xF6nnen Sie einen lokalen Validierungsknoten starten und Ihr Programm und alle Konten mit dem <code>solana-test-validator</code> laden von der Kommandozeile.</p><p>Mit dieser Methode, wirst du eine client application oder Rust benutzen Bei diesem Ansatz ben\xF6tigen Sie eine Client-Anwendung, die entweder in Rust <a href="#Ressourcen">RcpClient</a> oder in <a href="#Ressourcen">JavaScript or Typescript clients</a> verwendet wird.</p><p>Siehe <code>solana-test-validator --help</code> f\xFCr weitere Details und Optionen. F\xFCr das Beispielprogramm hier ist Vanilla Setup:</p><ol><li>\xD6ffnen Sie ein Terminal im Repo-Ordner</li><li>F\xFChren Sie <code>solana config set -ul</code> aus, um die Konfiguration so einzustellen, dass sie auf lokal zeigt</li><li>F\xFChren Sie \u201Esolana-test-validator --bpf-program target/deploy/bpf_program_template-keypair.json target/deploy/bpf_program_template.so\u201C aus</li><li>\xD6ffnen Sie ein anderes Terminal und f\xFChren Sie \u201Esolana logs\u201C aus, um den Log-Streamer zu starten</li><li>Sie k\xF6nnen dann Ihr Client-Programm ausf\xFChren und die Programmausgabe in dem Terminal beobachten, in dem Sie den Log-Streamer gestartet haben</li></ol><p>Nun, das ist der Schlafanzug der Katze YO!</p><h2 id="ressourcen" tabindex="-1"><a class="header-anchor" href="#ressourcen" aria-hidden="true">#</a> Ressourcen</h2>`,31),c={href:"https://github.com/mvines/solana-bpf-program-template",target:"_blank",rel:"noopener noreferrer"},m=s("solana-program-bpf-template"),g={href:"https://docs.rs/solana-client/latest/solana_client/rpc_client/struct.RpcClient.html",target:"_blank",rel:"noopener noreferrer"},h=s("RcpClient"),b={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},k=s("JavaScript/Typescript Library");function f(v,S){const n=i("ExternalLinkIcon");return r(),o(l,null,[u,e("p",null,[e("a",c,[m,a(n)])]),e("p",null,[e("a",g,[h,a(n)])]),e("p",null,[e("a",b,[k,a(n)])])],64)}var w=t(d,[["render",f]]);export{w as default};
