<template>
    <div>
        <h1 class="text-center my-5 color-primary">Dashboard</h1>
        <div class="row h-100 d-flex align-items-center justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <img class="thumb" src="../assets/icons/maquina-de-cortar-cabelo.png"
                        alt="maquina de cortar cabelo">
                    <h1 class="h-primary d-flex align-items-center">Cortes do Dia <span
                            class="the-day ms-2">20/02/2024</span></h1>
                    <div>
                        <p>Cortes: {{ maskMoney(showTotalValue('Corte de Cabelo')) }}</p>
                        <p>Barbas: {{ maskMoney(showTotalValue('Barba')) }}</p>
                    </div>

                    <button class="btn btn-primary position-absolute" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Marcar</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="thumb" src="../assets/icons/transferencia-de-dinheiro.png"
                        alt="maquina de cortar cabelo">
                    <h1 class="h-primary">Contagem de pagos no dia</h1>
                    <p>Crédito: {{ maskMoney(showTotalPaymentMethod('Crédito')) }}</p>
                    <p>Débito: {{ maskMoney(showTotalPaymentMethod('Débito')) }}</p>
                    <p>Pix: {{ maskMoney(showTotalPaymentMethod('Pix')) }}</p>
                    <p>Dinheiro: {{ maskMoney(showTotalPaymentMethod('Dinheiro')) }}</p>
                </div>
            </div>
            <div class="row my-5 d-flex justify-content-center">
                <div class="col-md-8">
                    <canvas id="myChart"></canvas>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img class="barber" src="../assets/icons/santa-beard.png" alt="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <select class="form-select form-select-lg mb-3" v-model="movement.typeService">
                                <option value="Corte de Cabelo">Corte de cabelo</option>
                                <option value="Barba">Barba</option>
                            </select>

                            <select class="form-select form-select-lg mb-3" v-model="movement.paymentMethod">
                                <option value="Crédito">Crédito</option>
                                <option value="Débito">Débito</option>
                                <option value="Pix">Pix</option>
                                <option value="Dinheiro">Dinheiro</option>
                            </select>
                            <div class="form-floating">
                                <input class="form-control" id="floatingInput" v-model="movement.valuePerService">
                                <label for="floatingInput">Valor</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary"
                                data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" @click="addValue()">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            cuts: [],
            beard: [],
            movements: [],
            credit: [],
            debit: [],
            pix: [],
            money: [],
            currentType: '',
            movement: {
                typeService: '',
                paymentMethod: 0,
                valuePerService: null,
            },
        };
    },
    mounted() {
        this.chart();
    },
    methods: {

        chart() {
            const ctx = document.getElementById('myChart');

            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Crédito', 'Débito', 'Pix', 'Dinheiro'],
                    datasets: [{
                        label: 'Formas de pagamento',
                        data: [
                            this.showTotalPaymentMethod('Crédito'),
                            this.showTotalPaymentMethod('Débito'),
                            this.showTotalPaymentMethod('Pix'),
                            this.showTotalPaymentMethod('Dinheiro'),
                        ],
                        borderWidth: 1,
                        backgroundColor: '#7553e2',
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        addValue() {
            this.movement.valuePerService = parseFloat(this.movement.valuePerService);
            this.movements.push({ ...this.movement });

            if (this.movement.typeService.toLowerCase() === 'corte de cabelo') {
                this.cuts.push({ ...this.movement });
            } else if (this.movement.typeService.toLowerCase() === 'barba') {
                this.beard.push({ ...this.movement });
            }

            switch (this.movement.paymentMethod.toLowerCase()) {
                case 'crédito':
                    this.credit.push({ ...this.movement });
                    break;
                case 'débito':
                    this.debit.push({ ...this.movement });
                    break;
                case 'pix':
                    this.pix.push({ ...this.movement });
                    break;
                case 'dinheiro':
                    this.money.push({ ...this.movement });
                    break;
            }

            this.movement = {
                typeService: this.currentType,
                paymentMethod: '',
                valuePerService: null,
            };

            this.updateChart();
        },

        updateChart() {
            if (this.chart) {
                this.chart.data.datasets[0].data = [
                    this.showTotalPaymentMethod('Crédito'),
                    this.showTotalPaymentMethod('Débito'),
                    this.showTotalPaymentMethod('Pix'),
                    this.showTotalPaymentMethod('Dinheiro'),
                ];
                this.chart.update();
            }
        },


        showTotalValue(typeService) {
            const values = this.movements
                .filter((movement) => movement.typeService === typeService && movement.valuePerService !== null)
                .map((movement) => movement.valuePerService);

            return values.reduce((acc, val) => acc + val, 0);
        },

        showTotalPaymentMethod(paymentMethod) {
            const values = this.movements
                .filter((movement) => movement.paymentMethod === paymentMethod)
                .map((movement) => movement.valuePerService);

            return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        },

        setCurrentType(typeService) {
            this.currentType = typeService;
            this.movement.typeService = typeService;
        },

        maskMoney(v) {
            return v?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        },
    },
};
</script>


<style scoped>
.card {
    min-height: 331px;
}

.btn-primary {
    bottom: 40px;
}
</style>