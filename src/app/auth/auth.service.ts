import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { validateUser } from '../helpers/validate-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public auth: string

  constructor(private router: Router) { }

  canActivate() {
    this.auth = window.localStorage.getItem('auth')
    if (!this.auth) {
      this.router.navigateByUrl('/signin')
      return false
    }
    const userParse = JSON.parse(this.auth)
    const user = validateUser(userParse.email)
    if (!user) return false
    return true
  }
}
