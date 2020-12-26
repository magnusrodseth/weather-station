import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface Column {
  id: "name" | "min" | "current" | "max";
  label: string;
}

const columns: Column[] = [
  { id: "name", label: "Name" },
  { id: "min", label: "Minimum" },
  { id: "current", label: "Nå" },
  { id: "max", label: "Maximum" },
];

interface Data {
  name: string;
  min: number;
  current: number;
  max: number;
}

function createData(
  name: string,
  min: number,
  current: number,
  max: number
): Data {
  return { name, min, current, max };
}

const rows = [
  createData("temp", -20, 18, 20),
  createData("luftfuktighet", -20, 18, 20),
  createData("duggpunkt", -20, 18, 20),
  createData("solstråling", -20, 18, 20),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const CustomTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return <TableCell key={column.id}>{value}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
