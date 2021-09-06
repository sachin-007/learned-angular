import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() hero!:any

  @Output() parentComponent:EventEmitter<any>=new EventEmitter()

  ngOnInit(): void {
    // this.parentComponent.emit("hello")
    // this.parentComponent.emit({name:"sach",age:19})
  }

  sendData(){
    let item={name:"sach",age:19}
    this.parentComponent.emit(item)
    }

}
