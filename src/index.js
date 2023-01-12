import state, { subscribe } from './redux/state';
import {rerenderEntireTree} from './render';

rerenderEntireTree(state);