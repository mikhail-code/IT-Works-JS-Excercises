import React, { createContext, useState, useContext } from 'react';

interface Employee {
  name: string;
  surname: string;
  phone: string;
  email: string;
  burgers_sold: number;
}

const employees = [
    { name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com', burgers_sold: 50 },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane.smith@example.com', burgers_sold: 30 },
  ];

 const EmployeeContext = createContext<{
  employees,
  addEmployee: (newEmployee: Employee) => void;
  updateEmployee: (updatedEmployee: Employee) => void; // TODO
  removeEmployee: (employeeToRemove: Employee) => void; // TODO
}>({
    employees,
  addEmployee: () => {},
  updateEmployee: () => {},
  removeEmployee: () => {},
});

export const EmployeeProvider = EmployeeContext.Provider;

export const useEmployees = () => useContext(EmployeeContext);
