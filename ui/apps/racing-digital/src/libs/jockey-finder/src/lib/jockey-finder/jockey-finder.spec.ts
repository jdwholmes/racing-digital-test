import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JockeyFinder } from './jockey-finder';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('JockeyFinder', () => {
  let component: JockeyFinder;
  let fixture: ComponentFixture<JockeyFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JockeyFinder],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(JockeyFinder);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('visible', true);
    fixture.componentRef.setInput('races', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
