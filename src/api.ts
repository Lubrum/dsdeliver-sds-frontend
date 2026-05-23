import axios from "axios";
import { OrderPayload } from "./Orders/types";

const env = import.meta.env;

const PRODUCTS_URL = env.VITE_API_PRODUCTS_URL ?? env.REACT_APP_API_PRODUCTS_URL
const ORDERS_URL = env.VITE_API_ORDERS_URL ?? env.REACT_APP_API_ORDERS_URL
const mapboxToken = env.VITE_ACCESS_TOKEN_MAP_BOX ?? env.REACT_APP_ACCESS_TOKEN_MAP_BOX

export function fetchProducts() {
    return axios(`${PRODUCTS_URL}`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload : OrderPayload) {
    return axios.post(`${ORDERS_URL}`, payload)
}
