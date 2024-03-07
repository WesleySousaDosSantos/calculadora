class Sorteio {
    constructor() {
        this.listaDeNomes = [];
    }

    incluir() {
        let cpNome = document.getElementById('nome');
        if (cpNome.value != '') {
            this.listaDeNomes.push(cpNome.value);
            let nomesStr = this.listaDeNomes.join(';');
            localStorage.listaDeNomes = nomesStr;
            cpNome.value = '';
            this.exibir()
        }
    }

    exibir() {
        let lista = document.getElementById('listaDeNomes');
        lista.innerHTML = '';
        for(let i = 0; i < this.listaDeNomes.length; i++) {
            let item = document.createElement('li');
            item.innerHTML = this.listaDeNomes[i]
            lista.appendChild(item)
        }
    }

    recuperaLista() {
        let listaStr = localStorage.listaDeNomes;
        if (listaStr != 'undefined') {
            this.listaDeNomes = listaStr.splice('-');
        }
        this.exibir();
    }

    apagaLista() {
        localStorage.clear()
        location.reload()
    }

    sortear() {
        let min = 0
        let max = this.listaDeNomes.length
        let numeroSorteado = Math.floor(Math.random() * (max - min) + min)

        let nomeSorteado = this.listaDeNomes[numeroSorteado];
        let ganhador = document.getElementById('ganhador');
        ganhador.innerHTML = nomeSorteado
    }
}

let s = new Sorteio();

window.onload = () => {
    s.recuperaLista();
}
console.log(s.listaDeNomes)