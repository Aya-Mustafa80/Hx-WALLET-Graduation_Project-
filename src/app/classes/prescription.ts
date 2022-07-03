export class Prescription {
    constructor(
        public FormOfMedicine: any,
        public Strength: any,
        public MethodOfIntake: any,
        public Quantity: any,
        public When: any,
        public OtherInstructions: string,
        public StartOn: any,
        public Till: any
      ) {}
}
