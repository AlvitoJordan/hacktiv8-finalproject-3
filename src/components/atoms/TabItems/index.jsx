import { StyleSheet, TouchableOpacity } from "react-native";
import { ICFavoriteActive, ICFavoriteDeactive, ICProfileActive, ICProfileDeactive, ICSearchActive, ICSearchDeactive, ICSettingActive, ICSettingDeactive } from "../../../assets";

const TabItems = ({ title, active, onPress, onLongPress }) => {
  const getIcon = () => {
    switch (title) {
      case "Home":
        return active ? <ICSearchActive /> : <ICSearchDeactive />;
      case "Favorite":
        return active ? <ICFavoriteActive /> : <ICFavoriteDeactive />;
      case "Profile":
        return active ? <ICProfileActive /> : <ICProfileDeactive />;
      case "Setting":
        return active ? <ICSettingActive /> : <ICSettingDeactive />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      {getIcon()}
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
