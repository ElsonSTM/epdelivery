import axios from "axios";

const API_URL = 'http://192.168.3.39:8080';
//const API_URL = 'pegar endereço da heroku'

export function fetchOrders() {
  return axios(`${API_URL}/orders`)
}

export function saiuParaEntrega(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/saiuparaentrega`)
}

export function confirmarEngrega(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/entregue`)
}