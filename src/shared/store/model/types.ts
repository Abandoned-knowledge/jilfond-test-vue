export interface IUser {
  id: number;
  username: string;
  name: string;
  company: ICompany;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
