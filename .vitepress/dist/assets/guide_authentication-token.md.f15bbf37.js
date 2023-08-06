import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.fb0c8ff2.js";const y=JSON.parse('{"title":"Authentication Token","description":"","frontmatter":{},"headers":[],"relativePath":"guide/authentication-token.md","filePath":"guide/authentication-token.md","lastUpdated":1691359444000}'),t={name:"guide/authentication-token.md"},o=n(`<h1 id="authentication-token" tabindex="-1">Authentication Token <a class="header-anchor" href="#authentication-token" aria-label="Permalink to &quot;Authentication Token&quot;">​</a></h1><p>A token is obtained when a successful login is made with the authenticationToken method. The token will be used in methods with an input parameter as long as the session does not expire (timeout period is <strong>60</strong> minutes).</p><h2 id="post-authenticationtoken" tabindex="-1"><span style="color:#10b981;">Post</span> <code>/authenticationToken</code> <a class="header-anchor" href="#post-authenticationtoken" aria-label="Permalink to &quot;&lt;span style=&quot;color:#10b981&quot;&gt;Post&lt;/span&gt; \`/authenticationToken\`&quot;">​</a></h2><p>The token data used to run the methods in the system can be obtained with the <a href="/guide/authentication-token"><code>authenticationToken</code></a> method. As can be seen, the response of this method is in the form of a single text.</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th>key</th><th>type</th></tr></thead><tbody><tr><td>username</td><td>string</td></tr><tr><td>password</td><td>string</td></tr></tbody></table><h3 id="sample-request" tabindex="-1">Sample Request <a class="header-anchor" href="#sample-request" aria-label="Permalink to &quot;Sample Request&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WSU-ŞH/123456/00005</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_password_here</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="sample-response" tabindex="-1">Sample Response <a class="header-anchor" href="#sample-response" aria-label="Permalink to &quot;Sample Response&quot;">​</a></h3><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">eyJhbGciOiJIUzI1NiIsInYAG14R5cCI6IkpXVC9SPARKJ1c2VybmFtZSI6IldT...</span></span></code></pre></div><hr><h3 id="possible-errors" tabindex="-1">Possible Errors <a class="header-anchor" href="#possible-errors" aria-label="Permalink to &quot;Possible Errors&quot;">​</a></h3><ul><li>If the password is incorrect, the following error message is returned.</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FAIL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Şifre Hatalı!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>If the username is incorrect, the following error message is returned.</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FAIL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Unknown user - &#39;WSU-SH/4568/0000&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,16),l=[o];function p(r,c,i,u,D,h){return a(),e("div",null,l)}const F=s(t,[["render",p]]);export{y as __pageData,F as default};