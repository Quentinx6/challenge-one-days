import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import cirque from '../../images/cirque.jpg'
import clown from '../../images/clown.jpg'
import saut from '../../images/saut.jpg'
import cheval from '../../images/cheval.jpg'
import orchestre from '../../images/orchestre.jpg'
import catwall from '../../images/catwall.jpg'
import './style.css'

export default function MultiActionAreaCard() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Ce qui vous attend</h1>
      <div className="grid-presentation">
        <Card sx={{ maxWidth: 400 }} className="a">
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={cirque}
              alt="cirque"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Le chapiteau
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Le chapiteau dans toute sa splandeur, il peut accueillir jusque
                2500 places.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 }} className="b">
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={clown}
              alt="cirque"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Notre clown
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Il nous vient d'Italie, il maitrise son métier à merveille et
                vos enfants vont se souvenir de lui.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 }} className="c">
          <CardActionArea>
            <CardMedia component="img" height="250" image={saut} alt="saut" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Flying Mendonca
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cette jeune équipe d'équilibriste et de saut périlleu nous vient
                directement du Brésil, ils n'ont pas amené le soleil avec eux
                mais vont vous émerveiller tout de même.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 }} className="d">
          <CardActionArea>
            <CardMedia component="img" height="250" image={cheval} alt="saut" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Le carrrousel de Louis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cette équipe spectaculaire nous vient du pays voisin, la Suisse.
                Cette équipe à participer à tout les cirques possibles comme
                Monte-Carlo, obtenu 3 clowns D'or...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 }} className="e">
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={orchestre}
              alt="saut"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Orchestre
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nos musiciens nous viennent également de Suisse. Ils ont
                également participé au cirque de Monte-Carlo.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 }} className="f">
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={catwall}
              alt="saut"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Catwall
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vous aimez le trampoline ? Alors ce groupe est fait pour vous !
                Vous aimez pas ? Laisser nous vous présenter ce numéro et on
                vous repose la question ensuite.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}
