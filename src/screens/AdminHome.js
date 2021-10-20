import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';


export default class AdminHome extends React.Component {
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
        this.props.navigation.navigate('Adminlogin');
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
  
    // logOut = async () => {
    //   this.setState({ hasLoadedUsers: false, users: [] })
    //   await setToken('');
    //   this.props.navigation.navigate('Adminlogin');
    // }
  
    render() {
      const{ users, userLoadingErrorMessage } = this.state;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>HomeScreen</Text>
          {users.map((user) => (
            <Text key={user.email}>{user.email}</Text>
          ))}
          {userLoadingErrorMessage ? (
            <Text>{userLoadingErrorMessage}</Text>
          ) : null}
          <Button title="Admin logout" onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        );
      }
  }
  