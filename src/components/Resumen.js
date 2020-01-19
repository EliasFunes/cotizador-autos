import React from 'react';
import {capitalize} from "../helper";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {capitalize(marca)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>


    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;
