// ACTION TYPES
const SET_MODAL = "SET_MODAL"
const UNSET_MODAL = "UNSET_MODAL"

//Actions
export const setModal = (isOpen, modalType) => {
    return{
        type: SET_MODAL,
        payload: isOpen,
        modalType: modalType
    }
}
export const unsetModal = () => {
    return{
        type: UNSET_MODAL,
    }
}

//Initial state
const initialState = {
    modalOpen: false,
    modalType: ""
}

export default function (state = initialState, action){
    switch (action.type){
        case SET_MODAL:
            return{
                ...state,
                modalOpen: action.payload,
                modalType: action.modalType
            }
        case UNSET_MODAL:
            return{
                ...state,
                modalOpen: false,
                modalType: ""
            }

        default: return state
    }
}