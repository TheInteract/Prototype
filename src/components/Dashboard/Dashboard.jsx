import React from 'react'

export default class Dashboard extends React.Component {
    render() {
        console.log(React)
        return (
            <div className="ui segment basic">
                <h1 className="ui header">
                    <i className="dashboard icon"></i>
                    <div className="content">
                        My Dashboard
                        .sub.header{}
                    </div>
                </h1>
            </div>
        )
    }
}
