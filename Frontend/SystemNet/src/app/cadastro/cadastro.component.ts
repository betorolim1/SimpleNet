import { CadastroService } from './../services/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  plots = 0;
  value = 0;

  result = null;

  constructor(private service: CadastroService) {}

  ngOnInit(): void {}

  handlePlots(evt: any): void {
    const val = +evt.currentTarget.value;

    if (!val) {
      this.plots = 0;
    }

    if (val < 0) {
      this.plots = 0;
    }
  }

  handleValue(evt: any): void {
    const val = +evt.currentTarget.value;

    if (!val) {
      this.value = 0;
    }

    if (val < 0) {
      this.value = 0;
    }
  }

  onSave(): void {
    this.service.Save(this.plots, this.value).subscribe(
      (result: any) => {
        this.result = result;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
