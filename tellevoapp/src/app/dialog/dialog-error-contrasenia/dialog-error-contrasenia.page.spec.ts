import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogErrorContraseniaPage } from './dialog-error-contrasenia.page';

describe('DialogErrorContraseniaPage', () => {
  let component: DialogErrorContraseniaPage;
  let fixture: ComponentFixture<DialogErrorContraseniaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogErrorContraseniaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogErrorContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
