

export class Statue {
    #title: string;
    #year:Date;
    #price:number;
    #height:number;

    constructor(title: string, year: Date, price:number, height:number) {
        this.#title = title;
        this.#year = year;
        this.#price= price;
        this.#height= height;
    }

    kiir() : void {
        console.log(this.#title, this.#year, this.#price, this.#height);
    }
}

function required()
{
var empt = document.forms["year"]["title"].value;
if (empt == "")
{
alert("Adj meg egy nevet!");
return false;
}
else 
{
alert('Próbáld meg újra');
return true; 
}
}