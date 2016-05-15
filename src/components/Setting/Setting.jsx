import React from 'react'
import styles from './setting.scss'
import cx from 'classNames'

export default class Setting extends React.Component {
    render() {
    	let maxWidth = cx(['ui', 'basic', 'segment', styles.maxWidth])
    	let code = '<script type="text/javascript">\n\tvar _mfq = _mfq || [];\n\t(function() {\n\t\tvar mf = document.createElement("script");\n\t\tmf.type = "text/javascript";\n\t\tmf.async = true;\n\t\tmf.src = "//cdn.theinteraction.com/projects/70ddbf6b-4335-4d00-9980-0de08ec2eedb.js";\n\t\tdocument.getElementsByTagName("head")[0].appendChild(mf);\n\t})();\n</script>'
        return (
        	<div className={maxWidth}>
        		<div className="ui grid">
        			<div className="sixteen wide column">
        				<h1 className="ui header">
        					<i className="settings icon"></i>
        					<div className="content">
        						Manage your account
        						<div className="sub header">Account and site configuration</div>
        					</div>
        				</h1>
        				<h4 className="ui horizontal divider header"></h4>
        				<div className="ui two stackable cards">
        					<div className="card">
        						<div className="content">
        							<div className="header">Installation</div>
        							<div className="description">
        								<p>
        									To Install The Interaction,  you need to copy the following script to the end of the <b>body</b> section of each web page you want to record.
        								</p>
        							</div>
        						</div>
        					</div>
        					<div className="card">
        						<div className="content">
        							<div className="header">Embeded Code</div>
        							<div className="ui form fluid">
        								<textarea defaultValue={code} rows="10"></textarea>
        							</div>
        						</div>
        					</div>
        				</div>
        				
        			</div>
        		</div>
        	</div>
        )
    }
}
