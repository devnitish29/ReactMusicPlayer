//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const FilesListing = requireNativeComponent('FilesListing', FilesListingView)

export default class FilesListingView extends Component {
  render () {
    return <FilesListing {...this.props} />
  }
}

FilesListingView.propTypes = {
  exampleProp: React.PropTypes.string
}
