import { getAllByPlaceholderText, getDefaultNormalizer } from "@testing-library/react"
import React ,{useState , useEffect} from "react"
import { NavLink, useParams , useNavigate } from "react-router-dom"
import "./MovieDetail.css"
import { Link } from "react-router-dom"
import { useFirebase } from "../../Firebase"

export const Moviedetail = ()=>{
    const[cuurentmoviedetail,setcuurentmoviedetail] = useState([])

    const {id} = useParams();
    const navigate = useNavigate();
    const chqlogin = useFirebase();
    console.log(chqlogin.islogin);
    useEffect(()=>{
      getData();
      window.scrollTo(0,0)
    },[])

    const HandeClick = ()=>{
        if(chqlogin.islogin){
            navigate("/ticketbook");
        }else{
            alert("Please Log in First");
        }
    }

    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).
        then(res => res.json())
        .then(data => setcuurentmoviedetail(data))
    }
    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${cuurentmoviedetail ? cuurentmoviedetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${cuurentmoviedetail ? cuurentmoviedetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{cuurentmoviedetail ? cuurentmoviedetail.original_title : ""}</div>
                        <div className="movie__tagline">{cuurentmoviedetail ? cuurentmoviedetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {cuurentmoviedetail ? cuurentmoviedetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{cuurentmoviedetail ? "(" + cuurentmoviedetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{cuurentmoviedetail ? cuurentmoviedetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{cuurentmoviedetail ? "Release date: " + cuurentmoviedetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                cuurentmoviedetail && cuurentmoviedetail.genres
                                ? 
                                cuurentmoviedetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{cuurentmoviedetail ? cuurentmoviedetail.overview : ""}</div>
                    </div>
                    
                <div className="Book_movie" onClick={HandeClick}>
                  <span className="book_">Book Now</span>
                </div> 
                   
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    cuurentmoviedetail && cuurentmoviedetail.homepage && <a href={cuurentmoviedetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    cuurentmoviedetail && cuurentmoviedetail.imdb_id && <a href={"https://www.imdb.com/title/" + cuurentmoviedetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    cuurentmoviedetail && cuurentmoviedetail.production_companies && cuurentmoviedetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}
// { chqlogin.islogin ? <Link to="/ticketbook">Book Now</Link> :<p>Please Sign In</p>}
