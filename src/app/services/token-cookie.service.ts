import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenCookieService {
  private readonly tokenKey = 'auth-token';

  setToken(token: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${this.tokenKey}=${token}; ${expires}; path=/; Secure`;
  }

  getToken(): string | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === this.tokenKey) {
        return value;
      }
    }
    return null;
  }

  deleteToken(): void {
    document.cookie = `${this.tokenKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure`;
  }

  hasToken(): boolean {
    return this.getToken() !== null;
  }
}
