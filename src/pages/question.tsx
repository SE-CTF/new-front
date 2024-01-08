import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../components/custombutton";
const mkdStr = `
# !!!بزگترین جامعه حق طلبان 

---



\`\`\`python

print("hello world")

\`\`\`
`;
function Question() {
  const customInputLabelStyle = {
    color: "#3498db",
    fontFamily: "vazirmatn",
  };
  const customInputInputProps = {
    color: "#3498db",
    background: "#2c3e50",
    borderRadius: "8px",
    fontFamily: "vazirmatn",
  };
  const [value, setValue] = React.useState(mkdStr);
  const [name, setname] = React.useState("");
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const boxStyle = {
    flex: 1,
    height: "100px",
    marginRight: "10px",
  };
  const handleSubmit = () => {
    console.log(value);
    console.log(name);
  };
  return (
    <Paper
      square={false}
      elevation={10}
      sx={{ height: 550 }}
      style={{
        marginTop: "3%",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "90%",
        borderRadius: "10px",
        padding: "2%",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: "10%",
          marginBottom: "2%",
        }}
      >
        <Box width={"30%"}>
          <TextField
            id="email"
            InputLabelProps={{
              style: customInputLabelStyle,
            }}
            InputProps={{
              style: customInputInputProps,
            }}
            label="نام سوال"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            fullWidth
            required
          />
        </Box>
        <Box width={"20%"}></Box>
        <Box width={"30%"}>
          <Select
            label="برچسب ها"
            variant="outlined"
            style={{
              color: "#3498db",
              background: "#2c3e50",
              borderRadius: "8px",
              fontFamily: "vazirmatn",
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  background: "#2c3e50",
                  fontFamily: "vazirmatn",
                },
              },
            }}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
          </Select>
        </Box>
      </div>
      <div
        style={{ height: "80%", marginTop: "0%" }}
        className="container"
        dir="ltr"
      >
        <MDEditor height={"100%"} value={value} onChange={setValue} />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: "2%",
        }}
      ></div>
      <Box textAlign="center" height="2%">
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#67b26f" }}
          variant="contained"
        >
          <Typography>طرح سوال</Typography>
        </Button>
      </Box>
    </Paper>
  );
}

export default Question;
