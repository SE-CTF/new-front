import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavBarLinkProps {
  link: string;
  text: string;
  icon: ReactNode;
}

const NavBarLink = ({ link, text, icon }: NavBarLinkProps) => {
  return (
    <>
      <Link to={link}>
        <Button
          sx={{
            marginRight: "30px",
            "&:focus": {
              outline: "none",
            },
          }}
          startIcon={icon}
        >
          {" "}
          <Typography fontFamily={"vazirmatn"} variant="body1">
            {text}{" "}
          </Typography>
        </Button>
      </Link>
    </>
  );
};

export default NavBarLink;
