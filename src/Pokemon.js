import React, { Component } from 'react'
import './Pokemon.css'
import { Route } from 'react-router-dom'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
  state = {
    name: ''
  }

  handleChange = (ev) => {
    const name = ev.currentTarget.value
    this.setState({ name })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.name}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img className="pokemon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="poke" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>

        <Route path="/pokemon/:name" component={PokemonUser} />
        <Route exact path='/pokemon' render={() => (
          <h3>Please enter the name of the Pokemon</h3>
        )} />
      </div>
    )
  }
}

export default Pokemon
