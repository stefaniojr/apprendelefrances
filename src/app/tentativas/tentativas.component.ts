import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Croissant } from '../shared/croissant.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public croissantvazio: string = '/assets/croissantvazio.png'
  public croissantcheio: string = '/assets/croissantcheio.png'

  @Input() public tentativas: number

  public croissants: Croissant[] = [
    new Croissant (true), new Croissant (true), new Croissant (true) 
  ]

  constructor() { 
    
  }

  ngOnChanges (){
    
    if(this.tentativas !== this.croissants.length) {
      
      let indice = this.croissants.length - this.tentativas
      this.croissants[indice - 1].cheio = false
    
    }
  }

  ngOnInit(): void {
  }

}
