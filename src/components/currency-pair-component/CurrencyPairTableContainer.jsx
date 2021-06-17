import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const TableLayout = (props) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Daily Change</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Last Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLayout;
