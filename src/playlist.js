import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import { Footer } from './footer'



export const Playlist = () => {
    const [songs, setSongs] = useState([
        { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
        { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
        { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" }
    ]);

    const [songActive, SetSongsActive] = useState(null);

    let audioRef = useRef(null);

    const setSingleSong = (url, index) => {
        audioRef.src = `https://assets.breatheco.de/apis/sound/${url}`;
        SetSongsActive(index)


      

    }


    const play = () => {
        audioRef.play();
    }
    const next = () => {
        let next = songActive !== null ? songActive == songs.length - 1 ? 0 : songActive + 1 : 0;
        setSingleSong(songs[next].url, next);
        audioRef.play();

    }

    const prev = () => {
        let prev = songActive !== null ? songActive == 0 ? songs.length - 1 : songActive - 1 : 0;
        setSingleSong(songs[prev].url, prev);
        audioRef.play();

    }
    const stop = () => {
        audioRef.pause();

    }
    let fetchLista =()=>{
        fetch("https://assets.breatheco.de/apis/sound/songs")
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((data)=>{
            setSongs((prevstate)=>{
                return data;
            });
        })
        .catch((error) =>{
            console.log(error);
        });
    };
    useEffect(()=>{
        fetchLista();
    },[]);    


    return (
        <>
            <div className="container3">
                <div className="row">
                    <div className="col-md-12">
                        <ol className="lista">
                            {
                                songs.map((song, index) => {
                                    return <li value="0" key={song.id} className={"list-group-item list-group-item-action" + (songActive === index ? "active" : "")}
                                        onClick={() => setSingleSong(song.url, index)}>
                                        {song.name}</li>
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <audio ref={r => audioRef = r} />




            <Footer onPlay={play} onNext={next} onPrev={prev} onStop={stop} />

        </>
    )
}


