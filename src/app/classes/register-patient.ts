export class RegisterPatient {
  constructor(
    public name: string,
    public ssn: string,
    public phone: string,
    public address: any,
    public email: string,
    public age: any,
    public password: string,
    public confirmpassword: any
  ) {}
}
