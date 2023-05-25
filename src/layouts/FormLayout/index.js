import React, { PureComponent } from 'react'
import TopBar from "../HomeLayout/TopBar"
import Form from "../../views/pages/Home/Form"

export default class index extends PureComponent {
    render() {
        return (
            <div>
               <TopBar/> 
               <Form/>
            </div>
        )
    }
}
