import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessmsg] = useState("");

  const checkCredentials = () => {
    setSuccessmsg("");
    setErrorMsg("");
    if (username === "raj" && pass === "raj") {
      setSuccessmsg("Correct!!");
    } else {
      setErrorMsg("Wrong Credentials. Try Again");
    }
    doReset();
  };

  const doReset = () => {
    setUsername("");
    setPass("");
  };
  return (
    <View style={StyleSheet.container}>
      <Text>LOGIN</Text>
      <Text style={styles.successmsg}>{successMsg}</Text>
      <Text style={styles.errormsg}>{errorMsg}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={pass}
        secureTextEntry
        onChangeText={(text) => setPass(text)}
      />
      <View style={styles.btnContainer}>
        <Button title="Login" onPress={checkCredentials} />
        <Button title="Reset" onPress={doReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    height: 40,
    width: 150,
    margin: 12,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
  },
  successmsg: {
    color: "green",
  },
  errormsg: {
    color: "red",
  },
});

export default Login;
