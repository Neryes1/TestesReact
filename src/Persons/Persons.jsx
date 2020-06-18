import React from 'react';

const persons = (props) => {
  return(
    <div>
      <input type="text" 
          name={props.nome} 
          onChange={props.nomeH}
          placeholder="Nome" />
        
      <br />
      
      <input type="text"
          name={props.skill}
          onChange={props.skillH}
          placeholder="Skill" />

      <br />

      <button onClick={props.limpar}>Limpar</button>
    </div>
  )
}

export default persons;