import db from '../lib/db';

// Get all customers
export async function getAllCustomers() {
  try {
    const result = await db.query('SELECT * FROM pw5.customer ORDER BY customer_id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
}

// Get all products
export async function getAllProducts() {
  try {
    const result = await db.query('SELECT * FROM pw5.product ORDER BY product_id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Get products by price range
export async function getProductsByPriceRange(minPrice, maxPrice) {
  try {
    const result = await db.query(
      'SELECT * FROM pw5.product WHERE price BETWEEN $1 AND $2 ORDER BY price',
      [minPrice, maxPrice]
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching products by price:', error);
    throw error;
  }
}

// Get all purchases
export async function getAllPurchases() {
  try {
    const result = await db.query(`
      SELECT p.transaction_id, c.customer_name, pr.name as product_name, 
             pr.price, p.purchase_date
      FROM pw5.purchase p
      JOIN pw5.customer c ON p.customer_id = c.customer_id
      JOIN pw5.product pr ON p.product_id = pr.product_id
      ORDER BY p.purchase_date DESC
    `);
    return result.rows;
  } catch (error) {
    console.error('Error fetching purchases:', error);
    throw error;
  }
}

// Get purchases by date
export async function getPurchasesByDate(date) {
  try {
    const result = await db.query(`
      SELECT p.transaction_id, c.customer_name, pr.name as product_name, 
             pr.price, p.purchase_date
      FROM pw5.purchase p
      JOIN pw5.customer c ON p.customer_id = c.customer_id
      JOIN pw5.product pr ON p.product_id = pr.product_id
      WHERE p.purchase_date = $1
      ORDER BY p.transaction_id
    `, [date]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching purchases by date:', error);
    throw error;
  }
}

// Get purchases by customer ID
export async function getPurchasesByCustomerId(customerId) {
  try {
    const result = await db.query(`
      SELECT p.transaction_id, c.customer_name, pr.name as product_name, 
             pr.price, p.purchase_date
      FROM pw5.purchase p
      JOIN pw5.customer c ON p.customer_id = c.customer_id
      JOIN pw5.product pr ON p.product_id = pr.product_id
      WHERE p.customer_id = $1
      ORDER BY p.purchase_date DESC
    `, [customerId]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching purchases by customer ID:', error);
    throw error;
  }
}

// Get purchases by date and customer ID
export async function getPurchasesByDateAndCustomerId(date, customerId) {
  try {
    const result = await db.query(`
      SELECT p.transaction_id, c.customer_name, pr.name as product_name, 
             pr.price, p.purchase_date
      FROM pw5.purchase p
      JOIN pw5.customer c ON p.customer_id = c.customer_id
      JOIN pw5.product pr ON p.product_id = pr.product_id
      WHERE p.purchase_date = $1 AND p.customer_id = $2
      ORDER BY p.transaction_id
    `, [date, customerId]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching purchases by date and customer ID:', error);
    throw error;
  }
}

// Get products and quantity sold on a specific date
export async function getProductsSoldByDate(date) {
  try {
    const result = await db.query(`
      SELECT pr.name as product_name, COUNT(p.product_id) as quantity_sold, 
             SUM(pr.price) as total_sales
      FROM pw5.purchase p
      JOIN pw5.product pr ON p.product_id = pr.product_id
      WHERE p.purchase_date = $1
      GROUP BY pr.name
      ORDER BY quantity_sold DESC
    `, [date]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching products sold by date:', error);
    throw error;
  }
}