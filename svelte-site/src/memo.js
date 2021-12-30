import axios from 'axios'

export const getMemoList = async () => {
    try {
        axios.get('http://127.0.0.1:8000/api/v1/memo-list/')
            .then(res => { res.data })
    } catch (error) {
        console.log(error)
    }
}
