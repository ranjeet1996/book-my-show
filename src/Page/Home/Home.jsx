import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import "./Home.css"
import { MovieList } from '../../Components/MovieList/MovieList';


export const Home = ()=> {
    const [popularmovies, setPopularmovies] = useState([]);

    // useEffect(()=>{  
    // axios.get("https://api.themoviedb.org/3/movie/popular?api_key=acbd93bea5123c355b3169cdda353d0d")
    // .then(({ data }) => {
    // setPopularmovies(data.result)
    //            })
    //      },[])
    //console.log(popularmovies);
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").
          then(res => res.json())
          .then(data => setPopularmovies(data.results))
  }, [])
 
  return (
        <>
        <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularmovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                                 <div className="posterImage">
                                      <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`}/>
                                 </div>
                                 <div className="posterImage__overlay">
                                      <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                      <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star"/>{" "}
                                        </span>

                                      </div>
                                      <div className="posterImage__description">{movie ? movie.overview :""}</div>

                                 </div>
                            </Link>
                            
                         ) )
                    }
                </Carousel>
                <div>
                  <div className='Catogary_list'>
                    <h3>Genres</h3>
                    <br></br>
                    <br></br>
                    <ul className='Type_list'>
                    
                      <li>Action</li>
                      <li>Adventure</li>
                      <li>Animation</li>
                      <li>Comedy</li>
                      <li>Crime</li>
                      <li>Documentary</li>
                      <li>Drama</li>
                      <li>Family</li>
                      <li>Fantasy</li>
                      <li>History</li>
                      <li>Horror</li>
                      <li>Music</li>
                      <li>Mystery</li>
                      <li>Romance</li>
                      <li>Science Fiction</li>
                      <li>TV Movie</li>
                      <li>Thriller</li>
                      <li>War</li>
                      <li>Western</li>
                    </ul>
                  </div>
                <MovieList></MovieList>
                </div>
               
            </div>
             
        </>
    
)}

