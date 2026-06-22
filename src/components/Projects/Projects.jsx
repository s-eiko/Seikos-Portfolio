import mundoInvertidoImg from '../../assets/images/projects-preview/mundo-invertido.png';
import spidermanImg from '../../assets/images/projects-preview/spiderman-multiverse.png';
import yugiohImg from '../../assets/images/projects-preview/yugioh-jokenpo.png';
import ayuruImg from '../../assets/images/projects-preview/ayuru.png';
import detonaralphImg from '../../assets/images/projects-preview/detonaralph.png';
import luciaImg from '../../assets/images/projects-preview/lucia.png';
import cabeleireiraImg from '../../assets/images/projects-preview/cabeleireira.png';

import Project from "./Project";
import SeeProjects from '../SeeProjects';

export default function Projects() {
    return (
        <section id="projects">
                <h2>Principais projetos</h2>
                <div id='projects-container'>
                    <Project
                        title="Fórum Ayuru"
                        imgSrc={ayuruImg}
                        alt="Preview do projeto Fórum Ayuru"
                        description="Sistema web que busca facilitar a identificação e catalogação de espécies locais da reserva biológica Serra do Japi. Os usuários podem compartilhar encontros com espécies silvestres, anexando fotos, localização e outras informações; caso o autor do post não saiba qual a espécie com a qual se encontrou pode pedir ajuda de outros usuários, favorecendo assim o aprendizado de todos. Além disso, também é possível registrar ocorrências de atropelamentos, a fim de alertar os moradores a tomar cuidado em certas áreas de passagem de animais. Foram utilizadas as tecnologias: HTML, CSS, Javascript, PHP e MySQL."
                        siteRef="https://github.com/s-eiko/Ayuru-Forum"
                        codeRef="https://github.com/s-eiko/Ayuru-Forum"
                    />
                    <Project
                        title="Site Profissional: Psicóloga Lucia Tomita"
                        imgSrc={luciaImg}
                        alt="Preview do projeto Site Profissional: Psicóloga Lucia Tomita"
                        description="Site profissional para divulgar o trabalho da psicóloga Lucia Tomita. Considerando que a psicóloga atende pacientes brasileiros e japoneses, o sistema reconhece o local em que o usuário está acessando o site e, caso esteja na Ásia, direciona-o para a versão japonesa do site; caso contrário, redireciona-o para a versão brasileira do site. O site inclui as páginas/seções: Início, sobre mim, depoimentos, como te ajudo, dúvidas, contato, certificado de regularidade, certificado de especialização, política de privacidade e termos de uso. Foram utilizadas as tecnologias: HTML, CSS e Javascript."
                        siteRef="https://luciatomita.com.br/"
                        codeRef="https://github.com/s-eiko/Lucia-BusinessSite"
                    />
                    <Project
                        title="Agenda de Cabeleireira"
                        imgSrc={cabeleireiraImg}
                        alt="Preview do projeto Agenda de Cabeleireira"
                        description="Site para agendamento de serviços de cabelo. Ao entrar com login de administrador, o usuário também possiu acesso a um dashboard de estatísticas semanais do negócio. Foram utilizadas as tecnologias: React, Javascript, CSS, MySQL, Node.js, Cors e Express."
                        siteRef="https://luciatomita.com.br/"
                        codeRef="https://github.com/s-eiko/Lucia-BusinessSite"
                    />
                    <Project
                        title="Yu-Gi-Oh! JoKenPo"
                        imgSrc={yugiohImg}
                        alt="Preview do projeto Yu-Gi-Oh! JoKenPo"
                        description="Jogo de Jo-ken-po inspirado nos personagens de Yu-Gi-Oh! Ao invés do convencional pedra, papel e tesoura, use cartas para jogar. Foram utilizadas as tecnologias: HTML, CSS e Javascript."
                        siteRef="https://s-eiko.github.io/YuGiOh-jokenpo-game/"
                        codeRef="https://github.com/s-eiko/YuGiOh-jokenpo-game"
                    />
                    <Project
                        title="Whac-A-Mole: Detona Ralph"
                        imgSrc={detonaralphImg}
                        alt="Preview do projeto Yu-Gi-Oh! JoKenPo"
                        description="Jogo de Jo-ken-po inspirado nos personagens de Yu-Gi-Oh! Ao invés do convencional pedra, papel e tesoura, use cartas para jogar. Foram utilizadas as tecnologias: HTML, CSS e Javascript."
                        siteRef="https://s-eiko.github.io/WhacAMole-Game/"
                        codeRef="https://github.com/s-eiko/WhacAMole-Game"
                    />
                    <Project
                        title="Mundo Invertido"
                        imgSrc={mundoInvertidoImg}
                        alt="Preview do projeto Mundo Invertido"
                        description="Página web com theme switcher inspirada na série Stranger Things. A página inclui um formulário de inscrição integrado a um banco de dados Firebase. Foram utilizadas as tecnologias: HTML, CSS, Javascript e Firebase."
                        siteRef="https://s-eiko.github.io/Mundo-invertido/"
                        codeRef="https://github.com/s-eiko/Mundo-invertido"
                    />
                    <Project
                        title="Multiverso Spiderman"
                        imgSrc={spidermanImg}
                        alt="Preview do projeto Multiverso Spiderman"
                        description="Site sobre o multiverso dos filmes do Homem Aranha, com o objetivo de apresentar todos os filmes, atores principais e diretores. Foram utilizadas as tecnologias: HTML, CSS e Javascript."
                        siteRef="https://spider-multiverse.pages.dev/"
                        codeRef="https://github.com/s-eiko/Spider-multiverse"
                    />
                    <SeeProjects/>
                </div>
        </section>
    );
}