# Netflix-GPT

Netflix-GPT is a movie streaming app that combines the user experience of Netflix with the power of GPT-based APIs for advanced movie search and recommendations. The project includes full authentication functionality, enabling secure user login and access, and personalized recommendations

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- Sign Up Form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app to production
- Create Signup User Account
- Implement Sign In User Api
- Created redux store with userSlice
- Implemented Sign out
- Update Profile
- Fetch Movies from TMDB 
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect/browse to login Page and vice-versa
- Unsubscribed to the onAuthStateChange callback
- Added hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for now playing movies
- Update store with movie data 
- planning for main container and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and made it autoplay on mute
- Tailwind classes to make container look good
- Build secondary component
- Build movie list
- Build movie card
- TMDB Img CDN URL
- Made the browse page looks good with tailwind css
- usePopularMovie, useTopRatedMovie and useUpcomingMovie Custom Hook
- GPT Search feature
- GPT Search Page and Search Bar
- (FEATURE) Multi-language in our App 

# Features

- Login/Sign up

  - Sign In / Sign Up Form
  - redirect to Browse Page

- Browse (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists (\*) N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Firebase commands

- npm i firebase
- npm i -g firebase-tools (Firebase CLI)
- firebase login
- firebase init
      - Hoisting: Configure files for Firebase Hoisting  -> space and enter (to select)
      - use existing project
      - netflixgpt (your project name)
      - public directory name as BUILD
      - configure single-page app as NO
      - deploys with github as NO
      - npm run build
      - firebase deploy
