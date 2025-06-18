This project is a prototype form that demonstrates interactive elements using React. It includes:

- Text input  
- Radio buttons  
- Select dropdown  
- Checkbox  
- Submit event handler  

How to Run

1. Clone the repository.  
2. Run `npm install`  
3. Run `npm start`  

Events Used

- `onChange`  
- `onClick`  
- `onSubmit`  
- `onFocus`  
- `onBlur`

---

Name (Text Field)

Events Used: `onChange`, `onFocus`, `onBlur`  

Description:  
This input captures the user's name. The `onChange` event updates the state and logs the new value whenever the user types. The `onFocus` event logs when the input is selected (clicked into), and `onBlur` logs when the user clicks away from the field.

Gender (Radio Buttons)

Event Used: `onChange`  

Description:  
These inputs let the user choose between "Male" and "Female". When an option is selected, the `onChange` event updates the selected value in the state and logs it.

Favorite Color (Dropdown Menu)

Events Used: `onChange`  

Description:  
Allows the user to select a color from a list. The `onChange` event updates the selected value and logs it. 

Subscribe (Checkbox)

Event Used: `onChange`  

Description:  
A checkbox that tracks whether the user wants to subscribe. The `onChange` event logs when the box is checked or unchecked and updates the state accordingly.

Submit Button

Event Used: `onClick`  

Description:  
The button that submits the form. When clicked, the `onClick` event logs the interaction even before the form is submitted.

Form

Event Used: `onSubmit`  

Description:  
The entire form listens for the `onSubmit` event. When the user submits the form, this event logs the submission and displays an alert with the current form data.
