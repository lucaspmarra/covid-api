const API_URL = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
new Vue({
    el: '#app',
    data() {
        return {
            cases_list: [],
            loading: true,
            errored: false,
            selected: 'df',
            state: '',
            number: '',
            options: [
                { text: 'AC', value: 'ac' },
                { text: 'AL', value: 'al' },
                { text: 'AP', value: 'ap' },
                { text: 'AM', value: 'am' },
                { text: 'BA', value: 'ba' },
                { text: 'CE', value: 'ce' },
                { text: 'DF', value: 'df' },
                { text: 'ES', value: 'es' },
                { text: 'GO', value: 'go' },
                { text: 'MA', value: 'ma' },
                { text: 'MT', value: 'mt' },
                { text: 'MS', value: 'ms' },
                { text: 'MG', value: 'mg' },
                { text: 'PA', value: 'pa' },
                { text: 'PB', value: 'pb' },
                { text: 'PR', value: 'pr' },
                { text: 'PE', value: 'pe' },
                { text: 'PI', value: 'pi' },
                { text: 'RJ', value: 'rj' },
                { text: 'RN', value: 'rn' },
                { text: 'RS', value: 'rs' },
                { text: 'RO', value: 'ro' },
                { text: 'RR', value: 'rr' },
                { text: 'SC', value: 'sc' },
                { text: 'SP', value: 'sp' },
                { text: 'SE', value: 'se' },
                { text: 'TO', value: 'to' }
            ],
            dateSelected: '04',
            dateOptions: [
                { text: 'Mês de Abril', value: '04' },
                { text: 'Mês de Maio', value: '05' },
                { text: 'Mês de Julho', value: '06' },
            ],
        }
    },
    mounted() {
        this.getCases();

    },
    watch: {
        selected: function () {
            this.getCases()
        },
    },
    methods: {
        getCases() {
            console.log(API_URL + '/uf/'+ this.selected);
            
            axios
                .get(API_URL + '/uf/'+ this.selected)
                .then((response) => {
                    this.cases_list = response.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }

})