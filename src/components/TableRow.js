import React from 'react';

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.course.description}</td>
      <td>{props.course.semester}</td>
      <td>{props.course.prefix}</td>
      <td>{props.course.number}</td>
      <td>{props.course.grade}</td>
    </tr>
  );
};

export default TableRow;
