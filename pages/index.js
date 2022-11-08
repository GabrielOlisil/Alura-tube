import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeliine';
import React from 'react';

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");


    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>

                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favourites favourites={config.favourites} />
            </div>
        </>


    );
}

export default HomePage;



const StyledHeader = styled.div`
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  

  
    .user-banner{
        height: 350px
    }
    .user-banner  img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    
`;

const Styledbanner = styled.div`
    background-image: url(${({bg}) => bg});
    height: 230px;
    background-size: cover;
    background-position: center;
`;

function Header() {


    return (
        <StyledHeader>
            <Styledbanner bg={config.banner} />
            {/* <section className='user-banner'>
                <img src={config.banner}  />
            </section> */}
            {/* <img src="banner" /> */}
            <section className='user-info'>

                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}

                    </h2>

                    <p>

                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function TimeLine({ searchValue, ...props }) {
    const playlistsNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>

            {playlistsNames.map((playlistName, index) => {
                const videos = props.playlists[playlistName]
                return (
                    <section key={index}>
                        <h2>{playlistName}</h2>

                        <div>

                            {videos
                                .filter((video) => {
                                    return video.title.toLowerCase().includes(searchValue.toLowerCase())

                                })
                                .map((video, index) => {
                                    return (
                                        <a key={index} href={video.url} >
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}


                        </div>

                    </section>
                )
            })}


        </StyledTimeline>

    );
}

function Favourites(props) {
    return (
        <section>

            <StyledTimeline>
                <section>
                    <h2>Favoritos</h2>
                    <div>
                        {props.favourites.map((canal, index) => {
                            return (
                                <a key={index} className='channel-frame' href={canal.channel} target="_blank">
                                    <section>

                                        <img src={canal.picture} />
                                    </section>
                                    <span>{canal.name}</span>
                                </a>
                            )
                        })}

                    </div>
                </section>
            </StyledTimeline>
        </section>
    )
}