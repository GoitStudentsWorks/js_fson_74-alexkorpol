!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequire2d19;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire2d19=i),i.register("iE7OH",(function(t,n){var a,r;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.fe25a0e2.js","3MyBZ":"dark-hero-desktop.ae5d0545.png","8XWSl":"light-hero-desktop.d501c5f4.png","dvvJn":"catalog.e293fe15.js"}')),i("jW6gh"),i("kLFG7"),i("f4zPK");var o=i("hM3Qt"),s=i("cHsZg");const l=document.querySelector(".container__upcoming");function c(e){const t=e.target.dataset.movieid;(0,s.addMovieToLibrary)(t)}async function u(e){const t=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${o.KEY}&language=en-US`),n=await t.json();return e.map((e=>n.genres.find((t=>t.id===e)).name)).join(", ")}!async function(){try{const e=(await fetch(`${o.UPCOMING_URL}?api_key=${o.KEY}&language=en-US&page=1`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).results;if(e.length>=1){const t=e[Math.floor(Math.random()*e.length)],n=await u(t.genre_ids),a=await async function({id:e,poster_path:t,backdrop_path:n,title:a,overview:r,popularity:i,vote_average:o,vote_count:s,release_date:l,genre_ids:c}){const d=await u(c);return`\n    \n <div class="upcoming__card">\n <div class="upcoming__thumb">\n      \n      <picture class='upcoming__poster'>\n      <source srcset="https://image.tmdb.org/t/p/original/${n}" media="(min-width: 1200px)" class='upcoming__poster-desktop' loading="lazy"/>\n      <source srcset="https://image.tmdb.org/t/p/original/${n}" media="(min-width: 768px)" class='upcoming__poster-tablet' loading="lazy"/>\n      <source srcset="https://image.tmdb.org/t/p/original/${t}" media="(min-width: 320px)" loading="lazy"/>\n      <img src="https://image.tmdb.org/t/p/original/${t}" alt="Movie Poster" style='width: 805px' loading="lazy"/>\n    </picture>\n      </div>\n      </div>\n\n<div class="upcoming__info">\n            <h2 class="upcoming__info--title">${a}</h2>\n            <div class="upcoming__movie">\n                <div class="upcoming__info--left">\n                    <div class="upcoming__info--release">\n                        <p class="upcoming__text"> <span class ="upcoming__light--black">Release date</span> <span class="upcoming__info--release--date">${l}</span></p>\n                    </div>\n                    <div class="upcoming__info--vote">\n                        <p class="upcoming__text"><span class ="upcoming__light--black">Vote/Votes</span>\n                        <div class="upcoming__info--votes"><span class="upcoming__info--white">${o}</span> <span\n                                class="slash">/</span>\n                            <span class="upcoming__info--white">\n                               ${s}</span>\n                        </div>\n                        </p>\n                    </div>\n                </div>\n                <div class="upcoming__info--right">\n                    <div class="upcoming__info--pop">\n                        <p class="upcoming__text"> <span class ="upcoming__light--black">Popularity</span> <span class="upcoming__info--pop--range">${i}</span> </p>\n                    </div>\n                    <div class="upcoming__info--genre">\n                        <p class="upcoming__text"><span class ="upcoming__light--black">Genre</span> <span class="upcoming__info--genre--kind">${d}</span> </p>\n                    </div>\n                </div>\n            </div>\n            <h2 class="upcoming__info--about">ABOUT</h2>\n\n            <p class="upcoming__info--description">${r}</p>\n            <button class="upcoming__remindme--btn" data-movieid=${e}  type="button">Add to Library</button>\n        </div>\n\n   \n     `}({...t,genreNames:n});l.insertAdjacentHTML("beforeend",a),document.querySelector(".upcoming__remindme--btn").addEventListener("click",c)}}catch(e){console.log(e)}}();var d=i("b7ONl"),p={};p=function e(t,n,a){function r(o,s){if(!n[o]){if(!t[o]){var l=void 0;if(!s&&l)return l(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){return r(t[o][1][e]||e)}),u,u.exports,e,t,n,a)}return n[o].exports}for(var i=void 0,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=a('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var o=r(i,"IMG"),s=r(i,"VIDEO"),l=r(i,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var s={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:o};return s}},{}]},{},[1])(1);var f=i("7F964"),g={};g=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3MyBZ");var m;m=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("8XWSl");const h=document.querySelector(".hero");document.querySelector(".switcher").addEventListener("click",(function(){const e=document.querySelector(".black"),n=e.getAttribute("src")===t(g)?t(m):t(g);e.setAttribute("src",n),localStorage.setItem("imageColor",n)})),async function(){try{const{results:e}=await(0,d.getDayTrending)(1),n=e[Math.floor(Math.random()*e.length)];!function(e){let n="";switch(Math.round(e.vote_average)){case 0:n=`${f.emptyStar.repeat(5)}`;break;case 1:n=`${f.halfStar}${f.emptyStar.repeat(4)}`;break;case 2:n=`${f.fullStar}${f.emptyStar.repeat(4)}`;break;case 3:n=`${f.fullStar}${f.halfStar}${f.emptyStar.repeat(3)}`;break;case 4:n=`${f.fullStar.repeat(2)}${f.emptyStar.repeat(3)}`;break;case 5:n=`${f.fullStar.repeat(2)}${f.halfStar}${f.emptyStar.repeat(2)}`;break;case 6:n=`${f.fullStar.repeat(3)}${f.emptyStar.repeat(2)}`;break;case 7:n=`${f.fullStar.repeat(3)}${f.halfStar}${f.emptyStar}`;break;case 8:n=`${f.fullStar.repeat(4)}${f.emptyStar}`;break;case 9:n=`${f.fullStar.repeat(4)}${f.halfStar}`;break;case 10:n=`${f.fullStar.repeat(5)}`;break;default:throw new Error("Invalid rating")}const a=`\n    <div class="hero-wrap">\n      <div class="thumb">\n        <div class="background-image">\n          <img src="https://image.tmdb.org/t/p/original${e.backdrop_path}" alt="Hero image" class="backend" loading="lazy" />\n          <img src="${t(g)}" class="black" loading="lazy" />\n        </div>\n        <div class="hero-wrap__content">\n          <h1 class="title">${e.title||e.name}</h1>\n          <div class='start-rate__hero'>\n            ${n}\n          </div> \n          <p class="description">${e.overview}</p>\n          <button class="watch-trailer__btn" id="trailer-btn" data-btn="trailer-fail">Watch trailer</button>\n        </div>\n      </div>\n    </div>\n  `;h.innerHTML=a}(n);document.getElementById("trailer-btn").addEventListener("click",(async()=>{try{const e=(await(0,d.getVideos)(n.id)).find((e=>"Official Trailer"===e.name));if(!e)throw new Error("Trailer not found");const t=e.key;p.create(`\n          <iframe class="iframe" src="https://www.youtube.com/embed/${t}" width="560" height="315" frameborder="0"></iframe>\n        `).show((()=>console.log("lightbox now visible")))}catch(e){p.create('\n          <div class="notification-trailer-fail">\n            <p class="notification-trailer-fail-text">OOPS...<br/> We are very sorry!<br /> But we couldn’t find the trailer.</p>\n            <button type="button" class="btn-close"><svg class="btn-close--svg" width=24 height=24>\n            <use href=\'../../img/sprite.svg#icon-x-button\'></use>\n        </svg>\n      </button>\n            <div class="bg-box"></div>\n          </div>\n        ').show((()=>console.log("lightbox now visible")))}}))}catch(e){console.log(e)}}(),i("cs7FV"),i("8vL8o");var v=i("dIxxU");o=i("hM3Qt"),f=i("7F964");const b=document.querySelector(".gallery-weekly__list");async function _(){return{genres:await async function(){const{data:e}=await v.default.get(`${o.BASE_URL}/genre/movie/list?api_key=${o.KEY}`);return e}().then((({genres:e})=>e))}}function y(e){_().then((({genres:t})=>{if(e){e.forEach((e=>{const{genre_ids:n,release_date:a}=e;t.forEach((({name:t,id:r})=>{n.includes(r)&&(n.length>2&&n.splice(2,n.length-1),n.splice(n.indexOf(r),1,t)),e.genre_names=n.join(", "),e.release_date&&(e.release_date=a.slice(0,4))}))}));const n=function(e){return e.slice(0,3).map((({original_title:e,release_date:t,genre_ids:n,poster_path:a,vote_average:r,id:i})=>{let s="";a&&(s=`${o.IMG_BASE_URL}${o.IMG_W400}${a}`);let l="";switch(Math.round(r)){case 0:l=`${f.emptyStar.repeat(5)}`;break;case 1:l=`${f.halfStar}${f.emptyStar.repeat(4)}`;break;case 2:l=`${f.fullStar}${f.emptyStar.repeat(4)}`;break;case 3:l=`${f.fullStar}${f.halfStar}${f.emptyStar.repeat(3)}`;break;case 4:l=`${f.fullStar.repeat(2)}${f.emptyStar.repeat(3)}`;break;case 5:l=`${f.fullStar.repeat(2)}${f.halfStar}${f.emptyStar.repeat(2)}`;break;case 6:l=`${f.fullStar.repeat(3)}${f.emptyStar.repeat(2)}`;break;case 7:l=`${f.fullStar.repeat(3)}${f.halfStar}${f.emptyStar}`;break;case 8:l=`${f.fullStar.repeat(4)}${f.emptyStar}`;break;case 9:l=`${f.fullStar.repeat(4)}${f.halfStar}`;break;case 10:l=`${f.fullStar.repeat(5)}`;break;default:throw new Error("Invalid rating")}return` <li class='gallery-weekly__list-elem hover-cursor' data-id='${i}'>           \n        <img class='gallery-weekly__image' src="${s}" alt="${e}" loading="lazy" data-id='${i}'>\n       <div class='gallery-weekly__all-info'> \n        <div class="gallery-weekly__info">\n            <h2 class= 'gallery-weekly__title'>${e}</h2>\n            <div class='cards-list_second_line'>\n              <div class='cards-list__text'>\n                <p>${n} | ${t}</p>\n              </div>\n            </div>\n        </div>\n        <div class='star-rate'>\n        ${l}\n</div>\n      </div>\n    </li>`})).join("")}(e);b&&(b.innerHTML=n)}}))}v.default.get("https://api.themoviedb.org/3/trending/movie/week?api_key=249f222afb1002186f4d88b2b5418b55").then((e=>e.data)).then((({results:e})=>y(e)))}();
//# sourceMappingURL=index.fe25a0e2.js.map
