export class Account {

  nome: string;
  tipo: string;
  stato: string;
  active: boolean;
  inactive: boolean;
  hidden: boolean;
  id?: number;

  constructor(nome: string, tipo: string, stato: string,id?: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.stato = stato;
    if (this.stato === 'Active') {
      this.setActive()

    } else if (this.stato === 'Inactive') {

      this.setInactive()
    } else if (this.stato === 'Hidden') {

      this.setHidden()
    }
  }
  setActive() {
    this.active = true;
    this.inactive = false;
    this.hidden = false;
  }
  setInactive() {
    this.active = false;
    this.inactive = true;
    this.hidden = false;
  }
  setHidden() {
    this.active = false;
    this.inactive = false;
    this.hidden = true;
  }
}
