import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public auth: string = window.localStorage.getItem('auth')

  constructor() { }

  ngOnInit(): void {
  }

}
