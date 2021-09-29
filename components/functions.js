import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";
// the following from "https://thewebdev.info/2021/03/14/how-to-use-the-axios-http-client-in-react-useeffect-hook/"
import axios from "axios";

export default functions() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}