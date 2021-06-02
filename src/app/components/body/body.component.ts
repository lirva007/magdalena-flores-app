import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lista:Array<string> = []
  idNombre: string = "";
  estilo:string = "h4"

  constructor() { }

  ngOnInit(): void {
  }

  addName(){
    if(this.lista.length > 3){
      this.estilo = "azul h1"
    }
    if(this.lista.length < 10){
      this.lista.push(this.idNombre)
      this.idNombre = ""
      console.log(this.lista)
    }else{
      alert("LISTA LLENA")
    }
  }



}
