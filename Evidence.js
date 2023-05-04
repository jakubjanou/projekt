class Evidence{


    constructor(){
        this.jmeno = document.getElementById("jmeno");
        this.prijmeni = document.getElementById("prijmeni");
        this.odeslat = document.getElementById("odeslat");
        this.nastavUdalosti()
    }

    nastavUdalosti(){

        this.odeslat.addEventListener("click", (e) => {
            e.preventDefault();
            const radek = document.createElement("p");
            radek.textContent = ` ${this.jmeno.value} ${this.prijmeni.value}`
            document.body.appendChild(radek)
            console.log(` ${this.jmeno.value} ${this.prijmeni.value}`)
        })
    }
}