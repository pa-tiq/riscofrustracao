import React, { Component } from 'react'
import { toFormatDate, toFormatCurrency, toFormatNumber, toFormatNumberPercent } from '../common/functions/utilsjs'

const widths = {
    _faixa_salarial: 150,
    _parametro_s_salario: 150,
    _altorisco_menor_que: 150,
    _medio_risco_entre: 150,
    _baixo_risco_entre: 150,
    _sem_risco_maior_que: 150,
}

let iSemRisco = 0
let iRiscoBaixo = 0
let iRiscoMedio = 0
let iRiscoAlto = 0
let iFaixaSalarial = 0

class FaixaRiscoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.getColorRiscoFrustracao = this.getColorRiscoFrustracao.bind(this)
        this.setBackColorFaixaSalarial = this.setBackColorFaixaSalarial.bind(this)
        this.setBackColorRiscoAlto = this.setBackColorRiscoAlto.bind(this)
        this.setBackColorRiscoMedio = this.setBackColorRiscoMedio.bind(this)
        this.setBackColorRiscoBaixo = this.setBackColorRiscoBaixo.bind(this)
        this.setBackColorSemRisco = this.setBackColorSemRisco.bind(this)
        this.getPosicaoFaixaSalarial = this.getPosicaoFaixaSalarial.bind(this)
    }

    componentWillMount() {
        iSemRisco = 0
        iRiscoBaixo = 0
        iRiscoMedio = 0
        iRiscoAlto = 0
        iFaixaSalarial = 0
    }

    componentDidMount() {
        iSemRisco = 0
        iRiscoBaixo = 0
        iRiscoMedio = 0
        iRiscoAlto = 0
        iFaixaSalarial = 0
    }

    getColorRiscoFrustracao(risco){
        if (risco == 'SEM RISCO'){
            return 'greenyellow'
        }else if (risco == 'BAIXO RISCO'){
            return 'skyblue'
        }else if (risco == 'MEDIO RISCO'){
            return 'yellow'
        }else if (risco == 'ALTO RISCO'){
            return 'red'
        }else{
            return 'transparent'
        }
    }

    setBackColorFaixaSalarial(faixaSalarial, salario, risco, posicaoFaixaSalarial){
        if (posicaoFaixaSalarial == 0){
            if (iFaixaSalarial == 0){
                iFaixaSalarial++
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } else if ((salario >= faixaSalarial) && (faixaSalarial == posicaoFaixaSalarial) ){
            if (risco == 'SEM RISCO'){ 
                return this.getColorRiscoFrustracao(risco) 
            }else if (risco == 'BAIXO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            }else if (risco == 'MEDIO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            }else if (risco == 'ALTO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            }
        } else {
            return 'transparent'
        }
    }

    setBackColorRiscoAlto(faixaSalarial, salario, risco, posicaoFaixaSalarial){

        if (posicaoFaixaSalarial == 0){
            if ((risco == 'ALTO RISCO') && (iRiscoAlto == 0)){
                iRiscoAlto++
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } else if ((salario >= faixaSalarial) && (faixaSalarial == posicaoFaixaSalarial) ){
            if (risco == 'ALTO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } 
    }

    setBackColorRiscoMedio(faixaSalarial, salario, risco, posicaoFaixaSalarial){
        if (posicaoFaixaSalarial == 0){
            if ((risco == 'MEDIO RISCO') && (iRiscoMedio == 0)){
                iRiscoMedio++
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } else if ((salario >= faixaSalarial) && (faixaSalarial == posicaoFaixaSalarial)){
            if (risco == 'MEDIO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } 
    }

    setBackColorRiscoBaixo(faixaSalarial, salario, risco, posicaoFaixaSalarial){
        if (posicaoFaixaSalarial == 0){
            if ((risco == 'BAIXO RISCO') && (iRiscoBaixo == 0)){
                iRiscoBaixo++
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } else if ((salario >= faixaSalarial) && (faixaSalarial == posicaoFaixaSalarial) ){
            if (risco == 'BAIXO RISCO'){
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } 
    }

    setBackColorSemRisco(faixaSalarial, salario, risco, posicaoFaixaSalarial){
        if (posicaoFaixaSalarial == 0){
            if ((risco == 'SEM RISCO') && (iSemRisco == 0)){
                iSemRisco++
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } else if ((salario > faixaSalarial) && (faixaSalarial == posicaoFaixaSalarial)) {
            if (risco == 'SEM RISCO'){
                return this.getColorRiscoFrustracao(risco)
            } else {
                return 'transparent'
            }
        } 
    }    

    getPosicaoFaixaSalarial(list, salario){
        let faixa = 0
        for (let i = 1; i < list.length; i++) {
            const element = list[i]
            if ((list[i]._faixa_salarial >= salario) && (list[i-1]._faixa_salarial < salario)){
                return faixa //list[i]._faixa_salarial
            }
            faixa = list[i]._faixa_salarial //take the before value
        }
        return 0
    }

    renderRows(){
        const list = this.props.list || []
        let labelRisco = this.props.labelRisco
        const salario = parseFloat(this.props.salario)
        let posicaoFaixaSalarial = this.getPosicaoFaixaSalarial(list, salario)
        labelRisco = labelRisco.trim()
        //console.log(posicaoFaixaSalarial)

        return list.map(bc => (
            <tr key={bc._faixa_salarial}>
                <td style={{width: widths._faixa_salarial, backgroundColor:`${this.setBackColorFaixaSalarial(bc._faixa_salarial, salario, labelRisco, posicaoFaixaSalarial)}` }} >{(toFormatCurrency(bc._faixa_salarial,2))}</td>

                <td style={{width: widths._altorisco_menor_que, backgroundColor:`${this.setBackColorRiscoAlto(bc._faixa_salarial, salario, labelRisco, posicaoFaixaSalarial)}` }}>{(bc._altorisco_menor_que)}</td>
                <td style={{width: widths._medio_risco_entre, backgroundColor:`${this.setBackColorRiscoMedio(bc._faixa_salarial, salario, labelRisco, posicaoFaixaSalarial)}` }}>{bc._medio_risco_entre}</td>
                <td style={{width: widths._baixo_risco_entre, backgroundColor:`${this.setBackColorRiscoBaixo(bc._faixa_salarial, salario, labelRisco, posicaoFaixaSalarial)}` }}>{bc._baixo_risco_entre}</td>
                <td style={{width: widths._sem_risco_maior_que, backgroundColor:`${this.setBackColorSemRisco(bc._faixa_salarial, salario, labelRisco, posicaoFaixaSalarial)}` }}>{bc._sem_risco_maior_que}</td>
             </tr>         
        )) 
    }

    render(){
        return (
            <div className='list-beneficiario table-responsive' >
                <table id="dtBasicExample" className="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th style={{width: widths._faixa_salarial}}>Faixa Salarial</th>

                            <th style={{width: widths._altorisco_menor_que}}>ALTO</th>
                            <th style={{width: widths._medio_risco_entre}}>MÉDIO</th>
                            <th style={{width: widths._baixo_risco_entre}}>BAIXO</th>
                            <th style={{width: widths._sem_risco_maior_que}}>SEM RISCO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default FaixaRiscoList

/*
                <td style={{width: widths._parametro_s_salario}}>{(bc._parametro_s_salario)}</td>
*/


/*
                        <tr>
                            <th style={{width: widths._faixa_salarial}}>Faixa Salarial</th>
                            <th style={{width: widths._parametro_s_salario}}>Parâmetro s/ Salário</th>
                            <th style={{width: widths._altorisco_menor_que}}>ALTO Risco (menor que)</th>
                            <th style={{width: widths._medio_risco_entre}}>MÉDIO Risco (entre)</th>
                            <th style={{width: widths._baixo_risco_entre}}>BAIXO Risco (entre)</th>
                            <th style={{width: widths._sem_risco_maior_que}}>SEM Risco (maior que)</th>
                            </tr>
*/