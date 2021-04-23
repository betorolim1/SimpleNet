import { ConsultaService } from './../services/consulta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  number = 0;

  result = null;

  constructor(private service: ConsultaService) {}

  ngOnInit(): void {}

  onSave(): void {
    this.service.Get(this.number).subscribe(
      (result: any) => {
        this.result = result;
      },
      (error) => {
        alert(error.message);
      }
    );
  }
}
