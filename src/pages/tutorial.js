import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
//import ReactPlayer from 'react-player'

//https://www.youtube.com/watch?v=X2H-PMFht6I

import Logo from '../imgs/wedan-black.svg'
import VideoPlayer from '../common/video/videoplayer'

const Tutorial = () => {
        return (
          <div className='page page-sobre'>
            <div className='content-header-wrapper'>
              <ContentHeader
                title='Tutorial on-line de apresentação e utilização do Simulador'
                small='versão: 1.0'
              />
            </div>

            <Content>
              <div className='sections'>
                <section>
                  <h4>1. Conheçendo o Simulador</h4>
                  <VideoPlayer videoUrl='/videos/1_conhecendo_simulador.mp4' />
                </section>

                <section>
                  <h4>2. Como fazer Simulações</h4>
                  <VideoPlayer videoUrl='/videos/2_como_fazer_simulacoes.mp4' />
                </section>
              </div>
            </Content>
          </div>
        );
}

export default Tutorial


//<ReactPlayer url={['1_conhecendo_simulador.mp4']} controls={true}/>
/*
                    <div className='logo-container'>
                        <img src={Logo}  />
                    </div>
*/