Tasks:

/**
 * This example uses vuelidate for validation
 * http://vuelidate.js.org/
 *
 * REQUIREMENTS:
 *
 * 1. Implement the "add" and "delete" functionality
 * 2. Make the text input fields required by adding
 * validation rules for the `value` attribute of each elements
 * 3. On submit, vaidate the form and show an alert
 * with the message "Success" (if the form is valid)
 * or "Form not valid"
 * 4. Make the text input elements reflect their state (error/succes)
 * when the user tries to submit the form
 *
 * BONUS POINT A:
 * Make the text input elements change their state
 * under the following conditions:
 *    a) when the field is changed the first time
 *    b) on each keystroke afterwards
 * This means that if you start typing something in the first input
 * the field should not turn green as soon as I type the first letter
 * but it should turn green when I move the cursor to another field (blur)
 * However, if I return to tht same first input, on each keystroke
 * the status should be updated.
 *
 * Example:
 * 1. Type "abc" in the first field -> Nothing happens
 * 2. Move the cursor to the second field -> First field turns green
 * 3. Move the cursor back to the first field -> Nothing happens with the second field
 * 4. Hit Delete until the first field is empty -> As soon as the first field is empty, the field turns red
 *
 * BONUS POINT B:
 * Require that the first element in the list to be exactly equal to string "abc"
 *
 *
 *
 */
