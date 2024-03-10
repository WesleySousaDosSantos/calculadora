class Produto {
    constructor() {
        this.listaDeProdutos = [];
        this.listaDeValores = [];
    }

    incluir() {
        let produtoInput = document.getElementById('produtos').value;
        let valorInput = document.getElementById('valor').value;

        if (produtoInput !== '' && valorInput !== '') {
            this.listaDeProdutos.push(produtoInput);
            this.listaDeValores.push(parseFloat(valorInput));

            this.exibir();
        }
    }

    exibir() {
        let listaProdutos = document.getElementById('listaDeProdutos');
        let listaValores = document.getElementById('listaDeValores');
        listaProdutos.innerHTML = '';
        listaValores.innerHTML = '';

        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            let produtoItem = document.createElement('li');
            let valorItem = document.createElement('li');
            let deleteButton = document.createElement('button');

            produtoItem.textContent = this.listaDeProdutos[i];
            valorItem.textContent = this.listaDeValores[i].toFixed(2);
            deleteButton.textContent = 'Deletar';

            deleteButton.addEventListener('click', () => {
                this.listaDeProdutos.splice(i, 1);
                this.listaDeValores.splice(i, 1);
                this.exibir();
            });

            listaProdutos.appendChild(produtoItem);
            valorItem.appendChild(deleteButton);
            listaValores.appendChild(valorItem);
        }
    }

    calcular() {
        let total = this.listaDeValores.reduce((acc, curr) => acc + curr, 0);
        let media = total / this.listaDeValores.length;

        document.getElementById('total').textContent = total.toFixed(2);
        document.getElementById('media').textContent = media.toFixed(2);

        this.mostrarProdutoMaisCaro();
    }

    limparLista() {
        this.listaDeProdutos = [];
        this.listaDeValores = [];
        this.exibir();
    }

    mostrarProdutoMaisCaro() {
        if (this.listaDeProdutos.length > 0) {
            let maxIndex = this.listaDeValores.indexOf(Math.max(...this.listaDeValores));
            let produtoMaisCaro = this.listaDeProdutos[maxIndex];
            alert("O produto mais caro é: " + produtoMaisCaro);
        }
    }
}

let s = new Produto();

window.onload = () => {
    document.getElementById('btnInserir').addEventListener('click', () => {
        s.incluir();
    });

    document.getElementById('btnCalcular').addEventListener('click', () => {
        s.calcular();
    });

    document.getElementById('btnLimparLista').addEventListener('click', () => {
        s.limparLista();
    });
};
