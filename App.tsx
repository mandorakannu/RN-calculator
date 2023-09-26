import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const onChangeHandler = (text: number | string) => {
    if (text !== undefined && typeof text !== "number") {
      setInput(input.concat(text));
    } else {
      setInput(input.concat(text.toString()));
    }
  };
  const percentageHandler = (): void => {
    setInput((parseFloat(input) / 100).toString());
  };
  const result = (): void => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Syntax Error");
    }
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.inputText}
              editable={false}
              selectTextOnFocus={false}
              value={input}
            />
            <View style={styles.allButtons}>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => setInput("")}
                >
                  <Text style={styles.buttons}>AC</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(7)}
                >
                  <Text style={styles.buttons}>7</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(4)}
                >
                  <Text style={styles.buttons}>4</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(1)}
                >
                  <Text style={styles.buttons}>1</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(0)}
                >
                  <Text style={styles.buttons}>0</Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler("-")}
                >
                  <Text style={styles.buttons}>+/-</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(8)}
                >
                  <Text style={styles.buttons}>8</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(5)}
                >
                  <Text style={styles.buttons}>5</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(2)}
                >
                  <Text style={styles.buttons}>2</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(".")}
                >
                  <Text style={styles.buttons}>.</Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={percentageHandler}
                >
                  <Text style={styles.buttons}>%</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(9)}
                >
                  <Text style={styles.buttons}>9</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(6)}
                >
                  <Text style={styles.buttons}>6</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler(3)}
                >
                  <Text style={styles.buttons}>3</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={result}>
                  <Text style={[styles.buttons, styles.equalBtn]}>=</Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler("/")}
                >
                  <Text style={[styles.buttons, styles.operators]}>÷</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler("*")}
                >
                  <Text style={[styles.buttons, styles.operators]}>*</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler("-")}
                >
                  <Text style={[styles.buttons, styles.operators]}>-</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => onChangeHandler("+")}
                >
                  <Text style={[styles.buttons, styles.operators]}>+</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 20,
  },
  inputText: {
    height: 100,
    textAlign: "right",
    fontSize: 50,
    color: "black",
    paddingHorizontal: 22,
  },
  allButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  buttons: {
    fontSize: 26,
    width: 80,
    height: 80,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#3b3838",
    elevation: 10,
    zIndex: 10,
  },
  equalBtn: {
    position: "absolute",
    bottom: -100,
    backgroundColor: "#514FFF",
    borderRadius: 5,
    width: 180,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    transform: [{ rotate: "180deg" }],
  },
  operators: {
    color: "#4F4DFF",
  },
});

export default App;
