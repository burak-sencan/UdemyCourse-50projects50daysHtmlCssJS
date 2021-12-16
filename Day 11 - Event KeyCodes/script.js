const insert = document.getElementById("insert")
window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
    ${event.key ===" "? "Space":event.key}
    <small>Key</small>
  </div>
  
  <div class="key">
    ${event.keyCode}
    <small>KeyCode</small>
  </div>
  
  <div class="key">
    ${event.code}
    <small>Code</small>
  </div>`
})

window.addEventListener("mousedown", (event) => {
    insert.innerHTML = `
    <div class="key">
      ${event.button}
      <small>Key</small>
    </div>
    
    <div class="key">
      ${event.clientX}
      <small>clientX</small>
    </div>
    
    <div class="key">
      ${event.clientY}
      <small>clientY</small>
    </div>`
  })
  