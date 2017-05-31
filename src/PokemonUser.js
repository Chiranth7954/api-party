import React, { Component } from 'react'
import './PokemonUser.css'

class PokemonUser extends Component {
  state = {
    user: {
      name: '',
      id: '',
      height: '',
      sprites: '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="pokemon-user">
        <img src={user.sprites.front_default} alt={user.name} />
        <img src={user.sprites.back_default} alt={user.name} />
        <img src={user.sprites.front_shiny} alt={user.name} />
        <img src={user.sprites.back_shiny} alt={user.name} />
        <h2>species: {user.name}</h2>
        <h3>#{user.id}</h3>
        <h3>height: {user.height}</h3>
        <h3>weight: {user.weight}</h3>
      </div>
    )
  }
}

export default PokemonUser
