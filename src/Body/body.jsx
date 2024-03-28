const produtos = [
 {
   id: 1,
   nome: 'Smartphone',
   preco: 'R$ 2000',
   cores: ['#29d8d5', '#252a34', '#fc3766'],
 },
 {
   id: 2,
   nome: 'Notebook',
   preco: 'R$ 3000',
   cores: ['#ffd045', '#d4394b', '#f37c59'],
 },
 {
   id: 3,
   nome: 'Tablet',
   preco: 'R$ 1500',
   cores: ['#365069', '#47c1c8', '#f95786'],
 },
];

const  Exercicio2 = () => {

 const dadosProdutos = produtos.filter((item) => 
  Number(item.preco.replace("R$","") > 1500))
  
  console.log(dadosProdutos)
 
 return(
  <section>
   {dadosProdutos.map((item) =>
       <>
       <main key={item.id}>
       <h1>{item.nome}</h1>
       <p>{item.preco}</p>
       <div>
        {item.cores.map((cor) => (
         <p style={{backgroundColor:cor}} key={item.id}>{cor}</p>
        ))}
       </div>
       </main>
       </>
       )}
  </section>
 )
}

export default Exercicio2
