import {Component} from 'react'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

import {
  RegisterContainer,
  FormImageContainer,
  RegisterImage,
  FormContainer,
  RegisterHeading,
  Label,
  Input,
  Select,
  Option,
  SubmitBtn,
  ErrorMsg,
} from './styledComponents'

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

class Register extends Component {
  state = {
    errorMsg: false,
    topicId: topicsList[0].id,
  }

  render() {
    const {errorMsg, topicId} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            nameInput,
            changeName,
            changeTopicText,
            changeIsRegistered,
          } = value

          const onChangeName = event => {
            changeName(event.target.value)
          }

          const onChangeTopic = event => {
            this.setState({topicId: event.target.value})
            changeTopicText(event.target.value)
          }

          const submitForm = event => {
            event.preventDefault()
            if (nameInput === '') {
              this.setState(prev => ({errorMsg: !prev.errorMsg}))
            } else {
              changeIsRegistered()
              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <FormImageContainer>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <FormContainer onSubmit={submitForm}>
                    <RegisterHeading>Let us join</RegisterHeading>
                    <>
                      <Label htmlFor="username">NAME</Label>
                      <Input
                        placeholder="Your name"
                        value={nameInput}
                        onChange={onChangeName}
                        id="username"
                      />
                    </>
                    <>
                      <Label htmlFor="select">TOPICS</Label>
                      <Select
                        value={topicId}
                        as="select"
                        id="select"
                        onChange={onChangeTopic}
                      >
                        {topicsList.map(each => {
                          const {id, displayText} = each
                          return (
                            <Option key={id} value={id}>
                              {displayText}
                            </Option>
                          )
                        })}
                      </Select>
                    </>
                    <SubmitBtn type="submit">Register Now</SubmitBtn>
                    {errorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
                  </FormContainer>
                </FormImageContainer>
              </RegisterContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
