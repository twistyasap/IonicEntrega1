import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AnimationController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit, OnInit {
  @ViewChild('bouncingImage', { static: false }) bouncingImage!: ElementRef;

  public alertButtons = ['OK'];
  username: string = '';

  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { username: string };
  
    this.username = state?.username || 'Usuario desconocido';
  
    if (this.username !== 'Usuario desconocido') {
      console.log(`Usuario ingresado: ${this.username}`);
    } else {
      console.log('No se recibió ningún username');
    }
  }

  ngAfterViewInit() {
    this.createBouncingAnimation();
  }

  createBouncingAnimation() {
    const animation = this.animationCtrl.create()
      .addElement(this.bouncingImage.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateY(0)' },
        { offset: 0.5, transform: 'translateY(-100px)' },
        { offset: 1, transform: 'translateY(10)' }
      ]);

    animation.play();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Debes dar acceso a tu cámara',
      buttons: this.alertButtons
    });

    await alert.present();
  }
}
