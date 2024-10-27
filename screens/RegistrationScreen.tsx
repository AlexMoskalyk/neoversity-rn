import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

import Input from "../components/Input";
import Button from "../components/Button";
import { colors } from "../styles/global";
import { FC, useState } from "react";
import { StackParamList } from "../navigation/StackNavigator";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Register">;
const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleChoosePhoto = () => {};

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const onSignUp = () => {
    navigation.navigate("Posts");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <TouchableOpacity
              onPress={handleChoosePhoto}
              style={styles.avatarContainer}
            >
              <ImageBackground style={styles.avatar}>
                <View style={styles.iconAdd}>
                  <Text style={styles.innerIcon}>+</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={[styles.innerContainer]}>
              <Input
                value={login}
                autofocus={true}
                placeholder="Логін"
                onTextChange={handleLoginChange}
              />
              <Input
                value={email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />
              <Input
                value={password}
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onSignUp}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєструватися
                </Text>
              </Button>
              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунту?
                  <TouchableWithoutFeedback onPress={onLogin}>
                    <Text style={styles.signUpText}> Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  formContainer: {
    position: "relative",
    width: SCREEN_WIDTH,
    height: "65%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },

  innerContainer: {
    gap: 16,
    width: "100%",
  },
  inputContainer: {
    marginTop: 32,
  },

  buttonContainer: {
    marginTop: 42,
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -90,
    zIndex: 100,
  },

  avatar: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },

  iconAdd: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },

  innerIcon: {
    color: colors.orange,
  },
});
