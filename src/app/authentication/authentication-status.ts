export interface AuthenticationStatus {
  account: {
    credential: {
      aliasTo:string,
      id:string,
      userId:string
    },
    roles:Array<string>,
    user:{
      id:string,
      firstName:string,
      lastName:string,
      middleName:string,
      birthdate:string
    }
  }
}
