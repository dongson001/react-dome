/**
 * Created by dongson on 2016-08-09.
 * @description
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from 'redux/modules/productDetail';
import ProdTitle from './ProdTitle';

@connect((state) => ({productDetail: state.productDetail}),
    (dispatch) => bindActionCreators({ getDetail }, dispatch))

class ProdList extends Component {
    
    render() {
        return (
            <div>
                <ProdTitle/>
            </div>
        );
    }
}

export default ProdList;
