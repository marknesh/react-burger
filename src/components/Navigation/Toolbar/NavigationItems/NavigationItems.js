import React from 'react';

import classes from './NavigationItems.css'
import NavigitionItem from './NavigationItem/NavigationItem'



const navigationitems = (props) =>(

<ul className={classes.NavigationItems}>
    <NavigitionItem link='/' active > BurgerBuilder</NavigitionItem>
    <NavigitionItem link='/' > Checkout</NavigitionItem>

</ul>

)



export default navigationitems