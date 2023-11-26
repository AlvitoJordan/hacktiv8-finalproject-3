const { showMessage } = require("react-native-flash-message");
const { colors } = require("../colors");

export const showError = (message) => {
  showMessage({
    message: message,
    type: "default",
    backgroundColor: "red",
    color: colors.white,
  });
};
export const showSucces = (message) => {
  showMessage({
    message: message,
    type: "default",
    backgroundColor: colors.primary,
    color: "green"
  });
};
