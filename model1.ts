class ContactGenerator {
   
    id : number;  name: string;  email:string;  phone:string; landline:string;  website:string;  textarea:string;

       constructor(args : any) {
        this.id = args.id;
        this.name = args.name;
        this.email = args.email;
        this.phone = args.phone;
        this.landline = args.landline;
        this.website = args.website;
        this.textarea = args.textarea;
       }
}
   