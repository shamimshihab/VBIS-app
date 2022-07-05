import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./Screens/Contact";
import AboutVbis from "./Screens/AboutVbis";
import TopHeader from "./Componenets/TopHeader";
import Programs from "./Screens/Programs";
import MySchedule from "./Screens/MySchedule";
import VbisSchedule from "./Screens/VbisSchedule";
import News from "./Screens/News";
import OtherResources from "./Screens/OtherResources";
import Settings from "./Screens/Settings";
import Tuitorial from "./Screens/Tuitorial";

import { Searchbar } from "react-native-paper";

function HomeScreen({ navigation }) {
  //const { onPress, title = 'Save' } = props;
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.appContainer}>
      {/*top header */}

      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <Image
            style={{
              width: 160,
              height: 65,

              borderWidth: 1,
              borderRadius: 7,
              borderColor: "white",
            }}
            source={require("./assets/vbisLogo.png")}
          />
        </View>

        <Pressable
          style={styles.setting}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/settings.png")}
          />
        </Pressable>

        <Pressable
          style={styles.tutorial}
          color="#f194ff"
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}> Tutorial </Text>
        </Pressable>
      </View>

      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View style={styles.middleContainer}>
        <View style={styles.rowContainer}>
          <Pressable
            color="#f194ff"
            style={styles.button2}
            onPress={() => navigation.navigate("AboutVbis")}
          >
            <Text style={styles.buttonText}>About VBIS</Text>
          </Pressable>

          <Pressable
            color="#f194ff"
            style={styles.button2}
            onPress={() => navigation.navigate("Programs")}
          >
            <Text style={styles.buttonText}>Programs</Text>
          </Pressable>
        </View>

        <View style={styles.rowContainer}>
          <Pressable
            style={styles.button2}
            color="#f194ff"
            onPress={() => navigation.navigate("MySchedule")}
          >
            <Text style={styles.buttonText}>My Schedule</Text>
          </Pressable>

          <Pressable
            style={styles.button2}
            color="#f194ff"
            onPress={() => navigation.navigate("VbisSchedule")}
          >
            <Text style={styles.buttonText}> Vbis Schedule </Text>
          </Pressable>
        </View>

        <View style={styles.rowContainer}>
          <Pressable
            color="#f194ff"
            style={styles.button2}
            onPress={() => navigation.navigate("OtherResources")}
          >
            <Text style={styles.buttonText}>Other Resources </Text>
          </Pressable>

          <Pressable
            color="#f194ff"
            style={styles.button2}
            onPress={() => navigation.navigate("News")}
          >
            <Text style={styles.buttonText}> News </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Pressable
          style={styles.button4}
          color="#f194ff"
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.buttonText}> Contact VBIS </Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScrren"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutVbis" component={AboutVbis} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Programs" component={Programs} />
        <Stack.Screen name="MySchedule" component={MySchedule} />
        <Stack.Screen name="VbisSchedule" component={VbisSchedule} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="OtherResources" component={OtherResources} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Tuitorial" component={Tuitorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },

  title: {
    flex: 0,
    marginTop: 10,
    marginLeft: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
  },

  searchBar: {
    marginRight: 40,
    marginTop: 10,

    width: 305,
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 40,
  },

  /*header Container */
  logo: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: 140,
    marginBottom: 10,
    width: 80,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  setting: {
    marginTop: 50,
    marginRight: 10,
    marginLeft: 30,
    marginBottom: 10,
    width: 55,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  tutorial: {
    marginTop: 50,
    marginRight: 20,
    marginBottom: 10,
    width: 90,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height: "15%",

    marginLeft: 150,
    marginRight: 40,
    padding: 20,
    marginTop: 10,
  },

  button2: {
    marginTop: 4,
    marginRight: 5,
    marginLeft: 5,

    width: "70%",

    height: "95%",

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  button3: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#89B589",
    borderRadius: 7.5,
  },

  buttonText: {
    fontSize: 15,

    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#000000",
  },

  middleContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "71.5%",
    padding: 20,
    marginLeft: 45,
  },

  contactContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "18%",
    width: "100%",
    padding: 2,
    marginLeft: 35,
    backgroundColor: "#ffffff",
    marginTop: 5,
  },
  button4: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 45,
    marginBottom: 100,
    width: 288,
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
});
