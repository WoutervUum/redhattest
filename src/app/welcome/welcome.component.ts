import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  message : string = "Some welcome message";

  constructor(private route : ActivatedRoute) {
    
  }

  ngOnInit() {
    console.log(this.message);
    this.message ="Welcome "+this.route.snapshot.params['name']+"!";
    console.log(this.message);
    ;
  }

}
