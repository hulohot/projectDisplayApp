import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5FlappyBirdComponent } from './p5-flappy-bird.component';

describe('P5FlappyBirdComponent', () => {
  let component: P5FlappyBirdComponent;
  let fixture: ComponentFixture<P5FlappyBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5FlappyBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5FlappyBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
