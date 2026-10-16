function Sentence(words) {
  this.words = words;
  console.log(this);
}

const S = new Sentence("hello there, we are learning about the `this` keyword");
