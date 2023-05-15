import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: boolean = false;

  setProfile(value: boolean) {
    this.profile = value;
  }

  getProfile(): boolean {
    return this.profile;
  }
}
