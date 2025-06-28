const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Data file paths
const EXPENSES_FILE = 'data/expenses.json';
const FRIEND_TRANSACTIONS_FILE = 'data/friend_transactions.json';
const RECEIVED_TRANSACTIONS_FILE = 'data/received_transactions.json';
const SETTINGS_FILE = 'data/settings.json';

// Ensure data directory exists
async function ensureDataDirectory() {
  try {
    await fs.mkdir('data', { recursive: true });
  } catch (error) {
    console.log('Data directory already exists or could not be created');
  }
}

// Initialize empty JSON files if they don't exist
async function initializeFiles() {
  const files = [
    { path: EXPENSES_FILE, default: [] },
    { path: FRIEND_TRANSACTIONS_FILE, default: [] },
    { path: RECEIVED_TRANSACTIONS_FILE, default: [] },
    { path: SETTINGS_FILE, default: {} }
  ];

  for (const file of files) {
    try {
      await fs.access(file.path);
    } catch (error) {
      await fs.writeFile(file.path, JSON.stringify(file.default, null, 2));
      console.log(`Created ${file.path}`);
    }
  }
}

// Save expenses
app.post('/api/expenses', async (req, res) => {
  try {
    const expenses = req.body;
    await fs.writeFile(EXPENSES_FILE, JSON.stringify(expenses, null, 2));
    res.json({ success: true, message: 'Expenses saved successfully' });
  } catch (error) {
    console.error('Error saving expenses:', error);
    res.status(500).json({ success: false, message: 'Failed to save expenses' });
  }
});

// Load expenses
app.get('/api/expenses', async (req, res) => {
  try {
    const data = await fs.readFile(EXPENSES_FILE, 'utf8');
    const expenses = JSON.parse(data);
    res.json(expenses);
  } catch (error) {
    console.error('Error loading expenses:', error);
    res.json([]);
  }
});

// Save friend transactions
app.post('/api/friend-transactions', async (req, res) => {
  try {
    const transactions = req.body;
    await fs.writeFile(FRIEND_TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2));
    res.json({ success: true, message: 'Friend transactions saved successfully' });
  } catch (error) {
    console.error('Error saving friend transactions:', error);
    res.status(500).json({ success: false, message: 'Failed to save friend transactions' });
  }
});

// Load friend transactions
app.get('/api/friend-transactions', async (req, res) => {
  try {
    const data = await fs.readFile(FRIEND_TRANSACTIONS_FILE, 'utf8');
    const transactions = JSON.parse(data);
    res.json(transactions);
  } catch (error) {
    console.error('Error loading friend transactions:', error);
    res.json([]);
  }
});

// Save received transactions
app.post('/api/received-transactions', async (req, res) => {
  try {
    const transactions = req.body;
    await fs.writeFile(RECEIVED_TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2));
    res.json({ success: true, message: 'Received transactions saved successfully' });
  } catch (error) {
    console.error('Error saving received transactions:', error);
    res.status(500).json({ success: false, message: 'Failed to save received transactions' });
  }
});

// Load received transactions
app.get('/api/received-transactions', async (req, res) => {
  try {
    const data = await fs.readFile(RECEIVED_TRANSACTIONS_FILE, 'utf8');
    const transactions = JSON.parse(data);
    res.json(transactions);
  } catch (error) {
    console.error('Error loading received transactions:', error);
    res.json([]);
  }
});

// Save settings
app.post('/api/settings', async (req, res) => {
  try {
    const settings = req.body;
    await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2));
    res.json({ success: true, message: 'Settings saved successfully' });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).json({ success: false, message: 'Failed to save settings' });
  }
});

// Load settings
app.get('/api/settings', async (req, res) => {
  try {
    const data = await fs.readFile(SETTINGS_FILE, 'utf8');
    const settings = JSON.parse(data);
    res.json(settings);
  } catch (error) {
    console.error('Error loading settings:', error);
    res.json({});
  }
});

// Clear all data
app.delete('/api/clear-all', async (req, res) => {
  try {
    const files = [EXPENSES_FILE, FRIEND_TRANSACTIONS_FILE, RECEIVED_TRANSACTIONS_FILE, SETTINGS_FILE];
    for (const file of files) {
      await fs.writeFile(file, JSON.stringify([], null, 2));
    }
    res.json({ success: true, message: 'All data cleared successfully' });
  } catch (error) {
    console.error('Error clearing data:', error);
    res.status(500).json({ success: false, message: 'Failed to clear data' });
  }
});

// Start server
app.listen(PORT, async () => {
  await ensureDataDirectory();
  await initializeFiles();
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Data will be stored in the data/ directory');
}); 