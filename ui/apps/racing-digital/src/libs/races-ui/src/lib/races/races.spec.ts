import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Races } from './races';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

describe('Races', () => {
  let component: Races;
  let fixture: ComponentFixture<Races>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Races],
      providers: [provideAnimations(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Races);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
