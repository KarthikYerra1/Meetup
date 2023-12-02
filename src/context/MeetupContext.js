import React from 'react'

const MeetupContext = React.createContext({
  isRegistered: false,
  changeIsRegistered: () => {},
  topicText: '',
  changeTopicText: () => {},
  nameInput: '',
  changeName: () => {},
})

export default MeetupContext
