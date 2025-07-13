import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceData, RaceDataService } from '@racing-digital/race-data';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Race } from '../race/race';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OrdinalPipe } from '@racing-digital/pipes';
import { ButtonModule } from 'primeng/button';
import { JockeyFinder } from '@racing-digital/jockey-finder';

@Component({
  selector: 'lib-race-list',
  imports: [
    CommonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    Race,
    ProgressSpinnerModule,
    OrdinalPipe,
    ButtonModule,
    JockeyFinder,
  ],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races {
  private readonly raceDataService = inject(RaceDataService);

  races$ = this.raceDataService.races$;
  selectedRace: RaceData | undefined;
  jockeyFinderOpen = false;

  @ViewChild('races') dt: Table | undefined;

  constructor() {
    this.raceDataService.refreshRaces();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  selectRace(race: RaceData | undefined | RaceData[]) {
    if (Array.isArray(race)) {
      console.warn('Race is an array, unsure how this happened');
      return;
    } else {
      this.selectedRace = race;
    }
  }

  showJockeyFinder() {
    this.jockeyFinderOpen = true;
  }
}
