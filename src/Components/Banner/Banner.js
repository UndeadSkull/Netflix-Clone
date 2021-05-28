import {imageUrl} from '../../Constants/constants'
import { useState, useEffect } from 'react'
import axios from '../../axios'
import './Banner.css'

function Banner(props) {
    const [movie, setMovie] = useState()
    useEffect(() =>
        axios.get(props.url)
            .then(response => setMovie(response.data.results[Math.round(Math.random() * 20)]))
        , [])
    return (
        <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+'/original'+movie.backdrop_path: ''})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
                <div className="banner_buttons">
                    <button className="button">▶ Play</button>
                    <button className="button">➕ My List</button>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
