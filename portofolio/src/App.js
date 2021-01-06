import React, { useEffect } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import berdooit from './img/berdooit.png';
import mag from './img/make-a-group.png';
import tedx from './img/tedx.png';
import beaudei from './img/beaudei.png';
import stupart from './img/stupart.png';
import lokaloka from './img/lokaloka.png';
import spss from './img/spss.png';
import martha from './img/martha.png';
import stunting from './img/stunting.png';


const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#fdfdfd',
  },
  content: {
    backgroundColor: '#fdfdfd',
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  difference: {
    paddingTop: 50,
  },
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10
  },
  appBarStyle: {
    background: 'transparent', 
    boxShadow: 'none' 
  },
  title: {
    flexGrow: 1,
    color: '#38c172',
    fontWeight: 'bold'
  },
  buttonStyle: {
    display: 'inline-block',
    width: '10',
    height: 'auto',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fdfdfd',
    marginLeft: 10,
    boxShadow: '0px 12px 18px -8px rgba(56,193,114,0.3)',

    "&:hover": {
      backgroundColor: '#38c172',
      transform: 'scale(1.1)',
      transitionDuration: '1s'
    },
  },
  appBarButton: {
    color: '#202020',
    margin: 5,

    "&:hover": {
      color: '#fdfdfd',
      transitionDuration: '0.5s'
    },
  },
  differenceBox: {
    padding: 10
  },
  square: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 5,
    background: '#fdfdfd',
    color: '#202020',
    boxShadow: '0px 12px 18px -8px rgba(56,193,114,0.5)'
  },
  emailSquare: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 5,
    background: '#38c172',
    color: '#fdfdfd',
    textAlign: 'center'
  },
  contentRow: {
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  paddingCol:{
    paddingBottom: 25
  },
  paddingEmail: {
    paddingTop: 25, 
    paddingBottom: 40
  },
  link: {
    color: '#fdfdfd',
    marginRight: 5,
    width: 25,
    height: 25,

    "&:hover": {
      color: '#fdfdfd'
    },
  },
  imageSize: {
    width: '100%',
    height: '100%'
  },
  footer: {
    background: '#38c172', 
    left: 0, 
    bottom: 0, 
    position: 'relative', 
    width: '100%', 
    clear: 'both',
  },
  footerStyling: {
    margin: 20
  },
  footerContent: {
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
    marginTop: 5,
    marginBottom: 5
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({duration: 2000})
  });

  return (
    <div className={classes.background}>
      <div className={classes.content}>
        <div className={classes.root}>
          <AppBar position='static' className={classes.appBarStyle}>
            <Toolbar>
              <h4 className={classes.title}>
                Dayu
              </h4>
              <a href={'https://github.com/afifadayu'} target='_blank'>
                <div className={classes.buttonStyle}>
                  <h6 className={classes.appBarButton}>Github</h6>
                </div>
              </a>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.content}>
          <div className={classes.difference}>
            <h4>Hello, my name is ...</h4>
            <h1 className={classes.title}>Afifa Ayu Widhiyanthi</h1>
            <h4>A front end developer and designer.</h4>
          </div>
          <div className={classes.difference}>
            <h3 className={classes.title} id='portofolio'>Portofolio</h3>
            <div>
              <Row className={classes.contentRow}>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <a href={'https://www.berdooit.com'} target='_blank'>
                      <img src={berdooit} alt="Berdooit" className={classes.imageSize} />
                    </a>
                    <h4>ON GOING</h4>
                    <h5>Creative and Design</h5>
                    <h6>Berdooit: Startup in Indonesia</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'> 
                    <img src={mag} alt="Make A Group" className={classes.imageSize} />
                    <h4>2020</h4>
                    <h5>Front End Developer</h5>
                    <h6>Make a Group App</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={stupart} alt="Stupart" className={classes.imageSize} />
                    <h4>2020</h4>
                    <h5>Front End Developer</h5>
                    <h6>Student Partner Chatbot App</h6>
                  </div>
                </Col>
              </Row>
              <Row className={classes.contentRow}>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={tedx} alt="TEDx" className={classes.imageSize} />
                    <h4>2020</h4>
                    <h5>Content Designer</h5>
                    <h6>TEDxBinusUniversity</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={beaudei} alt="Beaudei" className={classes.imageSize} />
                    <h4>2020</h4>
                    <h5>UI Designer</h5>
                    <h6>Beaudei: Make up and Skincare Website</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={lokaloka} alt="Lokaloka" className={classes.imageSize} />
                    <h4>2020</h4>
                    <h5>UI Designer</h5>
                    <h6>Lokaloka: A souvenir services</h6>
                  </div>
                </Col>
              </Row>
              <Row className={classes.contentRow}>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={spss} alt="SPSS" className={classes.imageSize} />
                    <h4>2019</h4>
                    <h5>UI Designer</h5>
                    <h6>Statistical Project for Smart Student 2019</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={stunting} alt="Stunting" className={classes.imageSize} />
                    <h4>2018</h4>
                    <h5>Graphic Designer</h5>
                    <h6>Stunting Infographics</h6>
                  </div>
                </Col>
                <Col md className={classes.paddingCol}>
                  <div className={classes.square} data-aos='fade-in'>
                    <img src={martha} alt="Martha" className={classes.imageSize} />
                    <h4>2017</h4>
                    <h5>Graphic Designer</h5>
                    <h6>Martha Christina Tiahahu Musical Drama</h6>
                  </div>
                </Col>
              </Row>
            </div>
            
          </div>
          <div className={classes.paddingEmail}>
            <Row className={classes.contentRow}>
              <Col md>
                <div className={classes.emailSquare}>
                  <EmailIcon />
                  <br></br>
                    Send me an email!
                    <h5>
                    <a href={'mailto:afifaaayu@gmail.com'} className={classes.link}>
                      afifaaayu@gmail.com
                      </a>
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <AppBar position="static" className={classes.appBarStyle}>
          <div style={{ marginLeft: 50 }}>
            <div className={classes.footerStyling}>
              <div className={classes.footerContent}>
                Oh! Hi, let's connect!
              </div>
              <div className={classes.footerContent}>
                <a href={'https://www.linkedin.com/in/afifawd/'} target='_blank'>
                  <LinkedInIcon className={classes.link} />
                </a>
                <a href={'https://github.com/afifadayu'} target='_blank'>
                  <GitHubIcon className={classes.link} />
                </a>
                <a href={'https://www.instagram.com/afifadayu/'} target='_blank'>
                  <InstagramIcon className={classes.link} />
                </a>
              </div>
              <div className={classes.footerContent}>
                Made with ♡ by Dayu
                </div>
            </div>
          </div>
        </AppBar>
      </div>
    </div>
  );
}
