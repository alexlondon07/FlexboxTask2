import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";

export default class VerticalStackLayout extends Component {
  render() {
    return (
        <ScrollView style={styles.container}>

          <View style={styles.imageContainer_row}>
            <Image source={require("./assest/1.jpg")} style={styles.images} />
            <Image source={require("./assest/2.jpg")} style={styles.images} />
            <Image source={require("./assest/3.jpg")} style={styles.images} />
          </View>

          <View style={styles.imageContainer_row}>
            <View style={styles.imageContainer_column}>
              <Image source={require("./assest/4.jpg")} style={styles.images} />
              <Image source={require("./assest/5.jpg")} style={styles.images} />
            </View>
            <Image
              source={require("./assest/1.jpg")}
              style={styles.images_row}
            />
          </View>

          <View style={styles.imageContainer_row}>
            <View style={styles.imageContainer_column}>
              <Image source={require("./assest/2.jpg")} style={styles.images} />
              <Image source={require("./assest/3.jpg")} style={styles.images} />
            </View>
            <Image
              source={require("./assest/1.jpg")}
              style={styles.images_row}
            />
          </View>

          <View style={styles.imageContainer_row}>
            <Image source={require("./assest/5.jpg")} style={styles.images} />
            <Image source={require("./assest/1.jpg")} style={styles.images} />
            <Image source={require("./assest/4.jpg")} style={styles.images} />
          </View>
          
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer_row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between"
  },
  imageContainer_column: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  images: {
    width: Dimensions.get("window").width / 3 - 3,
    height: 100
  },
  images_row: {
    flexDirection: "row",
    height: 205,
    marginLeft: 5
  }
});
