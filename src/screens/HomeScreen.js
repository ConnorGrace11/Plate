import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const mealCat = "www.themealdb.com/api/json/v1/1/categories.php"

export default class HomeScreen extends React.Component {
  state = { users: [], hasLoadedUsers: false, userLoadingErrorMessage: '' };

  loadUsers() {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers()
      .then((res) =>
        this.setState({
          hasLoadedUsers: true,
          users: res.users,
        }),
      )
      .catch(this.handleUserLoadingError);
  }

  handleUserLoadingError = (res) => {
    if (res.error === 401) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => {
        if (!this.state.hasLoadedUsers) {
          this.loadUsers();
        }
      },
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  logOut = async () => {
    this.setState({ hasLoadedUsers: false, users: [] })
    await setToken('');
    this.props.navigation.navigate('Login');
  }
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   fetch(mealCat).then((response) => response.json()).then((json => setData(json.categories)).catch((error) => alert(error)).finally((setLoading) => False));
  // }


  render() {
    const{ users, userLoadingErrorMessage } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Home Screen</Text>
        {users.map((user) => (
          <Text key={user.email}>{user.email}</Text>
        ))}
        {userLoadingErrorMessage ? (
          <Text>{userLoadingErrorMessage}</Text>
        ) : null}
        <Button title="Log out" onPress={this.logOut} />
        {/* {isLoading ? <ActivityIndicator /> : <FlatList 
        data = {data} keyExtractor = {({id}, index) => id}
        renderItem= {({item}) => {
          return(
            <Text>{item.title}</Text>
          )
        }
    
      }/>} */}
        </View>
      );
    }
}
