import {useState} from 'react'
import Select from "react-select"

const Bgcolor = () => {
    var colors =[
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"green"
        },
        {
            value:4,
            label:"orange"
        },
    ]
    var[setbgcolor, ddlvalue]=useState(colors.label)
      var  ddlhandle=e=>{
        ddlvalue(e.label)

    }
  return (
    <div>
        <style>{"body{background-color: '+ setbgcolor+'}"}</style>
        <Select options={colors} onChange={ddlhandle} />
        <b>The background color is : {setbgcolor}</b>

    </div>
  )
}

export default Bgcolor