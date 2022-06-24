export const enableValidation = (form, formElements) => {
    const selectedform = form;
    const inputs = form.querySelectorAll(formElements.inputSelector);
    const inputList = Array.from(inputs);
    const buttonElement = selectedform.querySelector(formElements.submitButtonSelector);
    const inactiveButtonClass = formElements.inactiveButtonClass;
    const inputErrorClass = formElements.inputErrorClass;
    const errorClass = formElements.errorClass;

    selectedform.addEventListener("submit", (evt) => {
                evt.preventDefault();
              });
    setEventListeners(selectedform, buttonElement, inactiveButtonClass, inputList, inputErrorClass, errorClass);        
}

export const setEventListeners = (selectedform, buttonElement, inactiveButtonClass, inputList, inputErrorClass, errorClass) => {
      inputList.forEach((item) => {
        item.addEventListener("input", () => {
          isValid(selectedform, item, inputErrorClass, errorClass);
          console.log(item)
          toogleSaveButton(buttonElement, inactiveButtonClass, inputList);
        });
      });
     }

export const isValid = (selectedform, item, inputErrorClass, errorClass) => {
    if (!item.validity.valid) {
      showInputError(selectedform, item, inputErrorClass, errorClass);
      } else {
      hideInputError(selectedform, item, inputErrorClass, errorClass);
      }
}

export const showInputError = (selectedform, item, inputErrorClass, errorClass) => {
      const errorElement = selectedform.querySelector(`.${item.id}-error`);
      item.classList.add(inputErrorClass);
      errorElement.classList.add(errorClass);
      errorElement.textContent = item.validationMessage;
}

export const hideInputError = (selectedform, item, inputErrorClass, errorClass) => {
      const errorElement = selectedform.querySelector(`.${item.id}-error`);
      item.classList.remove(inputErrorClass);
      errorElement.classList.remove(errorClass);
      errorElement.textContent = "";
}

export const hasInvalidInput = (inputList) => {
          return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
        }

export const toogleSaveButton = (buttonElement, inactiveButtonClass, inputList) => {
          if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute("disabled", "disabled");
      } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
      }
}
