# Expense Tracker with JSON File Storage

A comprehensive expense tracking application that stores all data in JSON files in real-time using a Node.js backend server.

## Features

- **Real-time JSON Storage**: All data is stored in JSON files on the server
- **Expense Tracking**: Add, view, and manage daily expenses with categories
- **Monthly Limits**: Set and track monthly spending limits
- **Friend Transactions**: Track money given to and received from friends
- **Time Tracking**: Record specific times for all transactions
- **Recurring Expenses**: Automatically add recurring monthly expenses
- **CSV Export**: Download expense reports as CSV files
- **Dark Mode**: Toggle between light and dark themes
- **Recent Categories**: Quick access to recently used expense categories

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Open your web browser
   - Navigate to `http://localhost:3000`
   - The application will automatically create the necessary JSON files

## File Structure

```
expense-tracker/
├── Index.html              # Main application interface
├── server.js               # Node.js backend server
├── package.json            # Project dependencies
├── README.md              # This file
└── data/                  # JSON data files (created automatically)
    ├── expenses.json      # Expense records
    ├── friend_transactions.json    # Money given to friends
    ├── received_transactions.json  # Money received from friends
    └── settings.json      # Application settings
```

## Data Storage

The application stores data in the following JSON files:

- **expenses.json**: All expense records with date, time, category, description, and amount
- **friend_transactions.json**: Money given to friends with details
- **received_transactions.json**: Money received from friends with details
- **settings.json**: Monthly limits, current month, and recent categories

## API Endpoints

- `GET /api/expenses` - Load all expenses
- `POST /api/expenses` - Save expenses
- `GET /api/friend-transactions` - Load friend transactions
- `POST /api/friend-transactions` - Save friend transactions
- `GET /api/received-transactions` - Load received transactions
- `POST /api/received-transactions` - Save received transactions
- `GET /api/settings` - Load application settings
- `POST /api/settings` - Save application settings
- `DELETE /api/clear-all` - Clear all data

## Usage

1. **Set Monthly Limit**: Choose a month and set your spending limit
2. **Add Expenses**: Record daily expenses with category, description, amount, and time
3. **Track Friend Transactions**: Record money given to or received from friends
4. **Monitor Spending**: View totals and check if you're within your monthly limit
5. **Export Data**: Download expense reports as CSV files
6. **Clear Data**: Use individual clear buttons or clear all data at once

## Data Backup

All data is stored in JSON files in the `data/` directory. You can:
- Copy these files to backup your data
- Restore data by replacing the files
- View and edit the JSON files directly if needed

## Troubleshooting

- **Server won't start**: Make sure Node.js is installed and port 3000 is available
- **Data not saving**: Check that the server is running and accessible at localhost:3000
- **Files not created**: The server will automatically create JSON files on first run

## Development

To modify the application:
- Edit `Index.html` for frontend changes
- Edit `server.js` for backend changes
- The server will automatically restart if using `npm run dev` 