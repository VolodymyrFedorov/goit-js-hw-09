const t={startBtn:document.querySelector("[data-start]"),closeBtn:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let e=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.closeBtn.disabled=!1,t.bodyEl.style.backgroundColor=n(),e=setInterval((()=>{t.bodyEl.style.backgroundColor=n()}),1e3)})),t.closeBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.closeBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.13d21d08.js.map
