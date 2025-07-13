import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { RaceData } from '../api-interfaces/race-data';

@Injectable({
  providedIn: 'root',
})
export class RaceDataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5001';

  private readonly racesSubject = new BehaviorSubject<RaceData[] | null>(null);
  public readonly races$ = this.racesSubject.asObservable();

  refreshRaces(): void {
    this.http
      .get<RaceData[]>(`${this.apiUrl}/races`)
      .subscribe((races) => this.racesSubject.next(races));
  }

  updateRaceNotes(raceId: number, notes: string): Observable<RaceData> {
    return this.http
      .patch<RaceData>(`${this.apiUrl}/races/${raceId}/notes`, { notes })
      .pipe(
        tap(() => this.refreshRaces()) // Refresh races after successful update
      );
  }
}
