function sleep(obj) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(obj), 3000);
  });
}

sleep({ nome: "Darlan", idade: 25 }).then((res) => console.log(res));
