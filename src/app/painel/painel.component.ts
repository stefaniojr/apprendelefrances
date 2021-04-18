import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import  { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instruction: string = 'Traduza a frase respeitando a pontuação e a capitalização. Você tem apenas 3 croissants!'
  public resposta: string = ''

  public rodada: number = 0 
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('Isso aí!')
    } else {
      this.tentativas--;

      if (this.tentativas === -1)
        this.encerrarJogo.emit('derrota')
    }

      //Anda um índice no objeto de frases.
      this.rodada++

      //Atualiza a barra de progresso.
      this.progresso = this.progresso + (100 / this.frases.length)
  
      if (this.rodada === 13){
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()
  
  }

  

  public atualizaRodada(): void {
    //A variável que contém a frase atual é atualizada com base no objeto de frases e índice correspondente.
    this.rodadaFrase = this.frases[this.rodada]
    //Limpando a resposta.
    this.resposta=''
  }
}
