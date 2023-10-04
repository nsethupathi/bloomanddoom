import {api} from "../api/AxiosConfig";
import {Show} from "../models/Show";

export const getUpcomingShows = async(): Promise<Show[]> => {
    const response = await api.get<Show[]>('http://localhost:8080/shows')
    return response.data
}