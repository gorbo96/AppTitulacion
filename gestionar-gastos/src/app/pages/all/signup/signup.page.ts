import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { throws } from 'assert';
import { User } from 'src/app/domain/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  User : User = new User()
  ID: any

  alert: string
  advice: string
  header: string
  
  constructor(private router: Router, 
              private auth: AuthenticationService, 
              private alertCtrl: AlertController,
              public menuCtrl: MenuController,
              private loadingController: LoadingController) {
                this.menuCtrl.enable(false)
              }

  ngOnInit() {
  }

  async registro(){

    if((this.User.email === null || this.User.email === undefined) || 
      (this.User.password === null || this.User.password === undefined) ||
      (this.User.displayName === null || this.User.displayName === undefined)){
        this.alert = "Ocurrió un error"
        this.advice = 'Por favor, ingrese los datos necesarios'
        
        //  Mostrar mensaje de al usuario
        return this.genericAlert('Lo sentimos',this.alert, this.advice);

      }    

    // Control de la interacción del usuario usando una rueda de carga
    return await this.loadingController.create({ }).then(a => {
      a.present().then(async () => { 

        try {
          if(this.validateEmail(this.User.email)){
            const user = await this.auth.onRegistro(this.User);

            this.User.role = 'N'
            this.User.description = 'Hola, estoy manejando mis finanzas'
            this.User.active = true
            this.User.id_familia = "-1"
            this.User.photoURL = 'https://firebasestorage.googleapis.com/v0/b/gestionar-gastos.appspot.com/o/default.png?alt=media&token=e8ff50d0-3177-4b40-acf6-d29127a6baf3'
            this.User.createdAt = new Date()
            this.User.lastLogin = new Date()
            this.User.provider = 'gestion-gastos'

            if(user){

            
              this.ID = await this.auth.verificacion();
        
              await this.auth.save(this.User);
  
              a.dismiss().then(() => console.log('abort presenting'));
      
              this.header = 'Bienvenido'
              this.alert = "Se ha registrado el usuario con éxito"
              this.advice = '¡Comienze a gestionar su dinero!'
              this.genericAlert(this.header, this.alert, this.advice)
        
            }else{
              console.log("error en registro")
              this.header = 'Lo sentimos'
              this.alert = "Ocurrió un error inesperado en con el registro"
              this.advice = 'Por favor, inténtelo de nuevo'
        
              this.genericAlert(this.header,this.alert, this.advice)
            }

          } else {
            this.header = 'Lo sentimos'
            this.alert = "Ocurrió un error con el registro"
            this.advice = 'Por favor, revise la sintaxis de su correo'
      
            this.genericAlert(this.header,this.alert, this.advice)
          }
    
        } catch (error) {
          this.header = 'Lo sentimos'
          this.alert = "Ocurrió un error inesperado en con el registro"
          this.advice = 'Por favor, inténtelo de nuevo'
    
          this.genericAlert(this.header,this.alert, this.advice)
        } finally {
          a.dismiss().then(() => console.log('abort presenting'));
          this.router.navigate(["/login"])
        }

      }) 
    })

  }

  async dismiss() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async genericAlert(header, alert_message, advice){

    const prompt = await this.alertCtrl.create({  
      header: header,  
      subHeader: alert_message,
      message: advice,  
      
      buttons: ['Aceptar']  
    }); 

    await prompt.present()

  }

  validateEmail(email) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }

}
