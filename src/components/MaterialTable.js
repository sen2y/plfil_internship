import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useEffect, useState } from "react";

function createData(id, role, count, age10, age20, age30, age40) {
    return {
        id,
        role,
        count,
        age10,
        age20,
        age30,
        age40,
    };
}

let rows = [];

function descendingComparator(a, b, ordersBy) {
    if (b[ordersBy] < a[ordersBy]) {
        return -1;
    }
    if (b[ordersBy] > a[ordersBy]) {
        return 1;
    }
    return 0;
}

function getComparator(orders, ordersBy) {
    return orders === "desc"
        ? (a, b) => descendingComparator(a, b, ordersBy)
        : (a, b) => -descendingComparator(a, b, ordersBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const orders = comparator(a[0], b[0]);
        if (orders !== 0) {
            return orders;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "id",
        numeric: false, // 정렬
        disablePadding: true,
        label: "Rank",
    },
    {
        id: "role",
        numeric: true,
        disablePadding: false,
        label: "Role",
    },
    {
        id: "count",
        numeric: true,
        disablePadding: false,
        label: "Count ",
    },
    {
        id: "age10",
        numeric: true,
        disablePadding: false,
        label: "10대 이하 (단위 %) ",
    },
    {
        id: "age20",
        numeric: true,
        disablePadding: false,
        label: "20대 (단위 %) ",
    },
    {
        id: "age30",
        numeric: true,
        disablePadding: false,
        label: "30대 (단위 %) ",
    },
    {
        id: "age40",
        numeric: true,
        disablePadding: false,
        label: "40대  이상 (단위 %)",
    },
];

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        orders,
        ordersBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"} // 정렬
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={ordersBy === headCell.id ? orders : false}
                    >
                        <TableSortLabel
                            active={ordersBy === headCell.id}
                            direction={ordersBy === headCell.id ? orders : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {ordersBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {orders === "desc" ? "sorted descending" : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    orders: PropTypes.oneOf(["asc", "desc"]).isRequired,
    ordersBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    배역 Top 100
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                // <Tooltip title="Delete"> // 기존에 있는 삭제버튼
                //     <IconButton>
                //         <DeleteIcon />
                //     </IconButton>
                // </Tooltip>
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function MaterialTable(props) {

    const [orders, setOrders] = useState("asc");
    const [ordersBy, setOrdersBy] = useState("id");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    console.log(props);
    console.log(props.roleCount);
    const list = props.roleCount;
    rows = [];

    for (let i = 0; i < 100; i++) {
        let sum = list[i].age10 + list[i].age20 + list[i].age30 + list[i].age40;
        let p10 = ((list[i].age10 / sum) * 100).toFixed(1);
        let p20 = ((list[i].age20 / sum) * 100).toFixed(1);
        let p30 = ((list[i].age30 / sum) * 100).toFixed(1);
        let p40 = ((list[i].age40 / sum) * 100).toFixed(1);
        rows.push(
            createData(
                i + 1,
                list[i].role,
                list[i].count,
                parseFloat(p10),
                parseFloat(p20),
                parseFloat(p30),
                parseFloat(p40)
            )
        );
    }
    rows = rows.sort(function (a, b) {
        return a.id > b.id ? 1 : -1;
    });

    const handleRequestSort = (event, property) => {
        const isAsc = ordersBy === property && orders === "asc";
        setOrders(isAsc ? "desc" : "asc");
        setOrdersBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            orders={orders}
                            ordersBy={ordersBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(orders, ordersBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        "aria-labelledby": labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.role}</TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                            <TableCell align="right">{row.age10}</TableCell>
                                            <TableCell align="right">{row.age20}</TableCell>
                                            <TableCell align="right">{row.age30}</TableCell>
                                            <TableCell align="right">{row.age40}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}
