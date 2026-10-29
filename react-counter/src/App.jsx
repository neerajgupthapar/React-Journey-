import Cards from  "./components/cards"
export default function Card3() {

  let NewObj= {
    username : "Neeraj",
    Password : 1234
  }

  return (
    <>
    <body className='bg-black text-white' > </body>
    <Cards username="Neeraj" someobj={NewObj}/>
    <Cards username="Minnu" someobj={NewObj} password="678"/>
    </>
  )
}

