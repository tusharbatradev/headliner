import React, { useState } from "react";
import { auth } from "../Utils/firebaseConfig";
import Logo from "../assets/Logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, toggleMode } from "../Utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // New state for name
  const dispatch = useDispatch();
  const { isUserLogin, isLoginMode } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isLoginMode) {
        // Login functionality
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        dispatch(loginUser()); // Set user as logged in
        navigate("/browse");
      } else {
        // Signup functionality
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Update the user's profile with the name
        await updateProfile(user, {
          displayName: name,
        });

        alert("Account created successfully!");
        dispatch(toggleMode()); // Switch to login mode after signup
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={"column"}
      alignItems="center"
      minHeight="60vh"
      gap={10}
    >
      <img src={Logo} width={"150px"} alt="App Logo" />
      <Box
        sx={{
          padding: 2,
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
        }}
      >
        <Box mb={3}>
          <Typography variant="h4" fontWeight="bold">
            {isLoginMode ? "Log In" : "Sign Up"}
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAuth();
          }}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!isLoginMode && ( // Show name field only for signup
            <Box mb={2}>
              <Typography fontWeight="bold">
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                type="text"
                placeholder="Your Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLoginMode}
                InputProps={{
                  style: {
                    borderRadius: "12px",
                  },
                }}
              />
            </Box>
          )}
          <Box mb={2}>
            <Typography fontWeight="bold">
              Email <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              type="email"
              placeholder="Your Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                style: {
                  borderRadius: "12px",
                },
              }}
            />
          </Box>

          <Box mb={2}>
            <Typography fontWeight="bold">
              Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              placeholder="Your Password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                style: {
                  borderRadius: "12px",
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              backgroundColor: "black",
              fontSize: "18px",
              padding: "10px",
              borderRadius: "24px",
            }}
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </Button>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography sx={{ fontSize: "16px" }} variant="body2">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => dispatch(toggleMode())}
              sx={{
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              {isLoginMode ? "Sign Up" : "Login"}
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
