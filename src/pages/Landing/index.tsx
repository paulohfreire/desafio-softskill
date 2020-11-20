import React from 'react';
import { Logo, PageInfo } from './styles';
// eslint-disable-next-line import/no-unresolved
import logoImg from '../../assets/logo2.svg';

const Landing: React.FC = () => {
    return (
        <>
            <Logo
                src={logoImg}
                alt="logo com imagem de camaleão preto e o nome adaptabilidade ao lado"
            />
            <PageInfo>
                <h1>
                    <span>Pensar.</span>
                    <span>Mudar.</span>
                    <span>Adaptar.</span>
                </h1>

                <div>
                    <a
                        href="http://shorturl.at/cjqAD"
                        type="button"
                        className="outlined"
                    >
                        Leia Mais
                    </a>

                    <a
                        href="http://shorturl.at/muBX2"
                        type="button"
                        className="inlined"
                    >
                        Veja Mais
                    </a>
                </div>

                <h2>
                    Adaptabilidade é a aptidão, inerente a numerosas espécies,
                    de viver em condições de ambiente diferentes daquelas de sua
                    ocorrência natural. (Souza, 1973).
                </h2>
            </PageInfo>
        </>
    );
};
export default Landing;
