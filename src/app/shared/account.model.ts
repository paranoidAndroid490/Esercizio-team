

export class Account {
  nome:string;
  tipo:string;
  stato:string;
  active:boolean;
  inactive:boolean;
  hidden:boolean;

  constructor(nome:string,tipo:string,stato:string){
    this.nome = nome;
    this.tipo = tipo;
    this.stato = stato;
    if(this.stato === 'Active'){
      this.active = true;
      this.inactive = false
      this.hidden = false
    } else if (this.stato === 'Inactive'){
      this.active = false;
      this.inactive = true
      this.hidden = false
    } else if(this.stato === 'Hidden') {
      this.active = false;
      this.inactive = false
      this.hidden = true
    }

  }

}
