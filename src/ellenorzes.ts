import { Artwork } from "./Artwork";
import { Statue } from "./index";

let nevPattern = /[a-zA-Z, ]{1,}$/;

document.getElementById('gomb')?.addEventListener('click', () =>{


    let titlenull = false;
    let title : HTMLInputElement = document.getElementById('title')as HTMLInputElement;
    if(nevPattern.test(title.value)){
        notnull(title);
        titlenull = true;
        (document.getElementById('error') as HTMLElement).textContent = "";
    }else{
        nulll(title);
        titlenull = false;
        if(!title.value){
        (document.getElementById('error') as HTMLElement).textContent = "Nem lehet üres a mező";
        }else{

        (document.getElementById('error') as HTMLElement).textContent = "Nem tartalmazhat speciális karaktereket!";
        }
        
    }

    let pricenull = false;
        let price : HTMLInputElement = document.getElementById('price')as HTMLInputElement;
        if(parseInt(price.value) > 0){
            notnull(price)
            pricenull = true;
            (document.getElementById('error') as HTMLElement).textContent = "";
        }else{
            nulll(price);
            pricenull = false;
            (document.getElementById('error') as HTMLElement).textContent = "minimum 1 Ft legyen!";
        }


        let yearnull = false;
        let year : HTMLInputElement = document.getElementById('year')as HTMLInputElement;
        if(parseInt(year.value) < 2023){
            notnull(year)
            yearnull = true;
            (document.getElementById('error') as HTMLElement).textContent = "";
        }else{
            nulll(year);
            yearnull = false;
            if(year.value = ""){
                (document.getElementById('error') as HTMLElement).textContent = "Nem lehet üres a mező";
            }else (document.getElementById('error') as HTMLElement).textContent = "Az idei évet lehet kiírni";
        }

        let heightnull = false;
        let height : HTMLInputElement = document.getElementById('height')as HTMLInputElement;
        if(parseInt(height.value) > 9){
            notnull(height)
            heightnull = true;
            (document.getElementById('error') as HTMLElement).textContent = "";
        }else{
            nulll(height);
            heightnull = false;
            (document.getElementById('error') as HTMLElement).textContent = "minimum 10 cm legyen a magasság!";
        }

        function nulll (adat : HTMLInputElement){
            adat.style.border = "1px solid red";
        }
    
        function notnull(adat: HTMLInputElement){
            adat.style.border = "1px solid #ced4da";
        }
    })