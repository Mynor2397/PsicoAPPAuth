import React from 'react'

const EtapaDiagnostico = ({
  currentStep,
  handleChange
}) => {
  if (currentStep !== 2) {
    return null
  }
  return (
      <h1>Etapa Diagnostico</h1>
  )
}

export default EtapaDiagnostico