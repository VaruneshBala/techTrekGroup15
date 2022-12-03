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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DBSLogo from "../../assets/DBS-logo.jpg";

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

function Signup() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const [token, setToken] = useState("");

  const handleClickShowPassword = () => {
    setDisplayPassword(!displayPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = () => {
    console.log(username, password);
    const body = { username: username, password: password };
    // axios
    //   .post("https://reqres.in/invalid-url", body)
    //   .then((response) => setToken(response.data))
    //   .catch((error) => {
    //     console.error("There was an error!", error);
    //   });
  };
  return (
    <div className={classes.loginForm}>
      <img src={DBSLogo} width="100px" style={{ margin: "auto" }} />
      <h3 className={classes.title}>Sign Up</h3>
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
        Sign Up
      </Button>
      <Link className={classes.link} href="/login">
        Login to an existing account
      </Link>
    </div>
  );
}

export default Signup;
