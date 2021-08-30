import React from "react";


import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";
  
function Settings() {
    return (
        <div style={{
            display: 'block', width: 400, padding: 30
        }}>
            <h4>ReactJS Blueprint Tabs Component</h4>
            <Tabs
                animate={true}
                key={"vertical"}
                vertical={false}
            >
                <Tab id="rx" title="Tab1" panel={
                    <p>Sample Content 1</p>
                } />
                <Tab id="ng" title="Tab2" panel={
                    <p>Sample Contet 2</p>
                } />
            </Tabs>
        </div >
    );
}
  
export default Settings;
