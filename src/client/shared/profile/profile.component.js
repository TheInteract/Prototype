// Library
import React from 'react';
import cx from 'classnames';

// Style
import styles from './profile.component.scss';

class ProfileSidebar extends React.Component {
  render(){
    let setMaxWidth = cx(['ui', 'list', 'relaxed', 'inverted', styles.maxWidth])
    return (
        <div className="ui basic segment profile">
            <h2 className="ui header inverted">
                <img src="assets/imgs/avatar/elliot.jpg" className="ui circular image"/>
                <div className="content">
                    Mr. Prototype Interact
                </div>
                <div className="sub header inverted">Gold Package</div>
            </h2>
            <div className="ui buttons fluid large">
                <button className="ui button">
                    <i className="edit icon"></i>
                    Edit
                </button>
                <button className="ui button red">
                    <i className="lock icon"></i>
                    Logout
                </button>
            </div>
        </div>
    )
  }
}

export default ProfileSidebar