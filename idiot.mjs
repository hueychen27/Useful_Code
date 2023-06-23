export class Idiot {
    constructor (iq, brainCells) {
        this.iq = iq;
        this.brainCells = brainCells
    }
    speak() {
        const brainpower = this.iq * this.brainCells
        if (brainpower < 50) { console.log("i no brain cell"); }
        if (brainpower >= 50) { console.warn("I nerd") }
    }
}