export class userAccount {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    contact: string;
    address: string;

    constructor(id, userName, password, firstName, lastName, contact, address) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.contact = contact;
        this.address = address;
    }
}