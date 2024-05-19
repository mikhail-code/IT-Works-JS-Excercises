import React from 'react';

interface Employee {
  name: string;
  burgers_sold: number;
}

const EmployeeBox: React.FC<Employee> = ({ employee }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-medium mb-2">{employee.name}</h3>
      <p className="text-gray-500">Burgers Sold: {employee.burgers_sold}</p>
    </div>
  );
};

export default EmployeeBox;
