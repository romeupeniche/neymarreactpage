import { useTranslation } from "react-i18next";
import TLPage from "../components/TLPage";
import imgs from "../static/imgs.json";

function ImgRoutes() {
    let _2010, _2011, _2012, _2013, _2014, _2015, _2016, _2017, _2018, _2019, _2020, _2021;
    const { t } = useTranslation();

    _2010 = <TLPage
        year='2010'
        imgs={imgs[2010].pageImgs}
    >
        <p id='page-text1' dangerouslySetInnerHTML={{__html: t("2010text1")}}/>
        <p id='page-text2' dangerouslySetInnerHTML={{__html: t("2010text2")}}/>
        <p id='page-text3' dangerouslySetInnerHTML={{__html: t("2010text3")}}/>
    </TLPage>

    _2011 = <TLPage
        year='2011'
        imgs={imgs[2011].pageImgs}
        reverse={true}
    >
        <p id='page-text1' dangerouslySetInnerHTML={{__html: t("2011text1")}}/>
        <p id='page-text2' dangerouslySetInnerHTML={{__html: t("2011text2")}}/>
        <p id='page-text3' dangerouslySetInnerHTML={{__html: t("2011text3")}}/>
    </TLPage>

    _2012 = <TLPage
        year='2012'
        imgs={imgs[2012].pageImgs}
    >
        <>
            Aderindo para um estilo de moicano com uma franja, além de usar uma faixa em alguns jogos, Neymar seguia
            sendo observado por outros times, como Barcelona, além de muitas <span className="blue-emph">vitórias</span>.
        </>
        <>
            Por conta da vitória na Copa Libertadores da América no ano passado, o Santos se classificava para
            a <span className="gold-emph">Recopa Sudamericana</span>, a qual vencia em cima do Universidad de Chile,
            deixando o seu gol e sendo o Melhor Jogador do campeonato.
        </>
        <>
            Classificados para as Olimpíadas de Futebol em Londres, graças a vitória do Brasil no Campeonato Sul-Americano Sub-20 de 2011, o qual Neymar
            ficava na artilharia disparado com 9 gols, o Brasil se classificava para a final.
            Neymar vinha com 3 gols e 4 assistências em 6 jogos, porém, perdia de 2:1, garantindo assim
            a medalha de prata para o Brasil.
        </>
    </TLPage>

    _2013 = <TLPage
        year='2013'
        imgs={imgs[2013].pageImgs}
        reverse={true}
    >
        <>
            No ano de 2013 a carreira de Neymar tomava outro rumo. Ele estava em direção à Cataluña, iniciando sua carreira na Europa, no Barcelona.
        </>
        <>
            No Barcelona, não foi difícil para Neymar se entrosar com o elenco. Demonstrando suas habilidades e o porquê de sua contratação,
            Neymar garantia a <span className="gold-emph">Supercopa</span> para o Barcelona, entrando aos 14' do segundo tempo e marcando fora de casa, vencendo
            pela regra de gols fora de casa, o Atlético de Madrid.
        </>
        <>
            No Brasil, Neymar provou ser uma promessa brasileira mais uma vez, garantindo a <span className="gold-emph">Copa das Confederações</span>, participando
            de <span className="blue-emph">todos</span> os gols, com 4 gols e 2 assistências em 5 jogos, e vencendo a Espanha na final com um lindo 3x0.
        </>
    </TLPage>

    _2014 = <TLPage
        year='2014'
        imgs={imgs[2014].pageImgs}
    >
        <>
            2014 vinha com a sua primeira <span className="blue-emph">Copa do Mundo</span>, e seu início na Europa,
            porém, algo mais a frente faria desse ano um susto para ele.
        </>
        <>
            Vinha se formando o trio MSN, formado por Messi, Suárez e Neymar, o trio de ataque do Barcelona
            que vinha causando medo nos zagueiros dos times adversários.
            Além do altíssimo desempenho de Neymar nas partidas, principalmente da UEFA Champions League.
        </>
        <>
            Nas Quartas de Final da <span className="blue-emph">Copa do Mundo no Brasil</span>, Neymar sofria uma falta gravíssima.
            Um zagueiro da Colômbia dava uma joelhada nas costas de Neymar, <span className="red-emph">fraturando uma de suas vértebras</span>,
            tirando Neymar da copa.
            Segundo o próprio jogador, se tivesse sido 2 centímetros para o lado, ele não andaria mais.
        </>
    </TLPage>

    _2015 = <TLPage
        year='2015'
        imgs={imgs[2015].pageImgs}
        reverse={true}
    >
        <>
            Ano de <span className="gold-emph">ouro</span> para Neymar, muitas vitórias conquistadas com
            o <span className="gold-emph">Melhor Time do Mundo</span> segundo a IFFHS naquele ano.
        </>
        <>
            Com o desempenho gigante de Neymar na <span className="gold-emph">Champions</span>, o Barcelona levava a orelhuda para casa.
            O trio MSN seguia assustando muitos times, com a Juventus não foi diferente, com gols de Rakitić, Suárez e Neymar, o Barcelona vencia
            por 3x1.
        </>
        <>
            Além da Champions, o Barcelona também levava
            o <span className="gold-emph">Campeonato Espanhol</span>, <span className="gold-emph">Copa del Rey</span>, e
            a <span className="gold-emph">Copa do Mundo de Clubes da FIFA</span>.
            Com desempenhos <span className="blue-emph">excelentes</span> de Neymar e seu trio, que já se tornava o melhor trio de ataque do mundo.
        </>
    </TLPage>

    _2016 = <TLPage
        year='2016'
        imgs={imgs[2016].pageImgs}
    >
        <>
            Outro ano de diversas conquistas para o Menino Ney, vinha com altíssimos desempenhos atuando pela Seleção Brasileira e Barcelona.
        </>
        <>
            Pelo Barcelona, Neymar e sua equipe levavam a <span className="gold-emph">Copa del Rey</span>, sem perder nenhum jogo, e em todos os jogos
            que Neymar participava, ele participava em gols. <br />
            Mas foi pela <span className="blue-emph">Seleção Brasileira</span> que Neymar se destacava naquele ano, garantindo a vaga do Brasil na Copa
            do Mundo de 2018.
        </>
        <>
            Neymar também conquistava
            o <span className="gold-emph">Ouro nas Olímpiadas de Futebol Masculino</span> pela <span className="blue-emph">primeira</span> vez
            para o Brasil, sendo o capitão, demonstrando como sempre seu incrível desempenho, sendo crucial principalmente na final contra a Alemanha,
            marcando o último pênalti, garantindo Ouro para o Brasil.
        </>
    </TLPage>

    _2017 = <TLPage
        year='2017'
        imgs={imgs[2017].pageImgs}
        reverse={true}
    >
        <>
            Ano de mudanças para Neymar, que se mudava para Paris, e por 222 milhões de Euros, se tornava o jogador mais caro a ser vendido.
        </>
        <>
            Antes de se transferir para o PSG, Neymar teve muitas vitórias pelo Barcelona nesse ano. Conquistava mais
            uma <span className="gold-emph">Copa del Rey</span>, e com o <span className="blue-emph">"impossível"</span> 6x1
            em cima do PSG pela Champions League, mesmo perdendo para a Juventus nas Quartas de Final, deixava a goleada marcada na história.

        </>
        <>
            Neymar se mudava de país, de time, e com isso, de elenco. Mas também não foi muito complicado para Neymar se acostumar com os novos
            companheiros de equipe, formando um novo trio de ataque com Cavani e Mbappé.
        </>
    </TLPage>

    _2018 = <TLPage
        year='2018'
        imgs={imgs[2018].pageImgs}
    >
        <>
            Ano marcado principalmente pela <span className="blue-emph">Copa do Mundo</span>, que Neymar jogava pela primeira vez de forma completa.
        </>
        <>
            Na Copa, Neymar apresentava um ótimo desempenho, mesmo sentindo dores após uma <span className="red-emph">fratura no metatarso</span>,
            ganhando o troféu de <span className="blue-emph">Homem do Jogo</span> na partida contra o México. Porém perdia
            para a Bélgica nas Quartas de Final, por 2x1, após uma partida sofrida, Neymar se despedia de outra copa do Mundo.
        </>
        <>
            Pelo PSG, Neymar vinha conquistando títulos ao lado dos seus novos companheiros de equipe. Porém, a <span className="red-emph">fratura no metatarso</span> o deixou fora
            dos gramados por 3 meses (antes da Copa do Mundo).
            Ganhou o prêmio de <span className="gold-emph">Melhor Jogador da Ligue 1</span>, além de conquistar também
            o <span className="gold-emph">Campeonato Francês</span>, a <span className="gold-emph">Copa da Liga Francesa</span>,
            a <span className="gold-emph">Copa da França</span> e a <span className="gold-emph">Supercopa da França</span> nesse ano.
        </>
    </TLPage>

    _2019 = <TLPage
        year='2019'
        imgs={imgs[2019].pageImgs}
        reverse={true}
    >
        <>
            Outro ano de muitas <span className="red-emph">lesões</span> para o Menino Ney, que desde que chegava no PSG, ficou desfalcado em boa parte dos jogos.
        </>
        <>
            A <span className="red-emph">lesão no metatarso</span> o assombrava novamente, muito mais leve do que da outra vez,
            mas o mantendo fora dos campos por 3 meses.
            Na mesma temporada, no amistoso contra o Catar, Neymar <span className="red-emph">rompeu os ligamentos do tornozelo</span> e
            não disputou a Copa América (mesmo que o Brasil tenha vencido), ficou 2 meses de recuperação.
        </>
        <>
            Mesmo com mais de 20 desfalques, Neymar ainda conquistou títulos naquele ano. Os mesmo prêmios que Neymar conquistou no ano passado,
            Neymar conquistava nesse mesmo ano: O <span className="gold-emph">Campeonato Francês</span>,
            a <span className="gold-emph">Copa da Liga Francesa</span>,
            a <span className="gold-emph">Copa da França</span> e a <span className="gold-emph">Supercopa da França</span>.
        </>
    </TLPage>

    _2020 = <TLPage
        year='2020'
        imgs={imgs[2020].pageImgs}
    >
        <>
            Ano com menos contusões para Neymar, que aderia um estilo diferente de antes, deixando a barba crescer e o cabelo baixinho.
        </>
        <>
            Nas qualificatórias para a <span className="blue-emph">Copa do Mundo de 2022</span>, Neymar demonstrava seu alto desempenho: nas 10
            partidas que o craque jogou, fez 8 gols e 8 assistências, sem perder nenhum jogo sequer, garantindo a vaga do Brasil no Catar.
        </>
        <>
            Ganhava todas as <span className="gold-emph">taças da França</span>, assim como nos anos anteriores, porém, perdia a Final
            da <span className="blue-emph">Champions League</span> por 1x0 contra o Bayern de Munique, sendo que a única Champions que
            Neymar havia ganhado foi em 2015 pelo Barcelona.
        </>
    </TLPage>

    _2021 = <TLPage
        year='2021'
        imgs={imgs[2021].pageImgs}
        reverse={true}
    >
        <>
            Voltando para o estilo moicano, esse foi o ano que Neymar se reencontraria com seu antigo companheiro de equipe, Lionel Messi.
        </>
        <>
            Na Seleção Brasileira, Neymar seguia jogando as qualificatórias para a <span className="blue-emph">Copa do Mundo de 2022</span>,
            e jogava também a <span className="blue-emph">Copa América</span>.
            Apesar do seu desempenho nas partidas, sofreu a derrota para a Argentina na Final, o impedindo de conquistar sua primeira Copa América.
        </>
        <>
            No PSG, formava-se um trio de ataque monstruoso, composto por Neymar, Messi e Mbappé.
            Novamente ganhava o <span className="gold-emph">Campeonato Francês</span>, a <span className="gold-emph">Copa da França</span> e 
            a <span className="gold-emph">Supercopa da França</span>. Porém, não conseguia avançar muito
            na <span className="blue-emph">Champions League</span>, e sofria de algumas contusões naquele mesmo ano.
        </>
    </TLPage>

    return (
        [_2010, _2011, _2012, _2013, _2014, _2015, _2016, _2017, _2018, _2019, _2020, _2021]
    )
}

export default ImgRoutes;