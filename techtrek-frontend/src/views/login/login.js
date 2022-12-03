import React, { useState, useEffect } from "react";
import {
  FormControl,
  Card,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DBSLogo from "../../assets/DBS-logo.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../slices/users/usersSlice";

const useStyles = makeStyles((theme) => ({
  loginForm: {
    width: "30vw",
    height: "70vh",
    backgroundColor: "white",
    borderRadius: "10px",
    alignContent: "center",
    flexDirection: "column",
    display: "flex",
    padding: "2vw",
  },
  title: {
    color: "black",
    marginBottom: "8vh",
  },
  username: {
    marginBottom: "5vh",
  },
  password: {
    marginBottom: "10vh",
  },
  button: {
    marginBottom: "2vh",
  },
  link: {
    fontSize: "16px",
  },
}));

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickShowPassword = () => {
    setDisplayPassword(!displayPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = () => {
    console.log(username, password);
    axios
      .post(
        `https://flask-production-7a20.up.railway.app/login?username=${username}&password=${password}`
      )
      .then((response) => {
        console.log(response);
        if (response.data.token) {
          sessionStorage.setItem("userid", response.data.UserID);
          sessionStorage.setItem("jwtToken", response.data.token);
          dispatch(
            userLogin({
              username: username,
              userId: 1,
              jwtToken: response.data.token,
            })
          );
          navigate("/account");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <div style={{alignContent: "center"}}>
    <Card className={classes.loginForm}>
      <img src={DBSLogo} width="100px" style={{ margin: "auto" }} />
      <h3 className={classes.title}>Log In</h3>
      <TextField
        required
        label="Username"
        id="Username"
        alt="Username"
        className={classes.username}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        label="Password"
        id="Password"
        alt="Password"
        className={classes.password}
        type={displayPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {displayPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="medium"
        disabled={!password.length > 0 || !username.length > 0}
        onClick={submit}
      >
        Login
      </Button>
      <Link className={classes.link} href="/signup">
        Create an account
      </Link>
      {error && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              setOpen(false);
            }}
            severity="error"
          >
            Unable to authenticate
          </Alert>
        </Snackbar>
      )}
    </Card>
    </div>
  );
}

export default Login;
