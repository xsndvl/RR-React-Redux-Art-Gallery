import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

import {useEffect} from "react"

import { useSelector, useDispatch, connect} from 'react-redux'
const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

const fetchAPI = "https://collectionapi.metmuseum.org/public/collection/v1/objects/[insert an object id here]"
const fetchData = async() => {
  const response = await fetch(fetchAPI)
  const resData = await response.json()
}
fetchData()

function App({store, dispatch}) {
  useEffect(() => {
    dispatch(fetchData())
  }, [store.objectId, dispatch])
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App)