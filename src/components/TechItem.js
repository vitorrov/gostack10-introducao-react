import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) /* Desestruturado de props */ {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type='button'>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto'
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired // Quando passar o TechItem para Techlist, terá obrigatoriamente que ter a função onDelete
};

export default TechItem;
