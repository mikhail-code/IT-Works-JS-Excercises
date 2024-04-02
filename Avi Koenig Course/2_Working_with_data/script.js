document.addEventListener('DOMContentLoaded', function () {
    var contacts = [
        { name: "John Doe", phone: "1234567890" },
        { name: "Mom", phone: "0553345231" },
        { name: "Alice from Starbucks", phone: "+7555555555" }
    ];
    function filterContact(contact, filter) {
        // takes filter and contact and compares them. If name or number is found returns contact, if not returns ''
        if(contact.name.toLowerCase().includes(filter.toLowerCase())){
            return contact
        }
        if(contact.phone.toLowerCase().includes(filter.toLowerCase())){
            return contact
        }
        else{
            return ''
        }
    }

    function fillContactList(filter = '') {
        var list = document.getElementById('contactList');
        list.innerHTML = ''; // Clear previous entries
        var foundContacts = [];
        if (filter == ''){
            foundContacts = contacts;
        }
        else{
            contacts.forEach(function (contact) {
                var searchResult = filterContact(contact, filter)
                if(searchResult != ''){
                    foundContacts.push(contact);
                }
            });
        }
        //  foreach does anonymous function call for every c from contacts. This func takes contact as an argument
        foundContacts.forEach(function (contact) {
            // Check if find
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = contact.name + ' - ' + contact.phone;
            list.appendChild(listItem);
        });
    }

    fillContactList();

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the value of the input field
        var filter = document.getElementById('contactInput').value;
    
        // Call fillContactList() with the input value
        fillContactList(filter);
    });
});
