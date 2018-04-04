import { Component, Input, OnInit } from '@angular/core';
import { Materia} from "../pojo";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
@Input() detalhes: Materia;
  constructor() { }

  ngOnInit() {
  }

}
