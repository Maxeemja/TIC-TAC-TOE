(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{e:()=>l});var t={firstPlayerName:document.querySelector("#player1-name"),secondPlayerName:document.querySelector("#player2-name"),newGameButton:document.querySelector("#newGame-btn"),resetButton:document.querySelector("#reset-btn"),firstPlayerWins:document.querySelector("#player1-wins"),secondPlayerWins:document.querySelector("#player2-wins"),draws:document.querySelector("#draws"),gridContainer:document.querySelector(".container"),cells:document.querySelectorAll(".cell"),currentTurnMessage:document.querySelector("#message"),info:document.querySelector("#instruction")},n=function(e){"Хрестики"===e?(t.firstPlayerName.classList.add("highlighted"),t.secondPlayerName.classList.remove("highlighted")):(t.secondPlayerName.classList.add("highlighted"),t.firstPlayerName.classList.remove("highlighted"))},r=function(e){return e.forEach((function(e){e.style.backgroundColor="violet"}))};function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){var e=[],n=[o(t.cells).slice(0,3),o(t.cells).slice(3,6),o(t.cells).slice(6)],c=[o(t.cells).filter((function(e){return["0","3","6"].includes(e.id)}))],i=[o(t.cells).filter((function(e){return["1","4","7"].includes(e.id)}))],a=[o(t.cells).filter((function(e){return["2","5","8"].includes(e.id)}))],l=[].concat(c,i,a),u=[o(t.cells).filter((function(e){return["0","4","8"].includes(e.id)})),o(t.cells).filter((function(e){return["2","4","6"].includes(e.id)}))];return n.forEach((function(t){if(t.every((function(e){return"O"===e.textContent}))||t.every((function(e){return"X"===e.textContent})))return e.push("РЯДОК"),r(t)})),l.forEach((function(t){if(t.every((function(e){return"O"===e.textContent}))||t.every((function(e){return"X"===e.textContent})))return e.push("СТОВПЕЦЬ"),r(t)})),u.forEach((function(t){if(t.every((function(e){return"O"===e.textContent}))||t.every((function(e){return"X"===e.textContent})))return e.push("ДІАГОНАЛЬ"),r(t)})),o(t.cells).every((function(t){return""!==t.textContent&&0===e.length}))?"DRAW":e},a=function(){t.cells.forEach((function(e){e.textContent="",e.style.backgroundColor=""})),t.info.textContent="Натисніть на клітинку щоб грати",l()};t.firstPlayerName.textContent="Гравець 1",t.secondPlayerName.textContent="Гравець 2",t.resetButton.addEventListener("click",a),t.newGameButton.addEventListener("click",(function(){a(),t.firstPlayerWins.textContent="0",t.secondPlayerWins.textContent="0",t.draws.textContent="0"}));var l=function(){var e=0===Math.floor(2*Math.random())?"Хрестики":"Нулики",r=e;t.currentTurnMessage.textContent="".concat(e," починають"),n(r),t.gridContainer.addEventListener("click",(function e(o){if(!o.target.textContent&&o.target.id){if(l=o.target,u=r,l.textContent="Хрестики"===u?"X":"O",i().length)return t.gridContainer.removeEventListener("click",e),c=i(),a=r,"DRAW"!==c?(t.currentTurnMessage.textContent="".concat(a," виграли!"),"Хрестики"===a?t.firstPlayerWins.textContent=+t.firstPlayerWins.textContent+1:t.secondPlayerWins.textContent=+t.secondPlayerWins.textContent+1):(t.currentTurnMessage.textContent="Ніхто не виграв...",t.draws.textContent=+t.draws.textContent+1),void(t.info.textContent="DRAW"!==c?"".concat(c.join(" + ")," combo"):"НІЧИЯ");r="Хрестики"===r?"Нулики":"Хрестики",t.currentTurnMessage.textContent="".concat(r," ходять!"),n(r)}var c,a,l,u}))};l()})();