import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { first, switchMap, take, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/compat/app';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { User } from '../domain/user';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public user: Observable<any>;
  public estaLogeado: any = false;
  public currentUser: any
  private credential: any

  public sideMenu: boolean

  constructor( private afAuth: AngularFireAuth,
               private afs: AngularFirestore,
               private platform: Platform,
               private googlePlus: GooglePlus,
               private router : Router) {

                afAuth.authState.
                subscribe(user => (this.estaLogeado = user));

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user){
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  //iniciar sesion
  async onLogin (user: User) {
    this.afAuth.setPersistence('session').then( () => {
      // this.afs.collection("users", ref => ref.where("email", "==", user.email).where("password", "==", user.password)).doc().valueChanges();
      this.afAuth.signInWithEmailAndPassword( user.email, user.password).then((userCredential) => {
        this.currentUser = userCredential.user
      }).catch(err => {
        console.log("NOT FOUND")
      })
    })
  }
  
  setSideMenu(value) {
    this.sideMenu = value
  }

  async timeStampLogin (user) {
    return await this.afs.collection("users").doc(user.uid).update({lastLogin: new Date()})
  }

  async changeFamily(user, family) {
    return await this.afs.collection("users").doc(user.uid).update({id_familia: family.id})
  }

  async modifyRole(user, role) {
    return await this.afs.collection("users").doc(user.uid).update({role: role})
  }

  async createFamily(family) {
    const refContactos = this.afs.collection("families")

    if(family.id == null){
      family.id = this.afs.createId()
    }
    
    refContactos.doc(family.id).set(Object.assign({}, family))
    return await this.getFamily(family.id)
  }

  async getFamily(id: any) {
    return await this.afs.collection("families", ref => ref.where("id", "==", id)).valueChanges()
    
  }

  async updateFamily(fam) {
    return await this.afs.collection("families").doc(fam.id).update({nombre: fam.nombre, presupuesto_global:fam.presupuesto_global, primer_dia_mes:fam.primer_dia_mes})
  }

  async onRegistro (user: User){
    return await this.afAuth.createUserWithEmailAndPassword( user.email, user.password);
  }

  emailV: any;
  //verificacion quien inicio sesion
  async verificacion(){
    this.emailV = (await this.afAuth.currentUser).email;
    return this.emailV;
    
  }

  // cierra sesion
  salirCuenta() {
    console.log("Logout");

    this.afAuth.signOut().then( auth => { this.router.navigate(['/login']) });
  }

  // guarda usuario
  async save(user: User){
    const refContactos = this.afs.collection("users");

    if(user.uid == null){
      user.uid = this.afs.createId();
    }
    refContactos.doc(user.uid).set(Object.assign({}, user));

  }


  async getUsuario(email: any) {
    return await this.afs.collection("users", ref => ref.where("email", "==", email)).valueChanges()

  }

  async getCurrentUser(): Promise<any> {
    return this.user.pipe(first()).toPromise();
  }

  async signupUser(name: string, email: string, password: string): Promise<any> {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    const user = await this.afAuth.currentUser;

    return await user.updateProfile({
      displayName: name,
      photoURL: 'https://goo.gl/7kz9qG'
    });
  }

  async resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  async updateUserProfileData(user) {
    return await this.afs.collection("users").doc(user.uid).update({description: user.description, displayName: user.displayName, email: user.email})
  }

  //GOOGLE
  async googleLogin() {
    if (this.platform.is('capacitor')) {
      console.log("app en capacitor")
      return null;      
    } else {
      console.log("app en web")
      return await this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin()  {
    try {
      console.log("Antes GplusUser")
      var gplusUser: any = await this.googlePlus.login({
        webClientId: environment.googleWebClientId,
        offline: true
      });
      console.log("GplusUser")
      console.log(gplusUser)
  
      await this.afAuth.setPersistence('session').then( async () => {
        const googleCredential = firebase.default.auth.GoogleAuthProvider.credential(gplusUser.idToken);
        await firebase.default.auth().signInWithCredential(googleCredential).then(async (userCredential) => {
          this.currentUser = await userCredential.user
          console.log("Current User")
          console.log(this.currentUser)
          this.credential = await userCredential
          console.log("Credenciales")
          console.log(this.credential)
          return JSON.stringify(this.currentUser._delegate)
        })
        //console.log(JSON.stringify(firebaseUser.user));
        //await this.updateUserData(this.currentUser, 'google');
      })
      
      
    }catch(error){      
      console.log("loggin google")
      console.log(error)
      return JSON.stringify("null")
    }
      
    
  }

  async webGoogleLogin() {
    await this.afAuth.setPersistence('session').then( async () => {
      const provider = new firebase.default.auth.GoogleAuthProvider()
      
      await this.afAuth.signInWithPopup(provider).then(async (userCredential) => {
        this.currentUser = await userCredential.user
        this.credential = await userCredential
      })
      //console.log(JSON.stringify(this.currentUser));
      //await this.updateUserData(this.credential, 'google')
    })
    
    return await this.currentUser
  }

  // EMAIL AND PASSWORD
  async emailPasswordLogin(email: string, password: string): Promise<void> {
    const emailCredential = firebase.default.auth.EmailAuthProvider.credential(email, password)
    const firebaseUser = await firebase.default.auth().signInWithCredential(emailCredential)

    this.currentUser = firebaseUser.user
    console.log(this.currentUser)
    return await this.updateUserData(this.currentUser.user, 'email');
  }

  // ---------
  userExists(email: string) {
    console.log('userExists' + email);
    return this.afs
    .collection('users', ref => ref.where('email', '==', email))
    .valueChanges()
    .pipe(first())
    .toPromise();
  }

  // Guardar los datos del usuario en Firestore
  async updateUserData(user: any, provider: any){
    //console.log('update' + JSON.stringify(usertemp));
    const doc: any = await this.userExists(user._delegate.email);
    //console.log('doc' + JSON.stringify(doc));

    let data: any;
    //console.log('doc' + JSON.stringify(doc));

    if (doc == null || doc == '' ) {
      // Crear Cuenta
      data = {
        uid: user._delegate.uid,
        email: user._delegate.email || null,
        displayName: user._delegate.displayName || '7',
        photoURL: user._delegate.photoURL || 'https://goo.gl/7kz9qG',
        provider: provider,
        lastLogin:  new Date(),
        createdAt:  new Date(),
        role: 'N',
        description: 'Hola, estoy manejando mis finanzas',
        id_familia: "-1",
        active: true,
        password: "N"
      };
    } else if (doc.active == false){
      throw { error_code: 999, error_message: 'Acceso denegado, servicio deshabilitado, consulte con el administrador.' }; 
    } else if (user._delegate.email !== undefined){
      // Actualizar cuenta
      data = {
        uid: user._delegate.uid,
        email: user._delegate.email || null,
        displayName: user._delegate.displayName || '',
        photoURL: user._delegate.photoURL || 'https://goo.gl/7kz9qG',
        provider: provider,
        lastLogin: new Date()
      };
    } else {
      throw { error_code: 999, error_message: 'Acceso denegado, servicio deshabilitado, consulte con el administrador.' };
    }

    //console.log('data', JSON.stringify(data));
    const userRef = this.afs.collection<any>('users');

    return userRef.doc(user._delegate.uid).set(data, { merge: true});
  }

  getUserAuth(){
    return this.afAuth.authState;
  }

}
