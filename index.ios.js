/**
 * Party of 4 Mobile
 * https://github.com/Trustworthy-Hair/partyof4mobile
 */
'use strict';

var MapTab = require('./tabs/map');
var SearchTab = require('./tabs/search');
var ListTab = require('./tabs/list');
var NewTab = require('./tabs/new');
var MenuTab = require('./tabs/menu');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBarIOS
} = React;

var partyof4mobile = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'map'
    };
  },
  changeTab(tabName) {
    StatusBarIOS.setStyle(tabName === 'map' ? 1 : 0);
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Map"
          icon={ require('image!map') }
          onPress={ () => this.changeTab('map') }
          selected={ this.state.selectedTab === 'map' }>
          <MapTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          icon={ require('image!search') }
          onPress={ () => this.changeTab('search') }
          selected={ this.state.selectedTab === 'search' }>
          <SearchTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="List"
          icon={ require('image!list') }
          onPress={ () => this.changeTab('list') }
          selected={ this.state.selectedTab === 'list' }>
          <ListTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="New"
          icon={ require('image!new') }
          onPress={ () => this.changeTab('new') }
          selected={ this.state.selectedTab === 'new' }>
          <NewTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Menu"
          icon={ require('image!menu') }
          onPress={ () => this.changeTab('menu') }
          selected={ this.state.selectedTab === 'menu' }>
          <MenuTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('partyof4mobile', () => partyof4mobile);
