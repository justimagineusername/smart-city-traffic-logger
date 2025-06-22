const db = require('./db');

const create = async (intersectionId, color) => {
  try {
    const result = await db(
      `INSERT INTO light_logs (intersection_id, color) VALUES ($1, $2) RETURNING *`,
      [intersectionId, color]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Create light log error:', error.message);
    throw error;
  }
};

const getAll = async (intersectionId) => {
  try {
    const result = await db(
      `SELECT * FROM light_logs WHERE intersection_id = $1 ORDER BY changed_at DESC`,
      [intersectionId]
    );
    return result.rows;
  } catch (error) {
    console.error('Get all logs error:', error.message);
    throw error;
  }
};

const getById = async (intersectionId, logId) => {
  try {
    const result = await db(
      `SELECT * FROM light_logs WHERE intersection_id = $1 AND id = $2`,
      [intersectionId, logId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Get log by ID error:', error.message);
    throw error;
  }
};

const update = async (intersectionId, logId, color) => {
  try {
    const result = await db(
      `UPDATE light_logs SET color = $1 WHERE intersection_id = $2 AND id = $3 RETURNING *`,
      [color, intersectionId, logId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Update log error:', error.message);
    throw error;
  }
};
const remove = async (intersectionId, logId) => {
  try {
    const result = await db(
      `DELETE FROM light_logs WHERE intersection_id = $1 AND id = $2 RETURNING *`,
      [intersectionId, logId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Delete log error:', error.message);
    throw error;
  }
};
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
