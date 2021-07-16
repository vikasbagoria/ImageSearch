import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';

class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }
    render() {
        let imageList;
        const { images } = this.props

        if (images) {
            imageList = (
                <GridList cols={4}>
                    {images.map(img => (
                        <GridTile>
                            
                            <img src={img.largeImageURL} className="shadow" alt="" />
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageList = null;
        }
        return (
            <>
                <div className="shadow">
                    <div className="center">
                        {imageList}
                    </div>
                </div>
            </>
        )
    }
}
ImageResults.propsTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;