// src/store/index.js
import { createStore } from 'pinia';

const pinia = createStore();

export const useStore = pinia;

export default pinia;
