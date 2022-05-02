import { Component, Input, OnInit } from '@angular/core';

import { Planta } from './planta';

import { PlantaService } from './planta.service'

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: Array<Planta> = [];
  plantasList: Array<Planta> = [];

  @Input() isInterior = 0;
  @Input() isExterior = 0;

  @Input() imageSrc = 'assets/img/Imagen1.png';
  @Input() imageAlt = 'foto banner';

  constructor(private plantaService: PlantaService) {
    this.getPlantasList();
  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getPlantasList(): Planta[] {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantasList = plantas;
      this.isInterior = this.plantasList.filter((obj) => obj.tipo === "Interior").length;
      this.isExterior = this.plantasList.filter((obj) => obj.tipo === "Exterior").length;
    });
    return this.plantasList;
  }

  ngOnInit() {
    this.getPlantas();
    console.log("pase por el ngOninit");
    console.log(this.plantasList);
  }
}
