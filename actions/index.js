import counterStore from '../stores/counterStore';
// Your implementation here.
// Hint: We need two actions!

const increment = () => {
  counterStore.increment();
};

const decrement = () => {
  counterStore.decrement();
};

export default {
  increment,
  decrement
}
