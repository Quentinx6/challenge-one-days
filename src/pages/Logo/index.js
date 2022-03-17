import React, { useState } from 'react'
import './style.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import ticket from '../../images/ticket.jpg'
import { Button, CardActionArea, CardActions } from '@mui/material'

export default function MultiActionAreaCard() {
  const [formOn, setFormOn] = useState('on')
  return (
    <div className="sectionReserv">
      <Card sx={{ maxWidth: 400 }} className="a">
        <CardActionArea
          style={{ display: formOn === 'form1' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vend. 22/10 9h15
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form1')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form1' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="b">
        <CardActionArea
          style={{ display: formOn === 'form2' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vend. 22/10 13h45
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form2')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form2' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="c">
        <CardActionArea
          style={{ display: formOn === 'form3' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vend. 22/10 20h00
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form3')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form3' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="d">
        <CardActionArea
          style={{ display: formOn === 'form4' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sam. 23/10 13h25
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serai
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form4')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form4' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="e">
        <CardActionArea
          style={{ display: formOn === 'form5' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sam. 23/10 15h55
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form5')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form5' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="f">
        <CardActionArea
          style={{ display: formOn === 'form6' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sam. 23/10 18h25
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serai
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form6')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form6' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="g">
        <CardActionArea
          style={{ display: formOn === 'form7' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sam. 23/10 20h55
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form7')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form7' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="h">
        <CardActionArea
          style={{ display: formOn === 'form11' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dim. 24/10 10h45
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form11')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form11' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="i">
        <CardActionArea
          style={{ display: formOn === 'form8' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dim. 24/10 13h45
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form8')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form8' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="j">
        <CardActionArea
          style={{ display: formOn === 'form9' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dim. 24/10 16h15
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form9')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form9' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }} className="k">
        <CardActionArea
          style={{ display: formOn === 'form10' ? 'none' : 'block' }}
        >
          <CardMedia
            component="img"
            height="250"
            image={ticket}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dim. 24/10 18h45
            </Typography>
            <Typography variant="body2" color="text.primary">
              Vous avez la possibilité de commander vos places en utilisant le
              bouton "réserver", un formulaire sera à remplir et vous serez
              redirigé pour le paiement.
            </Typography>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="primary"
              onClick={() => setFormOn('form10')}
            >
              Reserver
            </Button>
          </CardActions>
        </CardActionArea>

        <CardActionArea
          style={{ display: formOn === 'form10' ? 'block' : 'none' }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titreForm"
            >
              Vend. 22/10 9h15
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxForm"
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Prénom"
                  placeholder="Votre prénom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  placeholder="Votre Nom.."
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Téléphone"
                  placeholder="Numéro de téléphone.."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de places"
                  placeholder="Nombre de places"
                />
              </div>
            </Box>
          </CardContent>
          <CardActions className="buttonForm">
            <Button
              size="small"
              color="warning"
              onClick={() => setFormOn('on')}
            >
              Annuler
            </Button>
            <Button color="success">Valider</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  )
}
