import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name} 
    should trigger (@output liked) once when called multiple 
    times withing debounce time`, fakeAsync(()=> {
      fixture.detectChanges();
      let times = 0;

      component.liked.subscribe(() => times++);
      component.like();
      component.like();

      // The clock sounds "tick, tack..." So, this function manipulate the
      // clock ticks setting a specific time to awai inside a fakeAsync function
      // Here we need to await 500 milisseconds to consider the debounce time that 
      // we set inside the observable of photo.frame.component
      tick(500);
      expect(times).toBe(1);
  }));
});
