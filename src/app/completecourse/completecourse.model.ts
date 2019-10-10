import { Mentor } from '../mentor/mentor.model';

import { Adminadd } from '../adminadd/adminadd.model';





export class Completecourse{

    id: string;
   startDate:String;
   progress:String;
   mentor:Mentor;
   technology:Adminadd;
   mentorId:String;
   userId:String;
   fees:String;
   rating:String;
   endDate:String;

 

}