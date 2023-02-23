export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

// export const dummyEmployeeList: IEmployee[] = [
//   {
//     id: new Date().toJSON().toString(),
//     firstName: "Kal",
//     lastName: "Kalll",
//     email: "mariaamorim@gmail.com",
//   },
// ];

export enum PageEnum {
  list,
  add,
  edit,
}
