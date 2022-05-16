let type = 'text'

let customer = {
    ID: 17459,
    name: 'Brandon Sanderson',
    address: '12th Street, Cityville CA, 90210',
    phone: '(702) 867-5309',
    email: 'bsandy@fakemail.com',
    header(){
        console.log('Contact info for customer: ' + this.ID + ', ' + this.name);
    },
    phoneContact(){
        console.log('Call the customer at ' + this.phone);
    },
    addressContact(){
        console.log('Send mail for customer to ' + this.address);
    },
    emailContact(){
        console.log('Send email to the customer at ' + this.email);
    },
    textContact(){
        console.log('Text the customer at ' + this.phone);
    }
};

customer.header();

if (type == 'call'){
    customer.phoneContact();
} else if (type == 'mail'){
    customer.addressContact();
} else if (type == 'email'){
    customer.emailContact();
} else if (type == 'text'){
    customer.textContact();
} else {
    console.log('Not a valid form of contact.');
}