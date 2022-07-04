export class Prescription {
  constructor(
    public patientSSN: any,
    public doctorSSN: any,
    public date: any,
    public DrugsData: [
      {
        DrugName: any;
        DrugId: any;
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
