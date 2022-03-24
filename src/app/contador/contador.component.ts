import{Component} from "@angular/core";

@Component(
    {

    selector:'app-contador',
    templateUrl: './Contador.componente.html'
   } 
 )

 export class ContadorComponent{
 titulo: String="Contador Application";

 contador:number=0;
 base:number=7;
  agregar (incremento:number){
      this.contador+=incremento;
  }
  disminuir(){
   this.contador--;
  }

 }