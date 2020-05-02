### Lister

# A pet project practicing redux axios and more

## This will be a simple tech design / spec for Lister:

## App will have a simple structure, main components will be:

1.  A main component that will handle all API requests.
    `Main` will save returning data to the store and update the apps loading state for the inner components.
    It will have a state that contains all items to be shown in the `ItemList` inner component.
    The inner components (following 2&3) will notify `Main` if there is a need to fetch new data.
2.  `ItemList` component will show a list of items in accordance with the selected group.
3.  `Group` component will update the stores \"selectedGroup"\ what group of items is selected.
4.  The Store will have all the data that has been requested so far.

## This project will contain the following practices:

1.  Using the Redux store for cross component access to have all already downloaded data (caching).
2.  Using axios to get and set data on a remote API.
3.  Managing asynchronous actions and API replies.
4.  Possibly using material-ui for user interface.
5.  Using more 3rd party libraries like lodash.
