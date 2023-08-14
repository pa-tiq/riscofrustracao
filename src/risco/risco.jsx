//DashBoard without Redux. Using the state of react
import React, { Component, createContext } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import ItemValue from '../common/widget/itemvalue';
//import ItemValueStyle from '../common/widget/itemvaluestyle'

//import LabelAndInputAndControl from '../common/form/labelAndInputAndControl'
import LabelAndInput from '../common/form/labelAndInput';

import axios from 'axios';
import PieChart from '../common/template/piechart';
//import BarChart from '../common/template/barchart'
import LineChart from '../common/template/linechart';

import SliderOne from '../common/template/sliderOne';
import Tooltip from '../common/template/tooltip';

import {
  toFormatDateYYYYMMDD2,
  getCurrentDate,
  cpfMask,
  isDateTime,
  isCpf,
  isNumeric,
  isEmail,
  isPhoneNumber,
  toFormatDate,
  toFormatCurrency,
  toFormatNumber,
  toFormatNumberPercent,
  mapColorsToLabels,
  toFormatDateDDMMYYYY,
} from '../common/functions/utilsjs';
import consts from '../consts';
import { isDate, now } from 'lodash';

import { getMsgToolTip } from '../common/functions/msgtooltips';

const BASE_URL = consts.OAPI_URL;

