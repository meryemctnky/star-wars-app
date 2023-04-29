# Star Wars App

Star Wars App is a simple responsive web application that enables users to search and browse a comprehensive list of Star Wars starships by name or model, making it easy to find the information they need.

## See Live : [Here]()

## Features

- List starships by using Star Wars API
- Starship items include name, model and hyperdrive_rating
- Users can search starships by its name or model through the API, using a single input above
- Users can click on see more details button and go to a detail page that includes passengers, max_atmosphering_speed, manufacturer, crew and cargo_capacity in addition to name and model
- Users can go back to home page from detail page
- Users can load more starships with a load more button

## Technologies Used

Star Wars App has been built using the following technologies:

- [React.js](https://reactjs.org/), [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Axios](https://axios-http.com/) for making HTTP requests to the API
- [Star Wars API](https://swapi.dev/) to fetch information about starships
- [Tailwind CSS](https://tailwindcss.com/) for UI design
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Loadash.debounce](https://www.npmjs.com/package/lodash.debounce) for debouncing search input

## Usage

To run the Star Wars App, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using the npm install command.

   ```bash
   npm install
   ```

3. Start the development server using the npm run dev command.

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to http://localhost:3000.

## Screenshots

![home page](/public/screenshot.png)
![detail page](/public/screenshot2.png)
