import React from 'react'
import cirque from '../../cirque.mp4'
import './style.css'

function Accueil() {
  return (
    <div>
      <h3 class="titrePres">Bienvenue au cirque générosité !</h3>
      <video class="video" autoplay="true" muted="true">
        <source src={cirque} type="video/mp4"></source>
      </video>
      <div>
        <p class="desc">
          Notre chapiteau posséde 2500 places assises en fauteuil individuel,
          600m² avec toilette intérieur une visibilité à 360 degrés, chauffage
          intégré pour le plus grand plaisir de nos spectateurs. Il posséde
          également une zone dédié pour pouvoir se procurer des pop-corn, barbes
          à papa, des boissons chaudes et froides, des confiseries...
        </p>
        <p class="desc">
          Comment notre projet de générosité est possible ? Tout d'abord merci à
          la mairie de Calais pour leur participation, merci également à la
          région qui finance également une partie, ce qui explique pourquoi nous
          pouvons avoir un prix assez bas.
        </p>
      </div>
    </div>
  )
}

export default Accueil
