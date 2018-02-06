export const FETCH_REQUESTED = 'home/FETCH_REQUESTED'
export const FETCH = 'home/FETCH'

export const fetchAsync = () => {
    return dispatch => {
        dispatch({
            type: FETCH_REQUESTED
        })

        fetch('/custom')
            .then(res => res.json())
            .then(res => { 
                dispatch({
                    type: FETCH,
                    company: res.company,
                    description: res.description,
                    address: res.address,
                    funding: res.funding,
                    status: res.status,
                    logo: res.logo,
                    url: res.url
                });
            });
    }
}