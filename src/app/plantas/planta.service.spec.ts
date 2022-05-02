/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import faker from '@faker-js/faker';
import { PlantasComponent } from '../plantas/plantas.component';
import { PlantaService } from '../plantas/planta.service';
import { Planta } from '../plantas/planta';


describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener 3 encabezados', () => {
    expect(debug.query(By.css('thead')).attributes['class']).toEqual(
      'thead-dark'
    );
  });

  it('La tabla debe tener 3 plantas ', () => {
    expect(debug.queryAll(By.css('.item-row')).length).toEqual(
      3
    );
  });

});
