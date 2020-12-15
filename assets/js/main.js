(function () {
    function Calculator() {
        
        this.display = document.querySelector('.display');

        this.init = () => {
            this.generalButtons();
            this.verificationDisplay();
        };

        this.generalButtons = () => {
            addEventListener('click', e => {
                const element = e.target;

                //adiciona elementos ao display
                if (element.classList.contains('btn')) this.display.value += element.innerText;
                //apaga todos os elementos do display
                if (element.classList.contains('clearAll')) this.display.value = '';
                //apaga o ultimo elemento do display
                if (element.classList.contains('clearOne')) this.display.value = this.display.value.slice(0, -1);
                //botão de igualdade
                if (element.classList.contains('iguality')) this.calculate(this.display.value);
            });
        };

        this.calculate = valores => {
            try {
                const res = eval(valores);

                if (!res) {
                    alert('conta inválida')
                    this.display.value = '';
                    return
                }

                this.display.value = res;
            } catch (error) {
                alert('conta inválida.');
                this.display.value = '';
                return
            }
        };

        this.verificationDisplay = () => {
            addEventListener('keydown', e => {
                const key = e.keyCode;
                if (key > 64 && key < 91) this.display.value = '';
            });
        };
    }

    const calculator = new Calculator();
    calculator.init();
}())