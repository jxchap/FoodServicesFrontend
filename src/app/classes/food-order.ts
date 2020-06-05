export class OutGoingFoodOrder {

    constructor(
      public name: string,
      public email: string,
      public phone: number,
      public address: string,
      public city: string,
      public state: string,
      public zip: string,
      public deliveryDate: Date,
      public orderListItems: any[],
      public SMSValidationKey: string
    ) { }
  
  }

export class IncomingFoodOrder {

    constructor(
        public databaseID: number,
        public name: string,
        public email: string,
        public phone: number,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public deliveryDate: Date,
        public foodItem: string,
        public isFulfilled: boolean
      ) { }
}