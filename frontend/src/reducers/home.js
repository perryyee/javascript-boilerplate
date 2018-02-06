import { FETCH_REQUESTED, FETCH } from '../actions/home'

const initialState = {
    company: "",
    description: "",
    url: "",
    status: "",
    logo: "",
    address: {},
    funding: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        break

        case FETCH:
            return {
                ...state,
                company: action.company,
                description: action.description,
                address: action.address,
                funding: action.funding,
                url: action.url,
                status: action.status,
                logo: action.logo,
                isLoading: false
            }
            break

        default:
            return state
    }
}