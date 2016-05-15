import React from 'react'
import h337 from 'heatmap.js'
import styles from './heatmap.scss'


export default class Heatmap extends React.Component {

	componentDidMount() {
		let heatmapInstance = h337.create({
  			// only container is required, the rest will be defaults
  			container: this.refs.heatmapContainer
		});

		let datas = {
			min: 0,
  			max: 100,
  			data: [{x: 807, y: 583, value: 65},
  				{x: 597, y: 285, value: 51},
  				{x: 217, y: 449, value: 73},
  				{x: 377, y: 656, value: 58},
  				{x: 467, y: 509, value: 47},
  				{x: 487, y: 164, value: 46},
  				{x: 200, y: 164, value: 84},
  				{x: 150, y: 144, value: 130},
  				{x: 170, y: 210, value: 98},
  				{x: 940, y: 200, value: 41},
  				{x: 170, y: 550, value: 98},
  				{x: 247, y: 194, value: 35}]
		};

		heatmapInstance.setData(datas);
	}


    render() {
        var divMaxSize = {
        width: '100%'
      }
        return (
          <div className="ui segment basic" style={divMaxSize}>
                <h1 className="ui header">
                    <i className="random icon"></i>
                    <div className="content">
                        Attention Heatmap Report
                    </div>
                </h1>
                <div className="ui divider"></div>
                <div id='heatmapContainerID' ref={'heatmapContainer'}>
                <img src="public/img/google.png" className={styles.imgStyle} alt=""/>
              </div>
            </div>
        )
    }
}
