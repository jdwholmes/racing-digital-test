import { Component, computed, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RaceData } from '@racing-digital/race-data';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { OrdinalPipe } from '@racing-digital/pipes';

@Component({
  selector: 'lib-jockey-finder',
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    SelectModule,
    TableModule,
    OrdinalPipe,
  ],
  templateUrl: './jockey-finder.html',
  styleUrl: './jockey-finder.css',
})
export class JockeyFinder {
  visible = model.required<boolean>();
  races = input.required<RaceData[]>();

  horses = computed<string[]>(() =>
    Array.from(new Set(this.races().map((r) => r.horse))).sort((a, b) =>
      a.localeCompare(b)
    )
  );

  racecourses = computed<string[]>(() =>
    Array.from(new Set(this.races().map((r) => r.racecourse))).sort((a, b) =>
      a.localeCompare(b)
    )
  );

  filteredRaces = computed<RaceData[]>(() => {
    if (!this.selectedHorses && !this.selectedRacecourse) {
      return [];
    }

    const filtered = this.races()
      .filter(
        (race) =>
          race.horse === this.selectedHorses() ||
          race.racecourse === this.selectedRacecourse()
      )
      .sort((a, b) => {
        const aBoth =
          a.horse === this.selectedHorses() &&
          a.racecourse === this.selectedRacecourse();
        const bBoth =
          b.horse === this.selectedHorses() &&
          b.racecourse === this.selectedRacecourse();

        if (aBoth !== bBoth) {
          return bBoth ? 1 : -1; // aBoth first
        }

        // Sort by finishing position (lower is better)
        return a.finishingPosition - b.finishingPosition;
      });

    console.log(filtered);
    return filtered;
  });

  selectedHorses = signal<string | undefined>(undefined);
  selectedRacecourse = signal<string | undefined>(undefined);
}
