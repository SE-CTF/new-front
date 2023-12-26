import DataTable, { createTheme } from "react-data-table-component";
import { Paper } from "@mui/material";

createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#0F1924",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
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
const columns = [
  {
    id: 1,
    name: "رتبه",
    cell: (row) => <div>{row.id}</div>,
    width: "10%",
  },
  {
    id: 2,
    name: "نام",
    selector: (row) => row.name,
    width: "80%",
  },
  {
    id:3,
    name: "امتیاز",
    selector: (row) => row.score,
    width: "10%",
  },
];

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
    const paginationComponentOptions = {
        noRowsPerPage : true,
        rowsPerPageText: 'نفر در هر صفحه',
        rangeSeparatorText: 'از',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'همه نتایج',
    };
  return (
    <>
      <Paper
        square={false}
        elevation={10}
        style={{
          marginTop: "3%",
          backgroundColor: "#0F1924",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "80%",
          borderRadius: "10px",
        }}
      >
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          theme="solarized"
          defaultSortFieldId={3}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      </Paper>
    </>
  );
}

export default Scoreboard;
