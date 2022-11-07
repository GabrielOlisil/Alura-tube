import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeliine';

function HomePage() {


    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>

                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
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
        margin-top: 50px;
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



function Header() {


    return (
        <StyledHeader>
            <section className='user-banner'>
                <img src={config.banner} onScroll />
            </section>
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

function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>

            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>

                        <div>

                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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
                        {props.favourites.map((canal) => {
                            return (
                                <a className='channel-frame' href={canal.channel} target="_blank">
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