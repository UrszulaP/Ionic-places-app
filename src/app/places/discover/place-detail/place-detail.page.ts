import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover'); // Angular way, plays forward animation by default
    // this.navCtrl.pop(); // goes back by removing page from Pages Stack, doesn't work when page loaded directly as a first stack item
    this.navCtrl.navigateBack('/places/tabs/discover'); // backward animation
  }

}
