import React, { useContext } from 'react';
import { EmployeeContext, useEmployees } from './context/EmployeeContext'; // Adjust path if needed

interface Employee {
  name: string;
  surname: string;
  phone: string;
  email: string;
  role: 'admin' | 'employee';
  burgers_sold: number;
}

const EmployeeManagement: React.FC = () => {
  const { employees } = useEmployees(); // Use the hook to get employees

  return (
    <div className="container mx-auto p-4">
      <h1>Employee Management</h1>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Surname</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Burgers Sold</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.email}>
              <td className="px-4 py-2 border border-gray-400">{employee.name}</td>
              <td className="px-4 py-2 border border-gray-400">{employee.surname}</td>
              <td className="px-4 py-2 border border-gray-400">{employee.phone}</td>
              <td className="px-4 py-2 border border-gray-400">{employee.email}</td>
              <td className="px-4 py-2 border border-gray-400">{employee.role}</td>
              <td className="px-4 py-2 border border-gray-400">{employee.burgers_sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
