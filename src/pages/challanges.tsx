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
import axios from "axios";

interface RawDataCell {
  title: string;
  score: number;
  category: string;
}

interface DataCell {
  id: number;
  title: string;
  diff: string;
  score: number;
  category: string;
  solved: boolean;
}
interface selectedCellType {
  title: string;
  description: string;
  score: number;
  hints: string[];
  category: string;
}
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
      cursor: "pointer",
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
    name: "اسم سوال",

    selector: (row: { title: any }) => row.title,
  },
  {
    name: "سختی",
    selector: (row: { diff: any }) => row.diff,
    conditionalCellStyles: [
      {
        when: (row: { diff: string }) => row.diff == "آسان",
        style: {
          color: "rgba(63, 195, 128, 0.9)",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row: { diff: string }) => row.diff == "متوسط",
        style: {
          color: "rgba(208, 258, 6, 0.9)",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row: { diff: string }) => row.diff == "سخت",
        style: {
          color: "rgba(242, 38, 19, 0.9)",
          "&:hover": {
            cursor: "not-allowed",
          },
        },
      },
    ],
  },
  {
    name: "امتیاز",
    selector: (row: { score: any }) => row.score,
  },
  {
    name: "دسته بندی",
    selector: (row: { category: any }) => row.category,
  },
];

const conditionalRowStyles = [
  {
    when: (row: { solved: boolean }) => row.solved == true,
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
  <div>
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
  </div>
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
  const [solved, setSolved] = React.useState(false);
  const [first, setFirst] = React.useState(false);
  const [rawDatas, setRawDatas] = React.useState<RawDataCell[]>();
  const [processedData, setProcessedData] = React.useState<
    DataCell[] | undefined
  >(undefined);

  const [selectedCell, setSelectedCell] = React.useState<
    selectedCellType | undefined
  >(undefined);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/challenges/")
      .then(function (response) {
        console.log(response.data);
        setRawDatas(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const rawDataProcess = (rawDataCells: RawDataCell[]) => {
    const processedDatas: DataCell[] = rawDataCells.map((cell, index) => {
      const processedData: DataCell = {
        id: index,
        title: cell.title,
        diff: cell.score < 30 ? "آسان" : cell.score < 60 ? "متوسط" : "سخت",
        score: cell.score,
        category: cell.category,
        solved: false,
      };
      return processedData;
    });

    console.log(processedDatas);
    setProcessedData(processedDatas);

    return processedDatas;
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (rawDatas !== undefined && !first) {
      setFirst(true);

      rawDataProcess(rawDatas);
    }
  }, [rawDatas]);
  const filteredItems = processedData?.filter(
    (item) =>
      item.title &&
      item.title.includes(filterText) &&
      item.diff &&
      item.diff.includes(filterDifficulty)
  );
  const handleclose = () => {
    setOpen(false);
  };
  const handleClick = (row: {
    title: React.SetStateAction<string>;
    solved: boolean | ((prevState: boolean) => boolean);
  }) => {
    const id = row.id + 1;

    axios
      .get(`http://localhost:8000/api/challenges/${id}/`)
      .then(function (response) {
        console.log(response.data.category);
        
        setSelectedCell(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setSelectedTitle(row.title);
    setSolved(row.solved);
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
      <Box display="flex" flexDirection="row">
        <Box>
          <FilterComponent
            onFilter={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </Box>
        <Box ml={"5%"}>
          <MenuComponent
            onFilter={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setFilterDifficulty(e.target.value)}
            filterText={filterDifficulty}
          />
        </Box>
      </Box>
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
      {processedData !== undefined && (
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

          {selectedCell !== undefined && (
            <DialogComponent
              open={open}
              handleclose={handleclose}
              title={selectedCell?.title}
              solved={false}
              score={selectedCell?.score}
              description={selectedCell?.description}
              category={selectedCell?.category}
              hints={selectedCell?.hints}
            />
          )}
        </>
      )}
    </>
  );
}

export default QuickFilteringGrid;
