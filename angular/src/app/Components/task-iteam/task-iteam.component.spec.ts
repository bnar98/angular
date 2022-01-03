import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIteamComponent } from './task-iteam.component';

describe('TaskIteamComponent', () => {
  let component: TaskIteamComponent;
  let fixture: ComponentFixture<TaskIteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskIteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
