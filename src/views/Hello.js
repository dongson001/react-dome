/**
 * Created by lixiaoxi on 16/6/7.
 * @description
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from 'redux/modules/productDetail';

@connect((state) => ({productDetail: state.productDetail}),
 (dispatch) => bindActionCreators({ getDetail }, dispatch))

class Hello extends Component {

  componentDidMount() {
    this.props.getDetail(123);
  }
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  goTo() {
    this.context.router.push('prodlist')
  }

  render() {
    console.log(this.props.productDetail);
    return (<div onTouchTap={::this.goTo}> Hello routerReducer!!{this.props.productDetail.data.test}</div>);
  }
}

export default Hello;
