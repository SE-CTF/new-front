import DataTable, { createTheme } from "react-data-table-component";
import { Paper, useTheme, useMediaQuery } from "@mui/material";
import solarizedTheme from "../themes/react-component-table-themes";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { useAuth } from "../context/AuthContext";

createTheme(
  "solarized",
  {
    text: {
      fontFamily: "vazirmatn",
      primary: "white",
      secondary: "#2aa198",
    },
    background: {
      default: "transparent",
    },
    context: {
      background: "#cb4b16",
      text: "primary",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);
createTheme(
  "solarized_light",
  {
    text: {
      fontFamily: "vazirmatn",
      primary: "black",
      secondary: "#2aa198",
    },
    background: {
      default: "transparent",
    },
    context: {
      background: "#cb4b16",
      text: "primary",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "light"
);

const customStyles = {
  table: {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "96%",
    },
  },

  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const data = [
  {
    id: 1,
    name: "شرکت کننده اول",
    score: 10,
  },
  {
    id: 2,
    name: "شرکت کننده دوم",
    score: 30,
  },
  {
    id: 3,
    name: "شرکت کننده سوم",
    score: 20,
  },
];
function Scoreboard() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const isTablet = useMediaQuery(useTheme().breakpoints.down("md"));
  const { mode } = useAuth();
  const columns = [
    {
      id: 1,
      name: "رتبه",
      cell: (row: {
        id:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | null
          | undefined;
      }) => <div>{row.id}</div>,
      width: isMobile ? "25%" : isTablet ? "20%" : "15%",
    },
    {
      id: 2,
      name: "نام",
      selector: (row: { name: string }) => row.name,
      width: isMobile ? "50%" : isTablet ? "60%" : "70%",
    },
    {
      id: 3,
      name: "امتیاز",
      selector: (row: { score: number }) => row.score,
      width: isMobile ? "25%" : isTablet ? "20%" : "15%",
    },
  ];
  const paginationComponentOptions = {
    noRowsPerPage: true,
    rowsPerPageText: "نفر در هر صفحه",
    rangeSeparatorText: "از",
    selectAllRowsItem: true,
    selectAllRowsItemText: "همه نتایج",
  };
  return (
    <>
      <Paper
        square={false}
        elevation={10}
        style={{
          marginTop: "3%",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: isMobile ? "95vw" : isTablet ? "85vw" : "80vw",
          borderRadius: "10px",
        }}
      >
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          theme={mode == "dark" ? "solarized" : "solarized_light"}
          defaultSortFieldId={3}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      </Paper>
    </>
  );
}

export default Scoreboard;
