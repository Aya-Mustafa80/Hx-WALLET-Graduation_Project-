export class Prescription {
  constructor(
    public patientSSN: any,
    public doctorSSN: any,
    public date: any,
    public DrugsData: [
      {
        DrugName: any;
        when: any;
        Intake: any;
        Quantity: any;
        DurationStart: any;
        DurationEnd: any;
        OtherInstructions: any;
        strength: any;
      }
    ]
  ) {}
}

export class Drugsinfo {
  constructor(
    public DrugName: any,
    public when: any,
    public Intake: any,
    public Quantity: any,
    public DurationStart: any,
    public DurationEnd: any,
    public OtherInstructions: any,
    public strength: any
  ) {}
}
