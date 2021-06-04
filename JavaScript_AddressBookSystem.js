class AddressBook {
     firstname;
	 lastname;
     address;
     city;
     state;
	 zipcode;
	 phoneNumber;
	 emailId;
    
     constructor(...params) {
       this.firstname = params[0];
       this.lastnamename = params[1];
       this.address = params[2];
       this.city = params[3];
       this.state = params[4];
	   this.zipcode = params[5];
       this.phoneNumber = params[6];
       this.emailId = params[7];
     }

     toString() {
        return "firstname= "+ this.firstname +", lastname = "+this.lastname+", address = "+this.address +
                  ", city = "+ this.city +", state = "+this.state +", zipcode = "+this.zipcode +
				  ", phoneNumber = "+this.phoneNumber + ", emailId = "+this.emailId;
     }
}

const addressbook = new AddressBook("Mark", "Wood","West hill","Missouri","California","10024","5690125689","mark@orkut.com");
console.log("AddressBook : "+addressbook.toString());