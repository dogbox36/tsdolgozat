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


        function nulll (adat : HTMLInputElement){
            adat.style.border = "1px solid red";
        }
    
        function notnull(adat: HTMLInputElement){
            adat.style.border = "1px solid #ced4da";
        }
    })