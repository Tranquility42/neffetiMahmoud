import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eval';
  public statistiqueLoire : Statistique = new Statistique("fa1f5f40-be3b-11eb-91ec7f5875ecfb46","Démographie Loire","150k" , "SUCCESS");
  public statistiqueRhone : Statistique = new Statistique("fa1f5f40-be3b-11eb-91ec7f5875ecfb45","Démographie Rhone","350k" , "SUCCESS");

}
