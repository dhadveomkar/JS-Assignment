const tech = ['HTML', 'CSS', 'Python'];
const index = tech.indexOf('Python');

if (index !== -1) {
  tech[index] = 'JavaScript';
}

console.log(tech);
