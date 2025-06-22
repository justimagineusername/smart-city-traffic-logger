const db = require('./db');

const create = async (name) => {
    try {
        const result = await db(
            `INSERT INTO intersections (name) VALUES ($1) RETURNING *`,
            [name]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Create intersection error:', error.message);
        throw error;
    }
};

const getAll = async () => {
    try {
        const res = await db(`SELECT * FROM intersections`);
        return res.rows;
    } catch (error) {
        console.error('Get all intersections error:', error.message);
        throw error;
    }
};

const getById = async (id) => {
    try {
        const res = await db(`SELECT * FROM intersections WHERE id = $1`, [id]);
        return res.rows[0];
    } catch (error) {
        console.error('Get intersection by ID error:', error.message);
        throw error;
    }
};

const updateName = async (id, name) => {
    try {
        const res = await db(
            `UPDATE intersections SET name = $2 WHERE id = $1 RETURNING *`,
            [id, name]
        );
        return res.rows[0];
    } catch (error) {
        console.error('Update intersection name error:', error.message);
        throw error;
    }
};

const delById = async (id) => {
    try {
        const res = await db(
            `DELETE FROM intersections WHERE id = $1 RETURNING *`,
            [id]
        );
        return res.rows[0];
    } catch (error) {
        console.error('Delete intersection error:', error.message);
        throw error;
    }
};

module.exports = {
    create,
    getAll,
    getById,
    updateName,
    delById
};



