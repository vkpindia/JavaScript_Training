var employee = {
    "Employees": [
        {
            "userId": "krish",
            "jobTitle": "Developer",
            "firstName": "Krish",
            "lastName": "Lee",
            "employeeCode": "E1",
            "region": "CA",
            "phoneNumber": "123456",
            "emailAddress": "krish.lee@learningcontainer.com"
        },
        {
            "userId": "devid",
            "jobTitle": "Developer",
            "firstName": "Devid",
            "lastName": "Rome",
            "employeeCode": "E2",
            "region": "CA",
            "phoneNumber": "1111111",
            "emailAddress": "devid.rome@learningcontainer.com"
        },
        {
            "userId": "tin",
            "jobTitle": "Program Directory",
            "firstName": "tin",
            "lastName": "jonson",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "2222222",
            "emailAddress": "tin.jonson@learningcontainer.com"
        },
        {
            "userId": "Smith",
            "jobTitle": "Program Directory",
            "firstName": "tin",
            "lastName": "jonson",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "2222222",
            "emailAddress": "tin.jonson@learningcontainer.com"
        },
        {
            "userId": "Scott",
            "jobTitle": "Program Directory",
            "firstName": "tin",
            "lastName": "jonson",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "2222222",
            "emailAddress": "tin.jonson@learningcontainer.com"
        }
    ]
};

var tableHeader = ['User ID', 'Job Title', 'Name', 'Region', 'Mobile', 'Email'];


function setEmployeeInLocalStorage() {
    if (localStorage.getItem('employee') === null) {
        localStorage.setItem('employee', JSON.stringify(employee));
    } else {
        alert('Emplyee data are available');
    }

    if ("employee" in localStorage) {
        console.log('employee', JSON.parse(localStorage.getItem('employee')));
    } else {
        console.log('employees are not available');
    }
}

function inserEmpRecordInTable() {
    if ("employee" in localStorage && localStorage.getItem('employee') !== null) {
        var employeeRecords = JSON.parse(localStorage.getItem('employee'));

        var headTr = document.getElementById('headTR');
        var tBody = document.getElementById('tbody_1');


        var headTh = "";
        var tableRow = "";

        tableHeader.map(head => {
            headTh += `<th>${head}</th>`
        });

        headTr.innerHTML = headTh;


        employeeRecords.Employees.map(emp => {
            tableRow += `<tr>
            <td>${emp.userId}</td>
            <td>${emp.jobTitle}</td>
            <td>${emp.firstName} ${emp.lastName}</td>
            <td>${emp.region}</td>
            <td>${emp.phoneNumber}</td>
            <td>${emp.emailAddress}</td>
        </tr>`;
        });

        console.log('tableRow', tableRow);

        tBody.innerHTML = tableRow;
    } else {
        alert('Employees are not available');
    }


}







setEmployeeInLocalStorage();