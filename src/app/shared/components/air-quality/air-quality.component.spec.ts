import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'primeng/chart';

import { AirQualityComponent } from './air-quality.component';

describe('AirQualityComponent', () => {
  let component: AirQualityComponent;
  let fixture: ComponentFixture<AirQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityComponent ],
      imports: [ChartModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component should have h2 tag', () => {
    const fixture = TestBed.createComponent(AirQualityComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2')).toBeTruthy();
  });

  it('component should render "Air Quality" in h2 tag', () => {
    const fixture = TestBed.createComponent(AirQualityComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Air Quality');
  });

  it('component should have quality index lable', () => {
    const fixture = TestBed.createComponent(AirQualityComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.quality-index-lable')).toBeTruthy();
  });
});
