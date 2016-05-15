import React from 'react';
import 'semantic-ui-css/semantic';
import style from './app.scss';

import Logo from '../Shared/Logo.jsx'
import MenuSidebar from '../Shared/MenuSidebar.jsx'
import ProfileSidebar from '../Shared/ProfileSidebar.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div className={style.pusher}>
                <div className={style.fullScreen}>
                    <div className={style.toc}>
                        <Logo />
                        <MenuSidebar />
                        <ProfileSidebar />
                    </div>
                    <div className={style.article}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
