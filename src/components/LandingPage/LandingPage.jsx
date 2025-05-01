import { Box, CssBaseline, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage({name}) {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: { xl: "25%", lg: "30%", md: "50%", sm: "50%", xs: "100%" },
            height: "100vh", 
            border: "1px solid #e1e1e1",
            backgroundColor: "#f7f8f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 3,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {/* Text above the button  */}
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Welcome to PopX
            </Typography>
            <Typography sx={{ color: "#74777b", fontWeight: "Bold" }}>
              Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.
            </Typography>
          </Box>

          {/* Login and Sign up button  */}
          <Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 2,
                  backgroundColor: "#6c25ff",
                  p: { xl: "2%", lg: "3%", md: "2%", sm: "3%", xs: "3%" },
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create Account
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  width: "100%",
                  mt: 2,
                  p: { xl: "2%", lg: "3%", md: "2%", sm: "3%", xs: "3%" },
                  borderRadius: "10px",
                  backgroundColor: "#cebafb",
                  color: "black",
                  fontWeight: "600",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already Registered? Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
