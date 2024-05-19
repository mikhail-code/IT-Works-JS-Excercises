import React, { useContext } from 'react';
import EmployeeBox from '../components/EmployeeBox';
import {useEmployees } from '../context/EmployeeContext';



const HomePage: React.FC = () => {
  const employeesArray = useEmployees();
  console.log('employeesArray:', employeesArray); 
  console.log('Employees:', employeesArray); 

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-1">
      {employeesArray && employeesArray.map((emp) => (
        <EmployeeBox employee={emp} />
      ))}
      <h1>hHH</h1>
      <h1>hHH2</h1>
    </div>
  );
};

export default HomePage;
