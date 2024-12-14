# Character Selector Application

The Character Selector Application is a React-based user interface that allows users to select and view character information, as well as create new characters.

## Features

1. **Character Display**: Users can view the details of the selected character, including their name, location, civilian status, date of birth, and money.
2. **Character Change**: Users can navigate through the available characters using left and right chevron icons.
3. **Menu Options**: Users can access various menu options, such as "Play Game", "Photo Mode", "Credits", "Exit Game", and "Create New Character".
4. **Create New Character**: Users can create a new character by providing their first name, last name, date of birth, and location.

## Technologies Used

- React.js
- React Router (for navigation)
- React Icons (for UI icons)
- Tailwind CSS (for styling)

## Getting Started

To run the Character Selector Application locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/character-selector.git
```

2. Navigate to the project directory:

```
cd character-selector
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running at `http://localhost:3000`.

## Project Structure

The project has the following structure:

```
character-selector/
├── src/
│   ├── components/
|   |   ├── ui/
│   │   |  ├── CharacterInfo.jsx
│   │   |  ├── CharacterDisplay.jsx
│   │   |  ├── MenuOptions.jsx
│   │   |  └── CreateNewCharacter.jsx
|   |   └──CharacterSelector.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

- `CharacterInfo.js`: Displays the information of the selected character.
- `CharacterDisplay.js`: Displays the character image and allows changing the character.
- `MenuOptions.js`: Renders the menu options at the bottom of the screen.
- `CreateNewCharacter.js`: Displays the form for creating a new character.
- `App.js`: The main component that manages the state and renders the other components.
- `index.js`: The entry point of the application.

## Styling

The application uses Tailwind CSS for styling. The `tailwind.config.js` file contains the custom configuration for the project.

## Deployment

To deploy the Character Selector Application, you can use a hosting service like Netlify, Vercel, or GitHub Pages. The build process can be automated using a CI/CD tool like GitHub Actions or Travis CI.

## Contributing

If you'd like to contribute to the Character Selector Application, feel free to submit a pull request. Please make sure to follow the existing code style and include tests for any new functionality.

## License

This project is licensed under the [MIT License](LICENSE).
