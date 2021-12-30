import App from './App.svelte';
import Api from '../services/Api'

export const getMemoList = async () => {
    try {
        const response = await Api.get('/memo-list')
        return response.results
    } catch (error) {
        console.log(error)
    }
}

