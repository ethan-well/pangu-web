import React, {useState, useEffect} from 'react';
import { useLogin, useNotify } from 'react-admin';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { RequestData  } from './submit';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  grid: {
    height: "100%"
  },
  loginCardStyle: {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '20vw'
  }
}));

const LoginPage = () => {
  const classes = useStyles();
  const login = useLogin();
  const notify = useNotify();

  const [oauthUrl, setOAuthUrl] = useState("");

  const oAuthInfoCallback = (resp) => {
    setOAuthUrl(resp.result.complete_path)
  }

  useEffect(() => {
    RequestData(`${process.env.REACT_APP_EUROPA_OAUTH_INFO}?provider=github`, oAuthInfoCallback)
  }, []);


  const HandleClick = () => {
    login({ username: 'john', password: 'doe' }).catch(() => notify("Invalid email or password"));
  }

  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
      <Grid container className={classes.grid} >
        <Grid item xs={2} ></Grid>
        <Grid item xs={8} sx={{ height: '100vh' }} container
spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
          <Card className={classes.loginCardStyle} style={{ direction: 'column', alignItems: 'center', display:'flex', justifyContent:'center' }}>
          <CardContent className={classes.cardContentSize} sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"  }}>
                <Typography component="div">
                    <Button style={{textTransform: 'none'}} startIcon={<GitHubIcon />} href={oauthUrl} variant="outlined">
                        GitHub 登录
                    </Button>
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;