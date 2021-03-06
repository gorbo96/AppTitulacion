import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gasto } from 'src/app/domain/gasto';
import { GastosService } from 'src/app/services/gastos.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AlertController, MenuController,LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-ver-gastos-familia',
  templateUrl: './ver-gastos-familia.page.html',
  styleUrls: ['./ver-gastos-familia.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerGastosFamiliaPage implements OnInit {
  
  gastosF:Gasto[]=[]//Vector de objetos 'Gasto', almacenar en formato visualizacion de informacion de firebase
  
  //Variables para almacenamiento de respuestas desde Firebase de consultas de cada coleccion
  usuarios:any
  gastos:any
  usuario:any  
  categories: any
  filter: string = "default"
  filterDate: string = "todo"
  filteredContent: any
  filtroAux: any

  //Variables para una notificacion especifica
  alert: string
  advice: string

  private sessionUser : any//Variable para la obtencion de usuario logeado
 
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private gastoService: GastosService,//Declaracion de servicios para gastos
              private alertCtrl: AlertController,//Declaracion de servicios para alertas
              private loadingController: LoadingController,//Declaracion de servicios de pantalla de progreso
              private auth :  AuthenticationService,//Declaracion de servicios de autenticacion
              public menuCtrl: MenuController ) {//Declaracion de servicios para control del menu principal
                this.menuCtrl.enable(true)//Menu activado
                
              }

  async ngOnInit() {//Funcion inicial de la pagina
    this.sessionUser = await this.auth.getUserAuth()//Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase  
    

    return await this.loadingController.create({ }).then(a => {//Llamado para pantalla de carga
      a.present().then(async () => {
        try {

          //  Obtener las categor??as
          await this.gastoService.getCategories().pipe(take(1)).subscribe(cat => {
            this.categories = cat;
            this.obtenerGastosFml(a)//Llamado a funcion  dise??ado
          },
          err => {
            console.log('HTTP Error', err);
            this.alert = "Ocurri?? un error al cargar sus datos"
            this.advice = 'Por favor, int??ntelo de nuevo'
          },
          () => console.log('HTTP request stream done'));

        } catch (error) {
          //Caso de encontrar un error, definir mesaje para alerta y lanzar alerta
          console.log(error)
          this.alert = "Ocurri?? un error al cargar sus datos"
          this.advice = 'Por favor, int??ntelo de nuevo'

          a.dismiss().then(() => console.log('abort presenting'))//Termino de pantalla de carga
          this.genericAlert(this.alert, this.advice)

        }

      }) 
    })
        
  }  
  async obtenerGastosFml(a:any){//Funcion para lectura de gastos de los miembors de la familia, calculo de gastos por categoria
    this.sessionUser.pipe(take(1)).subscribe(async user =>{     
      
      this.usuario = await this.auth.getUsuario(user.email)//Utilizacion de servicio para obtener usuario en base a consulta base de datos        
      this.usuario.forEach((element) => {//Recorrido de respuesta del servicio
        this.gastos=this.gastoService.obtenerGastosFamilia(element[0].id_familia)//Utilizacion de servicio para obtener gastos del usuario en base a consulta base de datos
        
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

          this.filteredContent = this.gastosF
          a.dismiss().then(() => console.log('abort presenting'))//Termino de pantalla de carga
        });
      });     
    }) 
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

  filterContent() {
        
    if (this.filter === "default") {
      this.filteredContent = this.gastosF
    } else {
      this.filteredContent = this.gastosF.filter(data => data.id_categoria == this.filter)
    }    

  }

  filterContentDate() {

    if (this.filterDate === "mes") {
      this.filtroAux = this.filteredContent
      this.filteredContent = this.filteredContent.filter(data => (new Date(data.fecha)).getMonth() == (new Date).getMonth())
    } else {
      this.filteredContent = this.filtroAux
    }    

  }
}
