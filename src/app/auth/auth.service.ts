import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

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
    return true
  }
}
