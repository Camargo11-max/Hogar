import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLocalStorageComponent } from './index-local-storage.component';

describe('IndexLocalStorageComponent', () => {
  let component: IndexLocalStorageComponent;
  let fixture: ComponentFixture<IndexLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexLocalStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
