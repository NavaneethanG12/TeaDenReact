import { Component } from "react";

class CartManager {
    constructor() {
        this.categories = []
    }

    addItem(item, count) {

        const categoryIndex = this.categories.findIndex(category => category.categoryId === item.categoryId)

        if (categoryIndex != -1) {
            // Category is already there means there is already a category with the some items are there
            const itemIndex = this.categories[categoryIndex].items.findIndex(product => product.productId === item.productId)
            if (itemIndex != -1) { 
                // Product is already there, so update the count alone
                this.categories[categoryIndex].items[itemIndex].count = item.count

                // Product is already there and count is zero remove the item
                if(item.count === 0) {
                    this.categories[categoryIndex].items.splice(itemIndex, 1)
                }

            } else if (itemIndex == -1) { // Product Not Found, add product to the specific category
                // Add the specific category and the new item
            if (item.count === 0) {
                return
            }
                 this.categories[categoryIndex].items.push(item)
            }
        } else {
            // Add the specific category and the new item
            if (item.count === 0) {
                return
            }
            const newCategory = {
                categoryId: item.categoryId,
                items: [item]
            };

            this.categories.push(newCategory)
        }


        console.log(this)
    }
}

export default CartManager;