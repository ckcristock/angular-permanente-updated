import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8000/api'; // ajusta luego
  private readonly TOKEN_KEY = 'access_token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.API_URL}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.setToken(response.accessToken);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
