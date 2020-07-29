export const formatMoney = cents => {
  let dollars = cents / 100;
  dollars = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return dollars;
};

export const goalProgressPercentage = (current, goal) => {
  const progress = (current / goal) * 100;
  return progress;
};

export const compareDisplayName = (a, b) => {
  if (a.attributes.displayName < b.attributes.displayName) {
    return -1;
  }
  if (a.attributes.displayName > b.attributes.displayName) {
    return 1;
  }
  return 0;
};

export const filterByAccountType = (accounts, type) => {
  const filteredAccounts = accounts?.filter(account => account.attributes.accountType === type);
  return filteredAccounts;
};
