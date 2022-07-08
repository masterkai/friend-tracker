import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProfileInfo } from './profile-info';

@Injectable({
  providedIn: 'root',
})
export class ProfileInfoService {
  private _profiles: string[];

  constructor(private httpClient: HttpClient) {}

  get(name: string): Observable<ProfileInfo> {
    return this.getList().pipe(
      map((profile) => profile.find((p) => p.name === name))
    );
  }

  getNextSn(currentSn: string): string {
    const index = this._tasks.findIndex((taskSn) => taskSn === currentSn);
    const next = index === this._tasks.length - 1 ? 0 : index + 1;
    return this._tasks[next];
  }

  getList(): Observable<ProfileInfo[]> {
    return this.httpClient
      .get<ProfileInfo[]>('assets/profiles.json')
      .pipe(tap((profiles) => (this._profiles = profiles.map((p) => p.name))));
  }
}
