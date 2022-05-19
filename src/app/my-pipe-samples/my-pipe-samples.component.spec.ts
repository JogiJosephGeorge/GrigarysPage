import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipeSamplesComponent } from './my-pipe-samples.component';

describe('MyPipeSamplesComponent', () => {
  let component: MyPipeSamplesComponent;
  let fixture: ComponentFixture<MyPipeSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPipeSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
