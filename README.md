The website is about a fictional accounting firm.

There are four pages: home, services, prices, and contact information.

Home and services are pages where I explain, using some fictional information, what the company does.

On the prices page, I created a table with JavaScript that calculates the 10% discount and the total price of the various services the user can choose from.

The contact information is on the contact page.

Additions:
I added a font from Google Fonts to the head and a link to the external style.css file.
In the CSS file, I added various style customizations, particularly a customization for the navbar to make it more responsive to different screens.
I added bulleted lists and some images to the various pages.
I also created an external JavaScript file containing a function that:
- creates a container to insert the table and cleans it up
- checks which checkboxes have been checked (if none are checked, it throws an error)
- creates the table, rows, and columns, and assigns them a style class
- creates variables to calculate the total, discount, and discounted total. To calculate this, it loops through the selected checkboxes
- also appends the final rows to the table
