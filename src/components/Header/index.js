import React from 'react';
import {connect} from 'react-redux';

import {Container, Cast} from './style';
import {Link} from 'react-router-dom';
import { MdGroupWork } from 'react-icons/md';

import logo from '../../assests/image/Logo.png';

function Header({teamSize}) {

  

  return (
    <Container>
        <Link to="/">
            <img src={logo} alt ="e-auditoriaTeam" width='35%'/>
        </Link>

        <Cast to="/team">
            <div>
                <strong>Meu Elenco</strong>
                <span>{teamSize} pessoas</span>
            </div>
            <MdGroupWork size={36} color="#FFF" />
        </Cast>
    </Container>
  );
}

export default connect(state => ({
  teamSize: state.team.length,
}))(Header);
