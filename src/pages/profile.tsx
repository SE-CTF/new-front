import { Box, Grid, Icon, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "../assets/profile.png";
import { TextField, styled } from "@mui/material";

const Profile = () => {
  const WhiteTextField = styled(TextField)({
    "& label.Mui-focused": { color: "white" },
    "& .MuiInput-underline:after": { borderBottomColor: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": { borderColor: "white" },
    },
    "& .MuiOutlinedInput-input": { color: "white" },
  });
  return (
    <>
      <Paper
        square={false}
        elevation={10}
        sx={{ m: 1, height: 600 }}
        style={{
          marginTop: "3%",
          backgroundColor: "#0F1924",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "80%",
          borderRadius: "10px",
          direction: "rtl",
        }}
      >
        <div dir="rtl">
          <Grid container>
            <Grid item xs={8}></Grid>
            <WhiteTextField variant="outlined" />
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Box mt={"50%"} alignItems="center">
                <img
                  src={profile}
                  alt="Logo"
                  className="mx-auto"
                  height="185"
                  style={{ maxWidth: "500px", borderRadius: "20px" }}
                />
                <Typography
                  variant="h4"
                  fontFamily={"vazirmatn"}
                  color={"white"}
                  gutterBottom
                >
                  username
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </>
  );
};

export default Profile;
