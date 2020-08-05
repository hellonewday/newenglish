import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
} from "@material-ui/core";
export default function DataTable({ data, onDelete }) {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.comments.length}</TableCell>
                <TableCell>{item.likes}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onDelete(item.id)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
