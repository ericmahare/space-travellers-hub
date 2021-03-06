import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'
import Missions from '../mission/missionTable';


const StoreProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('mission component test', () => {
  it('renders correctly', () => {
    const RenderComponent = renderer.create(<StoreProvider />).toJSON();
    expect(RenderComponent).toMatchSnapshot();
  });
});