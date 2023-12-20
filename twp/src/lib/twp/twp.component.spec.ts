import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwpComponent } from './twp.component';

describe('TwpComponent', () => {
  let component: TwpComponent;
  let fixture: ComponentFixture<TwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
