import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Mensaje Montado');
    
      return () => {
        console.log('Mensaje Desmontado');
      }
    }, [])
    

  return (
    <>
      <h1>Usuario ya existe</h1>
    </>
  )
}
