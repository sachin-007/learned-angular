import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
// import {UsersDataService} from './users-data.service'
import {UserServiceService} from './user-service.service'
import { FormControl,FormGroup, Validators } from '@angular/forms'
 

interface datatype{
  name:string,
  id:number,
  indian:boolean,
  address:any  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {




  

  // // variable
  // title = 'mymeanapp';
  // name="sachinbachhav";

  // // function
  // getName(){
  //   return "sachin"
  // }

  // getFullName(){
  //   return this.name
  // }

  // // Object
  // obj={
  //   name:'sach',
  //   age:'19'
  // }

  // // Array

  // arr=['sach','roha','vaib']

  // siteurl=window.location.href

  // yourname="sach";
  // getName(name: any)
  // {
  //   alert(name)
  // }

  title="blop"
  name="sachin bachhav"
  // data="sachin bachhav"
  right1='<input type="text" [disabled]="disabledBox" [value]="name">'
  wrong='<input type="text" disabled={{disabledBox}} value={{name}}>'
  corrected='<input type="text" [disabled]="disabledBox" value={{name}}>'

  // myEvent(evt: any){
  //   console.warn(evt)
  // }

  currentVal=""
  disabledBox=true

  // show=false
  // show="yes"
  show=""



//
//   tog()
// {
//   if(this.show==false)
//   {
//         this.show=true
//   }
//   else
//     this.show=false
// }
//
//   enableBox()
//   {
//     this.disabledBox=false
//   }
//
//   getVal(val:any)
//   {
//     console.warn(val);
//     this.currentVal=val
//   }


//
// red()
// {
//   this.show="Red"
// }
// blue()
// {
//   this.show="Blue"
// }
// gray()
// {
//   this.show="gray"
// }
//




// switch case things
// color=" "
//
//   red()
//   {
//     this.color="red"
//   }
//   green()
//   {
//     this.color="green"
//   }
//   blue()
//   {
//     this.color="blue"
//   }
//   yellow()
//   {
//     this.color="yellow"
// }
//



// data=["sachin","rohan","bruce","anup","vaibhav"]
//
// data1=[
//   {
//     name:"sachin",
//     age:20,
//     email:"sachinbachhav@gmail.com"
//   },
//   {
//     name:"rohan",
//     age:19,
//     email:"sachinbachhav@gmail.com"
//
//   },
//   {
//     name:"vaibhav",
//     age:19,
//     email:"sachinbachhav@gmail.com"
//
//   },
//   {
//     name:"anil",
//     age:21,
//     email:"sachinbachhav@gmail.com"
//
//   }
//
// ]



// getUserValue(value:any)
// {
//   console.warn(value)
// }

// err=false;
// color="orange"
// updateColor()
// {
//   if(this.err==false)
//   {
//         this.err=true
//   }
//   else
//     this.err=false
// }



// model = {
//    left: true,
//    middle: false,
//    right: false
//  };

//  formatLabel(value: number) {
//   if (value >= 1000) {
//     return Math.round(value / 1000) + 'k';
//   }

//   return value;
// }



// data2={
//   name:"sachin",
//   age:20
// }



// users=[
// {
//   name:"sachin",
//   age:19,
//   address:"nashik"
// },
// {
//   name:"rohan",
//   age:20,
//   address:"pune"
// },
// {
//   name:"roshan",
//   age:17,
//   address:"mumbai"
// },
// {
//   name:"vaibhav",
//   age:19,
//   address:"delhi"
// }
// ]


// parentComponent(data:any){
//   console.warn(data);
//   this.name=data.name
  
// }


// today=Date.now()
// str="hello sach"
// val=10


// name3="";
// age3=0;
// id3=0;

// constructor(private user:UsersDataService)
// {
//   console.warn(this.user.getData());
//   let udata=this.user.getData();
//   this.name3=udata.name
//   this.age3=udata.age
//   this.id3=udata.id
  
// data=[];
//   data: any;
// constructor(private user:UserServiceService)
// {
//   this.user.getData().subscribe(data=>{
//     console.warn(data);
//     this.data=data
    
    
//   })
// }



getData()
{
  const data:datatype={
    name:"sachin bachhav",
    id:1,
    indian:true,
    address:"siddhatek nager,rahul park, nashik"
  }
}


// togg=open
  
// toggled(togg:any){
//   this.togg=togg
// }





// constructor(private viewContainer:ViewContainerRef,private cfr:ComponentFactoryResolver){  }

// async loadAdmin(){
//   this.viewContainer.clear();
//   const {AdminlistComponent}=await import('./adminlist/adminlist.component') ;
//   this.viewContainer.createComponent(
//     this.cfr.resolveComponentFactory(AdminlistComponent)
//   )
// }


// async loadUser(){
//   this.viewContainer.clear();
//   const {UserlistComponent}=await import('./userlist/userlist.component') ;
//   this.viewContainer.createComponent(
//     this.cfr.resolveComponentFactory(UserlistComponent)
//   )
// }



onSubmit(data:any){
  console.warn(data)
}



// loginForm=new FormGroup({
//   email:new FormControl('',Validators.required)
//   ,password:new FormControl('')

// })

// userData={
//   email:"test@email.com",
//   password:"123@abc",
//   address:"maharashtra",
//   mobile:"7485784857"
// }



loginForm=new FormGroup({
  username:new FormControl('email'),
  password:new FormControl('')
})

collectData(){
  console.warn(this.loginForm.value);
  
}


// get email(){return this.loginForm.get('email')}


}


