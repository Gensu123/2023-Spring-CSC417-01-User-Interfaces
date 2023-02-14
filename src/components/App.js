import React, { useState } from 'react';
import Table from './Table';
import Option from './Option';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, description: 'Intro to Computer Science', semester: 'Fall', prefix: 'CSC', number: '171', grade: 'A' },
    { id: 2, description: 'Data Structures', semester: 'Spring', prefix: 'CSC', number: '172', grade: 'B' },
    { id: 3, description: 'Algorithms', semester: 'Fall', prefix: 'CSC', number: '273', grade: 'C' },
    { id: 4, description: 'Computer Systems and Networks', semester: 'Spring', prefix: 'CSC', number: '275', grade: 'D' },
  ]);

  return (
    <div className="App" style={{
      alignItems: "center", 
      textAlign: "center",
      border: "solid red 2px",
      
      
      
      }}>
      <Option />
      <Table courses={courses} />
    </div>
  );
}

export default App;
