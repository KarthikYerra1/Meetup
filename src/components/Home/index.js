import Header from '../Header'

import MeetupContext from '../../context/MeetupContext'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  RegisterButton,
  HomeImage,
  StyledLink,
} from './styledComponents'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {isRegistered, nameInput, topicText} = value

      const showRegister = () => (
        <>
          <Header />
          <HomeContainer>
            <HomeHeading registered>Hello {nameInput}</HomeHeading>
            <HomeDescription registered>Welcome to {topicText}</HomeDescription>
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )

      const showHome = () => (
        <>
          <Header />
          <HomeContainer>
            <HomeHeading>Welcome to Meetup</HomeHeading>
            <HomeDescription>Please register for the topic</HomeDescription>
            <StyledLink to="/register">
              <RegisterButton type="button">Register</RegisterButton>
            </StyledLink>
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )

      return isRegistered ? showRegister() : showHome()
    }}
  </MeetupContext.Consumer>
)

export default Home
