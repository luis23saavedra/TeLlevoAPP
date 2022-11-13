import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

//CREACIÓN DE INTERFAZ. 
// interface Seleccion {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {

  //**********CAPTURA DE DATOS.**********
  datos = {

    ruta: "",
    
  }
  //**********CAPTURA DE DATOS.**********
  //CAPTURACIÓN DE DATOS DEL SELECT.
  // selectedValue: string;
  // //ASIGNACIÓN DE VALORES Y DE OPCIONES A LA INTERFAZ SELECCIÓN PARA LUEGO SER IMPRESOS COMO OPCIONES EN SELECT CON LA FUNCIÓN *ngFor.
  // opciones: Seleccion[] = [
  //   {value: 'norte', viewValue: 'Norte'},
  //   {value: 'oriente', viewValue: 'Oriente'},
  //   {value: 'poniente', viewValue: 'Poniente'},
  //   {value: 'sur', viewValue: 'Sur'},
  // ];

  data: any;
  
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  bandera = {
    logueado: "true"
  }
  //**********BANDERA LOGIN LOCALSTORAGE.**********

  constructor(private router: Router, private activeroute: ActivatedRoute) { 

    // LLAMADO A LA RUTA ACTIVA
    this.activeroute.queryParams.subscribe(params => { 
      //VALIDACIÓN SI LA NAVEGACIÓN CONTIENE INFORMACIÓN EXTRAS
      if (this.router.getCurrentNavigation().extras.state) {
        //SI TIENE INFORMACIÓN EXTRAS SE CAPTURA LO ENVIADO.  
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        
      }
    });
  }

  //POSISIONAMIENTO DEL CHECK BOX
  labelPosition: 'before' | 'after' = 'after';

  //  //OBTENCIÓN DE LOS DATOS DEL USUARIO.
  //  nombreUsuario = JSON.parse(localStorage.getItem('usuario'));
  //  //ASIGNACIÓN DEL NOMBRE DEL USUSARIO A LA VARIABLE.
  //  conductor = ' ' + this.nombreUsuario.nombre + ' ' + this.nombreUsuario.apellido
  //FUNCIÓN QUE PERMITIRÁ REALIZAR EL LOGOUT AL USUARIO REDIRECCIONÁNDOLO AL LOGIN.
  //**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********
  datosAlumno = JSON.parse(localStorage.getItem('alumno'));
  
  conductor = ' ' + this.datosAlumno.primer_nombre + ' ' + this.datosAlumno.primer_apellido 
  /**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********/
  //**********FUNCIÓN LOGOUT.**********.
  salirPagina(){

    //OBTENCIÓN DE LA BANDERA CREADA EN LOGIN DE LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
    var datosLogin = JSON.parse(localStorage.getItem('login'));
    //ASIGNACIÓN DE VALOR FALSE A LA BANDERA DE LOCALSTORAGE
    datosLogin.logueado = 'false'
    //SE SOBREESCRIBE EL VALOR DE LA BANDERA PARA EJECUCIÓN DE LOG OUT.
    localStorage.setItem('login', JSON.stringify(datosLogin));
    //REDIRECCIÓN AL PAGE LOGIN.  
    this.router.navigate(['/home']);
  }
  //**********FUNCIÓN LOGOUT.**********.
    
  ngOnInit() {
    //GUARDADO DE BANDERA EN LOCALSTORAGE.
    localStorage.setItem('login', JSON.stringify(this.bandera));
  }


}
