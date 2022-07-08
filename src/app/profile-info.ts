export class ProfileInfo {
  constructor(initData?: Partial<ProfileInfo>) {
    Object.assign(this, initData);
  }

  name!: string;
  bio!: string;
  age!: number;
  birthday!: string;
}
