import React from 'react'
import './style.css'

function Localisation() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Ou nous trouver ?</h1>
      <div class="iframeMap">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1PgLBbO9jGNZJcLzRXEdPjYj0fAM6q7zh&ehbc=2E312F"
          width="90%"
          height="800"
        ></iframe>
      </div>
    </div>
  )
}

export default Localisation
