import React from "react"
import "./style.sass"
import {useDispatch, useSelector} from "react-redux";
import {setModal, unsetModal} from "../../../store/reducers/modal";
import {configDate} from "../../../helpers/helpers"

export const Modal = () => {
    const modal = useSelector(state => state.modal.modalOpen)
    console.log(modal)
    const modalType = useSelector(state => state.modal.modalType)
    const movie = useSelector(state => state.movies.movie)
    const compare = useSelector(state => state.movies.compareMovies)
    const dispatch = useDispatch()

    const renderCompare = () => {
        return compare.map((item, index) => {
            return(
                <div className="item" key={index}>
                    <figure><img src={`https://image.tmdb.org/t/p/original/`+item.poster_path} alt={item.title}/></figure>
                    <h4>{item.title}</h4>
                    <ul>
                        <li><span>Release date</span> <i>{configDate(item.release_date)}</i></li>
                        <li><span>Original language</span> <i>{item.original_language}</i></li>
                        <li><span>Popularity</span> <i>{item.popularity}</i></li>
                        <li><span>Rate</span> <i>{item.vote_average ? item.vote_average : "Not available"}</i></li>
                    </ul>
                </div>
            )
        })
    }

    if(modalType === "info"){
        return (
            <div className={modal ? "modal open" : "modal"}>
                <div className="inn">
                    <div className="content">
                        <figure><img src={`https://image.tmdb.org/t/p/original/`+movie.poster_path} alt={movie.title}/></figure>
                        <aside>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <ul>
                                <li><span>Release date</span> <i>{configDate(movie.release_date)}</i></li>
                                <li><span>Original language</span> <i>{movie.original_language}</i></li>
                                <li><span>Popularity</span> <i>{movie.popularity}</i></li>
                                <li><span>Rate</span> <i>{movie.vote_average ? movie.vote_average : "Not available"}</i></li>
                            </ul>
                            <ul className="info-config">
                                <li className="btn" onClick={() => dispatch(unsetModal())}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.641 12.828H6C5.73478 12.828 5.48043 12.7226 5.29289 12.5351C5.10536 12.3476 5 12.0932 5 11.828C5 11.5628 5.10536 11.3084 5.29289 11.1209C5.48043 10.9334 5.73478 10.828 6 10.828H11.641L10.521 9.708C10.3387 9.51953 10.2377 9.26699 10.2398 9.00479C10.2419 8.74259 10.3469 8.4917 10.5322 8.30616C10.7175 8.12062 10.9682 8.01528 11.2304 8.01281C11.4926 8.01035 11.7453 8.11097 11.934 8.293L14.763 11.12C14.8563 11.2127 14.9304 11.3229 14.981 11.4443C15.0315 11.5657 15.0575 11.696 15.0575 11.8275C15.0575 11.959 15.0315 12.0893 14.981 12.2107C14.9304 12.3321 14.8563 12.4423 14.763 12.535L11.934 15.363C11.7447 15.5408 11.4936 15.6379 11.2339 15.6339C10.9742 15.6299 10.7263 15.525 10.5426 15.3414C10.3589 15.1578 10.2538 14.91 10.2496 14.6503C10.2454 14.3906 10.3423 14.1395 10.52 13.95L11.641 12.828ZM18 3C18.2652 3 18.5196 3.10536 18.7071 3.29289C18.8946 3.48043 19 3.73478 19 4V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21C17.7348 21 17.4804 20.8946 17.2929 20.7071C17.1054 20.5196 17 20.2652 17 20V4C17 3.73478 17.1054 3.48043 17.2929 3.29289C17.4804 3.10536 17.7348 3 18 3V3Z" fill="#3E3E3E"/>
                                    </svg>
                                </li>
                                <li className="btn" onClick={() => dispatch(unsetModal())}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3138 11.9001L16.8488 8.36406C16.9443 8.27182 17.0205 8.16147 17.0729 8.03947C17.1253 7.91746 17.1529 7.78624 17.1541 7.65346C17.1552 7.52069 17.1299 7.38901 17.0796 7.26611C17.0294 7.14321 16.9551 7.03156 16.8612 6.93767C16.7673 6.84378 16.6557 6.76952 16.5328 6.71924C16.4099 6.66896 16.2782 6.64366 16.1454 6.64481C16.0126 6.64597 15.8814 6.67355 15.7594 6.72596C15.6374 6.77837 15.5271 6.85455 15.4348 6.95006L11.8988 10.4851L8.36382 6.95006C8.27157 6.85455 8.16123 6.77837 8.03922 6.72596C7.91722 6.67355 7.786 6.64597 7.65322 6.64481C7.52044 6.64366 7.38876 6.66896 7.26587 6.71924C7.14297 6.76952 7.03132 6.84378 6.93742 6.93767C6.84353 7.03156 6.76928 7.14321 6.719 7.26611C6.66872 7.38901 6.64342 7.52069 6.64457 7.65346C6.64572 7.78624 6.67331 7.91746 6.72572 8.03947C6.77813 8.16147 6.85431 8.27182 6.94982 8.36406L10.4848 11.8991L6.94982 15.4351C6.85431 15.5273 6.77813 15.6377 6.72572 15.7597C6.67331 15.8817 6.64572 16.0129 6.64457 16.1457C6.64342 16.2784 6.66872 16.4101 6.719 16.533C6.76928 16.6559 6.84353 16.7676 6.93742 16.8615C7.03132 16.9554 7.14297 17.0296 7.26587 17.0799C7.38876 17.1302 7.52044 17.1555 7.65322 17.1543C7.786 17.1532 7.91722 17.1256 8.03922 17.0732C8.16123 17.0208 8.27157 16.9446 8.36382 16.8491L11.8988 13.3141L15.4348 16.8491C15.5271 16.9446 15.6374 17.0208 15.7594 17.0732C15.8814 17.1256 16.0126 17.1532 16.1454 17.1543C16.2782 17.1555 16.4099 17.1302 16.5328 17.0799C16.6557 17.0296 16.7673 16.9554 16.8612 16.8615C16.9551 16.7676 17.0294 16.6559 17.0796 16.533C17.1299 16.4101 17.1552 16.2784 17.1541 16.1457C17.1529 16.0129 17.1253 15.8817 17.0729 15.7597C17.0205 15.6377 16.9443 15.5273 16.8488 15.4351L13.3138 11.8991V11.9001Z" fill="#383838"/>
                                    </svg>
                                </li>
                            </ul>

                        </aside>
                    </div>
                </div>
            </div>
        )
    }
    else  {
        return (
            <div className={modal ? "modal compare open" : "modal compare"}>
                <div className="inn">
                    <div className="content">
                        <span className="close-compare" onClick={() => dispatch(setModal(false, ""))}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3138 11.9001L16.8488 8.36406C16.9443 8.27182 17.0205 8.16147 17.0729 8.03947C17.1253 7.91746 17.1529 7.78624 17.1541 7.65346C17.1552 7.52069 17.1299 7.38901 17.0796 7.26611C17.0294 7.14321 16.9551 7.03156 16.8612 6.93767C16.7673 6.84378 16.6557 6.76952 16.5328 6.71924C16.4099 6.66896 16.2782 6.64366 16.1454 6.64481C16.0126 6.64597 15.8814 6.67355 15.7594 6.72596C15.6374 6.77837 15.5271 6.85455 15.4348 6.95006L11.8988 10.4851L8.36382 6.95006C8.27157 6.85455 8.16123 6.77837 8.03922 6.72596C7.91722 6.67355 7.786 6.64597 7.65322 6.64481C7.52044 6.64366 7.38876 6.66896 7.26587 6.71924C7.14297 6.76952 7.03132 6.84378 6.93742 6.93767C6.84353 7.03156 6.76928 7.14321 6.719 7.26611C6.66872 7.38901 6.64342 7.52069 6.64457 7.65346C6.64572 7.78624 6.67331 7.91746 6.72572 8.03947C6.77813 8.16147 6.85431 8.27182 6.94982 8.36406L10.4848 11.8991L6.94982 15.4351C6.85431 15.5273 6.77813 15.6377 6.72572 15.7597C6.67331 15.8817 6.64572 16.0129 6.64457 16.1457C6.64342 16.2784 6.66872 16.4101 6.719 16.533C6.76928 16.6559 6.84353 16.7676 6.93742 16.8615C7.03132 16.9554 7.14297 17.0296 7.26587 17.0799C7.38876 17.1302 7.52044 17.1555 7.65322 17.1543C7.786 17.1532 7.91722 17.1256 8.03922 17.0732C8.16123 17.0208 8.27157 16.9446 8.36382 16.8491L11.8988 13.3141L15.4348 16.8491C15.5271 16.9446 15.6374 17.0208 15.7594 17.0732C15.8814 17.1256 16.0126 17.1532 16.1454 17.1543C16.2782 17.1555 16.4099 17.1302 16.5328 17.0799C16.6557 17.0296 16.7673 16.9554 16.8612 16.8615C16.9551 16.7676 17.0294 16.6559 17.0796 16.533C17.1299 16.4101 17.1552 16.2784 17.1541 16.1457C17.1529 16.0129 17.1253 15.8817 17.0729 15.7597C17.0205 15.6377 16.9443 15.5273 16.8488 15.4351L13.3138 11.8991V11.9001Z" fill="#383838"/>
                        </svg></span>

                        <div className="compare-items"> {renderCompare()} </div>
                    </div>
                </div>
            </div>
        )
    }
}