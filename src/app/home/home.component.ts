import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private firebase: AngularFirestore) {
    const things = firebase.collection('things').valueChanges();
    things.subscribe(console.log);
  }

  ngOnInit(): void {
  
  }

}
