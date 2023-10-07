import React from "react";
import {Header, Menu, Button, Nav, Anchor} from "grommet";
import { Home,Basket} from "grommet-icons";
import Plantshed from "../images/Plantshed.svg";

function Navbar(){
    const items = [
         { label: 'Plants', href: '#' },
         { label: 'Countries', href: '#' },
         { label: 'Home', href: '#' },
       
        ];
        

    return(
     <div>
 <Header background="white">
<Nav direction="row" background="white" pad="medium">
<img src ={Plantshed} alt="My Happy SVG"/>
<div class="menu" display="flex" justify-content="center" align-item="center">
{items.map((item) => (
    <Anchor color="dark-2" href={item.href} label={item.label} key={item.label} />
     ))}
     </div>
     <Button icon={<Basket />} hoverIndicator />
  </Nav>

  
</Header>
 </div>


    )
}

export default Navbar;