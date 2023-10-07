import React from "react";
import { Sidebar, Avatar, Button, Nav, Box,CheckBoxGroup} from "grommet";
import { Help, Projects, Clock} from 'grommet-icons';
function bar(){
    
    
    
    
    
    
    return(

<Sidebar width="12%" background="light-1" round="small" 
>
<h2 background="neutral-1">filter</h2>
  <Nav gap="small">
  <Box pad="medium">
    <h3>Origin</h3> 
      <CheckBoxGroup options={["Southeast asia", "Western africa", "Southern europe"]} />
    <h3>Care level</h3> 
      <CheckBoxGroup options={["low", "medium", "high"]} />
 
      <h3>Size</h3> 
    <CheckBoxGroup options={["0-50cm", "50-100cm", "100+cm"]} />
  </Box>
  </Nav>
</Sidebar>
    )
}

export default bar;