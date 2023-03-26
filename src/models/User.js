import Name from "./Name";
class User {
  constructor (firstname,lastname, email, password, nationality, phoneNumber) {
    this.Name=new Name(firstname,lastname);
    this.Name.lastName= Name.lastName;
    this.email = email;
    this.password = password;
    this.nationality = nationality;
    this.phoneNumber = phoneNumber;
  }
}
export default User;
