import React, { useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import DialogComponent from "../components/dialoges";
import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

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
      minHeight: "72px", // override the row height
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
const columns = [
  {
    name: "Title",

    selector: (row) => row.title,
  },
  {
    name: "diff",
    selector: (row) => row.diff,
    conditionalCellStyles: [
      {
        when: (row) => row.diff == "آسان",
        style: {
          color: "rgba(63, 195, 128, 0.9)",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.diff == "متوسط",
        style: {
          color: "rgba(208, 258, 6, 0.9)",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.diff == "سخت",
        style: {
          color: "rgba(242, 38, 19, 0.9)",
          "&:hover": {
            cursor: "not-allowed",
          },
        },
      },
    ],
  },
];

const data = [
  {
    id: 1,
    title: "سوال یک",
    diff: "آسان",
    solved: false,
  },
  {
    id: 2,
    title: "سوال دو",
    diff: "متوسط",
    solved: false,
  },
  {
    id: 3,
    title: "سوال سه",
    diff: "سخت",
    solved: false,
  },
  {
    id: 4,
    title: "سوال چهار",
    diff: "متوسط",
    solved: false,
  },
  {
    id: 5,
    title: "سوال پنج",
    diff: "سخت",
    solved: false,
  },
  {
    id: 6,
    title: "سوال شش",
    diff: "سخت",
    solved: true,
  },
  {
    id: 7,
    title: "سوال هفت",
    diff: "سخت",
    solved: false,
  },
  {
    id: 8,
    title: "سوال هشت",
    diff: "سخت",
    solved: false,
  },
  {
    id: 9,
    title: "سوال نه",
    diff: "سخت",
    solved: false,
  },
  {
    id: 10,
    title: "سوال ده",
    diff: "سخت",
    solved: false,
  },
  {
    id: 11,
    title: "سوال یازده",
    diff: "سخت",
    solved: false,
  },
  {
    id: 12,
    title: "سوال دوازده",
    diff: "سخت",
    solved: true,
  },
];

const conditionalRowStyles = [
  {
    when: (row) => row.solved == true,
    style: {
      backgroundColor: "#073648",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="فیلتر کردن با اسم"
      label="جست و جو"
      value={filterText}
      onChange={onFilter}
      color="info"
      InputLabelProps={{
        style: {
          color: "#3498db",
          fontFamily: "vazirmatn",
        },
      }}
      InputProps={{
        style: {
          color: "#3498db",
          background: "#2c3e50",
          borderRadius: "8px",
          fontFamily: "vazirmatn",
        },
      }}
    />
  </>
);

const MenuComponent = ({ filterText, onFilter }) => (
  <>
    <Select
      label="سلام"
      variant="outlined"
      value={filterText}
      onChange={onFilter}
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
        <em>بدون فیلتر</em>
      </MenuItem>
      <MenuItem value={"آسان"}>
        {" "}
        <Typography fontFamily={"vazirmatn"}>آسان</Typography>
      </MenuItem>
      <MenuItem value={"متوسط"}>
        {" "}
        <Typography fontFamily={"vazirmatn"}>متوسط</Typography>
      </MenuItem>
      <MenuItem value={"سخت"}>
        {" "}
        <Typography fontFamily={"vazirmatn"}>سخت</Typography>
      </MenuItem>
    </Select>
  </>
);

function QuickFilteringGrid() {
  const [filterText, setFilterText] = React.useState("");
  const [filterDifficulty, setFilterDifficulty] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState("");
  const [solved , setSolved] = React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.title &&
      item.title.includes(filterText) &&
      item.diff &&
      item.diff.includes(filterDifficulty)
  );
  const handleclose = () => {
    setOpen(false);
  };
  const handleClick = (row) => {
    setSelectedTitle(row.title)
    setSolved(row.solved)
    setOpen((prevOpen) => {
      
      return true; 
    });
  };
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
      }
    };

    return (
      <>
        <Box>
          <FilterComponent
            onFilter={(e) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </Box>
        <Box ml={"5%"}>
          <MenuComponent
            onFilter={(e) => setFilterDifficulty(e.target.value)}
            filterText={filterDifficulty}
          />
        </Box>
      </>
    );
  }, [filterText, filterDifficulty]);

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
          backgroundColor: "#0F1924",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "80%",
          borderRadius: "10px",
          paddingTop: "1%",
        }}
      >
        <DataTable
          columns={columns}
          data={filteredItems}
          customStyles={customStyles}
          theme="solarized"
          onRowClicked={handleClick}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
          pagination
          paginationComponentOptions={paginationComponentOptions}
          conditionalRowStyles={conditionalRowStyles}
        />
      </Paper>
      <DialogComponent open={open} handleclose={handleclose} title={selectedTitle} solved={solved}/>
    </>
  );
}

export default QuickFilteringGrid;
