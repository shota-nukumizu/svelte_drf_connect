import axios from 'axios'

export const getMemoList = async () => {
    try {
        await axios.get('http://127.0.0.1:8000/api/v1/memo-list/')
            .then(response => {
                response.data
            })
    } catch (error) {
        console.log(error)
    }
}

export default getMemoList