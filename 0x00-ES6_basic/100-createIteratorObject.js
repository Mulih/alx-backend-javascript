export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentDepartmentIndex < departments.length) {
            const currentDepartment = departments[currentDepartmentIndex];
            if (currentEmployeeIndex < currentDepartment.length) {
              const employee = currentDepartment[currentEmployeeIndex];
              currentEmployeeIndex++;
              return { value: employee, done: false };
            }
            currentDepartmentIndex++;
            currentEmployeeIndex = 0;
            return this.next();
          }
          return { done: true };
        },
      };
    },
  };
}
