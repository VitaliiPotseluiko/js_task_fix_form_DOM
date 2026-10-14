"use strict";var forms=document.querySelectorAll("form");forms.forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.textContent=e.name,t.htmlFor=e.id,e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentElement.appendChild(t)})});
//# sourceMappingURL=js_task_fix_form_DOM.fc26794a.js.map
