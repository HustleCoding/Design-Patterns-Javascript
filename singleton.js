// Basic examples of singleton design pattern in JS

// Using Classes

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  static getInstance() {
    return this.instance;
  }
}

const instance = new Singleton();
Object.freeze(instance);

// Using Functions and modules

// singleton.js
const myFn = () => {
  return { bla: 1 };
};
export const instance = myFn();

// usage.js
import { instance } from "./singleton.js";
