import React, { Component } from 'react';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clickedStatus: false,
      list: [],
    };
  }
  // deprecated
  // componentWillMount() {
  //   console.log('component will mount');
  // }

  componentDidMount() {
    console.log('component did mount');
    this.getList();
  }

  getList = () => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data, 'fnfneg');
        this.setState({ list: data });
      });
  };

  componentWillReceiveProps(newProps) {
    console.log('this.props', this.props);
    console.log('new props', newProps);
    if (this.props !== newProps) {
      console.log('new props have been asigned !');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update', this.state.list, nextState.list);
    return this.state.list !== nextState.list;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('component will update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.clear();
    console.log('component will unmount');
  }

  render() {
    return <h1>Component Life Cycle</h1>;
  }
}
