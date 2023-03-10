import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";
const API_KEY = 'eeb0edb062078c037a78afae7595c061';

export const fetchShipping = createAsyncThunk(
    "shipping/fetchByNumber",
    async (trackingNumber, thunkAPI) => {
        const params = {
            apiKey: API_KEY,
            modelName: "TrackingDocument",
	        calledMethod: "getStatusDocuments",
            methodProperties: {
                Documents : [
                    { DocumentNumber: trackingNumber }
                ]      
            }
        }

        try {
            console.log(trackingNumber);
            const response = await axios.post("", params);
            console.log(response.data);
            // add error handling if response.data.errors ,,,,,, throw
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);