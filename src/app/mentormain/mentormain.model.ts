export class Mentor {

  id: BigInteger;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password:string
  contactNumber: string;
  regCode: string;
  role: string;
  linkedinUrl:string;
  yearsOfExperience:Float32Array;
  active:Boolean;
  confirmedSignup:Boolean;
  resetPassword:Boolean;
  resetPasswordDate:Boolean;
}


export class Skill{

  id: string;
  name: string;
  prerequisites: string;
  toc: string;
  mentorId: string;


}