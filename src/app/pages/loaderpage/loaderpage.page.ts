import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loaderpage',
  templateUrl: './loaderpage.page.html',
  styleUrls: ['./loaderpage.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoaderpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
