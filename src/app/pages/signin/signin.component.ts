import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { validateUser } from 'src/app/helpers/validate-user'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = ''
  password: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    const user = validateUser(this.email, this.password)
    if (!user) {
      alert('Email/password incorrect')
      return
    }
    window.localStorage.setItem('auth', user)
    this.router.navigateByUrl('/admin')
  }
}
