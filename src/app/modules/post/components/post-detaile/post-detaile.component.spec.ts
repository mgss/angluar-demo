import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetaileComponent } from './post-detaile.component';

describe('PostDetaileComponent', () => {
  let component: PostDetaileComponent;
  let fixture: ComponentFixture<PostDetaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
