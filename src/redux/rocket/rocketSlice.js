const ADD_ROCKET = 'space-travellers-hub/redux/rocket/ADD_TICKET';

const initialState = [];
const url = 'https://api.spacexdata.com/v3/rockets';


// Add data
export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const FetchRockets = () => (async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  const rocketsArray = [];
  info.forEach((e) => {
    const rocket = {
      rocket_id: e.id,
      rocket_name: e.rocket_name,
      rocket_description: e.description,
      rocket_img: e.flickr_images[0],
      reserved: false,
    };
    rocketsArray.push(rocket);
  });
  dispatch(addRocket(rocketsArray));
});

const reducer = (state = initialState, action) => {
  if(action.type === ADD_ROCKET) {
      return [...action.rockets];
  }
    return state;
};

export default reducer;
