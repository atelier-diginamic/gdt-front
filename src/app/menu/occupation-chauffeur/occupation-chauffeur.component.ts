import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-occupation-chauffeur',
  templateUrl: './occupation-chauffeur.component.html',
  styleUrls: ['./occupation-chauffeur.component.scss']
})
export class OccupationChauffeurComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Chauffeur') {
      this.srv.secuRoute()
    }
  }

}
