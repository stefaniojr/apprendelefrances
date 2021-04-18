export class Croissant{
    constructor(
        public cheio: boolean,
        public urlcroissantcheio: string = '/assets/croissantcheio.png',
        public urlcroissantvazio: string = '/assets/croissantvazio.png'
    ){

    }

    public exibecroissant(): string {
        if (this.cheio){
            return this.urlcroissantcheio
        } else {
           return this.urlcroissantvazio 
        }
    }

}