//Task
//Inheritance: parent class Electronics (methods: name, version, company name): child class(laptop, ipad, mobile, tablet):
// class child {
// configuration()
//price()
// }




class Electronics{
   constructor(n,v,cn) {
       this.name=n;
       this.version=v;
       this.companyName=cn;
   }
   
   reboot(){
       console.log("Rebooting.. ");
   }
   switchOff(){
       console.log(this.name+" switching off.. ");
   } 
   switchOn(){
       console.log(this.name+" Power on.. ");
   }
   
   increase_brigtness(){
       console.log("increasing brignt");
   }
   data(){
       console.log(" data is turned on",this.name);
   }
   openYouTub(){
       console.log(this.name," opening u tube..opened");
   }
   openCamera(){
       console.log("camera  opend ",this.name);
   }
   
   google() {
       console.log("welcome to ",this.name , "search ..");
       console.log("search...");
   }
   price(pr) {
       this.price=pr;
       console.log("price for ",this.name," is ",this.price);
   }
   
   calculator(a, b,oper) {
       console.log(this.name, " use calculator");
       if(oper=="*"){
           console.log(oper,a,oper,b);
           //mul=a*b;
         
           console.log("value is ", a*b);
       }
       
       else if(oper=="÷"){
          console.log(a,oper,b);
           console.log("value is ", a/b);
       }
       
       else if(oper=="-"){
           console.log(a,oper,b);
           console.log("value is ", a-b);
       }
       else if(oper=="+"){
           console.log(a,oper,b);
           console.log("value is ", a+b);   
           }
   
   
       else{
           console.log("wrong operation..");
       }
       
   }
   
}
class Laptop extends Electronics{
    constructor(n,v, cn) {
        super(n, v, cn);
        
    }
    configuration(proc,rm,sto,gra,ds){
        this.processor=proc;
        this.RAM=rm;
        this.SSD=sto;
        this.graphics=gra;
        this.displa=ds;
        
        console.log("configurations of ",this.name," - ",proc,rm,gra, sto, ds);
        
  
    }
    
   price(){
        
    }
    
    programs(){
        console.log(" programs opened ");
        console.log("ms office");
        console.log("play games");
        console.log("paint");
    }
        
    
   
   
   myComp(){
       console.log (" showing my computer ");
       console.log("c drive");
       
   }
    }

    
class Ipad extends Electronics{
    constructor(a,b,c) {
        super(a,b, c);
        
    }
    configuration(mn,sn,car){
        this.ModelName=mn;
        this.serialnumber=sn;
        this.carrier=car;
        console.log("configurations of ",this.name," is", mn, sn, "carrier - ",car);
        
        
    }
    
    openCanva(){
        console.log(this.name);
        console.log("canva runs");
    }
    
    }
    
class Mobile extends Electronics{
    constructor(a, b,c) {
        super(a, b, c);
        
    }
    configuration(dis,fro,rea,r,st,b,os){
        this.displaey=dis;
        this.fron_camera=fro;
        this.rearCamera=rea;
      
        this.RAM=r;
        this.storage=st;
        this.battery=b;
        this.OS=os;
        
        console.log("configurations of ",this.name," - ",dis,fro, rea, r, st, b, os);
        
        
        
    }
    
    makecall() {
        console.log("calling");
    }
    
    mesg(){
        console.log("sent message");
    }
    gallery() {
        console.log("shwoung gallery");
        
    }
    
    notes() {
        console.log("noting");
    }
}
 class tablet extends Electronics{
    constructor(a, b,z) {
        super(a, b,z) ;
        
    }
    configuration(dis,pro,fro,r,os,st,rea){
        this.displaey=dis;
        this.processor=pro;
        this.fron_camera=fro;
        this.rearCamera=rea;
        this.RAM=r;
        this.storage=st;
        this.OS=os;
        console.log("configurations of ",this.name," - ",dis,pro,fro, rea, r, st, os);
        
    }
   
    }
    

mob1=new Mobile("Realme Narzo 60x 5G",5," Realme");
tab1=new tablet("HP 11-inch Tablet PC","Windows 11","HP");
lap1=new Laptop("Xiaomi Mi Laptop",2018,"Xioni");
pad1=new Ipad("iPadOS 17","iPadOS software version","apple");

pad1.reboot();

tab1.reboot();

mob1.switchOn();
mob1.switchOff();

lap1.reboot();

lap1.switchOff();


pad1.configuration("ipad17",24556788,"wifi");

tab1.configuration("11.00-inch (2,160x1,440)","Intel Pentium Silver N6000","No","8GB","Windows 11","128GB","13MP");

mob1.configuration("6.72-inch (2400x1080)","MediaTek Dimensity 6100+","8MP","64MP + 2MP","4GB, 6GB","5000mAh","Android 13");

lap1.configuration("Intel Core","8GB","512GB","Nvidia","1920x1080 pixels");



mob1.calculator(4,5,"*") ;
lap1.programs();
lap1.myComp();

lap1.calculator(7,2,"-");
tab1.data();

mob1.openYouTub();
mob1.openCamera();

pad1.calculator(8,9,"+");

pad1.openCamera();


lap1.myComp();

lap1.programs();

mob1.makecall();


//ap1.notes();
mob1.notes();
mob1.mesg();
mob1.openCamera();
lap1.configuration();

pad1.openCamera();
pad1.google();

mob1.google();


//setting price 

tab1.price(12000);
console.log(tab1.name, tab1.price);

