import axios from 'axios';


async function fetchAllGear() {
    try{
        const response = await axios.get('https://8080-lennoxgonz-scubagearpic-n1mewptafig.ws-us117.gitpod.io/api/parts')
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error)
    }
}

export default fetchAllGear;