

import { Mentor } from './mentormain.model';
import { Adminadd } from './adminadd.model';
import { User } from '../user/user.model';
import { Skill } from '../mentormain/mentormain.model';


export class Currentcourse{

    id: string;
   startDate:String;
   progress:String;
   mentor:Mentor;
   technology:Adminadd;
   mentorId:String;
   userId:String;
   fees:String;
   commissionAmount: String;
   user:User[];
   skill:Skill[];

 

}