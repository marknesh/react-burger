import React,{ Component } from "react";
import Aux from '../../hoc/Aux/Aux.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'
import Burger from '../../components/Burger/Burger.js'

import Modal from '../../components/UI/Modal/Modal.js'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js'



const INGREDIENTS_PRICE={

    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
}
class BurgerBuilder extends Component{

    state ={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:false

    }


   

    showModal = ()=>{
        this.setState({purchasing:true})
   

        
    }
    closeModal=()=>{
        this.setState({purchasing:false})

    }

    purchaseContinue = () =>{
        alert('you can continue')

    }


    updatePurchaseableState = (ingredients)=>{
 

        const sum=Object.keys(ingredients).map(
            igKey =>{
             
                return ingredients[igKey]
            })
            .reduce((sum,el)=>{
             
                return sum +el
                
            },0)

        this.setState({purchaseable:sum>0})    
        
    }
    addIngredient= (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount= oldCount +1
        const updatedIngredient ={
            ...this.state.ingredient
        }
    updatedIngredient[type]=updatedCount

    const priceAddition = INGREDIENTS_PRICE[type]

    const oldPrice = this.state.totalPrice
    const newPrice= oldPrice + priceAddition

    this.setState({ingredient:updatedIngredient,totalPrice:newPrice})
    this.updatePurchaseableState(updatedIngredient)
    }

    removeIngredient = (type) =>{
        const oldCount = this.state.ingredient[type];

        if (oldCount <= 0){
            return;
        }
        const updatedCount= oldCount -1
        const updatedIngredient ={
            ...this.state.ingredient
        }
    updatedIngredient[type]=updatedCount

    const priceDeduction = INGREDIENTS_PRICE[type]

    const oldPrice = this.state.totalPrice
    const newPrice= oldPrice - priceDeduction

    this.setState({ingredient:updatedIngredient,totalPrice:newPrice})
    this.updatePurchaseableState(updatedIngredient)
    }

  
    render(){

        const disabledInfo = {...this.state.ingredient}

        for(let key in disabledInfo){

            disabledInfo[key]= disabledInfo[key] <= 0
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.closeModal} >
                    <OrderSummary price={this.state.totalPrice} cancel={this.closeModal} continue={this.purchaseContinue}  ingredients = {this.state.ingredient} />
                </Modal>
                <Burger ingredients={this.state.ingredient}/>
                <BuildControls ordered={this.showModal} purchased={!this.state.purchaseable} price={this.state.totalPrice}  disabled={disabledInfo} ingredientAdded={this.addIngredient} ingredientRemoved={this.removeIngredient}/>
              
              
            </Aux>


        )
    }


}


export default BurgerBuilder