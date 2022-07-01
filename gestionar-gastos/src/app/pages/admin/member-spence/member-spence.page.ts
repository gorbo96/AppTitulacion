import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from 'src/app/domain/gasto';
import { GastosService } from 'src/app/services/gastos.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AlertController, MenuController,LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-member-spence',
  templateUrl: './member-spence.page.html',
  styleUrls: ['./member-spence.page.scss'],
})

export class MemberSpencePage implements OnInit {

  //Variables para almacenamiento de respuestas desde Firebase de consultas de cada coleccion
  @Input() id: string;
  gastos:any
  usuario:any  
  categories: any

  //Variables para una notificacion especifica
  alert: string
  advice: string

  gastosF:Gasto[]=[]//Vector de objetos 'Gasto', almacenar en formato visualizacion de informacion de firebase

  private sessionUser : any//Variable para la obtencion de usuario logeado

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService, 
              private gastoService: GastosService,//Declaracion de servicios para gastos
              private alertCtrl: AlertController,//Declaracion de servicios para alertas
              private auth :  AuthenticationService,//Declaracion de servicios de autenticacion
              private loadingController: LoadingController,//Declaracion de servicios de pantalla de progreso
              public menuCtrl: MenuController ) {//Declaracion de servicios para control del menu principal
                this.menuCtrl.enable(true)//Menu activado
              } 

  async ngOnInit() {

    return await this.loadingController.create({ }).then(a => {//Llamado para pantalla de carga
      a.present().then(async () => {
        try {

          //  Obtener las categorías
          await this.gastoService.getCategories().pipe(take(1)).subscribe(cat => {
            this.categories = cat;
            this.obtenerGastosUsr(a)//Llamado a funcion diseñada
          },
          err => {
            console.log('HTTP Error', err);
            this.alert = "Ocurrió un error al cargar sus datos"
            this.advice = 'Por favor, inténtelo de nuevo'
            
            this.genericAlert(this.alert, this.advice)
          },
          () => console.log('HTTP request stream done'));

        }catch(error){
           //Caso de encontrar un error, definir mesaje para alerta y lanzar alerta
           console.log(error)
           this.alert = "Ocurrió un error al cargar sus datos"
           this.advice = 'Por favor, inténtelo de nuevo'
          
           a.dismiss().then(() => console.log('abort presenting'))//Termino de pantalla de carga
           this.genericAlert(this.alert, this.advice)
 
         }
      })
    })

  }

  async obtenerGastosUsr(a: any){//Funcion para obtener los gastos correspondientes al usuario logeado     
    
    this.gastos=this.gastoService.obtenerGastos(this.id)//Utilizacion de servicio para obtener gastos del usuario en base a consulta base de datos
        
    this.gastos.forEach(element => {
      for (let index = 0; index < element.length; index++) {
        let aux:Gasto=new Gasto()//Variable auxilizar de clase gasto
        //Asignacion de valores correspondientes a la lectura desde Firebase, con cambios para la visualizacion
        aux.id=element[index].id        
        aux.monto=element[index].monto
        aux.id_usuario=element[index].id_usuario
        //Cambio de contenido de variabe segun categoria
        this.categories.forEach(cat => {
          if (cat.id === element[index].id_categoria){
            aux.id_categoria = cat.name
          }
          
        });  
        aux.fecha=element[index].fecha
        aux.descripcion=element[index].descripcion                        
        this.gastosF.push(aux) //Adicion a vector para posterio lectura
      }

      a.dismiss().then(() => console.log('abort presenting'))//Termino de pantalla de carga
    });
  }

  async genericAlert(alert_message, advice){//Funcion para creacion de alerta
    const prompt = await this.alertCtrl.create({//Llamado a creacion con el mensaje antes definido   
      header: 'Lo sentimos',  
      subHeader: alert_message,
      message: advice,
      buttons: ['Aceptar']//Boton de confirmacion
    });
    await prompt.present()
  }

}
