import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPersonComponent } from './chat-person.component';

describe('ChatPersonComponent', () => {
  let component: ChatPersonComponent;
  let fixture: ComponentFixture<ChatPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPersonComponent]
    });
    fixture = TestBed.createComponent(ChatPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
