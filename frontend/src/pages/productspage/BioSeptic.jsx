import React from 'react'
import EnzymeCard from '../../components/card/EnzymeCard'
import Image from '../../assets/bioseptictank.jpg'

const BioSeptic = () => {
  
  return (
    <>
        <EnzymeCard img={Image} head="Bio-Septic For Septic Tank" para="Cizar Bio Septic is a unique combination of live active enzymes and microbes that work together to provide a biological solution for managing human and organic waste as well as waste water. This innovative solution effectively tackles organic sludge and eliminates bad odors in various STP plants and septic tanks. By converting organic sludge into eco-friendly water, Cizar Bio Septic offers a sustainable approach to waste management." listone="1. Efficiently eliminates bad odor from STP plants or septic tanks." listtwo="2. Effectively eliminates organic sludge." listthree="3. Helps maintain BOD, COD, pH, TSS, and E. coli levels" />
    </>
  )
}

export default BioSeptic