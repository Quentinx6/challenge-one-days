import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Logo from './pages/Logo'
import Accueil from './pages/Accueil'
import Footer from './pages/Footer'
import Localisation from './pages/Localisation'
import Button from '@mui/material/Button'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeIcon from '@mui/icons-material/Home'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import VisibilityIcon from '@mui/icons-material/Visibility'

function App() {
  const [activeScreen, setActiveScreen] = useState('coucou')

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <ul className="navBar">
            <p class="titre">
              CALAIS GENEROSITE <br />
              <p className="cirque">Cirque de haute voltige</p>
            </p>
            <li>
              <Button
                variant={activeScreen === 'coucou' ? 'outlined' : 'contained'}
                onClick={() => setActiveScreen('coucou')}
              >
                Accueil
              </Button>
            </li>
            <li>
              <Button
                variant={activeScreen === 'Logo' ? 'outlined' : 'contained'}
                onClick={() => setActiveScreen('Logo')}
              >
                Reservation
              </Button>
            </li>
            <li>
              <Button
                variant={activeScreen === 'Home' ? 'outlined' : 'contained'}
                onClick={() => setActiveScreen('Home')}
              >
                Présentation
              </Button>
            </li>
            <li>
              <Button
                variant={
                  activeScreen === 'Localisation' ? 'outlined' : 'contained'
                }
                onClick={() => setActiveScreen('Localisation')}
              >
                Localisation
              </Button>
            </li>
          </ul>
          <div class="mobileHeader">
            <h1 class="titre">CALAIS GENEROSITE</h1>
            <p class="mobileP">Cirque de haute voltige</p>

            <BottomNavigation sx={{ width: '100%' }} className="navMobil">
              <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={
                  <HomeIcon
                    color={activeScreen === 'coucou' ? 'primary' : 'white'}
                  />
                }
                onClick={() => setActiveScreen('coucou')}
              />
              <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={
                  <ConfirmationNumberIcon
                    color={activeScreen === 'Logo' ? 'primary' : 'white'}
                  />
                }
                onClick={() => setActiveScreen('Logo')}
              />
              <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={
                  <VisibilityIcon
                    color={activeScreen === 'Home' ? 'primary' : 'white'}
                  />
                }
                onClick={() => setActiveScreen('Home')}
              />
              <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={
                  <LocationOnIcon
                    color={
                      activeScreen === 'Localisation' ? 'primary' : 'white'
                    }
                  />
                }
                onClick={() => setActiveScreen('Localisation')}
              />
            </BottomNavigation>
          </div>
        </header>
        {activeScreen === 'Logo' && <Logo />}
        {activeScreen === 'Home' && <Home />}
        {activeScreen === 'Localisation' && <Localisation />}
        {activeScreen === 'coucou' && <Accueil />}
      </div>
      <Footer />
    </div>
  )
}

export default App
