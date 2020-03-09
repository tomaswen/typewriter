const sentence = "hello there from lighthouse labs";
let timer = 50;
for (const index in sentence) {
  setTimeout(() => {
    if (index == sentence.length - 1) {
      console.log(sentence[index]);
    } else {
      process.stdout.write(sentence[index]);
    }
  }, timer);
  timer += 50;
}