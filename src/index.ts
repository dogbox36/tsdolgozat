import { Artwork } from "./Artwork";

let Artwork:Artwork[];
let nevPattern = /[a-zA-Z, ]{1,}$/;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button')?.addEventListener('click', () =>{


    let titlenull = false;
    let title : HTMLInputElement = document.getElementById('title')as HTMLInputElement;
    if(nevPattern.test(title.value)){
        (title);
        titlenull = true;
        (document.getElementById('titlevalasz') as HTMLElement).textContent = "";
    }else{
        alert(title+"rossz adat!");
        titlenull = false;
        if(!title.value){
        (document.getElementById('titlevalasz') as HTMLElement).textContent = "Nem lehet üres a mező";
        }else{

        (document.getElementById('titlevalasz') as HTMLElement).textContent = "Nem tartalmazhat speciális karaktereket!";
        }
        
    }

    let pricenull = false;
        let price : HTMLInputElement = document.getElementById('price')as HTMLInputElement;
        if(parseInt(price.value) > 0){
            (price)
            pricenull = true;
            (document.getElementById('pricevalasz') as HTMLElement).textContent = "";
        }else{
            alert(price+"rossz adat!");
            pricenull = false;
            (document.getElementById('pricevalasz') as HTMLElement).textContent = "minimum 1 Ft legyen!";
        }


        let yearnull = false;
        let year : HTMLInputElement = document.getElementById('year')as HTMLInputElement;
        if(parseInt(year.value) < 2023){
            (year)
            yearnull = true;
            (document.getElementById('yearvalasz') as HTMLElement).textContent = "";
        }else{
            alert(year+"rossz adat!");
            yearnull = false;
            if(year.value = ""){
                (document.getElementById('yearvalasz') as HTMLElement).textContent = "Nem lehet üres a mező";
            }else (document.getElementById('yearvalasz') as HTMLElement).textContent = "Az idei évet lehet kiírni";
        }

        let heightnull = false;
        let height : HTMLInputElement = document.getElementById('height')as HTMLInputElement;
        if(parseInt(height.value) > 9){
            (height)
            heightnull = true;
            (document.getElementById('heightvalasz') as HTMLElement).textContent = "";
        }else{
            alert("rossz adat!");
            heightnull = false;
            (document.getElementById('heightvalasz') as HTMLElement).textContent = "minimum 10 cm legyen a magasság!";
        }
    })
})
