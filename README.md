# Cat Application
* Frontend built using React as a View layer, Redux for state management, and SASS as a css-preprocessor
* Mocha and Expect for unit testing
* Axios as a http library
* Redux-thunk to handle async action creators in Redux
* Project time: ~15 hours

## Installation and Dependencies
This repo uses yarn as a package manager. [Yarn can be installed using homebrew.](https://yarnpkg.com/en/docs/install)

1. Clone repo locally
2. Run `yarn install` to install all dependencies
3. Run `npm start`
4. Navigate to [http://localhost:8080/](http://localhost:8080/)

## Testing
Use the command `npm test` to run the test suite. Due to a time constraint, I was not able to create as many tests as I would have liked. Ideally, I would have tested that cards are rendering, async action creators, and more.

## Other Considerations and Possible Improvements

**Directory structure**: I learned this directory structure pattern pretty early on and it has become very intuitive to me. I can easily navigate to my component of choice, and making stylistic changes to individual components is a breeze because of its modularity. On the redux side, actions and reducers are simply broken apart, and action types sit in their own folder to easily import them into reducer and action creator files. If my action creator list grew any larger, I'd probably create a new action creator file and organize by route or some other methodology.

**Container component pattern**: Because of the size of the app, I wanted to keep the flow of props in the app super simple, so I only made the top-level `<App />` component aware of state and connected to Redux. From there, all state was passed down to child components. I included PropTypes in each component for documentation and readability. Another approach would be to make only the components that need to be aware of state into container components (in this case, just `<CardContainer />`). For simplicity's sake and for simple visualization purposes, I chose the former.

**Merging data**: I was given 2 api endpoints: one that returned xml data of image URL's and id's, and one that returned json data of facts about cats. Since each image had to be associated with a fact, I knew I would have to merge the data in some way and I knew that I wanted to have an array of data. After parsing the data, I wanted to create a data structure that was an object, with image URL, id, and cat fact as properties on the object, each being a string. These would each represent a grid element or "card". I would have an array of these objects, of which I could map through and create `<Card />` components for each.

To convert the xml data to json, I used a library called `xml2js`. I then needed to chain asyncronous action creators to send a request for the facts once I received a response for the image URL and id. The code for that looks like this:

```
export const fetchCatsAndFacts = () => {
  return dispatch => {
    // send request for image url and id
    return dispatch(fetchCats())
      .then(res => {
        // once response is received, send request for facts
        dispatch(fetchFacts());
      })
      .catch(err => {
        console.log(err);
      });
    };
};
```
Once the action for image URL and id (fetchCats()) was dispatched, I parsed through the json and created an object for each set of image URL and id's using `Object.assign()` to ensure I wasn't mutating state. Then once the action for the fact was dispatched, I parsed through the json and updated each object of image URL and id with a fact property, so the each object contained all three. The code for this reducer looks like this:

```
...
export default function (state = [], action) {
  switch(action.type) {
    case FETCH_CATS:
      return action.cats.map(cat => {
        return Object.assign({}, {
          url: cat.url[0],
          id: cat.id[0],
        });
      });
    case FETCH_FACTS:
      const newState = [];
      for (let i = 0; i < state.length; i++) {
        const tempState = Object.assign({}, state[i], {
          fact: action.facts[i]
        });
        newState.push(tempState);
      }
      return newState;
...
```
I was then able to inject this data as props into `<App />` and pass it down to `<CardContainer />` and ultimately, `<Card />`.

**Grid Layout**: I spent a great deal of time trying to configure my app with a library called [react-grid-layout](https://github.com/STRML/react-grid-layout), which would have given the app "drag-and-drop" functionality. `react-grid-layout` requires state that is an array of objects with the following properties: x-axis (x), y-axis (y), width (w), height (h). It then maps through this array and creates grid elements by passing these as prop values to a container `<div>`.
Therefore, since each grid element would have these properties along with an image and URL, I decided to merge this data into my `catsAndFacts` piece of state to look like the following:

```
{
  url: string,
  id: string,
  grid: {
    x: number,
    y: number,
    w: number,
    h: number
  }
}
```

 The problem was `react-grid-layout` requires a default height (`h`) to be set to all grid elements; however in this app, grid elements have a variable height, as image size and fact length differ for each grid element. I had to figure out some way to find the height of each grid element after the component had rendered, calculate it's height in `react-grid-layout` units, and update each individual grid element's height so it would be re-rendered. One of the problems was I wasn't able to make each grid element it's own React component which would have allowed me to get their height because the app would break. Thus, they needed to all be rendered under one component (`<CardContainer />`). The code looked like this:

```
  createElement(catAndFact) {

    return (
      <div key={i} data-grid={catAndFact.grid} className="card">
        <img src={catAndFact.url} />
        <p>{catAndFact.fact}</p>
      </div>
    );
  }

  render() {

    return (
      <div>
         <ResponsiveReactGridLayout {...this.props} autosize={true}>
            {_.map(this.props.catsAndFacts, this.createElement)}
          </ResponsiveReactGridLayout>
      </div>
    );
  }
```

So I tried retrieving each grid element's height out of the DOM after the component render process. But even once this is complete, there is no way to edit the height of the grid element `<div className="card">` before returning the grid element.

Therefore, given the limited amount of time I had, I decided to go with a static column-style responsive layout.

**Testing**: Again, due to a time constraint, I didn't get to test everything I would in a production level app.

**Other improvements**:
* Drag and drop
* Animation
* Save favorite cards
