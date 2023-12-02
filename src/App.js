import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import MeetupContext from './context/MeetupContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    isRegistered: false,
    topicText: topicsList[0].displayText,
    nameInput: '',
  }

  changeIsRegistered = () => {
    this.setState({isRegistered: true})
  }

  changeTopicText = id => {
    const topic = topicsList.filter(each => each.id === id)
    this.setState({topicText: topic[0].displayText})
  }

  changeName = name => {
    this.setState({nameInput: name})
  }

  render() {
    const {isRegistered, topicText, nameInput} = this.state
    console.log(isRegistered, topicText, nameInput)
    return (
      <MeetupContext.Provider
        value={{
          isRegistered,
          topicText,
          nameInput,
          changeIsRegistered: this.changeIsRegistered,
          changeTopic: this.changeTopic,
          changeName: this.changeName,
          changeTopicText: this.changeTopicText,
          clickedRegister: this.clickedRegister,
          showError: this.showError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
