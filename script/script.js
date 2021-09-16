function clearInput() {
  document.querySelector('#name').value = '';
  document.querySelector('#salary').value = '';
  document.querySelector('#sales').value = '';
}

document.querySelector('#inputForm').addEventListener('submit', (e)=> {
  e.preventDefault();

  let inputName = document.querySelector('#name').value;
  let inputSalary = document.querySelector('#salary').value;
  let inputSales = document.querySelector('#sales').value;
  const salaryValue = parseFloat(inputSalary);
  const comissionValue = parseFloat(inputSales);

  let fullSalary;

  fullSalary = (salaryValue + ((comissionValue * 15) / 100 )).toFixed(2);

  let employeeList = document.createElement('tr');
  let employeeName = document.createElement('td');
  let employeeSalary = document.createElement('td');
  let employeeFinalSalary = document.createElement('td');

  let employeeNameNode = document.createTextNode(inputName);
  let employeeSalaryNode = document.createTextNode(inputSalary);
  let employeeFinalSalaryNode = document.createTextNode(fullSalary);

  employeeName.appendChild(employeeNameNode);
  employeeSalary.appendChild(employeeSalaryNode);
  employeeFinalSalary.appendChild(employeeFinalSalaryNode);

  if (inputName != '' && inputSalary != '' && inputSales != '') {
      
      document.querySelector('.tableList').appendChild(employeeList);
      document.querySelector('.tableList').appendChild(employeeName);
      document.querySelector('.tableList').appendChild(employeeSalary);
      document.querySelector('.tableList').appendChild(employeeFinalSalary);
      clearInput();
  } else {
      clearInput();
  }
})