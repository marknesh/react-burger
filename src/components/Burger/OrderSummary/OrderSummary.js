import React from 'react'
import Aux from '../../../hoc/Aux/Aux.js'
import Button from '../../UI/Button/Button.js'
import { Component } from 'react'




class OrderSummary extends Component{

    componentWillUpdate(){
        console.log('order summary updated')
    }
    render(){
        const  ingredientsSummary=Object.keys(this.props.ingredients).map(
            igKey=>{return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>}
            )

        return(
            <Aux>

        <h3>Your order</h3>
        <p>Delicious burger with the following ingredients</p>
        <ul>
            {ingredientsSummary}

        </ul>
   <p><strong>Total: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button buttonType="Danger" clicked={this.props.cancel}>CANCEL</Button>
        <Button buttonType="Success" clicked={this.props.continue}>CONTINUE</Button>
    </Aux>

            
        )
    }
}
  



export default OrderSummary