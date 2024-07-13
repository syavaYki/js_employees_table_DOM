function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var o=Object.prototype.toString.call(t).slice(8,-1);if("Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(t||!t&&e.get("name"))&&e.get("name").trim().length<4?(o("Error","Name must have 4 or more characters","error"),!1):(t||!t&&e.get("position"))&&e.get("position").trim().length<=0?(o("Error","Please enter position","error"),!1):(t||!t&&e.get("office"))&&!s.includes(e.get("office"))?(o("Error","Invalid office locatioin please select from following: ".concat(s.join(", ")),"error"),!1):(t||!t&&e.get("age"))&&(isNaN(e.get("age"))||18>+e.get("age")||+e.get("age")>90)?(o("Error","Age should be older then 18 and yonger then 99","error"),!1):!((t||!t&&+e.get("salary"))&&(isNaN(+e.get("salary"))||0>=+e.get("salary")))||(o("Error","Please enter valid salary","error"),!1)}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.createElement("div");o.className="notification ".concat(n),o.dataset.qa="notification",o.style.top="".concat(500,"px"),o.style.right="".concat(10,"px"),o.innerHTML='\n      <h2 class="title">'.concat(e,"</h2>\n      <p>").concat(t,"</p>\n    "),document.body.append(o),setTimeout(function(){o.remove()},2e3)}var r=document.querySelector("thead"),a=document.querySelector("tbody"),l=null==r?void 0:r.rows[0].cells,c="acdSorted",i={},s=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco","London"],u='<form\n      id="form-new-empl"\n      class="new-employee-form"\n    >\n      <label>Name:\n        <input\n          name="name"\n          type="text"\n          data-qa="name"\n        >\n      </label>\n\n      <label>Position:\n        <input\n          name="position"\n          type="text"\n          data-qa="position"\n        >\n      </label>\n\n      <label>Office:\n        <select\n          name="office"\n          type="text"\n          data-qa="office"\n        >\n          <option value="'.concat(s[0],'">').concat(s[0],'</option>\n          <option value="').concat(s[1],'">').concat(s[1],'</option>\n          <option value="').concat(s[2],'">').concat(s[2],'</option>\n          <option value="').concat(s[3],'">').concat(s[3],'</option>\n          <option value="').concat(s[4],'">').concat(s[4],'</option>\n          <option value="').concat(s[5],'">').concat(s[5],'</option>\n          <option value="').concat(s[6],'">').concat(s[6],'</option>\n        </select>\n      </label>\n\n      <label>Age:\n        <input\n          name="age"\n          type="number"\n          data-qa="age"\n        >\n      </label>\n\n      <label>Salary:\n        <input\n          name="salary"\n          type="number"\n          data-qa="salary"\n        >\n      </label>\n\n      <button type="submit">Save to table</button>\n    </form>');document.querySelector("table").insertAdjacentHTML("afterend",u);for(var d=document.body.querySelector("#form-new-empl"),m=0;m<(null==r?void 0:r.rows[0].cells.length);m++)i[l[m].textContent]=m;null==r||r.addEventListener("click",function(e){var n,o=e.target.classList.contains(c),r=t(document.querySelector("tbody").rows);!function(e,t,n){e.sort(function(e,o){var r,a,l,c=null===(r=e.cells[t].textContent)||void 0===r?void 0:r.replace("$","").replace(",",""),i=o.cells[t].textContent.replace("$","").replace(",","");return isNaN(c)?n?null===(a=e.cells[t].textContent)||void 0===a?void 0:a.localeCompare(o.cells[t].textContent):null===(l=o.cells[t].textContent)||void 0===l?void 0:l.localeCompare(e.cells[t].textContent):n?parseFloat(c)-parseFloat(i):parseFloat(i)-parseFloat(c)})}(r,i[e.target.textContent],!o);for(var a=0;a<l.length;a++)l[a].classList.remove(c);o||e.target.classList.add(c);for(var s=0;s<r.length;s++)null===(n=document.querySelector("tbody"))||void 0===n||n.append(r[s])}),null==a||a.addEventListener("click",function(e){for(var t=0;t<document.querySelector("tbody").rows.length;t++)document.querySelector("tbody").rows[t].classList.remove("active");e.target.parentElement.classList.add("active")}),null==d||d.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(d);if(n(t)){var r=document.createElement("tr"),l=!0,c=!1,i=void 0;try{for(var s,u=t.entries()[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var m=s.value,p=document.createElement("td");"salary"===m[0]?p.textContent=parseInt(m[1]).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}):p.textContent=m[1],r.append(p),null==a||a.append(r),d.reset()}}catch(e){c=!0,i=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw i}}o("Success","Successfully added entry","success")}}),null==a||a.addEventListener("dblclick",function(e){var o=function(e){var o,i=e.target.value,s=null===(o=r.rows[0].cells[t(a.parentElement.cells).indexOf(a)].textContent)||void 0===o?void 0:o.toLocaleLowerCase(),u=new FormData;if(u.append(s,i),!i){a.textContent=l,c.remove();return}n(u,!1)?("salary"===s?a.textContent=parseInt(i).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}):a.textContent=i,c.remove()):c.focus()},a=e.target,l=a.textContent,c=document.createElement("input");c.classList.add("cell-input"),a.textContent="",a.append(c),c.focus(),c.addEventListener("focusout",o),c.addEventListener("keypress",function(e){"Enter"===e.key&&o(e)})});
//# sourceMappingURL=index.c1e41727.js.map
