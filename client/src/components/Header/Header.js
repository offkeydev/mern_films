import React, {useEffect} from "react"
import "./style.sass"
import logo from "../../img/logo.svg"


import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterToggle} from "../../store/reducers/filter";
import {unsetUser} from "../../store/reducers/user";
import {unsetMovieCompare} from "../../store/reducers/movies";
import {setModal} from "../../store/reducers/modal";

export const Header = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.filter)
    const isCompare = useSelector(state => state.movies.compareMovies)
    const handleLogout = () => dispatch(unsetUser())

    return(
        <div className="component-header">
            <div className="inn">
                <aside>
                    <NavLink to="/" className="logo"><img src={logo} alt=""/></NavLink>
                    <div className={filter ? "filter selected" : "filter"} onClick={() => dispatch(filterToggle(!filter))}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z" fill="#3E3E3E"/>
                        </svg>
                    </div>
                    <ul>
                        <li><NavLink to="/collection" exact>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.164 13.107L11.981 14.156L13.851 13.076V11.01L11.96 9.92L10.164 11.042V13.107ZM8.164 11.952V4.978C6.30631 5.99492 4.92626 7.70533 4.325 9.736L8.165 11.952H8.164ZM4.001 11.858L4 12C3.99705 14.0462 4.78118 16.0151 6.19 17.499L9.98 15.31L4.001 11.858V11.858ZM10.164 8.684L15.972 5.054C14.763 4.3612 13.3934 3.99776 12 4C11.368 4 10.754 4.073 10.164 4.212V8.684ZM17.667 6.354L13.881 8.719L19.996 12.25C20.0316 11.1601 19.8433 10.0744 19.4427 9.06011C19.0421 8.04582 18.4378 7.12447 17.667 6.353V6.354ZM15.851 12.166V19.014C17.6716 18.0122 19.0325 16.3431 19.647 14.358L15.851 12.166ZM7.858 18.846C9.10673 19.6032 10.5396 20.0024 12 20C12.637 20 13.257 19.926 13.85 19.785V15.385L7.858 18.845V18.846ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#3E3E3E"/>
                            </svg>
                        </NavLink></li>
                        <li><NavLink to="/" exact>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 16.5C11.2879 16.5 12.0682 16.3448 12.7961 16.0433C13.5241 15.7418 14.1855 15.2998 14.7427 14.7427C15.2998 14.1855 15.7418 13.5241 16.0433 12.7961C16.3448 12.0682 16.5 11.2879 16.5 10.5C16.5 9.71208 16.3448 8.93187 16.0433 8.20391C15.7418 7.47596 15.2998 6.81453 14.7427 6.25737C14.1855 5.70022 13.5241 5.25827 12.7961 4.95674C12.0682 4.65521 11.2879 4.50002 10.5 4.50002C8.90872 4.50002 7.38259 5.13216 6.25737 6.25737C5.13216 7.38259 4.50002 8.90872 4.50002 10.5C4.50002 12.0913 5.13216 13.6174 6.25737 14.7427C7.38259 15.8679 8.90872 16.5 10.5 16.5V16.5ZM16.82 15.406L20.4 18.986C20.4955 19.0783 20.5716 19.1887 20.6239 19.3108C20.6762 19.4328 20.7037 19.564 20.7048 19.6968C20.7058 19.8296 20.6804 19.9613 20.63 20.0841C20.5797 20.207 20.5053 20.3186 20.4114 20.4124C20.3174 20.5062 20.2057 20.5804 20.0828 20.6306C19.9599 20.6808 19.8282 20.706 19.6954 20.7048C19.5626 20.7035 19.4314 20.6758 19.3095 20.6233C19.1875 20.5708 19.0772 20.4946 18.985 20.399L15.405 16.819C13.7975 18.0669 11.7748 18.6552 9.74877 18.4642C7.72273 18.2732 5.84562 17.3173 4.49957 15.7911C3.15351 14.2648 2.4397 12.283 2.50344 10.2489C2.56718 8.21492 3.40368 6.28164 4.84266 4.84266C6.28164 3.40368 8.21492 2.56718 10.2489 2.50344C12.283 2.4397 14.2648 3.15351 15.7911 4.49957C17.3173 5.84562 18.2732 7.72273 18.4642 9.74877C18.6552 11.7748 18.0669 13.7975 16.819 15.405L16.82 15.406Z" fill="#3E3E3E"/>
                            </svg>
                        </NavLink></li>
                        <li><NavLink to="/about" exact>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM12 10C12.2652 10 12.5196 10.1054 12.7071 10.2929C12.8946 10.4804 13 10.7348 13 11V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10V10ZM12 9C11.7348 9 11.4804 8.89464 11.2929 8.70711C11.1054 8.51957 11 8.26522 11 8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711C12.5196 8.89464 12.2652 9 12 9Z" fill="#3E3E3E"/>
                            </svg>
                        </NavLink></li>
                    </ul>

                    <ul className={isCompare.length >= 1 ? "compare-list open" : "compare-list"}>
                        <li>{isCompare.length}</li>
                        <li
                            className={isCompare.length >= 2 ? "compare-btn open" : "compare-btn"}
                            onClick={() => dispatch(setModal(true, "compare"))}
                        >compare</li>
                        <li onClick={() => dispatch(unsetMovieCompare())}>reset</li>
                    </ul>
                </aside>
                <aside className="user-settings">
                    <NavLink to="/settings" exact >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 10.163C21.674 10.3463 21.4027 10.613 21.2139 10.9359C21.0252 11.2587 20.9258 11.626 20.926 12C20.926 12.789 21.359 13.476 22 13.837L21.283 16.243C20.8954 16.1763 20.497 16.2196 20.1327 16.3678C19.7685 16.516 19.453 16.7633 19.2222 17.0816C18.9913 17.3999 18.8542 17.7766 18.8264 18.1688C18.7986 18.5611 18.8813 18.9533 19.065 19.301L17.003 20.903C16.73 20.6792 16.4051 20.5277 16.0582 20.4624C15.7113 20.3971 15.3535 20.4202 15.0179 20.5295C14.6822 20.6387 14.3794 20.8307 14.1374 21.0877C13.8954 21.3447 13.7219 21.6584 13.633 22L10.343 21.992C10.2531 21.652 10.0794 21.34 9.83778 21.0845C9.59618 20.829 9.29439 20.6381 8.95999 20.5292C8.62558 20.4204 8.26924 20.3972 7.92353 20.4616C7.57782 20.526 7.25377 20.676 6.981 20.898L4.921 19.283C5.09957 18.9367 5.17855 18.5477 5.14914 18.1592C5.11973 17.7708 4.98309 17.3981 4.75442 17.0826C4.52576 16.7672 4.21404 16.5214 3.85398 16.3727C3.49391 16.2239 3.09962 16.178 2.715 16.24L2 13.825C2.31995 13.6398 2.58551 13.3737 2.77 13.0533C2.95449 12.733 3.0514 12.3697 3.051 12C3.051 11.22 2.63 10.54 2 10.175L2.715 7.76C3.0997 7.82225 3.49412 7.77648 3.85435 7.6278C4.21457 7.47912 4.52645 7.23336 4.75525 6.9179C4.98405 6.60243 5.12078 6.22964 5.15022 5.84106C5.17966 5.45247 5.10066 5.06334 4.922 4.717L6.98 3.102C7.25277 3.32395 7.57682 3.47399 7.92253 3.53841C8.26824 3.60283 8.62458 3.57957 8.95899 3.47075C9.29339 3.36194 9.59518 3.17104 9.83678 2.91551C10.0784 2.65998 10.2521 2.34797 10.342 2.008L13.634 2C13.7229 2.34161 13.8964 2.65535 14.1384 2.91233C14.3804 3.16931 14.6832 3.36127 15.0189 3.47053C15.3545 3.5798 15.7123 3.60285 16.0592 3.53758C16.4061 3.4723 16.731 3.32079 17.004 3.097L19.064 4.7C18.8803 5.04769 18.7976 5.43989 18.8254 5.83215C18.8532 6.22442 18.9903 6.60106 19.2212 6.91938C19.452 7.23771 19.7675 7.485 20.1317 7.63322C20.496 7.78144 20.8944 7.82467 21.282 7.758L22 10.162V10.163ZM16.823 5.68C16.823 5.617 16.825 5.555 16.828 5.492L16.748 5.43C15.9691 5.64219 15.1449 5.61989 14.3786 5.36588C13.6123 5.11187 12.9379 4.63744 12.44 4.002L11.536 4.004C11.0399 4.63674 10.3687 5.10966 9.60597 5.36392C8.8432 5.61817 8.02251 5.64255 7.246 5.434L7.151 5.51C7.18866 6.41268 6.92769 7.30259 6.4085 8.04197C5.8893 8.78135 5.14085 9.32895 4.279 9.6C4.78181 10.2988 5.05191 11.1381 5.051 11.999C5.051 12.881 4.771 13.714 4.279 14.399C5.14085 14.67 5.8893 15.2176 6.4085 15.957C6.92769 16.6964 7.18866 17.5863 7.151 18.489L7.247 18.564C8.02339 18.3562 8.84371 18.3809 9.60617 18.6351C10.3686 18.8894 11.0397 19.3619 11.536 19.994L12.44 19.996C12.9376 19.3604 13.6118 18.8859 14.3779 18.6319C15.1441 18.3778 15.9682 18.3556 16.747 18.568L16.827 18.506C16.7858 17.6005 17.0452 16.7068 17.5649 15.9642C18.0845 15.2215 18.8352 14.6716 19.7 14.4C19.1968 13.701 18.9263 12.8613 18.927 12C18.927 11.118 19.208 10.284 19.7 9.6C18.866 9.33781 18.1374 8.81638 17.6201 8.11155C17.1029 7.40672 16.824 6.55526 16.824 5.681L16.823 5.68ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#3E3E3E"/>
                        </svg>
                    </NavLink>
                    <div className="logout" onClick={() => { handleLogout()} }>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.41358 10.828H14.0556C14.1869 10.828 14.3169 10.8539 14.4383 10.9041C14.5596 10.9544 14.6698 11.028 14.7627 11.1209C14.8556 11.2138 14.9292 11.324 14.9795 11.4453C15.0297 11.5666 15.0556 11.6967 15.0556 11.828C15.0556 11.9593 15.0297 12.0894 14.9795 12.2107C14.9292 12.332 14.8556 12.4422 14.7627 12.5351C14.6698 12.628 14.5596 12.7016 14.4383 12.7519C14.3169 12.8021 14.1869 12.828 14.0556 12.828H8.41358L9.53558 13.95C9.72309 14.1376 9.82838 14.3921 9.82829 14.6574C9.82819 14.9226 9.72273 15.177 9.53509 15.3645C9.34744 15.552 9.093 15.6573 8.82773 15.6572C8.56246 15.6571 8.30809 15.5516 8.12058 15.364L5.29258 12.536C5.19925 12.4433 5.12517 12.3331 5.07462 12.2117C5.02407 12.0903 4.99805 11.96 4.99805 11.8285C4.99805 11.697 5.02407 11.5667 5.07462 11.4453C5.12517 11.3239 5.19925 11.2137 5.29258 11.121L8.11958 8.293C8.30709 8.10536 8.56146 7.99989 8.82673 7.9998C9.092 7.9997 9.34644 8.10499 9.53409 8.2925C9.72173 8.48001 9.82719 8.73438 9.82729 8.99965C9.82738 9.26492 9.72209 9.51936 9.53458 9.707L8.41358 10.828ZM17.9996 3C18.2648 3 18.5192 3.10536 18.7067 3.29289C18.8942 3.48043 18.9996 3.73478 18.9996 4V20C18.9996 20.2652 18.8942 20.5196 18.7067 20.7071C18.5192 20.8946 18.2648 21 17.9996 21C17.7344 21 17.48 20.8946 17.2925 20.7071C17.1049 20.5196 16.9996 20.2652 16.9996 20V4C16.9996 3.73478 17.1049 3.48043 17.2925 3.29289C17.48 3.10536 17.7344 3 17.9996 3V3Z" fill="#3E3E3E"/>
                        </svg>
                    </div>
                </aside>
            </div>
        </div>
    )
}