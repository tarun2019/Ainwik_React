import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SidebarComp() {
  const topics = [
    'ClassComponent',
    'FunDeclaration',
    'ExpressionComp',
    'Arrow',
    'Lifecycle',
    'HooksDemo',
    'GetData',
    'CustomAccordian',
  ];

  const sidebarStyle = {
    boxShadow: 'rgb(175 168 168) 0px 0px 14px -2px',
    height: 'calc(100vh - 130px)',
    overflow: 'auto',
    padding: '10px 0',
    fontSize: '18px'
  }
  return(
    <div style={{...sidebarStyle}} className="sidebar">
      <ul>
        {
          topics.map((topic)=>{
            return(
              <li key={topic.id}>
                <NavLink to={topic}>{topic}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}