import React from 'react';
import { Table as BootstrapTable, Container } from 'react-bootstrap';
import TableRow from './TableRow';

const Table = (props) => {
  return (
    <Container>
      <h2 className="text-center my-5" style={{ backgroundColor: '#333', color: '#fff' }}>Academic Foundations</h2>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr  style={{backgroundColor: "red"}}>
            <th >Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => (
            <TableRow key={course.id} course={course} />
          ))}
        </tbody>
      </BootstrapTable>
    </Container>
  );
};

export default Table;