const asEvolucaoBeneficioEstimadoInitState = {
  labels: [],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#90caf9',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};

function fecthSimulacaoRiscoFrustracao(
  cliente,
  usuario,
  nome,
  email,
  celular,
  apikey,
  versao,
  salario,
  saldototal,
  idadeatualmeses,
  contribuicaomensal,
  sendmail
) {
  if (apikey.length != 0) {
    return axios
      .get(
        `${BASE_URL}/modelia/riscofrustracao/${cliente}/${usuario}/${nome}/${email}/${celular}/${apikey}/${versao}/${salario}/${saldototal}/${idadeatualmeses}/${contribuicaomensal}/${sendmail}`
      )
      .then((resp) => {
        return resp.data;
      });
  }
}
/*
            nome: 'thyago marques',
            email: 'thyago@gmail.com',
            celular: '62981441994',

            nome: '',
            email: '',
            celular: '',
*/

export default class Risco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      found: false,
      checked: false,
      cliente: 5, //Codigo da CLIENTE RM
      usuario: 8, //Código do usuario do participante individual para os planos

      nome: 'WTI',
      email: 'contato@wti.com.br',
      celular: '5562981441994',
      apikey: 'apikey1',
      versao: 'v1',
      sendmail: true,

      salariomax: 50000,
      salario: 5000,
      salariomin: 1500,

      saldototalmax: 2000000,
      saldototal: 50000,
      saldototalmin: 5000,

      idadeatualanosmax: 72,
      idadeatualanos: 40,
      idadeatualanosmin: 18,

      contribuicaomensalmax: 4000,
      contribuicaomensal: 200,
      contribuicaomensalmin: 100,

      datasimulacao: getCurrentDate('-'),

      classe: 0,
      label: '',
      probRiscoAlto: 0,
      probRiscoMedio: 0,
      probRiscoBaixo: 0,
      probSemRisco: 0,
    };
    this.clearAllState = this.clearAllState.bind(this);
    this.clearDataState = this.clearDataState.bind(this);
    this.simulate = this.simulate.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(e) {
    //console.log(e.target)
    this.setState({
      checked: e.target.checked,
    });
  }

  simulate() {
    //console.log(this.state)
    const {
      cliente,
      usuario,
      nome,
      email,
      celular,
      apikey,
      versao,
      sendmail,
      salario,
      saldototal,
      idadeatualanos,
      contribuicaomensal,
    } = this.state;

    if (
      parseFloat(salario) > 0 &&
      parseFloat(saldototal) > 0 &&
      parseInt(idadeatualanos) > 0 &&
      parseFloat(contribuicaomensal) > 0
    ) {
      //Fetch data to Beneficiario
      // fecthSimulacaoRiscoFrustracao(cliente, usuario, nome, email, celular, apikey, versao, salario, saldototal, (idadeatualanos * 12), contribuicaomensal, sendmail)
      //     .then(bc => {
      //         if (!!bc) {
      //             //console.log(bc)
      //             this.setState(...this.state, {
      //                 found: true,
      //                 classe: bc.Class,
      //                 label: bc.Label,
      //                 probRiscoAlto: parseFloat(bc.ProbaClass0).toFixed(2),
      //                 probRiscoMedio: parseFloat(bc.ProbaClass1).toFixed(2),
      //                 probRiscoBaixo: parseFloat(bc.ProbaClass2).toFixed(2),
      //                 probSemRisco: parseFloat(bc.ProbaClass3).toFixed(2),
      //             })
      //         } else {
      //             this.setState({ ...this.state, found: false })
      //             this.clearDataState()
      //         }
      //     })
      //     .catch((err) => console.log('Error in fecthSimulacaoRiscoFrustracao..', err))

      this.setState(...this.state, {
        found: true,
        classe: 'oi',
        label: 'testte',
        probRiscoAlto: (49.0).toFixed(2),
        probRiscoMedio: (20.5).toFixed(2),
        probRiscoBaixo: (11.0).toFixed(2),
        probSemRisco: (5.0).toFixed(2),
      });
    }
  }

  componentWillMount() {
    // console.log(this.props)
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.salario !== this.state.salario) {
      this.clearDataState();
      this.simulate();
    } else if (prevState.saldototal !== this.state.saldototal) {
      this.clearDataState();
      this.simulate();
    } else if (prevState.idadeatualanos !== this.state.idadeatualanos) {
      this.clearDataState();
      this.simulate();
    } else if (prevState.contribuicaomensal !== this.state.contribuicaomensal) {
      this.clearDataState();
      this.simulate();
    }
  }

  clearDataState() {
    this.setState(...this.state, {
      found: false,
      classe: '',
      label: '',
      probRiscoAlto: 0,
      probRiscoMedio: 0,
      probRiscoBaixo: 0,
      probSemRisco: 0,
    });
  }

  clearAllState() {
    this.setState({
      found: false,
      checked: false,
      nome: '',
      email: '',
      celular: '',

      salario: 5000,
      saldototal: 50000,
      idadeatualanos: 40,
      contribuicaomensal: 200,

      datasimulacao: getCurrentDate('-'),

      classe: '',
      label: '',
      probRiscoAlto: 0,
      probRiscoMedio: 0,
      probRiscoBaixo: 0,
      probSemRisco: 0,
    });
  }

  getColorRiscoFrustracao(risco) {
    if (risco == 'SEM RISCO') {
      return 'greenyellow';
    } else if (risco == 'RISCO BAIXO') {
      return 'skyblue';
    } else if (risco == 'RISCO MEDIO') {
      return 'yellow';
    } else if (risco == 'RISCO ALTO') {
      return 'red';
    }
  }

  getNomeRisco(risco) {
    if (risco == 'RISCO BAIXO') {
      return 'BAIXO';
    } else if (risco == 'RISCO MEDIO') {
      return 'MEDIO';
    } else if (risco == 'RISCO ALTO') {
      return 'ALTO';
    } else return risco;
  }

  render() {
    const {
      cliente,
      usuario,
      nome,
      email,
      celular,
      salario,
      saldototal,
      idadeatualanos,
      contribuicaomensal,
      datasimulacao,
      classe,
      label,
      probRiscoAlto,
      probRiscoMedio,
      probRiscoBaixo,
      probSemRisco,
    } = this.state;

    return (
      <div className='page page-participanteindividual'>
        <div className='content-header-wrapper'>
          <ContentHeader
            title={`Avalie você mesmo o seu Risco de Frustração`}
            small={`Usando um modelo de Inteligência Artificial`}
          />
          <div className='content-header-buttons'>
            <button
              type='button'
              className='btn btn-default btn-reset-filters'
              onClick={this.clearAllState}
            >
              Limpar Filtros
            </button>
            <button
              type='button'
              className='btn btn-default btn-reset-filters'
              onClick={() => {
                window.print();
              }}
            >
              Imprimir Simulação
            </button>
          </div>
        </div>

        <Content>
          <div className='items-group-wrapper'>
            <h4>Informações do Usuário</h4>

            <div className='items-group row'>
              <div className='col-xs-12 col-md-3'>
                <LabelAndInput
                  name='nome'
                  type='text'
                  label='Nome *'
                  cols='col-xs-12 col-sm-6 col-md-3'
                  placeholder='Informe o Nome'
                  value={nome}
                  disabled={false}
                  onChange={(e) => {
                    // console.log(e)
                    // this.setState({ ...this.state, matricula: e })
                  }}
                  onBlur={(e) => {
                    // console.log(e)
                    this.setState({ ...this.state, nome: e });
                  }}
                />
              </div>

              <div className='col-xs-12 col-md-3'>
                <LabelAndInput
                  name='email'
                  type='text'
                  label='Email *'
                  cols='col-xs-12 col-sm-6 col-md-3'
                  placeholder='Informe o Email'
                  value={email}
                  disabled={false}
                  onChange={(e) => {
                    // console.log(e)
                    // this.setState({ ...this.state, matricula: e })
                  }}
                  onBlur={(e) => {
                    // console.log(isEmail(e))
                    this.setState({ ...this.state, email: e });
                  }}
                />
              </div>

              <div className='col-xs-12 col-md-3'>
                <LabelAndInput
                  name='celular'
                  type='text'
                  label='Celular * (apenas números)'
                  cols='col-xs-12 col-sm-6 col-md-3'
                  placeholder='Informe o Celular'
                  value={celular}
                  disabled={false}
                  onChange={(e) => {
                    // console.log(e)
                    // this.setState({ ...this.state, matricula: e })
                  }}
                  onBlur={(e) => {
                    // console.log(isPhoneNumber(e))
                    this.setState({ ...this.state, celular: e });
                  }}
                />
              </div>
            </div>
          </div>

          <div className='items-group-wrapper'>
            <h4>Variáveis para Simulação</h4>

            <div className='items-group'>
              {true && (
                <SliderOne
                  label={'Contribuição Participante R$'}
                  min={this.state.contribuicaomensalmin}
                  max={this.state.contribuicaomensalmax}
                  step={50}
                  width={200}
                  div={1}
                  showvalue={true}
                  showminmax={false}
                  defaultValue={200}
                  value={parseFloat(this.state.contribuicaomensal).toFixed(2)}
                  onChange={(value) => {
                    // console.log(value)
                  }}
                  onAfterChange={(value) => {
                    //console.log(value)
                    this.setState({
                      ...this.state,
                      contribuicaomensal: +value,
                    });
                  }}
                />
              )}

              {true && (
                <SliderOne
                  label={'Idade Atual (anos)'}
                  min={this.state.idadeatualanosmin}
                  max={this.state.idadeatualanosmax}
                  step={1}
                  width={200}
                  div={1}
                  showvalue={true}
                  showminmax={false}
                  defaultValue={40}
                  value={this.state.idadeatualanos}
                  onChange={(value) => {
                    // console.log(value)
                  }}
                  onAfterChange={(value) => {
                    this.setState({ ...this.state, idadeatualanos: +value });
                  }}
                />
              )}

              {true && (
                <SliderOne
                  label={'Saldo Total R$'}
                  min={this.state.saldototalmin}
                  max={this.state.saldototalmax}
                  step={5000}
                  width={200}
                  div={1}
                  showvalue={true}
                  showminmax={false}
                  defaultValue={50000} //{new Array(10, 100)}
                  value={this.state.saldototal}
                  onChange={(value) => {
                    // console.log(value)
                  }}
                  onAfterChange={(value) => {
                    // console.log(value/10)
                    this.setState({ ...this.state, saldototal: +value });
                  }}
                />
              )}

              {true && (
                <SliderOne
                  label={'Salário Mensal R$'}
                  min={this.state.salariomin}
                  max={this.state.salariomax}
                  step={500}
                  width={200}
                  div={1}
                  showvalue={true}
                  showminmax={false}
                  defaultValue={5000}
                  value={this.state.salario}
                  onChange={(value) => {
                    // console.log(value)
                  }}
                  onAfterChange={(value) => {
                    // console.log(value)
                    this.setState({ ...this.state, salario: +value });
                  }}
                />
              )}
            </div>
          </div>

          <div className='termos-uso-wrapper'>
            <button
              type='button'
              className='bottom-simulate btn btn-primary btn-block btn-lg'
              disabled={!this.state.checked}
              onClick={this.simulate}
            >
              AVALIAR RISCO
            </button>
            <div className='termos-uso-check'>
              <input
                id='checkbox_id'
                type='checkbox'
                checked={this.state.checked}
                onChange={this.handleCheck}
              />
              <label className='termos_label' htmlFor='checkbox_id'>
                <a href='/simulador/prevsan/termo_prevsan.pdf' target='_blank'>
                  Li e concordo com o termo de uso
                </a>
              </label>
            </div>
          </div>

          {this.state.found && (
            <div>
              <div className='items-group-wrapper'>
                <h4>Resultado da Avaliação do Risco de Frustração</h4>
                <div className='items-group'>
                  <Tooltip text={`${getMsgToolTip(1)}`}>
                    <ItemValue
                      label='Nível do Risco'
                      value={`${this.getNomeRisco(label)}`}
                    />
                  </Tooltip>
                </div>
              </div>

              <div className='charts-wrapper row mt-2'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-md-offset-3'>
                  <PieChart
                    height='55%'
                    width='140px'
                    title='Probabilidades dos Níveis de Risco'
                    labels={[
                      'Risco Alto',
                      'Risco Médio',
                      'Risco Baixo',
                      'Sem Risco',
                    ]}
                    data={[
                      this.state.probRiscoAlto,
                      this.state.probRiscoMedio,
                      this.state.probRiscoBaixo,
                      this.state.probSemRisco,
                    ]}
                    color={getChartColors()}
                    onClickChartIndex={(index) => {
                      //console.log(index)
                    }}
                    onClickChartLabel={(index) => {
                      // console.log(index)
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {true && (
            <div className='message-renda-disclaimer'>
              <h4>
                <strong>AVISO LEGAL</strong>
              </h4>
              <h4>
                O Risco é determinado utilizando um modelo de inteligencia
                artificial. Ou seja, NÃO são considerados os modelos atuariais
                para determinar esse nível de risco.
              </h4>
            </div>
          )}
        </Content>
      </div>
    );
  }
}

//<ItemValueStyle label='Risco de Frustração' value={`${this.getNomeRisco(label)}`} color={`${this.getColorRiscoFrustracao(label)}`} />
