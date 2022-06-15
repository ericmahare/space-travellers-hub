import renderer from 'react-test-renderer';
import RocketList from '../rocket/RocketList';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'

it('renders correctly', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <RocketList/>
  </Provider>).toJSON()
  expect(tree).toMatchSnapshot();
})