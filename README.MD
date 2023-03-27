# Svix Customer Portal Demo

This project demonstrates a simple form that interacts with the Svix API and displays the associated webhooks list in the Svix customer portal iframe using a demo application portal. The purpose of this project is to showcase the basic functionality and integration with Svix without focusing too much on styling.

## Features and Improvements

Given more time, the following features and improvements could be implemented:

- **Schema Wizard**: Replace the placeholder for pasting a schema with a user-friendly schema wizard. This is the top priority product feature I would've added with more time
- **Validation**: Utilize a TypeScript-based schema library such as Zod for general validation and a library like react-jsonschema for schema validation.
- **Component Separation**: Refactor the EventTypeManager component for improved readability and maintainability.
- **Styling**: Enhance styling, theming, and palette for a polished user experience.
- **Linting**: Integrate ESLint and Prettier for consistent code formatting and style enforcement.
- **Testing**: Add unit tests, integration tests, and end-to-end tests to ensure code quality and functionality.
- **Dynamic Configuration**: Avoid hardcoding values, such as the API key, to make the application more flexible and secure.
- **UX Best Practices**: Implement warning messages before event deletion, allow undo actions, and other user-friendly enhancements.
- **Type Checking**: Review and double-check the usage of types throughout the application.

## Known Issues

- Creating an event without a name can break the UI in Svix's production event type viewer application.

## Running the Project

To run the project, follow these steps:

1. Add your `SVIX_ACCESS_KEY` in `src/constants`
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.

You can also add `SVIX_APP_PORTAL_URL` once you have one

## Conclusion

This project provides a minimal implementation of a customer portal using Svix API and Material UI. With more time, several improvements and features could be added to create a more complete and polished application.
