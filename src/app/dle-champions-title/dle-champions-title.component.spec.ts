import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleChampionsTitleComponent } from './dle-champions-title.component';

describe('DleChampionsTitleComponent', () => {
  let component: DleChampionsTitleComponent;
  let fixture: ComponentFixture<DleChampionsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DleChampionsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DleChampionsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
