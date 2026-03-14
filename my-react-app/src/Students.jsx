const Students = ({ student }) => {
  return (
    <div>
      <h2>Students:</h2>
      {
        student.map((stu, index) => (
          <ul key={index}>
            <br />
            <li>Name: {stu.name}</li>
            <li>Age: {stu.age}</li>
            <li>Email: {stu.email}</li>
          </ul>
        ))
      }
    </div>
  );
};

export default Students;