export class RegisterDoctor {
  constructor(
    public name: string,
    public ssn: string,
    public phone: string,
    public specialization: string,
    public email: string,
    public password: string,
    public confirmpassword: string
  ) {}
}
