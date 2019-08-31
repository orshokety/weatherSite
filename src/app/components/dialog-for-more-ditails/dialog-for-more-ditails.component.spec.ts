import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForMoreDitailsComponent } from './dialog-for-more-ditails.component';

describe('DialogForMoreDitailsComponent', () => {
  let component: DialogForMoreDitailsComponent;
  let fixture: ComponentFixture<DialogForMoreDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogForMoreDitailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForMoreDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
