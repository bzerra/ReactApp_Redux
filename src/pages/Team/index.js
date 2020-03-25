import React from 'react';
import {connect} from 'react-redux'
import {MdCancel} from 'react-icons/md';
import * as TeamAction from '../../store/modules/team/actions';
import {bindActionCreators} from 'redux';

import { Container, ProductTable, Total } from './style';

function Team({teamElenco, removeFromTeam}) {
  

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Login</th>
            <th>Profissão</th>
            <th></th>            
          </tr>          
        </thead>
        <tbody>
          {teamElenco.map(people => (
            <tr>
              <td>
                <img src={people.avatar_url} alt="photoDev" />
              </td>
              <td>
                {people.login}
              </td>
              <td>Desenvolvedor Web</td>
              <td>
                <button type="button" onClick={()=> removeFromTeam(people.id) }>
                  <MdCancel size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}

          
        </tbody>
      </ProductTable>

      <footer>
          <button type="button" onClick={() => alert('https://github.com/bzerra/ReactApp_Redux')}>Informações Projeto</button>
        <Total>
          <span>nº de Integrantes </span>
          <strong>{teamElenco.length}</strong>
        </Total>
      </footer>  

    </Container>
  );
}

const mapStateToProps = state => ({
  teamElenco: state.team,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
