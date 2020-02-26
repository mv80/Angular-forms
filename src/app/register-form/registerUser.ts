export interface WorkPlace {
  workPlaceName : string;
  startDate : Date;
  endDate : Date;

}

export interface  RegisterUser {
  firstName : string;
  lastName : string;
  previousWorkplaces : WorkPlace[],

}
export const MaxNumberOfPreviosWorkPlaces = 3;
