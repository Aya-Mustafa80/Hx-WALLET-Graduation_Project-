export class User {
  constructor(
    public userName: string,
    public password: any,
    public grant_type: string
  ) {}
}

export class UserLog {
  constructor(public userName: string, public password: string) {}
}
