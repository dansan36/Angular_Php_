import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Band } from './Bands';
import { MetalumService } from './metalum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bands: Band[] = [];
  band: Band = { nome: '', formacao: 1999, country: '', lyrical_themes: '' };
  error = '';
  success = '';

  constructor(private metalService: MetalumService) {}
  ngOnInit(): void {
    this.getBands();
  }

  resetAlerts() {
    this.error = '';
  }

  getBands(): void {
    this.metalService.getAll().subscribe(
      (data: Band[]) => {
        this.bands = data;
        this.success = 'Sucesso ao acessar a base';
      },
      (err) => {
        this.error = err.message;
      }
    );
  }

  addBand(f: NgForm) {
    this.resetAlerts();
    this.metalService.library(this.band).subscribe(
      (res: Band) => {

      
        this.bands.push(res);
        this.success = 'Banda adicionada com Sucesso!!!!';

        f.reset();
      },
      (err) => {
        this.error = err.message;
      }
    );
  }

  updateBands(
    nome: any,
    formacao: any,
    country: any,
    lyrical_themes: any,
    id: any
  ) {
    this.resetAlerts();

    this.metalService
      .update({
        nome: nome.value,
        formacao: formacao.value,
        country: country.value,
        lyrical_themes: lyrical_themes.value,
        id: +id
      })
      .subscribe(
        (res) => {
          this.success = 'Atualizado com Sucesso!!!';
        },
        (err) => {
          this.error = err;
          console.log(err)
        }
      );
  }

  deleteBands(id:number){
    this.resetAlerts();
    this.metalService.delete(id).subscribe(
      (res)=>{
        this.bands=this.bands.filter(function(item){
          return item['id']&& +item['id'] !== +id;
        })
        this.success="Banda Deletada com sucesso"
      },
      (err)=>{
        this.error=err;
        console.log(err)
      }
      
    )

  }
 
}
