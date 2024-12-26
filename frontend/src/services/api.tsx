import axios from 'axios';


export async function fetchAllGear() {
    try {
        // const response = await axios.get('http://localhost:8080/api/parts', {
        //     withCredentials: true
        // })
        const response = await axios.get('https://8080-lennoxgonz-scubagearpic-n1mewptafig.ws-us117.gitpod.io/api/parts', {
            withCredentials: true
        })
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error)
    }
}

export async function fetchGearByCategory(category : String) {
    try {
        // const response = await axios.get('http://localhost:8080/api/parts', {
        //     withCredentials: true
        // })
        const response = await axios.get(`https://8080-lennoxgonz-scubagearpic-n1mewptafig.ws-us117.gitpod.io/api/parts/category/${category}`, {
            withCredentials: true
        })
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error)
    }
}

export default fetchAllGear;