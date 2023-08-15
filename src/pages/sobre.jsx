import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'

import Logo from '../imgs/wedan-black.svg'


class Sobre extends Component {
    render() {
        return (
            <div className="page page-sobre">

                <div className="content-header-wrapper">

                    <ContentHeader title='Sobre' small='versão: 1.0' />

                </div>

                <Content>

                    <div className="sections">

                        <section>

                            <h4>A Ferramenta</h4>

                            <div className="text-area">
                                <p>O uso da <b>inteligência artificial</b> (IA) nesse contexto de identificação do Risco de Frustração é de extrema importância e traz benefícios significativos para o planejamento financeiro. Primeiramente, a IA é capaz de processar e analisar enormes quantidades de dados de forma rápida e precisa, tornando possível uma avaliação mais abrangente e detalhada da situação financeira de cada indivíduo. Essa capacidade de análise aprofundada ajuda a identificar riscos e oportunidades que poderiam passar despercebidos em avaliações tradicionais realizadas apenas por seres humanos.</p>
                                
                                <p>Além disso, a IA permite uma análise mais dinâmica e adaptável, levando em conta diversos cenários econômicos e de investimentos. Isso é especialmente relevante em um contexto de mercado em constante mudança, onde as condições econômicas podem variar significativamente ao longo do tempo. A IA é capaz de simular diferentes situações e projetar resultados potenciais, permitindo que os indivíduos ajustem suas estratégias de acordo com as circunstâncias do momento.</p>
                                
                                <p>Outro ponto crucial é a personalização das recomendações. Cada pessoa tem uma situação financeira única, com objetivos e necessidades distintas. A IA pode oferecer sugestões específicas e customizadas para cada indivíduo com base em seus dados pessoais, ajudando-os a tomar decisões mais informadas e alinhadas com suas metas de aposentadoria.</p>

                                <p>Quando o modelo de inteligência artificial classificou o <b>Risco de Frustração como ALTO</b> para um determinado indivíduo, isso indica que sua situação financeira para a aposentadoria é delicada e que há um risco considerável de que o benefício estimado não seja suficiente para manter o padrão de vida desejado após encerrar a vida profissional.</p>

                                <p>Com base nessa identificação, o usuário pode buscar mitigar esse Risco de Frustração e melhorar o planejamento financeiro, da seguinte forma:</p>

                                <p><b>1. Aumento da contribuição atual</b>: O usuário pode aumentar suas contribuições para a previdência privada ou outro plano de aposentadoria. Isso permitirá acumular mais recursos ao longo do tempo, aumentando o potencial de benefícios na aposentadoria.</p>

                                <p><b>2. Aportes adicionais</b>: O usuário também pode realizar aportes financeiros adicionais sempre que possível. Essas injeções de dinheiro extra no plano de previdência aumentariam ainda mais o montante acumulado, proporcionando uma maior margem de segurança para o futuro.</p>

                                <p><b>3. Aumento na Idade de Aposentadoria</b>: E para aqueles dispostos e capazes de adiar a aposentadoria por alguns anos, é interessante considerar essa opção. O adiamento permitiria acumular recursos adicionais e, consequentemente, alcançar um benefício estimado mais substancial.</p>

                                <p>Os benefícios de utilizar a inteligência artificial nesse contexto são inegáveis. O modelo é capaz de processar uma quantidade massiva de dados de forma rápida e precisa, fornecendo uma análise detalhada e personalizada para cada indivíduo, além de tornar o planejamento financeiro mais robusto e adaptável às mudanças do mercado.</p>

                                <p>Em resumo, o uso da IA nesse contexto do Risco de Frustração no planejamento financeiro traz agilidade, precisão e personalização, permitindo uma análise abrangente e aprofundada das finanças individuais. Isso ajuda as pessoas a entenderem melhor sua situação financeira e a tomar decisões mais acertadas para alcançarem seus objetivos de aposentadoria, proporcionando uma maior tranquilidade e segurança financeira no futuro.</p>
                            </div>

                        </section>

                        <section>

                            <h4>Nossa Missão</h4>

                            <div className="text-area">
                                <p>A <b>Wedan Tecnologia e Inovações (WTI)</b> tem como missão ofertar soluções otimizadas e inovadoras nas áreas previdenciária, de saúde suplementar e de seguros, por meio de tecnologia avançada e cálculos precisos, agregando valor à gestão de benefícios e minimizando riscos.</p>
                            </div>

                        </section>

                        <section>

                            <h4>Contato</h4>

                            <ul className="items">
                                <li><a href="mailto:daniel@wedan.com.br">daniel@wedan.com.br</a></li>
                                <li><a href="mailto:thyago@wedan.com.br">thyago@wedan.com.br</a></li>
                            </ul>

                            <ul className="items">
                                <li><a href="tel:+55061984383384">(61) 98438-3384</a></li>
                                <li><a href="tel:+55062999728484">(62) 99972-8484</a></li>
                            </ul>

                        </section>

                    </div>

                </Content>

            </div>
        )
    }
}

export default Sobre

/*
                    <div className='logo-container'>
                        <img src={Logo}  />
                    </div>

*/  
