import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysleftMenuComponent } from './sysleft-menu.component';

describe('SysleftMenuComponent', () => {
  let component: SysleftMenuComponent;
  let fixture: ComponentFixture<SysleftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysleftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysleftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
