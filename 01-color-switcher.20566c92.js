!function(){var o=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),e=document.querySelector("body"),n=null;o.addEventListener("click",(function(){n=setInterval((function(){t.style.backgroundColor="#ff0000",o.style.backgroundColor="",e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o.disabled=!0})),t.addEventListener("click",(function(){clearInterval(n),t.style.backgroundColor="",o.style.backgroundColor="#018f04",o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.20566c92.js.map
