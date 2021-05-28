import { API_KEY, imageUrl } from '../../Constants/constants'
import { useState, useEffect } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import './RowPost.css'

function RowPost(props) {
    const [urlId, setUrlId] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(Response => setMovies(Response.data.results))
    }, [])
    const opts = {
        height: '420',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            'controls': 0,
            'autohide': 0,
            'modestbranding':1,
            'rel' : 0,
            'origin': 'http://localhost:3000' 

        }
    }
    const handleTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response => {
            if (Response.data.results.length !== 0) setUrlId(Response.data.results[0].key)
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map(obj =>
                    <img onClick={() => handleTrailer(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl}/w500${obj.poster_path}`} alt="Poster" />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId} />}
        </div>
    )
}

export default RowPost
