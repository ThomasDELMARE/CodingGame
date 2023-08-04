import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { viralAdvertising, requiredMinimumDays } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should calculate cumulative likes correctly', () => {
    // Coding game values
    expect(viralAdvertising(1)).toBe(2);
    expect(viralAdvertising(2)).toBe(5);
    expect(viralAdvertising(3)).toBe(9);
    expect(viralAdvertising(4)).toBe(15);
    expect(viralAdvertising(5)).toBe(24);

    // Other expected values
    expect(viralAdvertising(1.0)).toBe(2);
    expect(viralAdvertising(0)).toBe(0);

    // Unexpected values
    expect(viralAdvertising(-1)).toBe(0);
    expect(viralAdvertising(2000)).toBe(Infinity);


  });

  it('should calculate required minimum days correctly', () => {
    expect(requiredMinimumDays(1)).toBe(1);
    expect(requiredMinimumDays(5)).toBe(2);
    expect(requiredMinimumDays(9)).toBe(3);
    expect(requiredMinimumDays(15)).toBe(4);
    expect(requiredMinimumDays(24)).toBe(5);

    // Other expected values
    expect(requiredMinimumDays(1.0)).toBe(1);
    expect(requiredMinimumDays(0)).toBe(0);

    // Unexpected values
    expect(requiredMinimumDays(-1)).toBe(0);
  });
});
