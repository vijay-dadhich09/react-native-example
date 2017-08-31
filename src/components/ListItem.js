import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillMount() {
    // console.log(this.props);
  }
  componentDidMount() {
    // this.props.SelectLibrary(1);
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDiscription() {
    const { library, expended } = this.props;
    if (expended) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
      // console.log(this.props);
    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.SelectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDiscription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 10,
  }
};
const mapStateToProps = (state, ownProps ) => {
  const expended = state.selectedLibraryId === ownProps.library.id;
  return { expended };
};
export default connect(mapStateToProps, actions)(ListItem);
