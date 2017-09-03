import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesiumContainerComponent } from './cesium-container.component';

describe('CesiumContainerComponent', () => {
  let component: CesiumContainerComponent;
  let fixture: ComponentFixture<CesiumContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesiumContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesiumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
