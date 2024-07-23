document.addEventListener('DOMContentLoaded', function() {
    const decreaseButtons = document.querySelectorAll('.btn-decrease');
    const increaseButtons = document.querySelectorAll('.btn-increase');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const quantityElements = document.querySelectorAll('.item-quantity');
    const totalItemsElement = document.getElementById('total-items');
    const totalCostElement = document.getElementById('total-cost');

    // Initialize total items and total cost
    let totalItems = 0;
    let totalCost = 0.00;

    // Function to update cart summary
    function updateCartSummary() {
        totalItemsElement.textContent = totalItems;
        totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    }

    // Event listener for decrease buttons
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = Array.from(decreaseButtons).indexOf(button);
            let currentQuantity = parseInt(quantityElements[itemIndex].textContent);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityElements[itemIndex].textContent = currentQuantity;
                totalItems--;
                totalCost -= 19.00; // Update with your actual item price
                updateCartSummary();
            }
        });
    });

    // Event listener for increase buttons
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = Array.from(increaseButtons).indexOf(button);
            let currentQuantity = parseInt(quantityElements[itemIndex].textContent);
            currentQuantity++;
            quantityElements[itemIndex].textContent = currentQuantity;
            totalItems++;
            totalCost += 24.00; // Update with your actual item price
            updateCartSummary();
        });
    });

    // Event listener for delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemIndex = Array.from(deleteButtons).indexOf(button);
            const itemQuantity = parseInt(quantityElements[itemIndex].textContent);
            const itemCost = itemQuantity * 19.99; // Update with your actual item price
            totalItems -= itemQuantity;
            totalCost -= itemCost;
            updateCartSummary();
            // Remove the cart item from the DOM
            button.closest('.cart-item').remove();
        });
    });
});
