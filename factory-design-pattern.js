// This is a basic example of factory design pattern in Javascript

const factoryFn = (name, age) => {
  return {
    name,
    age,
    getKnow() {
      console.log(`Hello ${name}. Nice to see that you are ${age} years old`);
    }
  };
};

const student = factoryFn("Mihai", 26);
student.getKnow();

console.log(student);
