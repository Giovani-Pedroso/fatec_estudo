console.clear();

const main = () => {
  if (!process.argv[2]) {
    console.error("Digite o arquivo de entrada");
    return 1;
  }
  if (!process.argv[3]) {
    console.error("Digite o arquivo de saida");
    return 1;
  }
};

main();
