# ProyectoPW

This codebase was created to demonstrate a fully fledged application built with Angular that interacts with an actual backend server including CRUD operations, routing, and more. 

## Gettin Started
Make sure you have the Angular CLI v6 installed globally. We use npm to manage the dependencies, so that, you have to run the npm install command to get all the dependencies.

Run ng serve for a dev server. Navigate to http://localhost:8000/. The app will automatically reload if you change any of the source files.

### Building the project
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Functionality overview

This applicattion is an interact site, in which you can make the CRUD operations to the pizzas' recipes you want.

### General functionality:

- Create pizzas's recipies and connect to an api to create them in the Data Base.
- Connect to an api to get the pizzas' recipies created previously.
- Update existing recipies and connect to an api to modify them in the Data Base.
- Delete existing recipes and connect to an apli to delete them from the Data Base.

### The general breakdown looks like this:
- Home page(URL:/home)
	- Shows the landing page.
	- Has a button that redirects to the create page.
- Recipes page (URL:/recetas)
	- Shows all the existing recipes.
	- Allows you to delete an existing recipes.
	- Shows the update's button option and redirects you to the update page.
- Create page (URL:/crear)
	- Allows you to create a new recipe and redirects you to the recipes page.
- Update page (URL:/modificar)
	- Allows you to modify all the recipe's properties.

