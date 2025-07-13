import { Component, effect, inject, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RaceData, RaceDataService } from '@racing-digital/race-data';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-race',
  templateUrl: './race.html',
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    TextareaModule,
    FormsModule,
  ],
})
export class Race {
  private readonly raceDataService = inject(RaceDataService);

  race = model.required<RaceData | undefined>();
  notes = '';
  loading = false;

  constructor() {
    effect(() => {
      this.notes = this.race()?.notes || '';
    });
  }

  updateNotes() {
    const race = this.race();
    if (race) {
      this.loading = true;
      console.log(race, this.notes);
      this.raceDataService.updateRaceNotes(race.id, this.notes).subscribe({
        complete: () => {
          this.loading = false;
          this.race.set(undefined);
        },
      });
    }
  }
}
