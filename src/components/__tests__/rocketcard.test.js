import renderer from 'react-test-renderer';
import RocketCard from '../rocket/RocketCard';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'

it('renders correctly', () => {
  const rocket = {
    rocket_id: 1,
    rocket_name: 'Falcon 1',
    rocket_descreption: 'The Falcon 1 was an expendable launch system priva…launch vehicle to go into orbit around the Eart',
    rocket_img: 'https://imgur.com/DaCfMsj.jpg',
    reserved: false
  }
  const tree = renderer.create(
  <Provider store={store}>
    <RocketCard rocket={rocket}/>
  </Provider>).toJSON()
  expect(tree).toMatchSnapshot();
})