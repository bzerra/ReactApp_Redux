import React, { Component } from 'react';
import {MdDone, MdBookmarkBorder} from 'react-icons/md';
import {bindActionCreators} from 'redux';
import api from '../../services/api';
import {connect} from 'react-redux';
import * as TeamAction from '../../store/modules/team/actions';

import { ProductList } from './style';

class Home extends React.Component {
  state = {
    peoples: []
  };

  async componentDidMount () {
    const response = await api.get('users');

    this.setState({ peoples: response.data});      
  };

  handleAddTeam = people => {

    const {addToTeam} = this.props;
    addToTeam(people);
    this.render()

  };



  render(){
    const {peoples} = this.state;    
    const {teamElenco} = this.props;       

      return(

        <ProductList>
          {peoples.map(people => (
            <li key={people.id}>
               <img src={people.avatar_url} alt="photoDev" />
               <strong>Login: {people.login}</strong>
               <span>Desenvolvedor Web</span>
               
              
                {                                    
                  teamElenco.findIndex(s => s.id == people.id) < 0 
                  ?  
                  <button type="button" onClick={()=> this.handleAddTeam(people)}> 
                    <div><MdBookmarkBorder size={16} color="#FFF" /></div>
                    <p>ADICIONAR À EQUIPE</p>
                  </button>
                  :  
                  <button type="button" onClick={()=> this.handleAddTeam(people)}> 
                    <div><MdDone size={16} color='#FFF' /></div>
                    <p>ADICIONADO</p>
                  </button>
                };                 
            </li>            
            ))
          };
        </ProductList>

      );
  };  
}

const mapStateToProps = state => ({
  teamElenco: state.team  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
