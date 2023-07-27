# User-Portal
A Portal containing user list and details and a bit of fancy UI. 


# Tech Stack 
React 18

Chakra UI 2.8

Typescript

React Query for API calls

Zustand for State Management (a simple application needs a simple state management tool)

# Prerequisites 
Since Google Maps is being used, please add your google maps api key as follows in your `.env` file as follows:


VITE_MAPS_API_KEY = YOUR_API_KEY

# Run
Run the command "npm install"
(If the theme of chakra UI has been used by you before, please remove it from your local storage)

then run the command "npm run dev"

# Dependencies
Chakra UI

React Query / Axios

Zustand

React Google Maps API

## Pages
`/` The base route is the user list page 

`users` This route has child routes to explore details of the user
