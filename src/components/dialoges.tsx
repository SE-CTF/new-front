import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Grid,
  Alert,
  Snackbar,
  ClickAwayListener,
  Tooltip,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import React from "react";
import BasicPopover from "./basicpopover";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useAuth } from "../context/AuthContext";
interface DialogProps {
  open: boolean;
  handleclose: () => void;
  title: string;
  solved: boolean;
  description: string;
  score: number;
  category: string;
  hints: string[];
}

function DialogComponent({
  open,
  handleclose,
  title,
  solved,
  description,
  score,
  category,
  hints,
}: DialogProps) {
  const StyledMarkdown = styled("div")({
    fontFamily: "vazirmatn",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "white",
  });
  const { register, handleSubmit } = useForm();
  const { user, isUserSignedIn } = useAuth();
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
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
  console.log(category);

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleclose}
      >
        <DialogTitle>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              {" "}
              <Typography  variant="h5">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                color="info"
                aria-label="delete"
                onClick={handleclose}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={10}>
              <DialogContentText>
                {" "}
                <Typography  variant="h6">
                  دسته بندی:{category}
                </Typography>
              </DialogContentText>
              <br />
              <DialogContentText>
                {" "}
                <Typography  variant="h6">
                  توضیحات:
                </Typography>
              </DialogContentText>
              <DialogContentText>
                <StyledMarkdown>
                  <ReactMarkdown  remarkPlugins={[gfm]}>
                    {description}
                  </ReactMarkdown>
                </StyledMarkdown>
              </DialogContentText>
            </Grid>
            <Grid item xs={2}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {hints?.map((value, index) => (
                  <BasicPopover hint={value} id={index.toString()} />
                ))}
              </div>
            </Grid>
          </Grid>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={10}>
                <TextField
                  {...register("flag")}
                  disabled={solved || !isUserSignedIn}
                  fullWidth
                  variant="outlined"
 
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ color: "#47d794" }}
                >
                  Submit Flag
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogComponent;
