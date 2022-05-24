const mockCards = [
  {
    cardID: 1,
    currency: "USD",
    status: "active",
    balance: 10000,
  },
  {
    cardID: 2,
    status: "active",
    balance: 0,
  },
  {
    cardID: 3,
    currency: "EUR",
    status: "blocked",
    balance: 100000,
  },
];

class MockApi {
  getCards(balance) {
    if (!balance) return mockCards;
    return mockCards.filter((item) => item.balance > balance);
  }
}

export default new MockApi();
