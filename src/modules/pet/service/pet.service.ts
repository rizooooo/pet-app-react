import { API } from "../../../core/api"
import { IPet } from "../../../core/interfaces";

const BASE_URL = 'pet';

const PetService = {
    FetchPets: async (params: any | null): Promise<IPet[] | undefined> => {
        try {
            const res = await API.GET(BASE_URL, undefined, params);
            if (res) {
                return res;
            }
            return;
        } catch (error) {
            console.log(error, '@ERROR');
        }
    },
    CreatePet: async (params: IPet) => {
        try {
            const res = await API.POST(BASE_URL, params);
            if (res) {
                return res;
            }
            return;
        } catch (error) {
            console.log(error, '@ERROR');
        }
    },
    UpdatePet: async (params: IPet, id: string) => {
        try {
            const res = await API.PUT(BASE_URL, params, id);
            if (res) {
                return res;
            }
            return;
        } catch (error) {
            console.log(error, '@ERROR');
        }
    },
    DeletePet: async (id: string) => {
        try {
            const res = await API.DELETE(BASE_URL, {}, id);
            if (res) {
                return res;
            }
            return;
        } catch (error) {
            console.log(error, '@ERROR');
        }
    },
    GetPet: async (id: string): Promise<IPet | undefined> => {
        try {
            const res = await API.GET(BASE_URL, id);
            if (res) {
                return res;
            }
            return;
        } catch (error) {
            console.log(error, '@ERROR');
        }
    },
}

export default PetService