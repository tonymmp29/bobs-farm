
/**
 * Simulates fetching product data from a database
 * @param {string} productId - The ID of the product to fetch
 * @returns {Promise<Object>} - Product data object
 */
const fetchProductFromDB = async (productId) => {
  // Simulating database latency
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    id: productId,
    type: "corn",
    available: true,
    max_quantity_per_client: 1,
    price_info: {
      base_price: 5.00,
      currency: "USD"
    },
    last_updated: new Date().toISOString()
  };
};

/**
 * Function to buy corn
 */
const buyCorn = async (req, res) => {
  try {
    // Fetch product data from simulated database
    const productData = await fetchProductFromDB("corn_001");

    // Validate product availability
    if (!productData || !productData.available) {
      return res.status(404).json({
        error: true,
        message: 'Corn is currently unavailable'
      });
    }
    
    // Prepare order details
    const type = productData.type;
    const quantity = productData.max_quantity_per_client;
    const basePrice = productData.price_info.base_price;

    const total = basePrice * quantity;
    
    // Create order response
    const order = {
      id: Date.now().toString(),
      date: new Date(),
      items: {
        type,
        quantity,
        basePrice,
      },
      total: parseFloat(total.toFixed(2))
    };

    // Send response
    return res.status(200).json({
      error: false,
      message: 'Corn purchased successfully!',
      order
    });

  } catch (error) {
    console.error('Error processing corn purchase:', error);
    return res.status(500).json({
      error: true,
      message: 'Error processing purchase'
    });
  }
};

module.exports = {
  buyCorn
};